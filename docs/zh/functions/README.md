## ModButton

### 何时使用？

`ModButton` 提供了按钮的基础样式，以及 `loading`, `disabeld` 两种状态，对于 api 调用接口可以通过简单的设置 `loading` 状态达到阻止重复提交的效果


### components 调用

```
<mod-button v-on:click="alert(1)" :customStyle="customStyle">按钮</mod-button>
```


### slots
| name        | description |
| ----------- |-------------|
| default     | 按钮内容区域  |
| loading     | 切换 loading 状态时的替代内容，推荐放置于 span 标签中  |

### props


| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| status      | default     |    String   |  按钮的状态，可选值为：`default`, 'loading', 'disabeld' |
| backgroundColor   |             |    String   |  按钮的背景色|
| color   |             |    String   |  按钮的字体颜色 |
| border      |             |    [String, Boolean]   | 设置为 true 显示默认颜色边框，也可设置颜色值 |
| inline      |             |    Boolean   | 按钮是否以 inline-block 形式显示 |
| onClick      |             |    Function   | 点击回调 |
| href      |             |    String   | 按钮点击后链接，如果要处理 vue-router 监听 click 事件在使用 api 进行处理  |
| customStyle      |             |    Object   | 覆盖按钮样式  |
| className      |             |    String   | 为按钮添加的类名  |


### events

| name        |    description |
| ----------- |------------------ |
| click       | 点击按钮时触发 |


### 示例

[原始链接](http://mjsmod-vue.tedfe.com/dist/#/button)

<iframe width="375" height="667" src="http://mjsmod-vue.tedfe.com/dist/?iframe=1#/button"></iframe>


## ModTab

### 何时使用？

分栏切换时使用，`ModTab` 提供了默认样式，同时可以使用作用域插槽进行完整的自定义样式设置

<p class="tip">
  作用域插槽概念查看
  <a href="https://vuefe.cn/v2/guide/components.html#作用域插槽" >链接</a>
</p>


### components 调用

```
<mod-tab>
  <mod-tab-item label="项目A">
    <div class="tab-content">
      <p>这是标签栏目1</p>
    </div>
  </mod-tab-item>

  <mod-tab-item label="项目B">
    <div class="tab-content">
      <p>这是标签栏目2</p>
    </div>
  </mod-tab-item>
</mod-tab>```


### slots
| name        | description |
| ----------- |-------------|
| default     | 放置 mod-tab-item 组件列表 |
| tab     | 自定义 tab 样式时，作用域插槽的 slot |

### props


| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| activeIndex | 0     |    Number   | 默认开启的分栏索引 |
| tabClass |      |    String   | 单个分栏的样式类，配置作用域插槽时使用，可以控制每个 tab 的展示方式，例如:  `flex: 1 1 auto` |
| tabWrapClass |      |    String   | 所有分栏的容器样式类，配置作用域插槽时使用，可控制容器的样式，例如: `display:flex` |
| enableTouch |   true   |    Boolean   | 是否通过滑动可以切换分栏 |

### events

| name        |    description |
| ----------- |------------------ |
| active       | 激活分栏时触发 |


### 示例

[原始链接](http://mjsmod-vue.tedfe.com/dist/#/tab)

<iframe width="375" height="667" src="http://mjsmod-vue.tedfe.com/dist/?iframe=1#/tab"></iframe>
