import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  // 環境URL設定
  const siteUrl = isProduction
    ? 'https://example.jp' // 本番環境のURL
    : 'https://dev.example.jp'; // 開発環境のURL

  const pageData = {
    '/index.html': {
      title: 'サイト名',
      description:
        'ディスクリプション',
      url: siteUrl,
      ogimage: `${siteUrl}/share.png`,
    },
  };

  return {
    root: './src', //開発ディレクトリ設定
    build: {
      outDir: '../dist', //出力場所の指定
      rollupOptions: {
        //ファイル出力設定
        output: {
          assetFileNames: (assetInfo) => {
            let extType = assetInfo.name.split('.')[1];
            //Webフォントファイルの振り分け
            if (/ttf|otf|eot|woff|woff2/i.test(extType)) {
              extType = 'fonts';
            }
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              extType = 'images';
            }
            //ビルド時のCSS名を明記してコントロールする
            if (extType === 'css') {
              return `assets/css/style.css`;
            }
            return `assets/${extType}/[name][extname]`;
          },
          chunkFileNames: 'assets/js/[name].js',
          entryFileNames: 'assets/js/main.js',
          input: {
            main: resolve(__dirname, './src/index.html'),
          },
        },
      },
    },
    plugins: [
      handlebars({
        //コンポーネントの格納ディレクトリを指定
        partialDirectory: resolve(__dirname, './src/components'),
        //各ページ情報の読み込み
        context(pagePath) {
          return pageData[pagePath];
        },
      }),
    ],
    server: {
      host: true,
    },
  };
});
