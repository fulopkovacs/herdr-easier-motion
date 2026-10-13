# Herdr Easier Motion

> [!NOTE]
> 🤖 This is a vibecoded project.

Jump straight to any visible pane in the active [Herdr](https://github.com/ogulcancelik/herdr) tab using large hint labels, or insert a pane's id at your cursor.

https://github.com/user-attachments/assets/f58af88e-a0e8-4cee-82aa-7e6984ed400e

The demo shows pane ids being inserted at the cursor with `Shift` + number.

## 📦 Installation

- You need Herdr 0.7.4 or newer and Node.js 18 or newer on your `PATH`.
- Install the plugin:

  ```bash
  herdr plugin install fulopkovacs/herdr-easier-motion
  ```

- Turn on Herdr's experimental Kitty graphics support, then reload or restart Herdr:

  ```toml
  [experimental]
  kitty_graphics = true
  ```

- On macOS, the hint background follows the system's light or dark appearance. Elsewhere it defaults to dark. To override it, set `HERDR_EASYMOTION_APPEARANCE` to `light` or `dark`.

## ⌨️ Keybindings

- Bind the action in your Herdr config:

  ```toml
  [[keys.command]]
  key = "prefix+q"
  type = "plugin_action"
  command = "com.fulopkovacs.herdr-easier-motion.pane"
  description = "select pane"
  ```

- Or run it directly: `herdr plugin action invoke com.fulopkovacs.herdr-easier-motion.pane`
- While the hints are on screen:
  - `1`–`9`, then `a`–`z` (except `q`): jump to that pane
  - `Shift` + `1`–`9`: type that pane's id (followed by a space) at the cursor in the pane you started from, instead of jumping
  - `q`, `Esc` or `Ctrl-C`: cancel

## 💡 Notes

- Only panes in the active tab get hints. Each hint shows the pane's id under its shortcut.
- `Shift` + number expects a US keyboard layout (`!` for `1`, `@` for `2`, and so on).
- In a zoomed tab, Herdr only exposes the zoomed pane, so there's nothing else to jump to.

## 📄 License

- [Apache License 2.0](LICENSE). Original work by [Elliot Jackson](https://elliotekj.com).

## 🍴 About this fork

- Fork of [elliotekj/herdr-easymotion](https://github.com/elliotekj/herdr-easymotion). Many thanks to [Elliot Jackson](https://elliotekj.com) for his work on the original plugin!
- What's changed:
  - Speed improvements: the hints show up faster.
  - Inserting pane ids: `Shift` + number types a pane's id at your cursor.
