<i18n>
  {
    "en": {
      "eg_base": "Basic Usage: Two Zoom modos",
      "eg_manual": "Manually load pictures, listen load success events, and customize the loading of pictures",
      "eg_manual_btn": "Load Image",
      "eg_lazy": "Lazyload Image",
      "eg_failed": "Loaded Fail && Customize the style of load failed",
      "eg_modal": "Use In ModDialog",
      "eg_change": "Change Source, Size, Zoom Modos",
      "eg_change_src": "Change Source",
      "eg_change_height": "Change Height",
      "eg_change_zoom": "Change Zoom"
    },
    "zh": {
      "eg_base": "基础实例（两种缩放方式）",
      "eg_manual": "手动加载图片，监听加载成功事件，自定义加载中图片",
      "eg_manual_btn": "加载图片",
      "eg_lazy": "lazyload 延迟加载（看不清，刷新快速滚动...）",
      "eg_failed": "加载失败和自定义加载失败样式",
      "eg_modal": "在弹出层中使用",
      "eg_change": "图片，宽高，缩放样式修改",
      "eg_change_src": "切换图片",
      "eg_change_height": "切换高度",
      "eg_change_zoom": "切换方法方式"
    }
  }
</i18n>

<template>
  <layout title="Image" source="image/index.vue" :apiLang="api">
    <div class="components-view">
      <j-code :overview="true" :langSources="code.overview"></j-code>
    </div>


    <div class="components-view">
      <div class="view-title">{{ $t('eg_base') }}</div>

      <div class="image-line">
        <mod-image class="image-line-item" :ratio="0.5"  src="https://oajua4pqj.qnssl.com/o_1bfbdh2181rcakt21u8uhvg1299r.jpeg">
          <div class="bottom-tip">君の名は - 星海城</div>
        </mod-image>

        <mod-image class="image-line-item" scale="contain" :ratio="0.5" src="https://oajua4pqj.qnssl.com/o_1bfba3u05hj917a9bmkeeq184dc.jpeg" />
      </div>

      <j-code  :source="code.base"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">{{ $t('eg_manual') }}</div>
      <div class="image-line">
        <mod-image class="image-line-item" v-on:loaded="onLoaded" :auto="auto" :width="400" :ratio="0.5" src="https://oajua4pqj.qnssl.com/o_1bfbrlmul10k1f946ds2jjgh6c.jpeg?a=1"></mod-image>

        <mod-image class="image-line-item" :auto="auto" scale="contain"
            loading-url="http://localhost:8080/static/img/logo.245c948.jpeg"
            :width="400" :ratio="0.5" src="https://oajua4pqj.qnssl.com/o_1bhj8vas16rk1ffc1jhj1uhc13sg7.png"></mod-image>
      </div>

      <div class="view-actions">
        <mod-button :inline="true" v-on:click="auto = true">{{ $t('eg_manual_btn') }}</mod-button>
      </div>

      <j-code  :langSources="code.event"></j-code>

    </div>


    <div class="components-view">
      <div class="view-title">{{ $t('eg_lazy') }}</div>
      <mod-image :lazy="true" :width="400" :ratio="0.5" src="https://oajua4pqj.qnssl.com/o_1bfbrlmul10k1f946ds2jjgh6c.jpeg"></mod-image>
      <mod-image :lazy="true" :width="400" :ratio="0.5" src="https://oajua4pqj.qnssl.com/o_1bfbb16e01a8b68f162d18c11qt9m.jpeg"></mod-image>
      <mod-image :lazy="true" :width="400" :ratio="0.5" src="https://oajua4pqj.qnssl.com/o_1bfbasnqvfrin0o1cr9go2104qc.jpeg"></mod-image>
      <mod-image :lazy="true" :width="400" :ratio="0.5" src="https://oajua4pqj.qnssl.com/o_1bhto5e7k15lq1j3513ufjtv1gfr7.png"></mod-image>

      <j-code  :source="code.lazy"></j-code>

    </div>


    <div class="components-view">
      <div class="view-title">{{ $t('eg_failed') }}</div>

      <div class="image-line">
        <mod-image class="image-line-item" :ratio="0.5"  src="https://oajua4pqj.qnssl.com/o_1bfbdh2181rcakt21u8uhvg1299r1.jpeg"></mod-image>

        <mod-image class="image-line-item" scale="contain" :ratio="0.5" src="https://oajua4pqj.qnssl.com/o_1bfba3u05hj917a9bmkeeq184dc.jpeg11" >
          <div class="custom-error" slot="error">😔 图片挂了宝宝 😢</div>
        </mod-image>
      </div>

      <j-code  :source="code.error"></j-code>
    </div>


    <div class="components-view">
      <div class="view-title">{{ $t('eg_modal') }}</div>

      <mod-alert v-model="show1">
        <mod-image :width="400" :ratio="0.5" src="https://oajua4pqj.qnssl.com/o_1bhto5e7k15lq1j3513ufjtv1gfr7.png"></mod-image>
      </mod-alert>

      <mod-button :inline="true" v-on:click="show1 = true">{{ $t('cShow') }}</mod-button>

      <j-code  :langSources="code.dialog"></j-code>

    </div>

    <div class="components-view">
      <p class="view-title">{{ $t('eg_change') }}</p>

      <mod-image class="image-has-background" :clickReload="true" :ratio="ratio" v-bind:src="src" :scale="scale" :width="400"/>

      <div class="view-actions">
        <mod-button :inline="true" v-on:click="changeImage">{{ $t('eg_change_src') }}</mod-button>
        <mod-button :inline="true" v-on:click="(ratio = ratio == 0.5 ? 1 : 0.5)">{{ $t('eg_change_height') }}</mod-button>
        <mod-button :inline="true" v-on:click="(scale = scale == 'cover' ? 'contain' : 'cover')">{{ $t('eg_change_zoom') }}</mod-button>
      </div>

      <j-code  :source="code.change"></j-code>
    </div>

  </layout>
</template>

<script>
  import Layout from '../common/common_layout';
  import code from './index.ch';
  import apiZh from './index.zh.api.md';
  import apiEn from './index.en.api.md';

  const IMAGE1 = 'https://oajua4pqj.qnssl.com/o_1bfbasnqvfrin0o1cr9go2104qc.jpeg'
  const IMAGE2 = 'https://oajua4pqj.qnssl.com/o_1bfbb16e01a8b68f162d18c11qt9m.jpeg'

  export default {
    components: {
      Layout
    },
    data () {
      return {
        api: {
          en: apiEn,
          zh: apiZh
        },
        code: code,
        img: 1,
        ratio: 0.5,
        scale: 'cover',
        auto: false,
        show1: false
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
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: main-color;
    color: #fff;

  .image-has-background
    background: #efefef;
    border: 1px solid main-color;

</style>
