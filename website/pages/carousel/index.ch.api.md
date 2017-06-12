### slots
| name        | description |
| ----------- |-------------|
| default     | 除轮播项目外，放置在容器的元素  |


### props

| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| value      |             |     Number | 双向绑定的滑动轮播索引 |
| fade      |        0     |   Booleam   | 是否使用渐变进行项目切换 |
| height      |             |    [Number, String]   | 轮播容器的高度，可选值为: 80, 80% |
| ratio      |             |    Number   | 高度相对于宽度的比例，例如设置0.5, 那么宽度为 100px 的容器，高度为 50px |
| current      |        0    |   Number   | 默认启用的项目索引值 |
| direction      |     horizontal     |    String   | 滚动的方向，可选值为：`horizontal` `vertical` |
| loop    |     false   |     Boolean   | 是否使用首尾相接的形式展示 |
| interval    |     0   |     Number   | 自动播放的时间间隔，0 为不进行自动播放 |
| duration    |     300   |     Number   | 轮播切换的动画时间 |


### events

| name        | description |
| ----------- |------------------ |
| loaded      | 加载成功的回调 |
