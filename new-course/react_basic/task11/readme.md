# React Basic Task Two - React入门(Part2: Context、Fragments与Hoc)

## 必学内容
https://react.dev/learn
## 课程任务

### 练习一
业界的思想：JS、HTML、CSS分离 -> f(state) = UI
耦合：
原生JS实现前端的问题：
1. 鼓吹HTML、CSS、JS分离，实际有耦合，并不能完全分离。
2. 代码不易维护，每个人的写法过于自由，HTML很长， JS很长，很长的JS获取HTML的一个变量，代码离的很远。
3. 常规前端也有一个套路，每次都要写的逻辑，更新状态 -> 更新dom。

为什么React需要编译？2013年出的，不是浏览器的原生语法。

概念：
1. React和JS之间的关系？
React是JS的一个库，React使用JSX语法，利用babel来编译。
2. 前端的视图层解决方案？
15年的时候，三分天下：React（Facebook）、Vue（国产，尤雨溪）、Angular（目前已经很少）。
3. React和JSX之间的关系？
JSX是React提出的一种语法，但不是React独有。

使用React重写简单计算器，初步理解React的思想，涉及语法：
1. JSX语法
2. 初步了解useState
https://react.dev/reference/react/useState
3. 了解React中的事件响应
https://react.dev/learn/responding-to-events

继续实现动态计算器，参考：
https://react.dev/learn/passing-props-to-a-component

1. 渲染列表
https://react.dev/learn/rendering-lists

渲染

组件
props / state 变化的时候组件重渲染
### 练习二
初步使用三方组件库，使用Semi Design的Tab组件，来将我们的练习分割开来，优化计算器的样式。学会看组件库的文档，
学会安装三方依赖：
```shell
yarn add xxx 
```
组件分为非受控和受控两种模式，非受控用于大部分场景，受控用于有自定义功能的时候

### 练习三
引入React-router进一步优化页面，按页面路由拆分页面，学会简单的路由和useNavigagte等hooks：
https://reactrouter.com/