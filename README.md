# vue3.0 主要框架以及内容汇总

vue3+vite+element-plus

1.本项目使用的构建工具是 pnpm

#### 全局安装：npm install -g pnpm

#### 查看ts-node的所有版本 pnpm view ts-node versions

#### 查看依赖(全局) pnpm list [-g]

#### 运行 pnpm dev

# a.[TypeScript](https://www.typescriptlang.org/docs/handbook/basic-types.html)

#### 它是 JavaScript 的一个超集，主要提供了类型系统和对 ES6 的支持.

[TypeScript 入门教程](https://ts.xcatliu.com/)

[https://drylint.com/TypeScript/TS_%E7%B1%BB%E5%9E%8B.html](https://drylint.com/TypeScript/TS_%E7%B1%BB%E5%9E%8B.html) -- typescript 难点解释版


# b.[element-plus](https://element-plus.org/zh-CN/) 的引入以及使用

1.安装

````
# NPM
$ npm install element-plus --save

# Yarn
$ yarn add element-plus

# pnpm
$ pnpm install element-plus
````

2.main.ts 中进行导入

````
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'    // element-plus 全局样式
import * as Icons from '@element-plus/icons-vue'    // element-plus 图标

Object.keys(Icons).forEach(key => {
    // @ts-ignore
    app.component(key, Icons[key])
})

app.use(ElementPlus)
````
即可开始使用！

# c.vue 3.0
