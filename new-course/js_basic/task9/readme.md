# JS Basic Task Five - JS入门(Part5: ES6入门)

## 课程任务
### 任务一：了解fetch请求和promise
https://developer.mozilla.org/zh-CN/docs/Web/API/Window/fetch
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON

具体见demo1.html，我们使用fetch API来获取接口的数据，这里我们使用了http://jsonplaceholder.typicode.com/，它免费给我提供了一批可以调用的接口，respect。
理解代码后，自行通过pratice1.html填充写一遍，可以查fetch API，但是不去看demo1.html的代码。


### 任务二：学习现代ES6语法
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function


```javascript
// 回调地狱演示
function sleep1(seconds, callbackFn){
    setTimeout(() => {
        callbackFn();
    }, seconds * 1000)
}
console.log("输出1")
sleep1(3, () => {
    console.log("3秒后输出2");
    sleep1(5, () => {
         console.log("5秒后输出2");
    })
});

// 使用promise优化
function sleep2(seconds){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, seconds * 1000)
    })
}

console.log("输出1")
sleep2(3)
.then(() => { 
    console.log("3秒后输出2");
    return sleep2(5);
})
.then(() => {
    console.log("5秒后输出3");
});

// 使用async await优化
async function output(){
    console.log("输出1");
    await sleep2(3);
    console.log("3秒后输出2");
    return sleep2(5);
    console.log("5秒后输出3");
}
output();
```

查看demo2的效果，这是我让dev0帮忙写的demo，功能如下：
1. 页面上有个添加小球按钮，添加后自动创建小球N（N从1开始）。
2. 小球创建后自动从左到右滚动。完成动画后展示2S的，小球动画完成。然后从画布中移除。
