# input-checkbox

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

An input checkbox custom HTML element.

## Demo
[Sample page](https://code4fukui.github.io/input-checkbox/)

## Features
- Checkbox input element with customizable label
- Supports checked/unchecked state
- Observes and updates on DOM changes

## Usage
Include the JavaScript module in your HTML:

```html
<script type="module" src="https://code4fukui.github.io/input-checkbox/input-checkbox.js"></script>
```

Use the `<input-checkbox>` element in your HTML:

```html
<input-checkbox id=ic1>Checkbox 1</input-checkbox>
<input-checkbox id=ic2>Checkbox 2</input-checkbox>
```

Access the checkbox state in JavaScript:

```js
console.log(ic1.checked);
ic2.checked = true;
```

## License
MIT License