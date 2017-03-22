#wordpress主题中心设置选项

创建wordpress主题之后,需要使用者自定义一些栏目,不然只能修改源代码,例如添加统计代码,企业主题的话企业基本信息等.

###1. 注册页面菜单:
```add_theme_page()```

该函数可以在主题栏目创建一个子菜单

代码如下:
	
    //添加主题中心
    add_action('admin_menu','Xtheme_theme');
    //主题中心函数
    function Xtheme_theme(){
        // 增加页面信息
        add_theme_page( 
            '企业信息', 
            '企业信息', 
            'administrator', 
            'Xtheme_theme_options', 
            'Xtheme_theme_options_fun' 
        );
    }


	参数详解:
	参数1:页面title
	参数2:菜单名称
	参数3:使用权限
	参数4:页面url名称
	参数5:调用函数(用于显示界面)

###2. 定义界面显示函数

代码如下:

    function Xtheme_theme_options_fun(){
        //确定群组区域
        //参数1   选项区域
        //参数2   
        //参数3
        //参数4   选项群组
        add_settings_section(
            'Xtheme_area_1',
            '',
            '',
            'Xtheme_group_1'
        );

	    //为选项区域增加子选项
        //参数1   字段名称
        //参数2   字段前台显示文本
        //参数3   表单定义函数
        //参数4   所属群组
        //参数5   所属区域
        add_settings_field(
            'Xtheme_established',
            '成立时间',
            'Xtheme_established_fun',
            'Xtheme_group_1',
            'Xtheme_area_1'
        );
        add_settings_field(
            'Xtheme_OEM',
            'OEM服务',
            'Xtheme_OEM_fun',
            'Xtheme_group_1',
            'Xtheme_area_1'
        );
    }

###3. 定义每个选项的显示

代码及参数如下:

    //企业成立时间
    function Xtheme_established_fun(){
        ?>
        <input type="date" name="Xtheme_options_1[established]" id="Xtheme_options_1[established]" value="<?php echo get_option('Xtheme_options_1')['established'];?>">
        <?php
    }
	//OEM服务
	function Xtheme_OEM_fun(){
        ?>
        <select name="Xtheme_options_1[OEM]" id="Xtheme_options_1[OEM]">
			<option value="true" <?php selected('true',get_option('Xtheme_options_1')['OEM'][0]);?>>True</option>
			<option value="false" <?php selected('false',get_option('Xtheme_options_1')['OEM'][1]);?>>False</option>
		</select>
        <?php
    }

	利用wordpress自带的selected/checked函数可方便的使用单复选框和下拉选择

###4. 界面输出

如上定义好了,选框和名称

下面调用界面(html的)

使用wordpress自带样式

	<div class="wrap">
    <h2>企业信息</h2>
    <div>
        <form action="options.php" method="POSt">
            <?php
                // 定义输出分组
                $group = 'Xtheme_group_1';
                // 调用设置分组项
                settings_fields($group);
                // 输出分组项
                do_settings_sections( $group );
                // 输出提交按钮
                submit_button();
            ?>
        </form>
	</div>

这里使用的将数据保存到option表中,因此表单提交到options.php中,所有内容由wordpress自动生生成

