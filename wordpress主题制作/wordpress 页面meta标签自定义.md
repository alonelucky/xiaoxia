# wordpress 页面meta标签自定义

wordpress中自动调用分类、标签等生成关键词，利用摘要作为描述。

在functions.php中,添加代码:

> ```php
> //定义网站title
> function Xblog_name(){
> 	if(is_home()||is_front_page()){
> 		//如果是首页则只输出博客名称和描述
> 		bloginfo( 'name' ).' - '.bloginfo( 'description' );
> 	}else{
> 		//否则输出博客名+当前页面名称
> 		bloginfo( 'name' ).wp_title('-');
> 	}
> }
> //定义网站meta关键字标签
> function Xblog_description(){
> 	if(is_home()||is_front_page()){
> 		//如果是首页则输出博客描述
> 		$description = bloginfo( 'description' );
> 		return $description;
> 	}elseif(is_page()||is_single()){
> 		//如果是页面或文章则输出摘要内容
> 		global $post;
> 		echo $post->post_excerpt;
> 	}elseif(is_category()){
> 		$categories = get_the_category();
> 		$description= '';
> 		foreach($categories as $category){
> 			$description = $description.$category->cat_description;
> 		}
> 		echo $description;
> 	}
> }
> function Xblog_keywords(){
> 	if(is_home()||is_front_page()){
> 		//如果是首页则关键词为博客名称
> 		$keywords = bloginfo( 'name' );
> 		return $keywords;
> 	}elseif(is_single()||is_page()){
> 		//如果是文章页或普通页面,则关键词为分类名称和标签名
> 		global $post; //获取post内容
> 		$tags = wp_get_post_tags($post->ID);  //获取当前文章的所有标签
> 		$categories = get_the_category($post->ID);  //获取当前文章的所有所属分类
> 		$keywords = '';       //定义变量储存标签名和分类名
> 		foreach($tags as $tag){
> 			//循环输出标签名,并储存,以','号分割
> 			$keywords = $keywords. $tag->name.',';
> 		}
> 		foreach($categories as $category){
> 			//循环输出分类名,并储存,以','号分割
> 			$keywords = $keywords. $category->cat_name.',';
> 		}
> 		echo $keywords; //输出关键词
> 	}elseif(is_category()){
> 		echo single_cat_title();
> 	}elseif(is_tag()){
> 		echo single_tag_title();
> 	}else{
> 		echo wp_title('',0);
> 	}
> }
> ```

