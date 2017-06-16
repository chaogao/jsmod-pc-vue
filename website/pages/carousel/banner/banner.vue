<i18n>
  {
    "en": {
      "eg_base": "Basic Usage: Two switching effects",
      "eg_indicator": "Set Indicator Color && AutoPlay",
      "eg_disalbe": "No Indicator && Pager"
    },
    "zh": {
      "eg_base": "基础示例：两种切换效果",
      "eg_indicator": "设置指示器颜色和自动播放",
      "eg_disalbe": "没有指示器和页码"

    }
  }
</i18n>

<template>
  <layout title="Banner" source="carousel/banner/banner.vue" :apiLang="api">
    <div class="components-view">
      <j-code :overview="true" :langSources="code.overview"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">{{ $t('eg_base') }}</div>

      <div class="carousel-line">
        <div class="carousel-line-item">
          <div class="banner-wrap">
            <mod-banner ref="ca" :auto="true" :interval="0" v-on:click="onClick" :ratio="0.5" :list="list"></mod-banner>
          </div>
        </div>

        <div class="carousel-line-item">
          <div class="banner-wrap">
            <mod-banner ref="ca2" :auto="true" :fade="true" :interval="0" v-on:click="onClick" :ratio="0.5" :list="list"></mod-banner>
          </div>
        </div>
      </div>

      <j-code :langSources="code.base"></j-code>

    </div>

    <div class="components-view">
      <div class="view-title">{{ $t('eg_indicator') }}</div>

      <div class="carousel-line">
        <div class="carousel-line-item">
          <div class="banner-wrap">
            <mod-banner :interval="3000" :circleColor="'#fa0'" ref="ca" :auto="true" v-on:click="onClick" :ratio="0.5" :list="list"></mod-banner>
          </div>
        </div>
      </div>

      <j-code :source="code.color"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">{{ $t('eg_disalbe') }}</div>

      <div class="carousel-line">
        <div class="carousel-line-item">
          <div class="banner-wrap">
            <mod-banner :showCircle="false" :showPager="false" ref="ca" :auto="true" :interval="0" v-on:click="onClick" :ratio="0.5" :list="list"></mod-banner>
          </div>
        </div>
      </div>

      <j-code :source="code.dispage"></j-code>

    </div>

  </layout>
</template>

<script>
  import Layout from '../../common/common_layout';
  import code from './banner.ch';
  import apiEn from './banner.en.api.md';
  import apiZh from './banner.zh.api.md';

  export default {
    components: {
      Layout
    },

    data () {
      return {
        code: code,
        api: {
          en: apiEn,
          zh: apiZh
        },
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
        ],
        list2: [
          {
            src: 'https://oajua4pqj.qnssl.com/o_1bfbrlmul10k1f946ds2jjgh6c.jpeg?nocache=1',
          },
          {
            src: 'https://oajua4pqj.qnssl.com/o_1bfbb16e01a8b68f162d18c11qt9m.jpeg?nocache=1',
          },
          {
            src: 'https://oajua4pqj.qnssl.com/o_1bfba3u05hj917a9bmkeeq184dc.jpeg?nocache=1',
          },
          {
            src: 'https://oajua4pqj.qnssl.com/o_1bfbdh2181rcakt21u8uhvg1299r.jpeg?nocache=1',
          },
          {
            src: 'https://oajua4pqj.qnssl.com/o_1bfbasnqvfrin0o1cr9go2104qc.jpeg?nocache=1',
          },
        ]
      }
    },

    methods: {
      onSwiped (e) {
        console.log(e.index);
      },

      onClick (e) {
        this.$jsmod.toast.show({
          content: '点击了:' + (e.index + 1)
        });
      }
    },
  }
</script>

<style lang="stylus">
  @import "~website/assets/mixin"

  .carousel-line
    display: flex;
    margin-bottom: 10px;

    .carousel-line-item
      flex: 1;
      width: 0;
      border-right: 1px solid main-color;

      &:last-child
        border-right: none;

  .banner-wrap
    max-width: 520px;

</style>
