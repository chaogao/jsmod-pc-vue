let code = {};

code.overview = {};

code.overview.zh = `
\`ModCarousel\` 为所有切换类组件的基础，你可以使用他实现自定义功能，也可以选择 \`ModTab\` \`ModBanner\` 实现需求（如果可以的话）

* 使用 \`v-model\` 双向绑定索引
* 提供两种切换方式，两种滚动方向


**需要设置 \`ratio\`，或者 \`height\` 指定高度**
`

code.overview.en = `
\`ModCarousel\` is the basis for all swipe components, you can use it to implement custom functions, or you can choose \`ModTab\` \`ModBanner\` (if possible)

* use \`v-model\` bingding to index
* two switching effects, Two switching direction

**Need to set \`ratio\`, or \`height\` to specify the height**
`


code.base = {};

code.base.zh = `
* 你可以选择使用 \`v-model\` 控制前后切换
* 也可选择调用实例的 \`pre\`, \`next\` 方法（即使你使用方法进行切换，也建议对索引进行双向绑定）

\`\`\`
<template>
  <div class="carousel-line">
    <mod-carousel class="carousel-line-item" ref="ca" v-model="index" v-on:swiped="onSwiped" :height="160">
      <mod-carousel-item v-for="item, key in list1" :key="key">
        <div class="demo-carousel-inner" :style="{'backgroundColor': (item % 2 == 0 ? '#ff5a00': '#efefef'), 'color': (item % 2 == 0 ? '#fff': '#333')}">
          <p>这是第{{ item }}屏</p>
          <p>这是第{{ item }}屏</p>
          <p>这是第{{ item }}屏</p>
        </div>
      </mod-carousel-item>
    </mod-carousel>

    <mod-carousel class="carousel-line-item" ref="ca" v-model="index" v-on:swiped="onSwiped" :fade="true" :height="160">
      <mod-carousel-item v-for="item, key in list1" :key="key">
        <div class="demo-carousel-inner" :style="{'backgroundColor': (item % 2 == 0 ? '#ff5a00': '#efefef'), 'color': (item % 2 == 0 ? '#fff': '#333')}">
          <p>这是第{{ item }}屏</p>
          <p>这是第{{ item }}屏</p>
          <p>这是第{{ item }}屏</p>
        </div>
      </mod-carousel-item>
    </mod-carousel>
  </div>

  <mod-button :inline="true" v-on:click="$refs.ca.pre()">前一个</mod-button>
  <mod-button :inline="true" v-on:click="$refs.ca.next()">后一个</mod-button>

  <div class="input-wrap">
    设置索引 <input v-model="index" type="number" min="0" :max="list1.length - 1"/>
  </div>

  <div class="carousel-info">
    当前索引：{{ index }}
  </div>
</template>

\`\`\`
`

code.base.en = `
* you can choose to use \`v-model\` control index
* you can also use  \`pre\` \`next\` method to control index

\`\`\`
<template>
  <div class="carousel-line">
    <mod-carousel class="carousel-line-item" ref="ca" v-model="index" v-on:swiped="onSwiped" :height="160">
      <mod-carousel-item v-for="item, key in list1" :key="key">
        <div class="demo-carousel-inner" :style="{'backgroundColor': (item % 2 == 0 ? '#ff5a00': '#efefef'), 'color': (item % 2 == 0 ? '#fff': '#333')}">
          <p>这是第{{ item }}屏</p>
          <p>这是第{{ item }}屏</p>
          <p>这是第{{ item }}屏</p>
        </div>
      </mod-carousel-item>
    </mod-carousel>

    <mod-carousel class="carousel-line-item" ref="ca" v-model="index" v-on:swiped="onSwiped" :fade="true" :height="160">
      <mod-carousel-item v-for="item, key in list1" :key="key">
        <div class="demo-carousel-inner" :style="{'backgroundColor': (item % 2 == 0 ? '#ff5a00': '#efefef'), 'color': (item % 2 == 0 ? '#fff': '#333')}">
          <p>这是第{{ item }}屏</p>
          <p>这是第{{ item }}屏</p>
          <p>这是第{{ item }}屏</p>
        </div>
      </mod-carousel-item>
    </mod-carousel>
  </div>

  <mod-button :inline="true" v-on:click="$refs.ca.pre()">前一个</mod-button>
  <mod-button :inline="true" v-on:click="$refs.ca.next()">后一个</mod-button>

  <div class="input-wrap">
    设置索引 <input v-model="index" type="number" min="0" :max="list1.length - 1"/>
  </div>

  <div class="carousel-info">
    当前索引：{{ index }}
  </div>
</template>

\`\`\`
`

code.loop = `
\`\`\`
<template>
  <mod-carousel ref="ca2" :loop="true" :height="160">
    <mod-carousel-item v-for="item, key in list1" :key="key">
      <div class="demo-carousel-inner">
        <p>这是第{{ item }}屏</p>
        <p>这是第{{ item }}屏</p>
        <p>这是第{{ item }}屏</p>
      </div>
    </mod-carousel-item>
  </mod-carousel>

  <mod-button :inline="true" v-on:click="$refs.ca2.pre()">前一个</mod-button>
  <mod-button :inline="true" v-on:click="$refs.ca2.next()">后一个</mod-button>
</template>

\`\`\`
`
code.auto = {};

code.auto.zh = `
如果 \`interval\` 设置为 0 则标识不进行自动轮播

\`\`\`
<template>
  <mod-carousel :interval="3000" :height="160">
    <mod-carousel-item v-for="item, key in list1" :key="key">
      <div class="demo-carousel-inner">
        <p>这是第{{ item }}屏</p>
        <p>这是第{{ item }}屏</p>
        <p>这是第{{ item }}屏</p>
      </div>
    </mod-carousel-item>
  </mod-carousel>
</template>
\`\`\`
`;


code.auto.en = `
set \`interval\` 0 to disabe automatic carousel

\`\`\`
<template>
  <mod-carousel :interval="3000" :height="160">
    <mod-carousel-item v-for="item, key in list1" :key="key">
      <div class="demo-carousel-inner">
        <p>这是第{{ item }}屏</p>
        <p>这是第{{ item }}屏</p>
        <p>这是第{{ item }}屏</p>
      </div>
    </mod-carousel-item>
  </mod-carousel>
</template>
\`\`\`
`;



code.vertical = `
\`\`\`
<template>
  <mod-carousel :loop="true" :height="100" :interval="3000" direction="vertical">
    <mod-carousel-item v-for="item, key in list2" :key="key">
      <div class="demo-carousel-comment">
        <div class="demo-title">
          {{ item.title }}
        </div>
        <div class="demo-content">
          {{ item.content }}
        </div>
      </div>
    </mod-carousel-item>
  </mod-carousel>
</template>
\`\`\`
`;

code.custom = {};
code.custom.zh = `
你可以简单的使用默认 \`slot\` 加入自定义样式的指示器（这也是为何组件默认不提供指示器的原因）

\`\`\`
<template>
  <mod-carousel ref="ca3" :loop="true" :height="200" >
    <mod-carousel-item v-for="item, key in list1" :key="key">
      <div class="demo-carousel-inner">
        <p>这是第{{ item }}屏</p>
        <p>这是第{{ item }}屏</p>
        <p>这是第{{ item }}屏</p>
      </div>
    </mod-carousel-item>

    <div v-on:click="$refs.ca3.pre()" class="control-left">
      <i  class="iconjsmod iconjsmod-xiangzuo1"></i>
    </div>

    <div  v-on:click="$refs.ca3.next()" class="control-right">
      <i  class="iconjsmod iconjsmod-xiangyou1"></i>
    </div>
  </mod-carousel>
</template>
\`\`\`
`

code.custom.en = `
you can simply use the default \`slot\` to add a custom style indicator (which is why the component does not provide indicator by default)

\`\`\`
<template>
  <mod-carousel ref="ca3" :loop="true" :height="200" >
    <mod-carousel-item v-for="item, key in list1" :key="key">
      <div class="demo-carousel-inner">
        <p>这是第{{ item }}屏</p>
        <p>这是第{{ item }}屏</p>
        <p>这是第{{ item }}屏</p>
      </div>
    </mod-carousel-item>

    <div v-on:click="$refs.ca3.pre()" class="control-left">
      <i  class="iconjsmod iconjsmod-xiangzuo1"></i>
    </div>

    <div  v-on:click="$refs.ca3.next()" class="control-right">
      <i  class="iconjsmod iconjsmod-xiangyou1"></i>
    </div>
  </mod-carousel>
</template>
\`\`\`
`

export default code;
