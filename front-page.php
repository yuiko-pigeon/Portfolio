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
                        <div id="contact">
                            <?php
                                $post_id = 30; // 表示したい投稿のID
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
                    </main>
                    <?php get_footer(); ?> 