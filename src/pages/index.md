---
layout: ../layouts/CardLayout.astro
title: Home
---

# What is Cordwood?
Cordwood is a client mod for [Hummus](//hummus.sys42.net).

# What can Cordwood do?
Cordwood packs many features such as plugin loading, a sweet settings interface, and an easy to use API and UI kit for developers!

# Okay, cool. How do I know Cordwood is safe?
Cordwood is entirely open-source! You can find us on [GitHub](//github.com/Cordwood/Cordwood).

# Great! How do I install it?
Currently, the only way to install Cordwood is to run the [built code](https://raw.githubusercontent.com/Cordwood/builds/master/index.js) in your console (F12 or CTRL+Shift+I). This can be easily achieved with this snippet:

```js
(async() => { eval(await (await fetch("https://raw.githubusercontent.com/Cordwood/builds/master/index.js", { cache: "no-cache" })).text()) })();
```
