## Push 本地原有文件到github新建项目

1. 本地项目已经完成，此时想同步至github上。
    1. 方法一：创建文件夹 clone github项目至本地 ，拷贝项目并上传
    2. 方法二：在项目文件夹下git init 创建git本地版本库，再上传
2. 方法二显然更合适，不过在方法二进行时出现```failed to push some refs to git```错误提示,(不经常研究git工作原理，只是作为版本同步工具使用)，于是网上搜索。
3. 是因为readme文件不在不低文件夹中所致，运行命令
  
        git pull --rebase ogigin master

4.本地出现readme文件，此时运行git push则无报错。
