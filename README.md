<p>
  <a href="https://github.com/chaogao/jsmod-pc-vue" target="_blank">
    <img src="https://img.shields.io/npm/v/jsmod-pc-vue.svg?style=flat-square">
  </a>

  <a href="https://github.com/chaogao/jsmod-pc-vue" target="_blank">
    <img src="https://img.shields.io/npm/dm/jsmod-pc-vue.svg?style=flat-square">
  </a>


  <a href="https://github.com/chaogao/jsmod-pc-vue" target="_blank">
    <img src="https://img.shields.io/npm/l/jsmod-pc-vue.svg?style=flat-square">
  </a>
</p>

### 概述

`jsmod` 目标提供高自由度（高扩展性）的组件集合，并统一桌面端、移动端的使用方式，是一个面向**用户端**的组件库


### 文档
[点击查看](http://jsmod-vue.tedfe.com)



### 面向用户端设计

相比面向中后台的组件库，`jsmod` 不会提供很多特定组件。但每个组件的自定义功能都会比较丰富，便于组合使用，你可以使用简单的默认样式，也可以通过丰富的 `api` 自定义开发

### 最小集

1. 移除了`栅格` `字体` `图标`等功能`（用户端产品往往都有自己的UI标准）`，专注提供可扩展的组件库
2. 保持最小体积，完全引入也无需担心`（gizp后 40k 左右）`


### 安装和使用

#### 1. 使用 `webpack` 开发

```
npm install jsmod-pc-vue --save

import Vue from 'vue'
import JSMOD from 'jsmod-pc-vue'

Vue.use(JSMOD)
```

#### 2. 使用 `script` 安装`（不推荐）`

进入 [jsmod-pc-vue](https://github.com/chaogao/jsmod-pc-vue) 下载 `lib/jsmod.pc.js` 并引入页面即可使用


### 当前版本

<a href="https://github.com/chaogao/jsmod-pc-vue" target="_blank">
  <img src="https://img.shields.io/npm/v/jsmod-pc-vue.svg?style=flat-square">
</a>
