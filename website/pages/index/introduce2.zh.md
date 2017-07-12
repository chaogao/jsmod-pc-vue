### 最小集

1. 移除了`栅格` `字体` `图标`等功能`（用户端产品往往都有自己的UI标准）`，专注提供可扩展的组件库
2. 保持最小体积，完全引入也无需担心`（gizp后 40k 左右）`


### 安装和使用

#### 1. 使用 `webpack` 开发

```
npm install jsmod-pc-vue --save

```



```javascript
import Vue from 'vue'
import JSMOD from 'jsmod-pc-vue'
import 'jsmod-pc-vue/lib/jsmod.pc.css'

Vue.use(JSMOD)
```

#### 2. 使用 `script` 安装`（不推荐）`

进入 [jsmod-pc-vue](https://github.com/chaogao/jsmod-pc-vue) 下载 `lib/jsmod.pc.js` `lib/jsmod.pc.css` 并引入页面即可使用


#### 3. 使用多语言

**目前只提供`en` `zh`两种选择，默认语言为中文**

#### 3.1. 在安装时设置

```javascript
  Vue.use(Jsmod, {
    lang: 'en'
  });
```

#### 3.2. 在代码中修改

```javascript
this.$jsmod.lang('en');
```

### 当前版本

<a href="https://github.com/chaogao/jsmod-pc-vue" target="_blank">
  <img src="https://img.shields.io/npm/v/jsmod-pc-vue.svg?style=flat-square">
</a>
