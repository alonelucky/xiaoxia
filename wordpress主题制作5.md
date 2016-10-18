# 如何循环输出文章列表

文章是博客主要的组成，因此首先练习如何输出文章。
1. 先判断当前博客是否有文章
    have_posts()

        <? if( have_posts() ){

            }else{ 
                ehco '没有文章可以显示';
            }
        ?>

2. 有文章则显示文章
    while( have_posts() ){ the_post(); }
    the_post()函数是获取文章信息，并保存在全局变量 $post 中

        <? if( have_posts() ){
                while( have_posts() ){
                    the_post(); 
                }
            }else{ 
                ehco '没有文章可以显示';
            }
        ?>
3. 显示文章的标题和内容
    the_title();
    显示当前文章标题
    the_permalink();
    显示当前文章的链接
    the_content();
    显示当前文章正文（不是摘要） 

        <? if( have_posts() ){
                while( have_posts() ){
                    the_post(); 
                ?>

                <h2><a href="<? the_permalink();?>"> the_title(); </a></h2>
                <div>
                    <? the_content();?>
                </div>
                
                <?
                }
            }else{ 
                ehco '没有文章可以显示';
            }
        ?>


4. 获取文章所属分类
    the_category();
5. 获取文章作者
    the_author();
6. 获取文章时间
    the_time();
    时间格式由参数决定；
    the_time('Y-M-D');
7. 添加编辑链接
    edit_post_link();


然后，就可以根据嵌套的html代码进行css样式设计了
    
