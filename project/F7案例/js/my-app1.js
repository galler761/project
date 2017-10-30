var myApp = new Framework7();//有了基本的页面布局和需要用的CSS以及JS文件。现在我们需要初始化我们的应用,使用了 myApp 作为变量名存储 Framework7 初始化之后的实例。

//初始化非常简单，但是Framework7 也提供了更多个性化的定制，只需要在初始化的时候传入一个配置对象即可
var myApp = new Framework7({
          pushState: true,
          swipePanel: 'left',
          // ... other parameters
    });