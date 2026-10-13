"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { PassThrough } = require("node:stream");
const { HerdrRequestError } = require("../dist/herdr");
const {
  graphicsDisabledStatus,
  isGraphicsDisabled,
  keyToSelection,
  readKey,
} = require("../dist/picker");

test("readKey buffers input that arrives before rendering finishes", async () => {
  const input = new PassThrough();
  const firstKey = readKey(input);
  input.resume();
  input.write("1");

  await new Promise((resolve) => setTimeout(resolve, 10));

  assert.equal(await firstKey, "1");
});

test("keyToSelection handles focus, insert, and cancel keys", () => {
  assert.deepEqual(keyToSelection("1"), { shortcut: "1", insertPaneId: false });
  assert.deepEqual(keyToSelection("A"), { shortcut: "a", insertPaneId: false });
  assert.deepEqual(keyToSelection("!"), { shortcut: "1", insertPaneId: true });
  assert.deepEqual(keyToSelection("("), { shortcut: "9", insertPaneId: true });
  assert.equal(keyToSelection("q"), null);
  assert.equal(keyToSelection("\u001b"), null);
  assert.equal(keyToSelection("\u0003"), null);
});

test("isGraphicsDisabled recognizes Herdr feature_disabled errors", () => {
  assert.equal(isGraphicsDisabled(new HerdrRequestError("feature_disabled", "disabled")), true);
  assert.equal(isGraphicsDisabled(new HerdrRequestError("invalid_params", "bad")), false);
  assert.equal(isGraphicsDisabled(new Error("feature_disabled")), false);
});

test("graphicsDisabledStatus explains the required config", () => {
  const status = graphicsDisabledStatus();

  assert.match(status.message, /disabled/);
  assert.match(status.detail, /kitty_graphics = true/);
});
