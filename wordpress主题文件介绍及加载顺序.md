#WordPress主题文件的执行顺序及其层次结构详解
---
本文将介绍wordpress主题文件及主题文件执行的顺序和文件的层次结构。就是当你访问一个页面时，我们要看看有哪些模板文件被执行。

通常而言，一个功能完善的主题包含有index.php、page.php、single.php、sidebar.php、style.css、archine.php、、comments.php 和 search.php几个基本文件，WordPress在调用这些文件时会采用优先的原则，即先判断页面的类型，如果有对应的主体文件则调用，否则调用index.php文件，这也验证了前面说的：“一个index.php文件即可成为一个完整的主题”。

