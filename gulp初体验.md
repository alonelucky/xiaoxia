##gulp初体验
在云IDEcloud9中体验测试了gulp
1. 首先npm install gulp -g
npm install gulp --save-dev
全局和项目安装gulp

2. 测试项目为压缩文件和修改文件名称
安装gulp依赖项

|  名称  | 含义  |
| --- | --- |
| gulp-minify  | 压缩css文件|
|gulp-uglify|压缩js文件|
|gulp-concat|合并文件|
|gulp-rename|修改文件或文件夹名称|      

npm install gulp-minify --save-dev

3. 创建gulpfile.js文件
        var gulp = require('gulp'),
            minify = require('gulp-minify'),
            uglify = require('gulp-uglify'),
            concat = require('gulp-concat'),
            rename = require('gulp-rename');