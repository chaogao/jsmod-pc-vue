<template>
  <layout title="Image" source="image/index.vue">
    <div class="components-view">
      <div class="view-title">基础实例，设置高度比例，自定义内容</div>

      <mod-image class="image-item"  :ratio="0.5" src="https://oajua4pqj.qnssl.com/o_1bfbdh2181rcakt21u8uhvg1299r.jpeg">
        <div class="bottom-tip">君の名は - 星海城</div>
      </mod-image>
    </div>

    <div class="components-view">
      <p class="view-title">两种图片缩放样式</p>

      <div class="image-line">
        <mod-image class="image-line-item" scale="cover" :clickReload="true" :ratio="0.5" src="https://oajua4pqj.qnssl.com/o_1bfba3u05hj917a9bmkeeq184dc.jpeg" />

        <mod-image class="image-line-item" scale="contain" :clickReload="true" :ratio="0.5" src="https://oajua4pqj.qnssl.com/o_1bfba3u05hj917a9bmkeeq184dc.jpeg" />
      </div>
    </div>

    <div class="components-view">
      <div class="view-title">手动加载图片资源</div>

      <mod-image v-on:loaded="onLoaded" :auto="auto" class="image-item"  :ratio="0.5" src="https://oajua4pqj.qnssl.com/o_1bfbrlmul10k1f946ds2jjgh6c.jpeg"></mod-image>

      <div class="view-actions">
        <mod-button :inline="true" v-on:click="auto = true">加载图片</mod-button>
      </div>
    </div>

    <div class="components-view">
      <p class="view-title">加载失败，并开启点击重试</p>

      <mod-image class="image-item" :clickReload="true" :ratio="0.5" src="https://oajua4pqj.qnssl.com/o_1be2df70gghlnsc19u21rpn1ncb.jpeg" />
    </div>


    <div class="components-view">
      <p class="view-title">加载失败，自定义错误文案</p>

      <mod-image class="image-item"  :ratio="0.3" src="https://oajua4pqj.qnssl.com/o_1be2df70gghlnsc19u21rpn1ncb.jpeg">
        <div class="custom-error" slot="error">😔加载失败</div>
      </mod-image>
    </div>


    <div class="components-view">
      <p class="view-title">图片，宽高，缩放样式修改</p>

      <mod-image class="image-item" :clickReload="true" :ratio="ratio" v-bind:src="src" :scale="scale"/>

      <div class="view-actions">
        <mod-button :inline="true" v-on:click="changeImage">切换图片</mod-button>
        <mod-button :inline="true" v-on:click="(ratio = ratio == 0.5 ? 1 : 0.5)">切换高度</mod-button>
        <mod-button :inline="true" v-on:click="(scale = scale == 'cover' ? 'contain' : 'cover')">切换缩放方式</mod-button>
      </div>
    </div>

  </layout>
</template>

<script>
  import Layout from '../common/common_layout';

  const IMAGE1 = 'https://oajua4pqj.qnssl.com/o_1bfbasnqvfrin0o1cr9go2104qc.jpeg'
  const IMAGE2 = 'https://oajua4pqj.qnssl.com/o_1bfbb16e01a8b68f162d18c11qt9m.jpeg'

  export default {
    components: {
      Layout
    },
    data () {
      return {
        img: 1,
        ratio: 0.5,
        scale: 'cover',
        auto: false
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
</script>

<style lang="stylus">
  @import "~website/assets/mixin"

  .bottom-tip
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 10px;
    font-size: 12px;

  .image-line
    display: flex;

    .image-line-item
      flex: 1 1 auto;
      width: 0;
      background: #efefef;

  .custom-error
    text-align: center;
    padding-top: 30px;
    color: #ff5a00;

</style>
