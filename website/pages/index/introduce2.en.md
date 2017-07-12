### Minimal Size

1. remove `grid` `font` `icons` `（client-side products often have their own UI standards）` focus to provide highly scalable components
2. keep minimal size`（gizp 40k）`


### Install && Usage

#### 1. Use `webpack`

```
npm install jsmod-pc-vue --save

```


```javascript
import Vue from 'vue'
import JSMOD from 'jsmod-pc-vue'
import 'jsmod-pc-vue/lib/jsmod.pc.css'

Vue.use(JSMOD)
```

#### 2. Use `script` `（not recommend）`

link to [jsmod-pc-vue](https://github.com/chaogao/jsmod-pc-vue), download `lib/jsmod.pc.js` `lib/jsmod.pc.css` import to your page

#### 3. Use multiple languages

**only `en` `zh` two options, the default language for the Chinese**

#### 3.1. setting on install

```javascript
  Vue.use(Jsmod, {
    lang: 'en'
  });
```

#### 3.2. change in code

```javascript
this.$jsmod.lang('en');
```


### Latest version

<a href="https://github.com/chaogao/jsmod-pc-vue" target="_blank">
  <img src="https://img.shields.io/npm/v/jsmod-pc-vue.svg?style=flat-square">
</a>
