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
        <div class="l-wrapper" id="js-wrapper">
            <div class="js-fix content-wrapper" id="js-content">
                <header class="l-header" role="banner">
                    <div class="p-header__inner" >
                        <div class="u-text__small p-header__title">
                            <h1 class="p-header__logo--area">
                            <img src="<?php echo get_theme_file_uri( 'picture/logo2.webp' ); ?>" class="lazyload p-header__logo" alt="ロゴ：and 8">
                            </h1>
                        </div>
                        <div class="header_link p-header__nav">
                            <nav class="p-header__navarea" id="">
                            <?php if (has_nav_menu('header')) : ?>
                                <?php wp_nav_menu( array(
                                'menu' => '',
                                'container'=> false, //自動でulを囲うdivを消す
                                'menu_class' => 'p-header__menulist',//ulクラス
                                'fallback_cb' => false, 
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