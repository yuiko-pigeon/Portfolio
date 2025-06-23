<!DOCTYPE html>
<html <?php language_attributes(); ?>> 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php bloginfo('description'); ?>">
    <meta name="keywords" content="Web制作, フリーランス, WordPress, ホームページ, サイト, コーディング, 名古屋, コーディング, ワードプレス, 安い, 丁寧, 安心">
    <title>and8</title>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?> class="js-fix"  id="top">
    <?php wp_body_open(); ?>
    <div class="js-fix content-wrapper">
        <div class="l-wrapper" id="js-wrapper">
            <header class="l-header" role="banner">
                <div class="p-header__inner" >
                    <div class="u-text__small p-header__title">
                        <h1 class="p-header__logo--area">
                        <img src="<?php echo get_theme_file_uri( 'picture/logo2.png' ); ?>" class="lazyload p-header__logo" alt="ロゴ：and 8">
                        </h1>
                    </div>
                    <div class="header_link p-header__nav">
                        <nav class="p-header__navarea" id="">
                        <?php if (has_nav_menu('header')) : ?>
                            <?php wp_nav_menu( array(
                                'menu' => '',
                                'menu_class' => 'p-header__menulist',
                                'fallback_cb' => 'wp_page_menu',
                                'echo' => true,
                                'depth' => 1,
                                'theme_location' => 'header',
                                'item_spacing' => 'false'
                            ) ); ?>
                            <?php else : ?>
                                <p class="l-sidebar__menu__list">メニューはまだ設定されていません。</p>
                            <?php endif; ?>
                            <!-- <ul class="p-header__menulist">
                                <li class="u-width__text">
                                    <a href="#top" class="c-link__list u-padding__left--xxsmall" aria-label="And 8のホームへ"> Top </a>
                                </li>
                                <li class="">
                                    <a href="#service" class="c-link__list"> Service </a>
                                </li>   
                                <li class="">
                                    <a href="#works" class="c-link__list"> Works </a>
                                </li>
                                <li class="">
                                    <a href="#profile" class="c-link__list"> Profile </a>
                                </li>
                                <li class="">
                                    <div class="c-button__contact--area">
                                        
                                            <a href="#contact" class="c-button__contact--text c-link__list">
                                                <span class="c-button__contact c-link__list">Contact </span>
                                            </a>
                                        
                                    </div> 受講申込みだけナビとは別に作って背景枠ボックスごとリンクできるようにする。そして一番右に設置して、そこに合わせてflexboxを設置する?
                                </li>
                            </ul> -->
                        </nav>
                    </div><!--header_link-->
                </div>
            </header> 
            <?php get_header(); ?>
            <!--hamburgerbutton-->
            <div  class="c-hamburger__button--area" id="js-hamburger">
                <div class="c-hamburger__button--open" ></div>
            </div>
            <!--hamburgerbutton-->
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
                                <a href="#contact" class="c-link__hamburger js-menu-close" >Contact </a> 
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
                                <img src="<?php echo get_theme_file_uri( 'picture/flowerbackground.webp' ); ?>" alt="白い一輪挿しに入った白い花の写真" class="p-hero__background--image">
                                <div class="p-hero__background"></div>
                                <p class="c-title__hero p-title__hero" id="js-title-hero"><span data-lag="0.08">Beyond the visible.Living code behind design.</span></p>
                            </div>
                            <!-- <article class="u-center__text">
                            <p class="c-text__large u-margin__center">And 8 はフリーランスの柔軟性でみなさまのビジネスをサポートします。<br>
                                しっかりとしたコミュニケーションで円滑なサイト作りを提供します。</p> 
                            </p>
                            </article> -->
                            <div id="service">
                            <?php
                                $post_id = 28; // 表示したい投稿のID
                                $query = new WP_Query( array( 'p' => $post_id, 'post_type' => 'post' ) );
                                if ( $query->have_posts() ) {
                                    while ( $query->have_posts() ) {
                                        $query->the_post();
                                        get_template_part( 'template-parts/content', 'single' ); // パーツを呼び出す。template-parts/contentについては後述。
                                    }
                                    wp_reset_postdata();
                                }
                                ?>
                            </div>
                            <div id="works">
                                <?php
                                    $post_id = 7; // 表示したい投稿のID
                                    $query = new WP_Query( array( 'p' => $post_id, 'post_type' => 'post' ) );
                                    if ( $query->have_posts() ) {
                                        while ( $query->have_posts() ) {
                                            $query->the_post();
                                            get_template_part( 'template-parts/content', 'single' ); // パーツを呼び出す。template-parts/contentについては後述。
                                        }
                                        wp_reset_postdata();
                                    }
                                    ?>
                            </div>
                            <div id="profile">
                                <?php
                                    $post_id = 26; // 表示したい投稿のID
                                    $query = new WP_Query( array( 'p' => $post_id, 'post_type' => 'post' ) );
                                    if ( $query->have_posts() ) {
                                        while ( $query->have_posts() ) {
                                            $query->the_post();
                                            get_template_part( 'template-parts/content', 'single' ); // パーツを呼び出す。template-parts/contentについては後述。
                                        }
                                        wp_reset_postdata();
                                    }
                                    ?>
                            </div>
                            <!-- <div>
                            <//?php
                                $post_id = 26; // 表示したい投稿のID
                                $query = new WP_Query( array( 'p' => $post_id, 'post_type' => 'post' ) );
                                if ( $query->have_posts() ) {
                                    while ( $query->have_posts() ) {
                                        $query->the_post();
                                        get_template_part( 'template-parts/content', 'single' ); // パーツを呼び出す。template-parts/contentについては後述。
                                    }
                                    wp_reset_postdata();
                                }
                                ?>
                            </div> -->
                            <section class="p-block__service" id="contact">
                                <div class="c-solid__area u-margin__top"> 
                                    <h2 class="c-solid__before u-margin c-title__contents">Contact</h2>
                                </div>
                                    <p class="p-contact__textarea u-margin__midium--center c-text__center--tab c-text u-font p-slide__in u-weight__medium">
                                        制作の依頼・ご相談・ご質問などお気軽にお問い合わせください。<br>
                                        1〜3日以内にご返信いたします。<br>
                                        下記フォームよりご記入ください。</p>
                                    <form class="p-contact u-margin__midium--center c-text__large u-margin__top--small u-font p-slide__in">
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
                        <footer class="l-footer">
                            <div class="l-footer__inner">
                                <div class="p-footer__solid"> 
                                    <small class="p-footer__copyright u-font">
                                            &copy; And 8
                                    </small>
                                </div>
                            </div>  
                        </footer>
                    </div>
                </div>
            </div>
        
            <!--modal-->
            <div id="portfolio-modal" class="p-modal__portfolio">
                <div class="p-modal__content">
                    <button class="p-modal__close">×</button>
                    <!-- Slider main container -->
                    <div class="p-swiper swiper">
                        <!-- Additional required wrapper -->
                        <div class="p-swiper__wrapper swiper-wrapper">
                    <!-- ここにSlideが自動で追加される-->
                        </div>
                        <!-- If we need pagination -->
                        <div class="swiper-pagination"></div>
                        <!-- If we need navigation buttons -->
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    <!-- If we need scrollbar -->
                        <div class="swiper-scrollbar"></div>
                    </div>
                </div>
            </div><!--modalここまで-->
        </div> 
    </div> 
</body>
</html>
