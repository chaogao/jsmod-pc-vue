### slots
| name        | description |
| ----------- |-------------|
| default     | 内容区域 |
| title     |  标题区域    |
| footer     |  底部确认按钮区域，确认按钮请加入 `mod-ok` 标识，  |

### props
| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| value       | false       |    Boolean   |  是否显示组件，设置 `v-model` 时不要设置此值 |
| title       |              |    String   |  标题文案，可以为空，可用 `title slot` 代替 |
| content     |             |    String    |  内容区域，可用默认 slot 代替 |
| width       |      80%       |    String   |   可以设置百分比（80%）, 也可以设置数值，当为空时会自动根据内容区域计算 |
| btnOk       |      确认      |    String   |  确认按钮文案 |
| btnNo       |      确认      |    String   |  取消按钮文案 |
| btnOkStyle       |            |    Object   |  确认按钮的扩展样式 |
| btnNoStyle       |            |    Object   |  取消按钮的扩展样式 |
| onClick       |            |    Function   |  点击确认（取消）的回调，返回 false 取消默认事件 |

### events

| name        | description |
| ----------- |-------------|
| onShow     |  组件显示 |
| onHide     |  组件隐藏 |
| click     |  确认按钮的点击，调用 `e.preventDefault` 阻止默认关闭事件。`e.result` 标识点击，`true` 为确认，`false` 为取消  |

### api 调用

```javascript
let self = this;

this.$jsmod.confirm.show({
  content: 'api 显示的确认窗',
  onClick (e) {
    self.$jsmod.toast.show({
      content: '点击了：' + (e.result ? '确认' : '取消')
    });
  }
})
```
