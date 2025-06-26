<?php get_header(); ?>
        <!--hamburgermenu-->
        <nav class="p-menu" id="js-nav">
            <div class="p-menu__inner">
                <div  class="c-hamburger__button--area" id="js-hamburger-close">
                    <div class="c-hamburger__button--close" id="js-close-button"></div>
                </div>
                <div class="u-font">
                    <ul class="p-menu__menulist">
                        <li class="p-menu__list">
                            <a href="#top" class="c-link__hamburger js-menu-close" aria-label="And 8のホームへ"> And 8 </a>
                        </li>
                        <li class="p-menu__list">
                            <a href="#service" class="c-link__hamburger js-menu-close"> Service </a>
                        </li>   
                        <li class="p-menu__list ">
                            <a href="#works" class="c-link__hamburger js-menu-close"> Works </a>
                        </li>
                        <li class="p-menu__list">
                            <a href="#profile" class="c-link__hamburger js-menu-close"> Profile </a>
                        </li>
                        <li class="p-menu__list">
                            <a href="#contact" class="c-link__hamburger js-menu-close" >Contact </a> <!--受講申込みだけナビとは別に作って背景枠ボックスごとリンクできるようにする。そして一番右に設置して、そこに合わせてflexboxを設置する?-->
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div id="smooth-wrapper">
            <div id="smooth-content">
                <div class="p-smooth__background" id="js-smooth">
                    <main  class="l-main l-main__font">
                        <div class="p-hero">
                            <img src="./picture/flowerbackground.webp" alt="白い花瓶に白い花" class="p-hero__background--image">
                            <div class="p-hero__background"></div>
                            <p class="c-title__hero p-title__hero" id="js-title-hero"><span data-lag="0.08">Beyond the visible.Living code behind design.</span></p>
                        </div>
                        <!-- <article class="u-center__text">
                        <p class="c-text__large u-margin__center">And 8 はフリーランスの柔軟性でみなさまのビジネスをサポートします。<br>
            しっかりとしたコミュニケーションで円滑なサイト作りを提供します。</p> 
                        </p>
                        </article> -->
                        <section class="p-block" id="service">
                            <div class="c-solid__area u-margin__top"> 
                                <h2 class="c-solid__before  c-title__contents">Service</h2>
                            </div>
                            <ul class="p-block__card u-margin__top--small" >
                                <li class="p-card u-margin__top--card p-slide__in" >
                                    <h3 class="c-title__card">Coding</h3>
                                        <i class="fa-solid fa-mobile-screen-button c-icon__mobile"></i>
                                    <p class="c-text u-margin__text--card c-text__center u-font u-weight__medium">
                                        ▼ HTML/CSS<br>
                                        レスポンシブ対応<br>
                                        Sass / FLOCSS設計<br><br>
                                        ▼ JavaScript<br>
                                        ハンバーガーメニュー<br>
                                        スムーススクロール<br>
                                        スライダー<br>
                                        モーダル<br>
                                        他 アニメーションなど</p>
                                </li>
                                <li class="p-card u-padding__left u-margin__top--card p-slide__in">
                                    <h3 class="c-title__card">WordPress</h3>
                                    <i class="fa-brands fa-wordpress c-icon__mobile"></i>
                                    <p class="c-text u-margin__text--card c-text__center u-font u-weight__medium">
                                        ▼ WordPressサイトの構築<br>
                                        テーマカスタマイズ<br>
                                        オリジナルテーマの作成<br>
                                        ブログやコーポレートサイトに対応</p>
                                    <p  class="u-margin__text--card c-text u-font u-weight__medium">
                                        クラッシックエディタ・ブロックエディタによる構築</p>
                                </li>
                                <li class="p-card u-margin__top--card u-margin__bottom--card p-slide__in">
                                    <h3 class="c-title__card">Upkeep</h3>
                                    <i class="fa-solid fa-screwdriver-wrench c-icon__mobile"></i>
                                    <p class="c-text u-margin__text--card c-text__center u-font u-weight__medium">
                                        既存サイトのテキスト修正<br>
                                        画像差し替え<br>
                                        CSS調整等<br></p>
                                    </li>
                            </ul>
                        </section>
                        <section class="p-block" id="works">
                            <div class="c-solid__area u-margin__top--small"> 
                                <h2 class="c-solid__before u-margin c-title__contents">Works</h2>
                            </div>
                                <section class="p-grid u-margin__top">
                                    <!-- Hamburger -->
                                    <figure class="p-grid__cell p-slide__in"> 
                                        <img loading="lazy" src="./picture/hamburger.webp" alt="Hamburgerの架空ショップのサイトのモックアップ" class="p-grid__image js-open-modal c-link__works" data-modal="modal-hamburger" data-index="0">
                                        <figcaption class="p-grid__text">
                                            <h4 class="c-title__grid--works p-title__grid--area u-font u-margin__top--xsmall">Hamburger（架空）</h4>
                                            <p class="c-text__gray u-margin__text--card c-text__center">WordPress</p>
                                            <p class="p-grid__icon">
                                                <a href="https://andeight.net/hamburger/" target="_blank" rel="noopener noreferrer" class="c-link__icon">
                                                    <i class="fa-solid fa-arrow-up-right-from-square c-icon__link c-link__icon"></i>
                                                </a> 
                                                <a href="https://github.com/yuiko-pigeon/final-assignment-2.git" target="_blank" rel="noopener noreferrer" class="c-link__icon">
                                                    <i class="fa-brands fa-github c-icon__git"></i>
                                                </a>
                                            </p>
                                        </figcaption>
                                    </figure>
                                    <!-- Portfolio -->
                                    <figure class="p-grid__cell p-slide__in" >
                                        <img loading="lazy" src="./picture/portfolio.webp" alt="自身のポートフォリオサイトのモックアップ" class="p-grid__image js-open-modal" data-modal="modal-portfolio" data-index="1">
                                        <figcaption class="p-grid__text">
                                            <h4 class="c-title__grid--works p-title__grid--area u-font u-margin__top--xsmall">portfolio</h4>
                                            <p class="c-text__gray u-margin__text--card c-text__center">WordPress</p>
                                            <p class="p-grid__icon">
                                                <a href="https://andeight.net/hamburger/" target="_blank" rel="noopener noreferrer" class="c-link__icon">
                                                    <i class="fa-solid fa-arrow-up-right-from-square c-icon__link c-link__icon"></i>
                                                </a> 
                                                <a href="https://github.com/yuiko-pigeon/portfolio.git" target="_blank" rel="noopener noreferrer" class="c-link__icon">
                                                    <i class="fa-brands fa-github c-icon__git"></i>
                                                </a>
                                            </p>
                                        </figcaption>
                                    </figure>
                                    <!--　らきカンパニー　-->
                                    <figure class="p-grid__cell p-slide__in u-none" data-modal="modal-rakicompany" data-index="0"> 
                                        <img loading="lazy" src="./picture/noimage.jpg" alt="らきカンパニー様のサイトのモックアップ" class="p-grid__image" >
                                        <figcaption class="p-grid__text">
                                            <h4 class="c-title__grid--works p-title__grid--area u-font u-margin__top--xsmall">有限会社 らきカンパニー様</h4>
                                            <p class="c-text__gray u-margin__text--card c-text__center">HTML/CSS/JavaScript/WordPress</p>
                                            <p class="p-grid__icon"><a href="https://andeight.net/hamburger/"><i class="fa-solid fa-arrow-up-right-from-square"></i></a> <i class="fa-brands fa-github c-icon__git"></i></p>
                                        </figcaption>
                                    </figure>
                                    <figure class="p-grid__cell p-slide__in  u-none" data-modal="modal-cocohome" data-index="0">
                                        <img loading="lazy"  src="./picture/noimage.jpg" alt="株式会社ここホーム様のサイトのモックアップ" class="p-grid__image">
                                        <figcaption class="p-grid__text">
                                            <h4 class="c-title__grid--works p-title__grid--area u-font u-margin__top--xsmall">株式会社 ここホーム様</h4>
                                            <p class="c-text__gray u-margin__text--card c-text__center">HTML/CSS/JavaScript/React</p>
                                            <p class="p-grid__icon">link git</p>
                                        </figcaption>
                                    </figure>
                                    <figure class="p-grid__cell p-slide__in u-none" data-modal="modal-miyanofarm" data-index="0">
                                        <img loading="lazy" src="./picture/noimage.jpg" alt="宮野農園様のサイトのモックアップ" class="p-grid__image">
                                        <figcaption class="p-grid__text">
                                            <h4 class="c-title__grid--works p-title__grid--area u-font u-margin__top--xsmall">宮野農園</h4>
                                            <p class="c-text__gray u-margin__text--card c-text__center">WordPress</p>
                                            <p class="p-grid__icon">link git</p>
                                        </figcaption>
                                    </figure>
                                    
                                    <!--  -->
                                    <figure class="p-grid__cell p-slide__in u-none" data-modal="modal-works2" data-index="0">
                                        <img loading="lazy" src="./picture/noimage.jpg" alt="works2のモックアップ" class="p-grid__image">
                                        <figcaption class="p-grid__text">
                                            <h4 class="c-title__grid--works p-title__grid--area u-font u-margin__top--xsmall">Works 2</h4>
                                            <p class="c-text__gray u-margin__text--card c-text__center ">WordPress</p>
                                            <p class="p-grid__icon">link git</p>
                                        </figcaption>
                                    </figure>
                                </section>
                        </section>
                        <section class="p-block__service" id="profile">
                            <div class="c-solid__area u-margin__top"> 
                                <h2 class="c-solid__before u-margin c-title__contents">Profile</h2>
                            </div>
                                <figure class="p-grid-profile  u-margin__midium--center">
                                    <img loading="lazy" src="./picture/profile.png" alt="プロフィール画像" class="c-image__square p-grid-profile__cell--image p-slide__in">
                                    <figcaption class="p-grid-profile__cell--textarea">
                                        <p class="c-text__grid--profile u-lineheight__large u-font p-slide__in">
                                            WordPressを使ったサイト構築を中心に、破綻しにくいコードとユーザー目線の設計を心がけます。<br>
                                            HTML、CSS、JavaScriptを活用し、レスポンシブ対応や保守性の高いコーディングを行います。<br>
                                            ご依頼者様の意図をくみとり、柔軟かつ丁寧な対応でプロジェクトをサポートします。
                                        </p>
                                    </figcaption>
                                    <figcaption class="p-grid-profile__cell--textarea2">
                                        <p class="u-margin__center--large-pc c-text__grid--profile p-slide__in">
                                            名称 ：And 8 (アンド エイト)<br>
                                            所在地 ：名古屋市<br>
                                            お問い合わせ ：<br>
                                            事業内容 ：コーディング　WordPress構築/テーマ開発 <br>
                                            <br>
                                            鈴木 結子　Yuiko Suzuki<br>
                                            X:
                                        </p>
                                    </figcaption>
                                </figure>
                        </section>
                        <section class="p-block__service" id="contact">
                            <div class="c-solid__area u-margin__top"> 
                                <h2 class="c-solid__before u-margin c-title__contents">Contact</h2>
                            </div>
                                <p class="p-contact__textarea u-margin__midium--center c-text__center--tab c-text u-font p-slide__in u-weight__medium">
                                    制作の依頼・ご相談・ご質問などお気軽にお問い合わせください。<br>
                                    1〜3日以内にご返信いたします。<br>
                                    下記フォームよりご記入ください。</p>
                                <form class="p-contact u-margin__midium--center c-text__large u-font p-slide__in">
                                    <label>name　<a class="c-text__required">必須</a></label>
                                    <input type="text" name="name" placeholder="お名前" required aria-required="true" class="c-label">
                                    <label>mail　<a class="c-text__required">必須</a></label>
                                    <input type="email" name="email" placeholder="sample@sample.com" required aria-required="true" class="c-label">
                                    <label>会社名・屋号名　<a class="c-text__required">必須</a></label>
                                    <input type="text" name="company" placeholder="会社名" required aria-required="true" class="c-label">
                                    <label>お問い合わせ内容　<a class="c-text__required">必須</a></label>
                                    <textarea name="message" placeholder="お問い合わせ内容" required aria-required="true" class="c-label__message "></textarea>
                                    <button type="submit" class="c-label__send u-margin__bottom--contact u-margin__top--send u-font">送信</button>
                                </form>
                        </section>
                    </main>
                    <?php get_footer(); ?> 