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
| borderColor |             |    String   |  边框的颜色，可以不设置 |
| inline      |      false       |    Boolean   | 按钮是否以 inline-block 形式显示 |
| href      |             |    String   | 按钮点击后链接，如果要处理 vue-router 监听 click 事件在使用 api 进行处理  |
| customStyle      |             |    Object   | 覆盖按钮样式  |


### events
| name        | description |
| ----------- |-------------|
| click     |  按钮的点击事件 |
