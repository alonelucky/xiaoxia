#WordPress主题文件的执行顺序及其层次结构详解
---
本文将介绍wordpress主题文件及主题文件执行的顺序和文件的层次结构。就是当你访问一个页面时，我们要看看有哪些模板文件被执行。

通常而言，一个功能完善的主题包含有index.php、page.php、single.php、sidebar.php、style.css、archine.php、、comments.php 和 search.php几个基本文件，WordPress在调用这些文件时会采用优先的原则，即先判断页面的类型，如果有对应的主体文件则调用，否则调用index.php文件，这也验证了前面说的：“一个index.php文件即可成为一个完整的主题”。

![](https://raw.githubusercontent.com/xiaqiubo/xiaoxia/master/whichtemplate-large.png)

---

如图所示，wordpress在加载主题文件时，会对主题文件进行逐一判断（调用顺序为从上到下）：

###1. 首页
对于每一个网站，这是第一,也是最重要的一个页面。所以WP提供了极大的范围来让你定制这个页面。让我们看看这个用于显示首页的文件的层次。

> front-page.php
> 
> home.php
> 
> index.php

当客户端请求主页时,WP将搜索front-page.php。 如果不存在,它将会使用home.php。如果 home.php存在,它会用到它。否则,它会默认采用index.php。

###2. 404
> 404.php
> 
> index.php

当客户端访问的页面不存在时,WP将搜索404.php。 如果不存在,它将会使用index.php（404页面必做）。

###3. 搜索
> search.php
> 
> index.php

当客户端使用搜索功能时,WP将调用search.php来显示结果。 如果不存在,它将会使用index.php。

###4. 分类
> category-[slug].php
> 
> category-[id].php
> 
> category.php
> 
> archive.php
> 
> index.php

WordPress可以有多种分类（文章、页面、链接、图片等）。这将会更容易使得所有/一些文章（页面）可以有不同的设计。默认情况下“未分类”是WP默认的文章分类。

然后调用archive.php存档页面，最后调用index.php

举例来说,如果你的分类是 news ,那么它的模板将会是category-news.php

###5. 标签
> tag-[slug].php
> 
> tag-[id].php
> 
> tag.php
> 
> archive.php
> 
> index.php

文件调用顺序及原理同上
举例来说,如果你的标签是 news ,那么它的模板将会是tag-news.php

###6. 存档
> archive.php
> 
> index.php

###7. 作者
> author-[author-nicname].php
> 
> author-[author-id].php
> 
> author.php
> 
> archive.php
> 
> index.php

###8. 日期
> date.php
> 
> archive.php
> 
> index.php

###9. 附件
> MIME_type.php
> 
> single.php
> 
> attachement.php
> 
> index.php

###10. 单篇日志
> single-[post-type].php
> 
> single.php
> 
> index.php

只要你需要，WordPress可以有各种日志类型。这将会更容易使得所有/一些日志类型可以有不同的设计。默认情况下“post”是WP主要和默认的日志类型。
举例来说,如果你的自定义日志类型是 product ,那么它的模板将会是single-product.php

###11. 单个静态页面
> [custom-template].php
> 
> page-[slug].php
> 
> page-[id].php
> 
> page.php
> 
> index.php

与post类型一样,类型,我们可以使用自定义页模板让page类型的页面有不同的页面布局。WP首先搜索指定的页面模板文件(如果存在)。
如果没有找到,它将寻找带有当前页面别名(slug)的模板文件。基本上,如果别名是aboutus,那么它将在当前主题文件夹中搜索文件page-aboutus.php。