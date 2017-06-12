<template>
  <layout title="Banner" source="carousel/banner.vue" :api="api">
    <div class="components-view">
      <j-code :overview="true" :source="code.overview"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">基础实例（渐变切换）</div>

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

      <j-code :source="code.base"></j-code>

    </div>

    <div class="components-view">
      <div class="view-title">设置指示器的颜色，自动播放</div>

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
      <div class="view-title">不显示指示器（页码）</div>

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
  import Layout from '../common/common_layout';
  import code from './banner.ch';
  import api from './banner.ch.api.md';

  export default {
    components: {
      Layout
    },

    data () {
      return {
        code: code,
        api: api,
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
