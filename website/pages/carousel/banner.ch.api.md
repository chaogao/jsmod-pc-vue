### props

| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| list      |             |     Array | Banner 的图片数据，格式为 `[{src: 'http://xxx.jpg', href: 'http://xxx.com'}]` |
| height      |             |    [Number, String]   | 轮播容器的高度，可选值为: 80, 80% |
| ratio      |             |    Number   | 高度相对于宽度的比例，例如设置0.5, 那么宽度为 100px 的容器，高度为 50px |
| fade      |        0     |   Booleam   | 是否使用渐变进行项目切换 |
| current      |        0    |   Number   | 默认启用的项目索引值 |
| interval    |     0   |     Number   | 自动播放的时间间隔，0 为不进行自动播放 |
| scale    |     cover   |     String   | 展示图片时的缩放方式 可选值: `cover` `contain` `default`，设置为 `default` 不进行任何缩放变化 |
| showCircle    |     true   |     Boolean   | 是否展示下方圆点导航 |
| showPager    |     true   |     Boolean   | 是否展示右下方的页码 |
| background    |        |     String   | 默认的背景色 |
| loadedStep    |     2   |     Number   | 预加载图片的个数 |
| circleColor    |     true   |     Boolean   | 圆点导航的颜色 |
| controlSize      |        16px     |  String   | 左右切换按钮的大小 |



### events

| name        | description |
| ----------- |------------------ |
| loaded      | 加载成功的回调 |
