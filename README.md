# Herdr Easier Motion

> [!NOTE]
> 🤖 This is a vibecoded project.

Jump straight to any visible pane in the active [Herdr](https://github.com/ogulcancelik/herdr) tab using large hint labels.

https://github.com/user-attachments/assets/f58af88e-a0e8-4cee-82aa-7e6984ed400e

## 🍴 About this fork

- Fork of [elliotekj/herdr-easymotion](https://github.com/elliotekj/herdr-easymotion) by Elliot Jackson.
- Renamed to **Herdr Easier Motion** (plugin ID: `com.fulopkovacs.herdr-easier-motion`).
- I use it a lot, every day, to move around my Herdr panes.

## 📦 Installation

- Install the plugin:

  ```bash
  herdr plugin install fulopkovacs/herdr-easier-motion
  ```

- Turn on Herdr's experimental Kitty graphics support, then reload or restart Herdr:

  ```toml
  [experimental]
  kitty_graphics = true
  ```

- Install [FIGlet](http://www.figlet.org/) and make sure `figlet` is on your `PATH`. It renders the hints.
- The hint background matches the macOS light or dark appearance. To override it, or on other platforms, set `HERDR_EASYMOTION_APPEARANCE` to `light` or `dark`.

## ⌨️ Keybindings

- Bind the action in your Herdr config:

  ```toml
  [[keys.command]]
  key = "prefix+e"
  type = "plugin_action"
  command = "com.fulopkovacs.herdr-easier-motion.pane"
  description = "select pane"
  ```

- Or run it directly: `herdr plugin action invoke com.fulopkovacs.herdr-easier-motion.pane`
- While the hints are on screen:
  - `1`–`9`, then `a`–`z` (except `q`): jump to that pane
  - `q`, `Esc` or `Ctrl-C`: cancel

## 💡 Notes

- Only panes in the active tab get hints.
- In a zoomed tab, Herdr only exposes the zoomed pane, so there's nothing else to jump to.

## 📄 License

- [Apache License 2.0](LICENSE). Original work by [Elliot Jackson](https://elliotekj.com).
