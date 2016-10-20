# 文章输出函数详解

### 1. get_the_category()


获取分类的链接

>#### 返回值:
>|||
>|---|---|
>|cat_ID | 类别编号，存储在term_id字段
|cat_name |类别名称，存储在name字段
|category_nicename |别名，存储在slug字段
|category_description|类别描述，存储在description字段
|category_parent|父类别编号，没有父类的为0，存储在parent字段
|category_count|类别使用的数量，存储在count字段

显示第一个类别的连接:

    <?php
    $category = get_the_category();
    if($category[0]){
    echo '<a href="'.get_category_link($category[0]->term_id ).'">'.$category[0]->cat_name.'</a>';
    }
    ?>

###2.  获取文章特色图像

1. 首先，在functions.php中添加代码;

        add_theme_support('post-thumbnails');

2. 然后就可以在文章右下角添加特色图像
3. 调用特色图像

    1. 利用the_post_thumbnail($size,$attr);
    
    参数:

    ####$size:

    关键字：thumbnail, medium, large, full

    或者宽和高的一个大小，比如：(32,32).

    ####$attr:

    例如：设定指定的class  ``array('class' => 'alignleft')``

    该函数可直接调用生成完整的HTML代码

            &lt;img src="localhost/...." alt="" width="" height="" class="attachment-post-thumbnail wp-post-image"&gt;

    2. 利用get_the_post_thumbnail和wp_get_attachment_image_src函数单一获取链接
    3. 
            <? 
                $image_url = wp_get_attachment_image_src( get_post_thumbnail_id(get_post()),array(1024,326) );
                 echo $image_url[0];
            ?>
  