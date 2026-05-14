# input-checkbox

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A custom element (`<input-checkbox>`) that provides a standard checkbox with a customizable label.

## Demo

[Live Demo](https://code4fukui.github.io/input-checkbox/)

## Features

- **Standard API**: Behaves like a native input with a `.checked` property and `onchange` event.
- **Customizable Label**: Any content placed inside the tag is used as the label.
- **Zero-Dependency**: A self-contained, lightweight Web Component.
- **Dynamic**: Use it declaratively in HTML or create it programmatically with JavaScript.
- **Reactive**: Automatically updates its label if the inner content changes.

## Usage

### 1. Import the Component

Include the JavaScript module in your HTML.

```html
<script type="module" src="https://code4fukui.github.io/input-checkbox/input-checkbox.js"></script>
```

### 2. Use in HTML

Use the `<input-checkbox>` tag directly in your HTML. The content inside the tag will become the checkbox label.

```html
<input-checkbox id="c1">Enable feature</input-checkbox>
```

To set the initial state to checked, add the `checked` attribute.

```html
<input-checkbox id="c2"