# test

## URL

- 本番 [https://example.jp/](https://example.jp/)
- テスト [https://dev.example.jp/](https://dev.example.jp/) (`test` / `test`)

## 構成

- Vite + Sass
- Handlebars (テンプレートエンジン)

### テンプレートエンジン

[Handlebars](https://handlebarsjs.com/)を使用しています。

#### 変数の出力、コンポーネントの読み込み

- プロパティの出力： `{{プロパティ名}}`　 [出力など基本構文のリファレンス](https://handlebarsjs.com/guide/expressions.html)
- コンポーネントの呼び出し： `{{> ファイル名（拡張子なし）}}`　 [コンポーネントのリファレンス](https://handlebarsjs.com/guide/partials.html#basic-partials)
- 条件分岐： `{{#if hoge}} {{else}} {{/if}}`　[if 文のリファレンス](https://handlebarsjs.com/guide/builtin-helpers.html#if)

## 環境構築

```
$ npm i
```

Node.js：18.16.0（※ `.node-version` に記載）

## vite

vite を使用しています。

### 起動

```bash
$ npm run dev
```

開発用環境が立ち上がります。

### ビルド

```bash
$ npm run build
```

dist ディレクトリが作成され、そちらに出力されます。

### ビルド後の確認

```bash
$ npm run preview
```

出力された dist のファイルをローカルで確認できます。
