# React Basic Task One - React入门(Part1: 环境构建和初次上手)

## 必学内容
### 了解
+ [创建新的 React 应用 - React官网](https://zh-hans.reactjs.org/docs/create-a-new-react-app.html): 简单看看官网关于构建一个基于React应用的介绍。

### 环境安装相关资料(看任务一指示操作)：
+ [nvm](https://github.com/nvm-sh/nvm):nvm是nodejs版本的管理器，安装nvm是因为后续本地可能会有使用不同nodejs版本的项目，所以需要使用它来管理nodejs，而不是直接安装某一个版本的nodejs。nodejs是一种javascript的运行环境，能够使得javascript脱离浏览器运行。有了它你才能将js运行到本地做很多构建工作， 比如后面用到的CRA(create-react-app)等。 
+ [npm](https://www.npmjs.com/):nodejs默认的包管理工具
+ [yarn](https://yarnpkg.com/):第三方的nodejs包管理工具，根据团队习惯在npm和yarn中选择，这里推荐使用yarn。
+ [Next.js](https://github.com/vercel/next.js):现代React脚手架。

### React学习
+ [Main concepts - react](https://reactjs.org/docs/hello-world.html):看的时候肯定会有很多不懂，把不懂的地方标一下，可以找我问一下。先看一遍React基本概念和思想。
+ [Tutorial: Intro to React](https://reactjs.org/tutorial/tutorial.html):从overview开始看起，完成官方的这个教程
## 课程任务
### 任务一：环境安装及工程搭建
以下的步骤参考官网即可， 网上的二手资料不一定靠谱（这些工具的安装可能随着版本迭代而变化， 官网会随时更新到最新， 而二手资料不会）。 根据nvm的github上的readme提示安装nvm， 学会使用nvm安装、切换node版本。 然后按照node12, 将本地启动版本默认设置为node12。 接着不需要安装npm(在高版本里自带了), 切换npm的源到淘宝源（百度一下）， 然后安装yarn。 最后使用Next.js在本项目的apps下创建一个新项目， 比如apps/zy-react-js-demo。
#### 命令行
有一些基本的功能
#### 包管理器
让你安装环境更方便 - homebrew
传统的C端应用 - 抖音、微信
装开发相关的软件 - 有依赖
安装 mariadb -> mariadb依赖GCC -> 依赖别的

#### 解释性语言
python、javascript

#### 编译
R语言、C++、Java编译。
javascript也需要编译？
var let(es6)
编译：将我们写的给人看的代码翻译成程序能识别的语言。
矛盾：我们希望新的方便的语法来写代码，但是用户的浏览器是很旧。JS -> 引入了编译。babel(编译JS, 把新的语法编译成旧的语法)

#### babel
React是需要编译（用了浏览器不支持的语法）
```javascript
Array.prototype.includes = function(callbackFn){
    const index = this.findIndex(callbackFn);
    return index !== -1;
}
```
babel是用JS编写的。

#### nodejs
支持脱离浏览器运行JS。

#### nvm
支持管理多个nodejs

#### CRA
创建一个React的SPA(Single page app)应用

### 任务二：React入门
看一遍基本概念后，看官方的tutorial，这个过程中遇到不会的回去翻main concepts或者去翻官方的api，跟着tutorial完成任务（代码写在使用Next.js创建的工程里）。