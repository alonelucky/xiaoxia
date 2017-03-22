# wordpress菜单自定义调用

使用函数:

wp_nav_menu();

```php
wp_nav_menu(array(
						'theme_location'  => 'header_menu',
						'container'       => 'div',
						'container_class' => 'collapse navbar-collapse',
						'container_id'    => 'main-navbar',
						'menu_class'      => 'nav navbar-nav center-block',
						'menu_id'         => 'manu-nav',
						'echo'            => ture,
						'fallback_cb'     => 'wp_page_menu',
						'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
						'depth'           => 0,
				));
```