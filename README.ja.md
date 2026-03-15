# input-checkbox

1つのWebコンポーネントとして使える、カスタムチェックボックスです。

## デモ
https://code4fukui.github.io/input-checkbox/

## 機能
- チェックボックスの表示と状態管理
- HTMLテンプレート内での使用が可能
- JavaScriptからのアクセスも可能

## 使い方

```html
<script type="module" src="https://code4fukui.github.io/input-checkbox/input-checkbox.js"></script>
<input-checkbox id=ic1>チェックボックス1</input-checkbox>
<input-checkbox id=ic2>チェックボックス2</input-checkbox>
```

```js
console.log(ic1.checked);
ic2.checked = true;
```

## ライセンス
MIT License