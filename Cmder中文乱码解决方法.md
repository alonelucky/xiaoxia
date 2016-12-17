##Cmder中文乱码解决方法

Cmder是一款Windows环境下非常简洁美观易用的cmd替代者,它支持了大部分的Linux命令。
但是，默认的中文相关设置Gb2312、Chinese big 都无法解决cmder显示中文乱码的现象，在网上找了很多中文设置方法，由于版本不对，找不到对应设置项。
今天找到了一篇博文，解决了这个问题。
1. 打开cmder
2. win+alt+p（右下角--》setting）打开设置面板
3. 在左侧栏中Startup==》Environment 添加
        
        set LANG=zh_CN.UTF8
一般这样就OK了大部分场合都能正确的显示中文（GBK须设置set LANG=zh_CN.CBK）
具体更多细节和cmder详细介绍请参考原文。
[原文链接](http://blog.csdn.net/mihupengpeng/article/details/53009110?locationNum=16&fps=1)