# worpdress自定义文章类型

在使用wordpress过程中有时需要自定义一些类型以免调用时跟post文章产生冲突，因此就可以使用自定义文章类型来控制。常见的是一般企业主题中的客户案例，产品展示栏目等。这些栏目不同于网站文章或新闻，而且在调用文章列表时有需要时刻注意。

###1. 使用 ```register_post_type（）``` 函数来注册一个新的post类型，例如：news

		register_post_type('news',$arr);

该函数需要两个参数
1. 需要注册的文章类型（字符串）
2. 注册字段的数组($arr)

	//参数数组
	$news_arr = array(
	    'labels'=>$labels,
	    'description'=>'创建我们企业的相关新闻',
	    'public'=>true,
	    'menu_postion'=>5,
	    'supports'=>array('title','editor','thumbnail','excerpt','comments'),
	    'has_archive'=>true
	);
	
数组内的参数:

1. **labels** --> 前台显示项目字段(数组)
2. description -->  文章类型描述
3. public  -->  (布尔值)用于定义```publicly_queriable```, ```show_ui```, ```show_in_nav_menus``` and ```exclude_from_search```的值
4. publicly_queriable  -->  (布尔值)可以从前台获取的变量(从url中，比如url重写)
5. exclude_from_search  -->  (布尔值)，是否能够被搜索到
6. show_ui  -->  (布尔值)是否生成一个默认的管理页面，也就是是否在后台有管理页面。默认跟public的是一样
7. show_in_menu  --> 是否在后台菜单项中显示，如果为ture,那么show_ui的值也必须设置为true,将会有一个顶级菜单项。
8. menu_position -->  在后台菜单中的位置。
9. menu_icon  -->  菜单的icon图标(一个url)。
10. capability_type  -->  查看、编辑、删除的能力类型(capability)，默认为post
11. hierarchical  -->  (布尔值)，文章是否有层级关系，也就是是否允许有父级文章。
12. **supports** -->  (数组)，对文章类型的一些功能支持
13. taxonomies  -->  添加已经注册了的分类法(比如默认的分类、标签)
14. has_archive  -->  文章是否有归档，就是一个所有文章归档页面。
15. rewrite  -->  (布尔值或者数组)，是否有url重写，设置为false的话将会防止url重写
16. can_export  -->  是否输出
17. show_in_nav_menus  -->  是否出现在设置菜单页面的选项中

####其中labels的参数如下:

1. name  -->  文章类型的名称，这个可以用中文(一般为复数，对于中文而言就无复数之说了)。
2. singular_name  -->  单篇文章对象的名称，(对于英文而言就是name的单数)，默认为name的值
3. add_new  -->  对应于默认文章类型中的“写文章”
4. add_new_item  -->  
5. edit_item   -->  对应编辑文章
6. new_item
7. all_item  
8. view_item
9. search_item
10. not_found
11. not_found_in_trash
12. parent_item_colon
13. menu_name

####其中supports的参数如下:
1. title  -->  标题
2. editor  -->  编辑器
3. author  -->  作者
4. thumbnail  -->  特色图像
5. excerpt  -->  摘要
6. custom-fields  -->自定义字段
7. comments  -->  评论
8. revisions  -->  修订版
9. page-attributtes  -->  页面属性

详细代码如下:

	// 注册文章类型为news
    function register_news(){
        //注册新闻类型
        $labels = array(
            'name'=>'新闻',
            'add_new'=>'添加新闻',
            'add_new_item'=>'增加一条新闻',
            'edit_item'=>'编辑新闻',
            'new_item'=>'xin新闻',
            'all_item'=>'所有新闻',
            'viwe_item'=>'查看新闻',
            'search_item'=>'搜索新闻',
            'not_found'=>'没有找到有关新闻',
            'not_found_in_trash'=>'回收站里没有相关新闻',
            'menu_name'=>'新闻'
        );
        //参数数组
        $news_arr = array(
            'labels'=>$labels,
            'description'=>'创建我们企业的相关新闻',
            'public'=>true,
            'menu_postion'=>5,
            'supports'=>array('title','editor','thumbnail','excerpt','comments'),
            'has_archive'=>true
        );
        // 注册文章类型为news
        register_post_type('news',$news_arr);
    }
	//将函数挂载到程序初始化的时候调用
	add_action('init','register_news');