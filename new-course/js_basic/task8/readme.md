# JS Basic Task Three - JS入门(Part4: JS异步和CSS动画)

## 必学内容
+ [JavaScript Dom](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents): 学习JS操作DOM， 遇到问题在MDN上查对应API的更多详细信息

## 课程任务
### 任务一：JS异步事件
https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setTimeout 
查看demo1.html的效果和代码，然后自行完成demo1的编写
### 任务二：JS动画和CSS动画
#### demo2-1
https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setInterval
我们使用JS来实现一个小球匀速从左到右，具体效果见demo2-1.html，它是一个最粗糙的demo，计算出每一帧移动的距离，然后使用setInterval来实现，后续第三阶段我们会回来仔细拆解。
#### demo2-2
https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_animations/Using_CSS_animations
使用CSS动画实现小球从左到右移动，并且可以使用速度函数来实现更复杂的效果，它的流畅度比JS动画更好，代码更简单。

### 任务三：左右切换滑动组件

建议自主思考1h，超过时间直接看答案。
+ [transform-MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform)
+ [transition-MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition)
完成一个轮播图， 效果见swiper.gif。 其实它只是在简单选项卡的基础上增加自动播放以及左右切换的效果。 不要求使用JS来实现动画（感兴趣也可以试一下）。

## 扩展资料
+ [合作异步JavaScript: 超时和间隔](https://developer.mozilla.org/zh-cn/docs/learn/JavaScript/%E5%BC%82%E6%AD%A5/%E8%B6%85%E6%97%B6%E5%92%8C%E9%97%B4%E9%9A%94): 深度了解setTimeout和setInterval， 以及更好的替代方式以及解决实际问题。建议仔细阅读做笔记。