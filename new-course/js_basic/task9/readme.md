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
    }, seconds * 1000);
    console.log("布布是步驴");
}
console.log("输出1")
sleep1(3, () => {
    console.log("3秒后输出2");
    sleep1(5, () => {
         console.log("5秒后输出2");
    })
});

// 假设没有promise怎么实现一个请求
// 获取文章列表的请求
function fetch(url, successCallbackFn, failCallbackFn){
    window.fetch();
    //// 
    if(){}
}

fetch('url', () => { 
    console.log("请求成功");
    fetch('url2', () => {

    })
}, () => {
    console.log("请求失败");

}
)

// 更复杂的情况
function allFetch(url1, url2, url3, allSuccessCallbackFn， failCallbackFn){
    let count = 0;
    let alreadyCallFail = false;
    function callFail(){
        if(alreadyCallFail){
            return;
        }
        failCallbackFn();
        alreadyCallFail = true;
    }
    function update(){
        if(count === 3){
            allSuccessCallbackFn();
        }
    }
    fetch(url1, () => { 
        count += 1;
        update();
    }, () => {
        callFail();
    })
    fetch(url2, () => { 
        count += 1;
        update();
    }, () => {
        callFail();
    })
    fetch(url3, () => { 
        count += 1;
        update();
    }, () => {
        callFail();
    })
}
allFetch(url1, url2, url3, () => console.log("数据可以展示啦"), () => console.log("页面失败"))

const promise1 = sleep(3);
promise1.then(() => console.log("成功回调"), () => console.log("失败回调")); // 我提前告知一下，成功、失败之后要执行什么

// promise1.then(undefined, () => console.log("失败回调"));  
// promise1.catch(() => console.log("失败回调"));

promise1
.then(() => console.log("成功回调"))
.catch(() => console.log("失败回调"))


// 没有return的时候
promise1
.then(() => console.log("成功回调1"))
.then(() => console.log("成功回调2"))

// 相当于
promise1
.then(() => console.log("成功回调1"))
promise1
.then(() => console.log("成功回调2"))

// 有return的时候 -> 修改下面的.then关联的promise对象
promise1
.then(() => {
    console.log("成功回调1")
    const promise2 = sleep(1);
    return promise2;
})
.then(() => console.log("成功回调2"));

promise1
.then(() => {
    console.log("成功回调1")
    const promise2 = sleep(1);
    promise2.then(() => console.log("成功回调2"))
})

function fakeFetch(url, successCallbackFn, failCallbackFn){
    window.fetch();
    //// 
    if(){}
}


// 使用promise优化
function sleep2(seconds){
    return new Promise((x, y) => {
        setTimeout(() => {
            x("布布是步驴");
        }, seconds * 1000);
    });
}
sleep2().then((res) => { console.log("成功")})

function MyPromise(fn){
    let callback = undefined; //
    function y(data){
        callback(data);
    }
    fn(y);
    return {
        then: (z) => callback = z
    }
}
function sleep3(seconds){
    return MyPromise((item) => {// fn
        setTimeout(() => {
            item(new Date());
        }, seconds * 1000)
    });
}
// 程序开始运行， 通知，成功之后给我做下面这件事情
sleep3(3).then(date => {
    if(date === "星期六"){
        console.log();
    }else{
        
    }
});

// 过了3秒，调用item();
// 执行z


function sleep2(seconds){
    return new Promise((x) => {// fn
        setTimeout(() => {
            x(new Date());
        }, seconds * 1000)
    });
}

sleep2().then((date) => { console.log("成功并且获取到时间", date)})



sleep2(3).then(date => console.log("这是3秒后的时间"))

// const successFns = [];
console.log("输出1")
sleep2(3) // step1 返回了一个promise对象
.then((res) => {  //successFns.push(f1)
    console.log("3秒后输出2");
    return sleep2(5);
})
.then((res) => { //successFns.push(f2)
    console.log("5秒后输出3");
});


function wrapperFetch(url){
    return new Promise((x, y) => {
        fakeFetch(url, () => {
            x();
        }, () => {
            y();
        })
    })
}

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
