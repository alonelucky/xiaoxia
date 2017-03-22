# $post全局变量详解

调用方法：

    <?
        global $post;
        var_dump($post);
    ?>

得到如下数据：

    object(WP_Post)#3747 (24) {
        ["ID"]=>                        int(31)
        ["post_author"]=>               string(1) "1"
        ["post_date"]=>                 string(19) "2016-09-06 11:26:23"
        ["post_date_gmt"]=>             string(19) "2016-09-06 03:26:23"
        ["post_content"]=>              string(909) "<p> 整洁。。。。。。</p>"
        ["post_title"]=>                string(12) "办公环境"
        ["post_excerpt"]=>              string(0) ""
        ["post_status"]=>               string(7) "publish"
        ["comment_status"]=>            string(4) "open"
        ["ping_status"]=>               string(4) "open"
        ["post_password"]=>             string(0) ""
        ["post_name"]=>                 string(7) "bangong"
        ["to_ping"]=>                   string(0) ""
        ["pinged"]=>                    string(0) ""
        ["post_modified"]=>             string(19) "2016-09-06 15:10:39"
        ["post_modified_gmt"]=>         string(19) "2016-09-06 07:10:39"
        ["post_content_filtered"]=>     string(0) ""
        ["post_parent"]=>               int(0)
        ["guid"]=>                      string(27) "http://localhost:8080/?p=31"
        ["menu_order"]=>                int(0)
        ["post_type"]=>                 string(4) "post"
        ["post_mime_type"]=>            string(0) ""
        ["comment_count"]=>             string(1) "0"
        ["filter"]=>                    string(3) "raw"
    }

下面一一解析如上对象：
1. ID                   在wordpress中的唯一对应，不重复
2. post_author          文章作者/发布者
3. post_date            文章发布时间
4. post_date_gmt        文章发布的格林尼治时间
5. post_content         文章正文
6. post_title           文章标题
7. post_excerpt         文章摘要
8. post_status          文章当前状态

    返回值：
    >'publish' – 已经发表的文章或页面
    >
    >'pending' – 文章正在等待审查
    >
    >'draft' – 草稿状态
    >
    >'auto-draft' – 自动保存的草稿
    >
    >'future' – 未来的时间发布
    >
    >'private' – 登录后可见
    >
    >'inherit' – 修订
    >
    >'trash' – 在回收站中.版本2.9.增加

9. comment_status        当前文章的评论状态

    返回值：
    >open -  开启评论
    >close - 关闭评论
    >  
10. ping_status    
    
    返回值：
    >open 
    >close
11. post_password       文章密码
    
    返回值：
    boolean值

12. post_name           文章别名
13. to_ping             要引用的URL链接
14. pinged              引用过的链接
15. post_modified       页面更新日期
16. post_modified_gmt   页面更新日期格林尼治时间
17. post_content_filtered
18. post_parent         文章父级
19. guid                文章的一个链接。注意：不能将GUID作为永久链接
20. menu_order          
21. post_type           文章类型
22. post_mime_type      按ID编号检索附件的mime类型
23. comment_count       评论总数
24. filter

如上共计24个对象，了解了每个对象的含义，就能对wordpress文章进行很好的控制。
