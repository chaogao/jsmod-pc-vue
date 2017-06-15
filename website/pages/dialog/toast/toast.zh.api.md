  ### props

| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| value       | false       |    Boolean   |  是否显示弹窗，设置 v-model 时不要设置此值 |
| type     |    default     |    String   |  toast 种类，目前可选择值：['default', 'error', 'success', 'loading'] 除 loading 其余类型会在 1.5s 后自动关闭 toast|
| width       |            |    String   |   可以设置百分比（80%）, 也可以设置数值，当为空时会自动根据内容区域计算 |
| content  |         |    String   |  设置提示内容，会替换默认值 |
| timeout    |      |    Number   | 设置显示后自动隐藏的时间，为 0 则不自动隐藏  |
| onHide    |      |    Function   | 隐藏时的回调  |


### events
| name        | description |
| ----------- |-------------|
| onShow     |  组件显示 |
| onHide     |  组件隐藏 |
