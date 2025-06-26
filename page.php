
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
                <div class="">
                    <ul class="p-menu__menulist">
                        <li class="p-menu__list">
                            <a href="<?php echo esc_url('/'); ?>" class="c-link__hamburger js-menu-close" aria-label="And 8のホームへ"> And 8 </a>
                        </li>
                        <li class="p-menu__list">
                            <a href="<?php echo esc_url('/#service'); ?>" class="c-link__hamburger js-menu-close"> Service </a>
                        </li>   
                        <li class="p-menu__list ">
                            <a href="<?php echo esc_url('/#works'); ?>" class="c-link__hamburger js-menu-close"> Works </a>
                        </li>
                        <li class="p-menu__list">
                            <a href="<?php echo esc_url('/#profile'); ?>" class="c-link__hamburger js-menu-close"> Profile </a>
                        </li>
                        <li class="p-menu__list">
                            <a href="<?php echo esc_url('/#contact'); ?>" class="c-link__hamburger js-menu-close" >Contact </a> 
                        </li>
                    </ul> 
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

<main class="l-main l-main__font">
        
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        <section class="p-block">
                            <div class="c-solid__area u-margin__top--small"> 
                                <h2 class="c-solid__before--privacy  c-title__contents--privacy"><?php the_title(); ?></h2>
                            </div>
            <?php the_content(); ?>
        </section>
        </article>
        </main>
    <?php endwhile;
        else:?>
        <p>表示する記事がありません</p>
    <?php endif; ?>

    
<?php get_footer(); ?>