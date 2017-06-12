### slots
| name        | description |
| ----------- |-------------|
| default     | 嵌套图片内部的内容区域  |
| error     | 图片调用失败时的替换内容  |


### props

| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| src      |      |    String   |  展示的图片地址 |
| scale   |     cover        |    String   |  图片缩放方式，可选值: `cover` `contain` `default`，设置为 `default` 不进行任何缩放变化|
| width   |             |    [String, Number]   |  图片的宽度可以为: 80, 80px, 80% |
| height      |             |    [String, Boolean]   | 图片的高度可以为: 80, 80px, 80% |
| lazy      |      false       |     Boolean   | 是否启用懒加载 |
| ratio      |             |    Number   | 图片高度相对于宽度的比例，例如设置0.5, 那么宽度为 100px 的图片，高度为 50px |
| auto      |     true        |    Boolean   | 是否自动加载，设置为 true 会自动加载 |
| class      |             |    String   | 添加到 image 容器上的样式类，请不要设置复杂的样式，不然会影响图片的展示效果，可以设置 margin 等布局样式  |
| clickReload      |     false        |    Boolean   | 加载失败后点击图片是否重新请求  |
| showLoading      |     true        |    Boolean   | 是否显示图片加载中的图片  |
| loadingStyle      |             |    Object   | 图片加载中容器的样式组  |
| loadingUrl      |      默认loading.gif       |    String   | 设置加载中的图片地址  |



### events

| name        | description |
| ----------- |------------------ |
| loaded      | 加载成功的回调 |
