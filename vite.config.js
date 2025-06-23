import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // テーマ直下をルートに
  base: './', // 相対パスを使用
  css: {
    preprocessorOptions: {
      scss: {
        charset: false, // 文字エンコーディング問題を解決
      }
    }
  },
  build: {
    minify: false, // 圧縮を無効にするとコメントが残る
    outDir: 'dist', // 出力先をテーマ直下に
    emptyOutDir: false, // フォルダ削除を無効化
    cssCodeSplit: false, // CSSを1つのファイルにまとめる
    rollupOptions: {
      input: 'src/main.js', // エントリポイント
      output: {
        entryFileNames: 'bundle.js',     // JSファイル名を固定
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'style.css';          // CSSファイル名を固定
          }
          return '[name]-[hash].[ext]';  // その他はハッシュ付き
        },
      }, 
      external: ['fsevents'],  // externalはinputの外に
    },
  },
});