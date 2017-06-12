let code = {};


code.overview = `
\`ModImage\` 解决前端开发中图片处理的各种需求，你可以像使用原生 \`img\` 标签一样使用且得到了以下功能：

* \`loading\` 状态显示，加载完成渐变
* 两种图片缩放方式 \`contain\` \`cover\` 无需关心图片具体尺寸
* 默认实现 \`lazyload\` （懒加载）
* 使用 \`ratio\` 比例进行控制尺寸

**开发时最好设置 \`height\` 或者 \`ratio\`， 否则容器宽度将为 100%，高度为图片真实的高度，进行图片的缩放处理**
`;

code.base = `
\`\`\`javascript
<template>
  <div class="image-line">
    <mod-image class="image-line-item" :ratio="0.5"  src="https://oajua4pqj.qnssl.com/o_1bfbdh2181rcakt21u8uhvg1299r.jpeg">
      <div class="bottom-tip">君の名は - 星海城</div>
    </mod-image>

    <mod-image class="image-line-item" scale="contain" :ratio="0.5" src="https://oajua4pqj.qnssl.com/o_1bfba3u05hj917a9bmkeeq184dc.jpeg" />
  </div>
</template>
\`\`\`
`;


code.event = `
\`auto\` 标识是否自动加载图片，默认为 true，自己控制即可实现手动加载

\`\`\`javascript
<template>
  <div class="image-line">
    <mod-image class="image-line-item" v-on:loaded="onLoaded" :auto="auto" :width="400" :ratio="0.5" src="https://oajua4pqj.qnssl.com/o_1bfbrlmul10k1f946ds2jjgh6c.jpeg?a=1"></mod-image>

    <mod-image class="image-line-item" :auto="auto" scale="contain"
        loading-url="http://localhost:8080/static/img/logo.245c948.jpeg"
        :width="400" :ratio="0.5" src="https://oajua4pqj.qnssl.com/o_1bhj8vas16rk1ffc1jhj1uhc13sg7.png"></mod-image>
  </div>

  <div class="view-actions">
    <mod-button :inline="true" v-on:click="auto = true">加载图片</mod-button>
  </div>
</template>
\`\`\`
`;

code.lazy = `
\`\`\`javascript
<template>
  <mod-image :lazy="true" :width="400" :ratio="0.5" src="https://oajua4pqj.qnssl.com/o_1bfbrlmul10k1f946ds2jjgh6c.jpeg"></mod-image>
  <mod-image :lazy="true" :width="400" :ratio="0.5" src="https://oajua4pqj.qnssl.com/o_1bfbb16e01a8b68f162d18c11qt9m.jpeg"></mod-image>
  <mod-image :lazy="true" :width="400" :ratio="0.5" src="https://oajua4pqj.qnssl.com/o_1bfbasnqvfrin0o1cr9go2104qc.jpeg"></mod-image>
  <mod-image :lazy="true" :width="400" :ratio="0.5" src="https://oajua4pqj.qnssl.com/o_1bhto5e7k15lq1j3513ufjtv1gfr7.png"></mod-image>
</template>
\`\`\`
`;

code.error = `

\`\`\`javascript
<template>
  <mod-image class="image-line-item" :ratio="0.5"  src="https://oajua4pqj.qnssl.com/o_1bfbdh2181rcakt21u8uhvg1299r1.jpeg"></mod-image>

  <mod-image class="image-line-item" scale="contain" :ratio="0.5" src="https://oajua4pqj.qnssl.com/o_1bfba3u05hj917a9bmkeeq184dc.jpeg11" >
    <div class="custom-error" slot="error">😔 图片挂了宝宝 😢</div>
  </mod-image>
</template>
\`\`\`
`;

code.dialog = `
**对于在默认隐藏容器中的图片，请务必设置\`width\` 和 \`ratio\` 或 \`height\`，否则内部无法知道容器的尺寸进行图片缩放**
\`\`\`javascript
<template>
  <mod-alert v-model="show1">
    <mod-image :width="400" :ratio="0.5" src="https://oajua4pqj.qnssl.com/o_1bhto5e7k15lq1j3513ufjtv1gfr7.png"></mod-image>
  </mod-alert>

  <mod-button :inline="true" v-on:click="show1 = true">点击显示</mod-button>
</template>
\`\`\`
`;

code.change = `
对于容器尺寸的改变，都会触发图片重绘。

\`\`\`javascript
<template>
  <mod-image class="image-has-background" :clickReload="true" :ratio="ratio" v-bind:src="src" :scale="scale" :width="400"/>

  <div class="view-actions">
    <mod-button :inline="true" v-on:click="changeImage">切换图片</mod-button>
    <mod-button :inline="true" v-on:click="(ratio = ratio == 0.5 ? 1 : 0.5)">切换容器比例</mod-button>
    <mod-button :inline="true" v-on:click="(scale = scale == 'cover' ? 'contain' : 'cover')">切换缩放方式</mod-button>
  </div>
</template>

<script>
  export default {
    const IMAGE1 = 'https://oajua4pqj.qnssl.com/o_1bfbasnqvfrin0o1cr9go2104qc.jpeg'
    const IMAGE2 = 'https://oajua4pqj.qnssl.com/o_1bfbb16e01a8b68f162d18c11qt9m.jpeg'

    export default {
      data () {
        return {
          img: 1,
          ratio: 0.5,
          scale: 'cover',
        }
      },
      methods: {
        changeImage () {
          this.img = !this.img;
        },

        onLoaded () {
          this.$jsmod.toast.show({
            type: 'success',
            content: '图片加载成功'
          });
        }
      },
      computed: {
        src () {
          return this.img ? IMAGE1 : IMAGE2;
        }
      }
    }
  }
</script>
\`\`\`
`;

export default code;
