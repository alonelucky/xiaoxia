#wordpress自定义文章类型循环输出及分页

wordpress自定义文章类型之后发现无法正常循环输出,```get_posts()```函数会产生分页问题,且使用不是很方便.于是使用```wp_query()```wordpress自定义的类函数修改主循环.

1. 自定义文章类型列表的调用需要在archive-*.php文件中使用,例如archive-prosucts.php,该函数可自行对应page页面为products别名的链接

2. 调用自定义的产品类型,并启用缓存

		//分页生效必要参数 paged
		//cache  设置缓存
		$arr=array(
			'post_type'=>'products',
			'paged'=>$paged,
			'cache_results'=>true,
			'update_post_term_cache'=>true,
			'update_post_meta_cache'=>true
		);
		// 生成文章数组
		$posts = new wp_query($arr);

	参数1:查询的文章类型
	参数2:分页对应的页码
	参数3:缓存结果
	参数4:更新分类缓存
	参数5:更新文章自定义meta缓存

	接下来就可以使用主循环来循环输出函数

		if($posts->have_posts()){
			while($posts->have_posts()){
				$posts->the_post();
			}
		}
	
	使用```wp_query```之后必须使用
	```wp_reset_data()```重置搜索,以免影响主循环

3. 如何调用自定义文章的分类

	在上面循环中the_category()函数输出为空,因为在products文章类型中不存在category的分类名称,因此在调用的时候使用**```the_terms()```**函数获取当前文章的分类属性

	该函数参数为3个:
	参数1:当前文章的ID
	参数2:注册的分类名称(例如上面注册的'products_taxonomy')
	参数3:数组(可定义排序/层级等分类属性)
	参数4:输出的分隔符

4. 文章分页

	wordpress自带了**```paginate_links()```**函数	,该函数可以输出所有页码列表(1.2.3.4.5...这种类型的,不需要page_navi插件了)

	该函数需要获取到全局的$wp_query变量来获取page的值,
	代码如下:

		//分页
		global $wp_query;
		$big = 9999999;
			$arr = array(
				'base'               => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
				'format'             => '?page=%#%',
				'total'              => $wp_query->max_num_pages,
				'current'            => max( 1, get_query_var('paged') ),
				'show_all'           => False,
				'end_size'           => 1,
				'mid_size'           => 2,
				'prev_next'          => True,
				'prev_text'          => __('« Previous'),
				'next_text'          => __('Next »'),
				'type'               => 'array',
				'add_args'           => False,
				'add_fragment'       => '',
				'before_page_number' => ' ',
				'after_page_number'  => ' '
			);
		
		$links = paginate_links( $arr );


	主要参数解析:

	1. base : 输出的值
	2. format : 页码格式
	3. total : 显示的页数
	4. current : 当前页码
	5. show_all : 是否显示所有页数(默认false),以省略号代替
	6. mid_size : 首页和尾页附近(含自身)显示的页面数量 ,最少为1
	7. prev_next : 是否显示上一页和下一页 
	8. prev_text/next_text : 上一页下一页的显示文本
	9. type : 返回值类型;panin : 字符串 (a链接);array: 数组(只含a标签); list:无序列表
	10. before_page_number/after_page_number : 页码前后显示的文本
	
	




[全部函数参考](https://www.wpzhiku.com/all-wp_query-arguments-comments/)