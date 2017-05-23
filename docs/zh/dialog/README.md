所有的弹出层组件父组件都为 `ModDialog`，其特点如下:

1. 免去宽、高设定，在修改 slot 后自动计算最新位置
2. 弹窗内容高度超过限定高度自动调用 `IScroll` 生成可滚动弹窗
3. 所有的组件均可以组件、API两种形式调用
4. 使用 `:value` 设置显示状态，如果绑定 `v-model` 则可在父组件中获取弹出层的显示状态

<p class="tip">
  `:value`、`v-model` 都可以控制弹层的显示状态，区别在于 `v-model` 可以对弹窗的显示状态进行双向绑定
</p>

## ModDialog

### 何时使用？

`ModDialog` 给开发者最大限度的自由，创建各种弹窗功能，使用场景如下：

* 用 `ModAlert`, `ModConfirm`, `ModToast` 无法实现的功能
* 需要自由控制弹窗样式，交互逻辑
* 各种广告弹窗

### components 调用
```html
<mod-dialog :value="true" >
  <div v-bind:style="{height: '100px', width: '100px', backgroundColor: '#efefef'}">
    hello world
  </div>
</mod-dialog>
```

### api 调用
```javascript
this.$jsmod.dialog.show({
  content: 'hello world'
});
```

### slots

| name        | description |
| ----------- |-------------|
| default     | 内容区域     |
| header     | 头部区域     |
| footer     | 尾部区域     |

<p class="tip">
  设置的高度为弹窗整体高度，当 height=100、header、footer 高度为 25px 时，内容区域的高度为 50px
</p>


### props

| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| value       | false       |    Boolean   |  是否显示弹窗，设置 v-model 时不要设置此值 |
| html        |             |    String   |  内容区域，可用默认 slot 代替|
| header      |             |    String   |  头部区域，可用 header slot 代替|
| footer      |             |    String   |  尾部区域，可用 footer slot 代替|
| useIscroll  |      true   |    Boolean   |  是否使用 Iscroll 插件，当内容有 input 时建议设置为 false|
| useMask     |      true   |    Boolean   |  是否显示遮盖层|
| isScrollAble|      false  |    Boolean   |  遮盖区域是否引起页面滚动|
| isMaskClickHide|      true  |    Boolean   |  点击遮盖区域是否关闭弹窗|
| width          |       |    [String, Number]   |  可以设置百分比（80%）, 也可以设置数值，当为空时会自动根据内容区域计算|
| height         |       |    [String, Number]   |  可以设置百分比（80%）, 也可以设置数值，当为空时会自动根据内容区域计算|
| backgroundColor|    #fff   |    [String]   |  弹窗的背景色 |
| soltBackgroundColor|    #fff   |    [String]   |  内容区域的背景色（不包括 header、footer 区域） |


### 示例

[原始链接](http://mjsmod-vue.tedfe.com/dist/#/dialog)

<iframe width="375" height="667" src="http://mjsmod-vue.tedfe.com/dist/?iframe=1#/dialog"></iframe>


## ModAlert


### 何时使用？

`ModAlert` 实现了 ios 风格确认窗，确认操作时使用即可

### components 调用

```
<mod-alert v-model="show1"  content="购买成功！"></mod-alert>
```

### api 调用

```javascript
this.$jsmod.alert.show({
  content: 'api 显示的确认窗'
});
```

### slots

| name        | description |
| ----------- |-------------|
| default     | 内容区域     |

### props


| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| value       | false       |    Boolean   |  是否显示弹窗，设置 v-model 时不要设置此值 |
| content     |             |    String   |  内容区域，可用默认 slot 代替|
| width       |      80%       |    String   |   可以设置百分比（80%）, 也可以设置数值，当为空时会自动根据内容区域计算|
| useIscroll  |      true   |    Boolean   |  是否使用 Iscroll 插件，当内容有 input 时建议设置为 false |
| title       |              |    String   |  Alert 的标题，可以为空 |
| btn       |        确认      |    String   |  Alert 的按钮文案，可以为空 |
| onClick    |              |    Function   |  点击确认按钮时的回调函数，返回 false 可以阻止关闭行为 |

### events

| name        |      description |
| ----------- |------------------ |
| click       | 点击确认按钮时触发   |


### 示例

[原始链接](http://mjsmod-vue.tedfe.com/dist/#/alert)

<iframe width="375" height="667" src="http://mjsmod-vue.tedfe.com/dist/?iframe=1#/alert"></iframe>


## ModConfirm

### 何时使用？

`ModConfirm` 实现了 ios 风格询问窗，删除，提交等询问功能时使用

### components 调用

```
<mod-confrim v-model="show1"  content="确认购买吗？"></mod-confrim>
```

### api 调用

```javascript
this.$jsmod.confirm.show({
  content: 'api 显示的确认窗'
})
```

### slots

| name        | description |
| ----------- |-------------|
| default     | 内容区域     |

### props

| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| value       | false       |    Boolean   |  是否显示弹窗，设置 v-model 时不要设置此值 |
| content     |             |    String   |  内容区域，可用默认 slot 代替|
| width       |      80%       |    String   |   可以设置百分比（80%）, 也可以设置数值，当为空时会自动根据内容区域计算|
| useIscroll  |      true   |    Boolean   |  是否使用 Iscroll 插件，当内容有 input 时建议设置为 false |
| title       |              |    String   |  Confirm 的标题，可以为空 |
| btnOk       |      确认      |    String   |  Confirm 的确认按钮文案 |
| btnNo       |      确认      |    String   |  Confirm 的取消按钮文案 |
| onClick    |              |    Function   |  点击确认，取消按钮时的回调函数，返回 false 可以阻止关闭行为，传入参数 e.type 标识点击哪个按钮 |

### events

| name        |      description |
| ----------- |------------------ |
| click       | 点击确认按钮时触发，传入参数 e.type 标识点击哪个按钮  |


### 示例

[原始链接](http://mjsmod-vue.tedfe.com/dist/#/confirm)

<iframe width="375" height="667" src="http://mjsmod-vue.tedfe.com/dist/?iframe=1#/confirm"></iframe>


## ModToast

### 何时使用

作为应用的轻提示时调用，toast 分别有几种默认状态供开发者选择，通常使用 api 方式调用，而不是 components

### components 调用

```
<mod-toast v-model="show1" content="默认样式弹窗"></mod-toast>
```

### api 调用

```javascript
this.$jsmod.toast.show({
  content: 'api 显示的确认窗'
})
```


### props

| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| value       | false       |    Boolean   |  是否显示弹窗，设置 v-model 时不要设置此值 |
| type     |    default     |    String   |  toast 种类，目前可选择值：['default', 'error', 'success', 'loading'] 除 loading 其余类型会在 1.5s 后自动关闭 toast|
| content  |         |    String   |  设置提示内容，会替换默认值 |
| icon       |          |    String   | 设置ICON，会替换默认值 |
| timeout    |      |    Number   | 设置显示后自动隐藏的时间  |
| onHide    |      |    Function   | 隐藏时的回调  |


<p class="tip">
  1. timeout 设置为 0 时不会自动隐藏。 <br/>
  2. toast 会监听 timeout 值得改变，改变后会进入等待隐藏。<br/>
  3. api 调用时直接改变实例的设置值即可。<br/>
</p>


### events

| name        |      description |
| ----------- |------------------ |
| hide       | 隐藏时触发  |


### 示例

[原始链接](http://mjsmod-vue.tedfe.com/dist/#/toast)

<iframe width="375" height="667" src="http://mjsmod-vue.tedfe.com/dist/?iframe=1#/toast"></iframe>



## ModLayer

### 何时使用

生成页面的滑出层，左侧、右侧滑出菜单，下方、上方滑出提示等场景使用

### components 调用

```
<mod-layer v-model="show1">
  <div class="layer-inner">
    <div class="components-view">
      <div class="view-title">垂直方向 layer</div>
      <mod-button v-on:click="show1 = false">关闭</mod-button>
    </div>
  </div>
</mod-layer>
```


### props

| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| value       | false       |    Boolean   |  是否显示滑出层，设置 v-model 时不要设置此值 |
| useMask     |    true     |    Boolean   |  是否使用黑色透明蒙层 |
| coverScreen  |   false      |    Boolean   |  滑出层是否占用整个屏幕区域，设置此值时 width(height) 将不再起作用 |
| isMaskClickHide  |   true       |    Boolean   | 点击蒙层是否关闭滑出层 |
| useIscroll    |  true    |    Boolean   | 滑出层内部是否使用 iscroll，如果内部有 input 元素设置此值为 false，使用 iscroll 会有键盘弹出 bug  |
| direction    |   vertical   |    String   | 滑出层的方向，可选值: `vertical` `horizontal`  |
| verticalPosition    |   bottom   |    String   | 滑出曾在垂直方向时的位置  |
| horizontalPosition    |   left   |    String   | 滑出曾在水平方向时的位置  |

### slots

| name        | description |
| ----------- |-------------|
| default     | 内容区域     |



### events

| name        |      description |
| ----------- |------------------ |
| hide       | 隐藏时触发  |


### 示例

[原始链接](http://mjsmod-vue.tedfe.com/dist/#/layer)

<iframe width="375" height="667" src="http://mjsmod-vue.tedfe.com/dist/?iframe=1#/layer"></iframe>


### events
| name        |    description |
| ----------- |------------------ |
| onShow       | 显示时触发 |
| onHide       | 隐藏时触发 |
