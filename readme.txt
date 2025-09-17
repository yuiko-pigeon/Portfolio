==== Copyright ====
Copyright (c) 2025 yuiko.
This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see http://www.gnu.org/licenses/.

========  =========

# portfolio - WordPress Custom Theme

このリポジトリは、WordPressで構築したオリジナルのポートフォリオサイト用テーマです。
SCSS（Sass）でのFLOCSS設計、そしてVite + Node.js + npm を使って、SCSS をCSSにコンパイルするビルド環境を構築。
モダンで高速な開発体験と保守性の高いスタイル設計を実現しています。

---

##  サイト概要

- **目的**：Web制作の実績紹介・お問い合わせ導線の提供
- **制作対象**：PC / タブレット / スマートフォン 対応（レスポンシブ対応）
- **構築方法**：WordPressのオリジナルテーマとして、一から設計・実装

---

##  使用技術・ツール

###  フロントエンド

- **HTML5 / CSS3 / JavaScript**  
  モダン構文でのマークアップと動的挙動

- **Sass（SCSS記法）**  
  コンポーネント単位で設計。変数やネストなどを活用

- **Vite**  
  モダンなビルドツール。SCSSやJSのバンドルを高速に実行
    Vite    | 6.3.5

- **Node.js / npm**  
    ViteとSassのビルド環境構築用に使用
    Node.js | v22.15.0
    npm     | 11.4.2

- **Swiper / GSAP**  
  スライダーやスクロールアニメーションを演出
    Swiper  | 11.2.8
    GSAP    | 3.13.0

---

###  バックエンド

- **WordPress**  
  カスタムテーマとして、管理画面から柔軟な運用を可能に

- **PHP**  
  `functions.php` やテンプレート階層を利用したテーマ設計

---

### フォント

ロゴに使用フォント
Putung：Copyright (c) 2025 Khurasan. All rights reserved.
Alucky：Copyright (c) 2025 Khurasan. All rights reserved.


##  ディレクトリ構成
    portfolio                                   
    ├─ css                                      
    │   └─ swiper-bundle.css                    # スワイパー用CSS
    │   
    ├─ dist                                     
    │   ├─ background-iPD8CxWn.webp             # CSSコンパイル用画像
    │   ├─ background-rUiSgsii.webp             # CSSコンパイル用画像
    │   ├─ bundle.js                            # 読み込み用JS
    │   └─ style.css                            # 読み込み用CSS
    │   
    ├─ js                                       
    │   ├─ ScrollSmoother.js                    # 
    │   ├─ ScrollSmoother.min.js                # 
    │   ├─ ScrollToPlugin.js                    # 
    │   ├─ ScrollToPlugin.min.js                # 
    │   ├─ ScrollTrigger.js                     # 
    │   ├─ ScrollTrigger.min.js                 # 
    │   ├─ gsap.min.js                          # 
    │   └─ swiper-bundle.min.js                 # 
    │   
    ├─ picture                                  # 
    │   ├─ background.webp                      # 背景画像
    │   ├─ flowerbackground.webp                # ヒーロ画像
    │   ├─ hamburger-description.webp           # 実績画像　ポートフォリオ
    │   ├─ hamburger.webp                       # 実績画像　ハンバーガーサイト（架空）
    │   ├─ logo.png                             # ロゴ画像メイン
    │   ├─ logo2.webp                           # ロゴ画像
    │   ├─ favicon.png                          # ファビコン画像
    │   ├─ portfolio-description.webp           # 実績詳細　モーダル用
    │   ├─ portfolio.webp                       # 実績詳細　モーダル用
    │   └─ profile.webp                         # プロフィール写真
    │   
    ├─ portfolio                                 
    │   ├─ public                               
    │   │   └─ vite.svg                         # 
    │   │   
    │   ├─ src                                  # 
    │   │   ├─ counter.js                       # 
    │   │   ├─ javascript.svg                   # 
    │   │   ├─ main.js                          # 
    │   │   └─ style.css                        # 
    │   │   
    │   ├─ .gitignore                           # 
    │   ├─ index.html                           # 
    │   └─ package.json                         # 
    │   
    ├─ scss                                     # 
    │   ├─ foundation                           # 
    │   │   ├─ global                           # 
    │   │   │   ├─ _color.scss                  # 
    │   │   │   ├─ _font.scss                   # 
    │   │   │   ├─ _index.scss                  # 
    │   │   │   └─ _mixin.scss                  # 
    │   │   │   
    │   │   └─ _reset.scss                      # 
    │   │   
    │   ├─ layout                               # 
    │   │   ├─ _footer.scss                     # 
    │   │   ├─ _header.scss                     # 
    │   │   ├─ _main.scss                       # 
    │   │   └─ _wrapper.scss                    # 
    │   │   
    │   ├─ object                               # 
    │   │   ├─ component                        # 
    │   │   │   ├─ _c-button.scss               # 
    │   │   │   ├─ _c-hamburger.scss            # 
    │   │   │   ├─ _c-icon.scss                 # 
    │   │   │   ├─ _c-image.scss                # 
    │   │   │   ├─ _c-label.scss                # 
    │   │   │   ├─ _c-link.scss                 # 
    │   │   │   ├─ _c-solid.scss                # 
    │   │   │   ├─ _c-text.scss                 # 
    │   │   │   └─ _c-title.scss                # 
    │   │   │   
    │   │   ├─ project                          # 
    │   │   │   ├─ _p-block-style-contact.scss  # contactコンテンツ装飾用
    │   │   │   ├─ _p-block-style-privacy.scss  # 個人情報のお取り扱いについてのコンテンツ装飾用
    │   │   │   ├─ _p-block-style-profile.scss  # profileコンテンツ装飾用
    │   │   │   ├─ _p-block-style-service.scss  # serviceコンテンツ装飾用
    │   │   │   ├─ _p-block-style-works.scss    # worksコンテンツ装飾用
    │   │   │   ├─ _p-block-style.scss          # 他必要に応じて利用　コンテンツ内装飾用
    │   │   │   ├─ _p-block.scss                # 
    │   │   │   ├─ _p-card.scss                 # 
    │   │   │   ├─ _p-contact.scss              # 
    │   │   │   ├─ _p-footer.scss               # 
    │   │   │   ├─ _p-grid-profile.scss         # 
    │   │   │   ├─ _p-grid.scss                 # 
    │   │   │   ├─ _p-header.scss               # 
    │   │   │   ├─ _p-hero.scss                 # 
    │   │   │   ├─ _p-link.scss                 # 
    │   │   │   ├─ _p-menu.scss                 # 
    │   │   │   ├─ _p-modal.scss                # 
    │   │   │   ├─ _p-page404.scss              # 
    │   │   │   ├─ _p-slide.scss                # 
    │   │   │   ├─ _p-smooth.scss               # 
    │   │   │   ├─ _p-swiper.scss               # 
    │   │   │   └─ _p-title.scss                # 
    │   │   │   
    │   │   └─ utility                          
    │   │       ├─ _u-center.scss               # 
    │   │       ├─ _u-font.scss                 # 
    │   │       ├─ _u-lineheight.scss           # 
    │   │       ├─ _u-margin.scss               # 
    │   │       ├─ _u-none.scss                 # 
    │   │       ├─ _u-padding.scss              # 
    │   │       ├─ _u-text.scss                 # 
    │   │       ├─ _u-weight.scss               # 
    │   │       └─ _u-width.scss                # 
    │   │       
    │   └─ style.scss                           # 
    │   
    ├─ src                                      
    │   └─ main.js                              # コーディング用。bundle.jsにコンパイルが必要
    │   
    ├─ template-parts                           
    │   └─ content-single.php                   # TOPに投稿ページを読み込むファイル
    │   
    ├─ 404.php                                  # 
    ├─ footer.php                               # 
    ├─ front-page.php                           # TOPページ
    ├─ functions.php                            # 
    ├─ header.php                               # 
    ├─ index.php                                # 
    ├─ package-lock.json                        # 
    ├─ package.json                             # 
    ├─ page.php                                 # 固定ページ。フロントページ/個人情報のお取り扱いについて
    ├─ readme.txt                               # 
    ├─ screenshot.png                           # WordPressテーマ用
    ├─ single.php                               # 投稿ページ。メニュー項目
    ├─ style.css                                # テーマ情報記載用
    ├─ style.css.map                            # 
    └─ vite.config.js                           # 


##  開発環境構築（ローカル）

### 必須環境

- Node.js（v18以上推奨）
- WordPressローカル環境（例：Local by Flywheel, MAMP, XAMPPなど）

### セットアップ手順

```bash
# 1. Node.jsプロジェクト初期化
npm init -y

# 2. 開発依存をインストール
npm install -D vite sass

# 3. ビルド実行（dist/style.cssとbundle.jsを出力）
npm run build

### npmスクリプト

"scripts": {
  "dev": "vite",
  "build": "vite build"
}

html5doctor.com Reset Stylesheet
v1.6.1
Last Updated: 2010-09-17
Twitter: @rich_clark
