## jsmod mobile for vue 中文文档

[使用文档](http://mjsmod-vue.tedfe.com/)
[全部示例](http://mjsmod-vue.tedfe.com/dist)
[git地址](https://github.com/chaogao/jsmod-mobile-vue)


![Alt text](http://oajua4pqj.qnssl.com/o_1bf2kjjp61c175uvndm1jc95fn7.png)

> 扫描查看全部示例


### 介绍

todo...

### 安装

#### 使用 webpack 构建

``` node
npm install jsmod-mobile-vue --save

```

```javascript
import Vue from 'vue'
import JsmodMobileVue from 'jsmod-mobile-vue'

Vue.use(JsmodMobileVue);
```

#### 使用 umd

todo...

### 开始使用

> 在 vue 模板中使用

```
<mod-alert :value="true"  content="购买成功！"></mod-alert>
```

> 在 script 标签中使用

```javascript
this.$jsmod.alert.show({
  content: 'api 显示的确认窗'
});
```


### 本地开发

```
git clone https://github.com/chaogao/jsmod-mobile-vue.git

npm install

npm run dev # 运行所有示例
npm run docs # 本地运行文档
```

### 其他

todo ...
