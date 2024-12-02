# BootCamp

本项目从0到1，目标达到大厂校招水平（不意味着一定能拿到offer，但可以对标相应的能力）。采用渐进式学习的思路降低学习的曲线。

## 环境准备
遇到问题推荐使用Perplexity: https://www.perplexity.ai/

1. 安装vscode：https://code.visualstudio.com/
2. 拉取本仓库到本地的文稿目录下
在终端执行
```shell
cd ~/Documents
git clone https://github.com/617976080/fe-bootcamp-2024
```
3. 然后使用vscode打开本地项目；
4. 如何提交代码：
需要注册下github的账号，然后学习下怎么使用git，建议用2小时搞定，如果完不成可后续寻求帮助。
首先切换出一个分支，也就是本项目你自己的版本，比如按下面命令执行：
```shell
git checkout -b zny # 切换出一个新分支
```
然后开始在对应task下面去写你的作业，接着提交代码：
```shell
git add . # 将改动保存到暂存区
git commit -m "feat: post task1" # -m 后面的字符串就是你的提交说明，比如这里是提交任务1
git push # 将本地改动推动到远程
```
然后到本仓库里提交PR，具体可以问perplexity，如何给一个github项目提交PR这样的问题。

## 使用方法

每一个目录为一个篇章，里面包含多个task，task内的readme为详细的内容，主要分为【必学内容】、【课程任务】、【扩展资料】和【扩展问题】。学习的时候，先阅读完每一个task的【必学内容】，然后完成【课程任务】，这是基本的要求，在计划上有余力或者有兴趣的情况下，可以去完成【扩展问题】和阅读【扩展资料】。每一个task下会有一个【practice】目录，将【课程任务】和【扩展问题】的答案放在里面，提交PR（pullrequest），我会在PR上进行comment，同时推荐增加一个【思考】板块，把自己想到的任何问题（尽量去发散思考）放到里面。在完成每一课后，我可能会在对应task下新增一个【demo】文件夹用于存放参考答案，可以在后续去学习。

## 内容大纲

### 上手篇

从进入JS基础之前，其实学习的内容严格来说还不属于编程的范畴，但这些都是前端的基础。HTML和CSS在初学者初期会占据比较大的比重，在后期实际实践时关注的比重会逐步下降。

#### HTML、CSS基础

这个部分只介绍常用的HTML、CSS知识，对于一些不太常用且偏面试题的部分（比如外边距塌陷、unicode等）放到进阶部分。这个阶段的目的在于初步认识HTML和CSS，完成一些页面局部（比如图片列表）的开发。同时建立良好的编程习惯（缩进等）。

#### JS基础

这个部分主要结合一些小练习来加强对编程语言的认识，同时培养一些比较好的开发习惯，实践部分主要完成选项卡、左右滚动组件等，达到能使用JS进行一些DOM操作的水平.同时去了解Ajax异步编程。

### 入门篇

本篇主要是学习现代开发框架React,由于搭建一个项目过于复杂（在进阶篇会讲述），我们使用CreateReactApp这个脚手架来创建我们的项目，只关注业务代码的部分，不关注底层的工程配置。在这个部分还是不要急着做完整的项目，先做一些小页面和卡片类的实践，打好基础。

#### React基础

从React官网开始，首先学会使用ClassComponent的开发方式，然后学习Context来实现简单的全局状态共享，进而了解React的各个生命周期。

#### React全家桶

主要是学习使用React周边的一些库ReactRouter、Redux、Rematch，来解决我们的一些实现的需要。

#### TypeScript基础

主要是学习TypeScript的一些常用知识（类型、类型推导、接口定义、枚举、泛型），过渡到使用强类型的TypeScript来开发。目前互联网大厂基本都在使用TypeScript。

#### ReactHooks

目前主流的React开发方式使用了FunctionComponent来代替ClassComponent，但对于新手来说直接上手FunctionComponent不太现实，所以将这部分安排在了最后。

### 实践篇

经过前两个篇章打下的基础，在本篇已经可以开始去做一个完整的项目了，这里开始要学到很多前端之外的内容，ssh连接、nginx配置等，在生产环境跑起一个项目，同时去做一些工业实践（如图片懒加载，也是面试的高频问题）。

#### 环境搭建

从ssh连接开始，在阿里云ECS上搭建环境，然后将项目运行起来。这个过程主要学习一些命令行，比如目录操作（mkdirrmchmodmv等）、进程操作（ps查看进程kill清除进程、Screen挂起进程）、文件操作（vim编辑文件）等。

#### 开发入门

使用antdesign来开始搭建一个网站的首页。学会去看组件库的文档。使用MutationObserver实现图片的懒加载，使用react-virtualized来实现无限列表的性能优化。使用MockJS来模拟后端接口，然后学会使用Axios发网络请求，同时做全局错误的拦截和统一处理。

#### 后端入门

初步了解Node.js+Koa+MongoDB，使用这些技术栈实现一个表单信息的提交和存储，在这个过程中了解浏览器的同源策略，使用CSRF来实现安全的表单的提交。学习OAuth鉴权和JWTtoken原理的知识，实现个人网站的第三方登录。

#### 工程实践

学习将静态资源托管到CDN上，优化性能。为网站配置https证书，提高网站的安全性。同时也学习这部分的网络知识。

### 基础夯实篇

本篇主要重新夯实HTML、CSS、JavaScript的一些基础，为后续的性能优化、面试做准备。同时通过使用前端技术来做一些小游戏，对Canvas有一些交接，学习设计模式，塑造面试的亮点。同时学习浏览器渲染的原理、JavaScript内存管理等知识。

具体内容待定。

### 工程篇

本篇主要入门Webpack、Babel、Postcss等前端工程化的构建工具（其实他们已经集成在CreateReactApp中，不过学会自定义配置，才能去做更多的性能优化以及别的事情），了解Eslint、husky来保证工程质量。了解gitlabCI来实现项目的质量保障和自动继承、部署，提高生产效率。

具体内容待定。

### 进阶实践篇

本篇主要通过造一些轮子，来提高自己阅读源码和编程能力。比如模仿Axios，实现一个网络请求库，模仿AntDesign自己实现一个前端组件库等。

具体内容待定。

### 视野扩展篇

待定

### 面试准备篇

待定

### 其他篇

主要是学习方法、git的使用之类的东西。