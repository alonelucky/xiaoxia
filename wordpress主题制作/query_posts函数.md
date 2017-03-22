##query_posts函数
wordpress用分类别名调用分类下文章，大部分情况下我们不需要query_posts函数，直接have_posts()判断，循环，有些情况下我们需要调用指定分类下的文章或是指定某一篇文章，因此就需要用到这个函数，该函数参数如下：
####1. 文章分类参数：
1. cat 分类ID

        //显示指定ID为6的文章
        query_posts('cat=6');

2. category_name 分类别名
        //分类别名为 js 的文章
        query_posts('category_name=js');
3. category_and 同时显示多个分类
        //分类别名为 2 和 6 的文章
        query_posts( array( 'category_and'=>array(2,6) ) );
4. category_in 显示该分类下的文章但不包括子分类
        //显示分类ID为6的但是不包含6的子分类
        query_posts( array( 'category_in'=>array(6) ) );
5. category_not_in 除某分类（不包含子分类）下的文章外均显示
        //除了分类ID为2和6的，其他分类和子分类均不显示
        query_posts( array( 'category_not_in'=>array(2,6) ) );
        
####2. 标签参数
1. tag – 输入标签名称来显示含有该标签的文章 
        //仅显示标签带有html的文章 
        query_posts('tag=html'); 
        //仅显示标签带有html或css的文章 
        query_posts('tag=html,css'); 
        //仅显示标签带有bread及baking及recipe的文章 
        query_posts('tag=bread+baking+recipe'); 
2. tag_id – 输入标签编号来显示含有该标签的文章 

3. tag__and – 显示符合含有多个特定标签的的文章(限输入标签编号来识别) 
        //仅显示标签带有编号15或20的文章 
        query_posts(array('tag_and' => array(15,20));    
4. tag__in – 显示符合其中一个特定标签的的文章(限输入标签编号来识别) 
        //仅显示标签带有编号15或20的文章 
        query_posts(array('tag__in' => array(15,20)); 
5. tag__not_in – 只要有该标签的文章一律不显示(限输入标签编号来识别) 
        //仅显示标签不带有编号37或47的文章 
        query_posts(array('tag__not_in' => array(37,47)); 
6. tag_slug__and – 显示符合含有多个特定标签的的文章(限输入标签代称来识别) 

7. tag_slug__in – 显示符合其中一个特定标签的的文章(限输入标签代称来识别) 

####3. 作者参数
1. author – 输入作者编号来显示该作者发表的文章
        //仅显示作者编号为3的文章 
        query_posts('author=3′);
        //仅显示作者编号不为3的文章 
        query_posts('author=-3′); 
2. author_name – 输入作者名称来显示该作者发表的文章 
        //仅显示作者名称为coder的文章 
        query_posts('author_name=coder'); 
####4. 置顶文章参数
        //仅显示置顶文章 
        array(‘post__in’=>get_option(‘sticky_posts’)) 
        //将文章的置顶属性清除掉，以正常文章顺序排序(例如发表日期)显示出来 
        caller_get_posts=1\
1. 显示文章但不显示置顶文章
        query_posts(array(“post__not_in” =>get_option(“sticky_posts”))); 
2. 显示分类编号为6的文章、每页显示3 篇文章，并且将此分类下文章的置顶属性清除掉，以正常文章顺序排序（例如发表日期）显示出来。 
        query_posts(‘cat=6&posts_per_page=3&caller_get_posts=1′);  

####5. 文章分页参数
        //显示文章编号为27的文章 
        ‘p’ => 27 
        //显示文章代称为about-my-life的文章 
        ‘name’ => ‘about-my-life’ 
        //显示分页编号为7的分页 
        ‘page_id’ => 7 
        //显示分页代称为about的分页 
        ‘pagename’ => ‘about’ 
        //当文章超过5篇时就仅显示5篇文章并且搭配换页程式码显示换页连结，设为-1则不换页全部显示。 
        ‘posts_per_page’ => 5 
        //当设定为6时就显示6篇文章，设为-1则显示范围内的全部文章。 
        ‘showposts’ => 6 
        //仅显示文章编号为5,12,2,14,7的这5篇文章 
        ‘post__in’ => array(5,12,2,14,7) 
        //仅显示文章编号不为5,12,2,14,7的其他全部文章 
        ‘post__not_in’ => array(6,2,8) 
        //显示文章类型为分页的文章，预设值为post (文章)，可以使用的数值有attachment(媒体档页面), page(分页), post(文章),或revision(修订)。 
        ‘post_type’ => ‘page’ 
        //显示文章状态为公开性质的文章，可以使用的数值有pending(审核中), draft(草稿), future(排程), private(私人), trash(垃圾) 。 
        ‘post_status’ => ‘publish’ 
        //显示文章范围内的第93页 
        ‘post_parent’ => 93 
####6. 时间参数

1. 显示指定日期的文章
        query_posts(‘monthnum=12&day=20′); 
2. 显示本周发表的文章
        $week = date(‘W’); 
        $year = date(‘Y’); 
        query_posts(‘year=’ . $year .‘&w=’ .$week ); 

####7. 排序参数
        //依照发表作者排列 
        orderby=author 
        //依照日期排列 
        orderby=date 
        //依照标题排列 
        orderby=title 
        //依照最后编辑时间排列 
        orderby=modified 
        //依照分页顺序排列(仅适用于分页) 
        orderby=menu_order 
        // (不知道XD…) 
        orderby=parent 
        //依照文章编号排列 
        orderby=ID 
        //随机排列 
        orderby=rand 
        //依照自订栏位数值排列 
        orderby=meta_value 
        //依照预设排列 
        orderby=none 
        //依照回响数排列 
        orderby=comment_count 
####8. 分页参数
        //当值设定true时则为不分页显示，直接显示全部文章 
        nopaging=true 
        //显示每页文章显示10篇 
        posts_per_page=10 
        //页数，例如当设定为6时则就表示跳到第6页 
        paged=6 
        //排列顺序，ASC为按时间顺序排列文章，若是DESC则是反向显示文章 
        order=ASC 
