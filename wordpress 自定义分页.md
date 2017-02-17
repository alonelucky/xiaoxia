# wordpress 自定义分页

利用函数:

get_previous_posts_link()

get_next_posts_link()



创建php函数:

```php+HTML
function Xblog_posts_nav_link($dis_class,$pre_class,$next_class)
{
if( get_previous_posts_link() ){
		echo '<li class="'.$pre_class.'">'.get_previous_posts_link('请看上一页').'</li>';
	}else{
		echo '<li class="'.$pre_class.' '.$dis_class.'"><a>当前为首页</a></li>';
	}

	if( get_next_posts_link() ){
		echo '<li class="'.$next_class.'">'.get_next_posts_link('请看下一页').'</li>';
	}else{
		echo '<li class="'.$next_class.' '.$dis_class.'"><a>已经到最后一页了</a></li>';
	}
}
```

$dis_class:自定义链接栏目的禁用class类名

$pre_class:自定义链接栏目的上一页class类名

$next_class:自定义链接栏目的下一页class类名