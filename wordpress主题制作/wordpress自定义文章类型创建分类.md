#wordpress自定义文章类型创建分类

wordpress创建完自定义文章类型后,需要其像post页面那样具有分类功能

###1. 使用```register_taxonomy```注册自定义文章类型的分类
详细代码如下:

		// 为products文章类型定义分类
	    function taxonomy_products(){
	        $labels = array(
	            'name'=>'产品分类',
	            'search_items'=>'搜索产品分类',
	            'all_item'=>'所有产品分类',
	            'parent_item'=>'上一级分类',
	            'parent_item_colon'=>'',
	            'edit_item'=>'编辑分类',
	            'update_item'=>'更新产品分类',
	            'add_new_item'=>'添加产品新分类',
	            'new_item_name'=>'新产品分类',
	            'menu_name'=>'产品分类'
	        );
	        //参数函数
	        $arr = array(
	            'labels'=>$labels,
	            'show_ui' => true,
	            'show_tagcloud' => false,
	            'hierarchical'=>true
	        );
	        // 为products文章类型定义分类
	        // 参数1   定义的分类名称(非前台显示,仅供后台调用使用)
	        // 参数2   为那个类型增加分类
	        // 参数3    信息数组
	        register_taxonomy('product_taxonomy','products',$arr);
	    }
		//挂载分类注册函数到程序初始化
		add_action('init','taxonomy_products');

###2. 参数详解:
该函数与```register_post_type()```函数类似:

参数1:(必须)自定义分类名称
参数2:(必须)分类对应的文章类型
参数3:(可选)分类自定义参数数组

		register_taxonomy('product_taxonomy','products',$arr);


其余参数可参照```register_post_type```