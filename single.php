
<?php get_header(); ?>
<?php 
    if( have_posts()):
        while( have_posts()):
            the_post(); ?>
        
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        <section class="p-block">
                            <div class="c-solid__area u-margin__top"> 
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