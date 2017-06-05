### slots

| name        | description |
| ----------- |-------------|
| default     | popover 的目标元素 |
| content     | popover 的内容     |


### props

| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| value       | false       |    Boolean   |  是否显示 popover，设置 v-model 时不要设置此值 |
| inline      | true        |    Boolean   |  包含 popover 的容器是否以 inline 形式显示 |
| trigger     | click       |    String  | 触发 popover 显示（隐藏）的方式，可选值分别为：`click` `hover` `manual` ，当选择 `manual` 时建议使用 v-model 控制显示状态 |
| showDelay   | 200            |    Number   |  `hover` 触发显示的延迟 |
| hideDelay  |  200   |    Number   | `hover` 触发隐藏的延迟 |
| offset     |   {left: 0, top: 0}   |    Object   | popover 显示的位置偏移，可以设置为负值 |
| targetType |     top  |    String   |  popover 的定位方式，targetType 参数由三个字段组成，每个字段可选值有\`top\`, \`bottom\`, \`left\`, \`right\`, \`center\` （center可以省略），具体如何选择请参照第二个示例 |
| background |     #fff  |    [Boolean, String]   |  设置 popover 的背景色，如果设置为 `false` 则没有背景色|
| useFade    |    true   |    [Boolean]   |  显示（隐藏）是否启用渐变效果 |
| arrow       |  true    |    [Boolean]   |  是否显示 popover 的指向箭头 |
| arrowColor |   #fff    |    [String]   |  箭头颜色 |
| arrowBorderColor |    #ccc   |    [String]   | 箭头边框颜色 |
| arrowSize |    10   |    Number   | 箭头大小 |

### events

| name        | description |
| ----------- |-------------|
| onShow     | popover 显示 |
| onHide     | popover 隐藏 |
