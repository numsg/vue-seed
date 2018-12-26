# vue-seed
## To start
这个是一个完全脱离.vue开发的面向.ts主导的一个vue种子工程。
```
# install dependencies
npm install

# serve with hot reload at localhost:8081
npm run dev

# build for production with minification
npm run build
```

## 介绍
1. 工程结构是通过vue cli创建出来带有typescript/vuex特性的模板工程
2. 新增目录结构支持文件，比如vue.config.js/.editorconfig
3. 新增几个组件，去除.vue相关的组件

改造步骤
1. 拆分.vue文件
    1. 提取.vue里面template节点下的文本单独到某个.html文件,将template标记删除，可以理解template为vue模板解析器里面提取html的标记。
    2. 在.ts文件中将.html进行装载 ：template: require('./error.html'),
    3. 在vue.config.js添加html loader，因为默认的vue-cli解析器中没有html loader。可以在vue.config.js中添加console.log(config.module.rules)进行查看
    4. 提取.vue里面style节点下的文本单独到某个.scss文件(将.vue里面style的引入方式移入.ts文件)
    5. 在.ts文件中添加.scss文件的添加方式，import './error.scss'
    6. 在这里无需添加scss loder，因为vue cli中已经默认添加了scss的loder
2. 注意点：
    1. 这样的调整完全是基于vue-cli能力基础进行调整的
    2. 提取的html元素都应属于标准的html片段原始或者是可被识别的指令（如element-ui的相关指令），但是html必须要有一个根元素
    3. 样式的加载是基于vue常规的一种加载方式，只是我们需要注意样式加载顺序,支持mixin.scss
    4. 对异步加载没有任何影响。component: () => import('../components/biz1').then(({ Biz1Component }) => Biz1Component),
    5. 对于vue一些特性，比如指令使用，component嵌套无影响。

## 效果

![](./doc/img/login.png)

![](./doc/img/biz1.png)

## TODO

1. vscode规则检查及vue-cli规则检查？
2. 单元测试
