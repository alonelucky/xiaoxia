# Wordpress主题中心

1. 在functions.php文件中使用函数

   ```php
   function X_theme_menu(){

     /*
     	1. 页面标题
     	2. 主题菜单名称
     	3. 权限
     	4. 菜单别名
     	5. 执行函数
     	add_theme_page($page_title_name,$theme_menu_name,$capability,$menu_sulg,$function);
     */
   add_theme_page('主题设置','主题中心','edit_theme',basename(__FILE__),'X_theme_function');
   }

   function X_theme_function(){
     //主题中心调用页面根目录下的theme-options.php文件
     require get_template_directory.'/theme-options.php';
   }
   //将主题中心添加及调用函数挂载到admin_menu下,当后台菜单加载时加载我们的主题中心文件
   add_action('admin_menu','X_theme_menu');

   ```

   ​