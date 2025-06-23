    
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <section class="p-block" id="<?php echo get_post_field('post_name'); ?>">
            <div class="c-solid__area u-margin__top"> 
                <h2 class="c-solid__before  c-title__contents"><?php the_title(); ?></h2>
            </div>
        <?php the_content(); ?>
    </section>
</article>