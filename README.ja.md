# input-checkbox

`input-checkbox`は、カスタマイズ可能な入力チェックボックス要素を提供するWebコンポーネントです。

## デモ
https://code4fukui.github.io/input-checkbox/

## 機能
- チェックボックスの表示とチェック状態の管理
- HTML内での使用が可能
- JavaScript製のWebコンポーネントとして提供

## 使い方

HTMLに`<input-checkbox>`要素を組み込むことで使用できます。

```html
<script type="module" src="https://code4fukui.github.io/input-checkbox/input-checkbox.js"></script>
<input-checkbox id="ic1">チェックボックス1</input-checkbox>
<input-checkbox id="ic2">チェックボックス2</input-checkbox>
```

JavaScriptからもチェック状態の参照や変更が可能です。

```js
console.log(ic1.checked);
ic2.checked = true;
```

## ライセンス
MIT License