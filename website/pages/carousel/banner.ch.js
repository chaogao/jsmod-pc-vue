let code = {};

code.overview = `
\`ModBanner\` 为集成度较高，可扩展性较低的模块。只需提供图片，跳转链接数据即可

* 使用数据简单的构建 banner 显示
* 自带图片缩放，图片懒加载
`;


code.base = `
列表数据结构如下：
\`\`\`javascript
{
  list: [
    {
      src: 'https://oajua4pqj.qnssl.com/o_1bfbdh2181rcakt21u8uhvg1299r.jpeg',
      href: 'http://baidu.com'
    },
    {
      src: 'https://oajua4pqj.qnssl.com/o_1bfba3u05hj917a9bmkeeq184dc.jpeg',
    },
    {
      src: 'https://oajua4pqj.qnssl.com/o_1bfbasnqvfrin0o1cr9go2104qc.jpeg',
    },

    {
      src: 'https://oajua4pqj.qnssl.com/o_1bfbb16e01a8b68f162d18c11qt9m.jpeg',
    },

    {
      src: 'https://oajua4pqj.qnssl.com/o_1bfbrlmul10k1f946ds2jjgh6c.jpeg',
    },
  ]
}
\`\`\`

* \`src\` 为图片地址
* \` href \` 为点击后的跳转地址，可以为空

\`\`\`javascript
<template>
  <div class="carousel-line">
    <div class="carousel-line-item">
      <div class="banner-wrap">
        <mod-banner ref="ca" :auto="true"  v-on:click="onClick" :ratio="0.5" :list="list"></mod-banner>
      </div>
    </div>

    <div class="carousel-line-item">
      <div class="banner-wrap">
        <mod-banner ref="ca2" :auto="true" :fade="true"  v-on:click="onClick" :ratio="0.5" :list="list"></mod-banner>
      </div>
    </div>
  </div>
</template>
\`\`\`
`

code.color = `
\`\`\`javascript
<template>
  <mod-banner :interval="3000" :circleColor="'#fa0'" ref="ca" :auto="true" v-on:click="onClick" :ratio="0.5" :list="list"></mod-banner>
</template>
\`\`\`
`


code.dispage = `
\`\`\`javascript
<template>
  <mod-banner :showCircle="false" :showPager="false" ref="ca" :auto="true" :interval="0" v-on:click="onClick" :ratio="0.5" :list="list"></mod-banner>
</template>
\`\`\`
`

export default code;
