
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
                <div>
                    <?php if (has_nav_menu('hamburger')) : ?>
                    <?php wp_nav_menu( array(
                        'menu' => '',
                        'container'=> false, //自動でulを囲うdivを消す
                        'menu_class' => 'p-menu__menulist',//ulクラス
                        'fallback_cb' => false, 
                        'echo' => true,
                        'depth' => 1,
                        'theme_location' => 'hamburger',
                        'item_spacing' => 'false'
                    )); ?>
                    <?php else : ?>
                        <p class="p-menu__menulist">メニューはまだ設定されていません。</p>
                    <?php endif; ?>
                </div>
            </div>
        </nav>
        <div id="smooth-wrapper">
            <div id="smooth-content">
                <div class="p-smooth__background" id="js-smooth">
<?php 
    if( have_posts()):
        while( have_posts()):
            the_post(); ?>
        
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        <section class="p-block">
                            <div class="c-solid__area u-margin__top--small"> 
                                <h2 class="c-solid__before  c-title__contents"><?php the_title(); ?></h2>
                            </div>
         <?php the_content(); ?>
        </section>
        </article>
    <?php endwhile;
        else:?>
        <p>表示する記事がありません</p>
    <?php endif; ?>
<?php get_footer(); ?>