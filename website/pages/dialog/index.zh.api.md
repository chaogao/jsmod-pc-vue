### slots
| name        | description |
| ----------- |-------------|
| default     | 内容区域     |
| header     | 头部区域     |
| footer     | 尾部区域     |

### props
| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| value       | false       |    Boolean   |  是否显示组件，设置 `v-model` 时不要设置此值 |
| html        |             |    String   |  内容区域，可用默认 slot 代替|
| header      |             |    String   |  头部区域，可用 header slot 代替|
| footer      |             |    String   |  尾部区域，可用 footer slot 代替|
| useMask     |      true   |    Boolean   |  是否显示遮盖层 |
| isMaskClickHide |      true  |    Boolean   |  点击遮盖区域是否关闭弹窗|
| contentScrollable|    true   |     Boolean   |  设置内容区域是否可以滚动 |
| width          |       |    [String, Number]   |  可以设置百分比（80%）, 也可以设置数值，当为空时会自动根据内容区域计算|
| height         |       |    [String, Number]   |  可以设置百分比（80%）, 也可以设置数值，当为空时会自动根据内容区域计算|
| offsetTop         |       |    Number   |  弹层垂直方向的偏移 |
| backgroundColor|    #fff   |    [String, Boolean]   |  弹窗的背景色，设置 false 不显示 |
| soltBackgroundColor|    false   |    [String, Boolean]   |  内容区域的背景色（不包括 header、footer 区域） |

### events
| name        | description |
| ----------- |-------------|
| onShow     |  组件显示 |
| onHide     |  组件隐藏 |

### api 调用
```javascript
this.$jsmod.dialog.show({
  content: 'hello world'
});
```
