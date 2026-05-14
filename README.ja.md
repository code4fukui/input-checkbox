# input-checkbox

カスタマイズ可能なラベルを持つ標準的なチェックボックスを提供するカスタム要素（`<input-checkbox>`）です。

## デモ

[ライブデモ](https://code4fukui.github.io/input-checkbox/)

## 特徴

- **標準API**: `.checked` プロパティや `onchange` イベントを備え、ネイティブの input 要素のように動作します。
- **カスタマイズ可能なラベル**: タグ内に配置された任意のコンテンツがラベルとして使用されます。
- **依存関係なし**: 独立した軽量なWebコンポーネントです。
- **動的**: HTMLで宣言的に使用することも、JavaScriptでプログラム的に作成することも可能です。
- **リアクティブ**: 内部のコンテンツが変更されると、自動的にラベルを更新します。

## 使い方

### 1. コンポーネントのインポート

HTMLにJavaScriptモジュールを読み込みます。

```html
<script type="module" src="https://code4fukui.github.io/input-checkbox/input-checkbox.js"></script>
```

### 2. HTMLでの使用

HTML内で `<input-checkbox>` タグを直接使用します。タグ内のコンテンツがチェックボックスのラベルになります。

```html
<input-checkbox id="c1">Enable feature</input-checkbox>
```

初期状態をチェック済みに設定するには、`checked` 属性を追加します。

```html
<input-checkbox id="c2" checked>Checked feature</input-checkbox>
```
