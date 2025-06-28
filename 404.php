<?php get_header(); ?>
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
                            <a href="<?php echo esc_url('/#'); ?>" class="c-link__hamburger js-menu-close" aria-label="And 8のホームへ"> TOP </a>
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
<main class="l-main l-main__font p-page404__main">
                        <div class="p-page404__title--area u-margin__bottom--textBlock u-margin__middle--top">
                            <h1 class="p-hero__title--menu">not found</h1>
                            <span class="c-article">ページが見つかりません</span>
                        </div>
                <article class="p-page404__text--area u-lineheight c-article p-page404__margin--bottom">
                    お探しのページは、削除されたか、名前が変更された可能性があります。<br class="p-page404__br--tb">
                    直接アドレスを入力された場合は<br class="p-page404__br--tb">アドレスが正しく入力されているか<span class="p-page404__text--sp">、</span>もう一度ご確認ください。<br>
                    <br>
                    ブラウザの再読み込みを行ってもこのページが表示される場合は<span class="p-page404__text--sp">、</span><br class="p-page404__br--tb">
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="p-page404__link--bottom">TOPページ</a>から目的のページをお探しください。
                </article> 
</main>
<?php get_footer(); ?>