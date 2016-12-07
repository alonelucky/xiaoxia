##gulp初体验
在云IDEcloud9中体验测试了gulp
#### 1. 首先npm install gulp -g
npm install gulp --save-dev
全局和项目安装gulp

####2. 测试项目为压缩文件和修改文件名称
安装gulp依赖项

|  名称  | 含义  |
| --- | --- |
| gulp-minify  | 压缩css文件|
|gulp-uglify|压缩js文件|
|gulp-concat|合并文件|
|gulp-rename|修改文件或文件夹名称|      

npm install gulp-minify --save-dev

####3. 创建gulpfile.js文件
        var gulp = require('gulp'),
            minify = require('gulp-minify'),
            uglify = require('gulp-uglify'),
            concat = require('gulp-concat'),
            rename = require('gulp-rename');
        //获取每个组件
         gulp.task('taskName',function(){
            return gulp.src('./dst/js/*.js')               //返回任务操作路径和文件
                .pipe(concat('functions.js'))              //合并所有的js文件为functions.js
                .pipe(gulp.dest('./src/js/'))              //输出functions.js文件到根目录下src下js文件夹
                .pipe(uglify())                            //压缩该文件
                .pipe(rename({extname:'.min.js'}))         //对压缩后的文件进行重命名，修改文件后缀为.min.js
                .pipe(gulp.dest('./src/js/'));             //输出到与未压缩同目录下
         });//新建一个名字叫taskName的任务

####4. 文件内容详解：
##### require()函数：
参数为string
**1. 如果string为内置模块**
    返回该模块
    不再继续执行
**2. 如果string以文件路径形式（如：'./X'、'../X' 、'/X'）**
    根据 X 所在的父模块，确定 X 的绝对路径。
    将 X 当成文件，依次查找名称为X的文件，只要其中有一个存在，就返回该文件，不再继续执行。
       X
       X.js
       X.json
       X.node
    将 X 当成目录，依次查找下面文件，只要其中有一个存在，就返回该文件，不再继续执行。
       X/package.json
       X/index.js
       X/index.json
       X/index.node
**3. 如果string不带路径**
    根据 X 所在的父模块，确定 X 可能的安装目录。 
    依次在每个目录中，将 X 当成文件名或目录名加载。
[参考文章1](http://www.ruanyifeng.com/blog/2015/05/require.html)
[参考文章2](http://www.jdon.com/idea/nodejs/how-require-actually-works.html)
##### gulp.task()
用于创建gulp任务，默认任务名称为default
    task('a',b);
参数a：指定任务名称
参数b：匿名函数
执行任务时运行 gulp a（默认任务名直接执行 gulp 即可）

##### gulp.src()
        gulp.src(globs[, options])
        1. globs参数是文件匹配模式(类似正则表达式)，用来匹配文件路径(包括文件名)，当然这里也可以直接指定某个具体的文件路径。当有多个匹配模式时，该参数可以为一个数组。
        2. options为可选参数。通常情况下我们不需要用到。
##### pipe()
node.js中stream（流）的指示方向
##### gulp.dest()
gulp.dest()方法是用来写文件的，其语法为：

        gulp.dest(path[,options])
        1. path为写入文件的路径
        2. options为一个可选的参数对象，通常我们不需要用到
##### concat()
合并文件，指定参数为合并后的文件名称
##### uglify()
压缩文件，没有制定参数，直接压缩js文件
##### rename()
参数为数组，basename、prefix/suffix、extname、dirname
常用：prefix: 'pre-'  增加前缀pre-
     suffix: '-suf'  增加后缀，不改变文件性质
    extname:'.min.js'  修改文件后缀

[参考文章3](http://www.cnblogs.com/2050/p/4198792.html)
