## ModImage

### 何时使用？

替换原生的Image标签，增加 loading，失败重试，图片缩放比例等实用功能，提升了图片开发效率与体验

### components 调用

```
<mod-image class="image-item"  :ratio="0.5" src="https://oajua4pqj.qnssl.com/o_1bfbdh2181rcakt21u8uhvg1299r.jpeg">
  <div class="bottom-tip">君の名は - 星海城</div>
</mod-image>
```

### slots
| name        | description |
| ----------- |-------------|
| default     | 嵌套与图片内部的内容区域  |
| error     | 图片调用失败时的替换内容  |


### props

| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| src      |      |    String   |  展示的图片地址 |
| scale   |     cover        |    String   |  图片缩放方式，可选值: `cover` `contain` `default`，设置为 `default` 不进行任何缩放变化|
| width   |             |    [String, Number]   |  图片的宽度可以为: 80, 80px, 80% |
| height      |             |    [String, Boolean]   | 图片的高度可以为: 80, 80px, 80% |
| ratio      |             |    Number   | 图片高度相对于宽度的比例，例如设置0.5, 那么宽度为 100px 的图片，高度为 50px |
| auto      |     true        |    Boolean   | 是否自动加载，设置为 true 会自动加载 |
| class      |             |    String   | 添加到 image 容器上的样式类，请不要设置复杂的样式，不然会影响图片的展示效果，可以设置 margin 等布局样式  |
| clickReload      |     false        |    Boolean   | 加载失败后点击图片是否重新请求  |
| showLoading      |     true        |    Boolean   | 是否显示图片加载中的图片  |
| loadingStyle      |             |    Object   | 图片加载中容器的样式组  |
| loadingUrl      |      默认loading.gif       |    String   | 设置加载中的图片地址  |



### events

| name        |    description |
| ----------- |------------------ |
| loaded       | 图片加载完毕是触发 |

### 示例

[原始链接](http://mjsmod-vue.tedfe.com/dist/#/image)

<iframe width="375" height="667" src="http://mjsmod-vue.tedfe.com/dist/?iframe=1#/image"></iframe>


## ModCarousel

### 何时使用？

基础轮播控件组，可以用于水平、垂直的轮播展示

<p class="tip">
  尽量避免复杂的交互存在于轮播组件中，尽量以展示为主，复杂的交互会导致不可知的`手势滑动问题`
</p>

### components 调用

```
<mod-carousel v-model="index" :height="160">
  <mod-carousel-item>
    <span>这是第1屏</span>
  </mod-carousel-item>

  <mod-carousel-item>
    <span>这是第2屏</span>
  </mod-carousel-item>
</mod-carousel>
```

### slots
todo...

### props
todo...

### events

todo...

### 示例

<p class="tip">
  PC端无法进行手势滑动，体验手势滑动请在手机端打开原始链接
</p>

[原始链接](http://mjsmod-vue.tedfe.com/dist/#/carousel)

<iframe width="375" height="667" src="http://mjsmod-vue.tedfe.com/dist/?iframe=1#/carousel"></iframe>


## ModBanner

### 何时使用？

数据驱动的广告滑动展示控件，带有图片预加载功能，组合了 `ModCarousel` `ModImage` 两个控件的使用

### components 调用

```
<mod-banner  v-on:click="onClick" :ratio="0.5" :list="list"></mod-banner>
```

list 数据格式如下

```javascript
[
  {
    src: 'https://oajua4pqj.qnssl.com/o_1bfbdh2181rcakt21u8uhvg1299r.jpeg',
    text: '当时的他是最好的他 而很多年后的我才是最好的我 最好的',
  },
  {
    src: 'https://oajua4pqj.qnssl.com/o_1bfba3u05hj917a9bmkeeq184dc.jpeg',
    text: '赵丽蓉饰演了一位农村的母亲程妈，但和大多数中国母亲一样，过年是家庭最重要的团聚，吃和'
  },
  {
    src: 'https://oajua4pqj.qnssl.com/o_1bfbasnqvfrin0o1cr9go2104qc.jpeg',
    text: '哭戏是很考验演员演技的，首先你要有真情实感你才能哭的出来，另外哭也分好多种。下面就看看各个角色在钟主任走后伤心'
  },

  {
    src: 'https://oajua4pqj.qnssl.com/o_1bfbb16e01a8b68f162d18c11qt9m.jpeg',
    text: '当时的他是最好的他 而很多年后的我才是最好的我 最好的'
  },

  {
    src: 'https://oajua4pqj.qnssl.com/o_1bfbrlmul10k1f946ds2jjgh6c.jpeg',
    text: '哭戏是很考验演员演技的，首先你要有真情实感你才能哭的出来，另外哭也分好多种。下面就看看各个角色在钟主任走后伤心'
  },
]
```

### slots
todo...

### props
todo...

### events

todo...

### 示例

<p class="tip">
  PC端无法进行手势滑动，体验手势滑动请在手机端打开原始链接
</p>

[原始链接](http://mjsmod-vue.tedfe.com/dist/#/banner)

<iframe width="375" height="667" src="http://mjsmod-vue.tedfe.com/dist/?iframe=1#/banner"></iframe>
