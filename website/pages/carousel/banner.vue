<template>
  <layout title="Banner" source="carousel/banner.vue">
    <div class="components-view">
      <div class="view-title">基础 banner</div>

      <div class="banner-wrap">
        <mod-banner ref="ca" :auto="true" :interval="0" v-on:click="onClick" :ratio="0.5" :list="list"></mod-banner>
      </div>

      <div class="button-groups">
        <mod-button :inline="true" v-on:click="$refs.ca.pre()">前一个</mod-button>
        <mod-button :inline="true" v-on:click="$refs.ca.next()">后一个</mod-button>
      </div>
    </div>

    <div class="components-view">
      <div class="view-title">设置渐变切换banner</div>

      <div class="banner-wrap">
        <mod-banner ref="ca2" :auto="true" :fade="true" :interval="0" v-on:click="onClick" :ratio="0.5" :list="list"></mod-banner>
      </div>

      <div class="button-groups">
        <mod-button :inline="true" v-on:click="$refs.ca2.pre()">前一个</mod-button>
        <mod-button :inline="true" v-on:click="$refs.ca2.next()">后一个</mod-button>
      </div>
    </div>

  </layout>
</template>

<script>
  import Layout from '../common/common_layout';

  export default {
    components: {
      Layout
    },

    data () {
      return {
        list: [
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
        ],
        list2: [
          {
            src: 'https://oajua4pqj.qnssl.com/o_1bfbrlmul10k1f946ds2jjgh6c.jpeg?nocache=1',
            text: '哭戏是很考验演员演技的，首先你要有真情实感你才能哭的出来，另外哭也分好多种。下面就看看各个角色在钟主任走后伤心'
          },
          {
            src: 'https://oajua4pqj.qnssl.com/o_1bfbb16e01a8b68f162d18c11qt9m.jpeg?nocache=1',
            text: '当时的他是最好的他 而很多年后的我才是最好的我 最好的'
          },
          {
            src: 'https://oajua4pqj.qnssl.com/o_1bfba3u05hj917a9bmkeeq184dc.jpeg?nocache=1',
            text: '赵丽蓉饰演了一位农村的母亲程妈，但和大多数中国母亲一样，过年是家庭最重要的团聚，吃和'
          },
          {
            src: 'https://oajua4pqj.qnssl.com/o_1bfbdh2181rcakt21u8uhvg1299r.jpeg?nocache=1',
            text: '当时的他是最好的他 而很多年后的我才是最好的我 最好的',
          },
          {
            src: 'https://oajua4pqj.qnssl.com/o_1bfbasnqvfrin0o1cr9go2104qc.jpeg?nocache=1',
            text: '哭戏是很考验演员演技的，首先你要有真情实感你才能哭的出来，另外哭也分好多种。下面就看看各个角色在钟主任走后伤心'
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

  .banner-wrap
    max-width: 520px;

</style>
