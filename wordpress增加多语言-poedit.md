# wordpress增加多语言-poedit

使用函数:

add_action();

```php
//多语言支持
add_action('after_setup_theme', 'Xblog_theme_setup'); //定义在主题调用后启用Xblog_theme_setup函数
function Xblog_theme_setup(){
	//定义函数多语言域,及加载文件夹
    load_theme_textdomain('Xblog', get_template_directory() . '/languages');
}
```