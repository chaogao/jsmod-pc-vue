<i18n>
  {
    "en": {
      "eg_base": "Basic Usage",
      "eg_base_auto": "Auto Width and height",
      "eg_base_fix": "Static Width and height",
      "eg_base_percentage": "Percentage Width and height",
      "eg_offset": "Offset Vertical",
      "eg_update": "Auto Update Position",
      "eg_mask": "Disable Mask",
      "eg_mutilayer": "Use Header && Footer Slot",
      "eg_opacity": "Transparent Background",
      "eg_api": "Use API"
    },
    "zh": {
      "eg_base": "基础示例",
      "eg_base_auto": "自动宽高",
      "eg_base_fix": "固定宽高",
      "eg_base_percentage": "宽高百分比",
      "eg_offset": "垂直方向偏移",
      "eg_update": "自动更新位置",
      "eg_mask": "不显示遮罩层",
      "eg_mutilayer": "使用 Header && Footer Slot",
      "eg_opacity": "透明背景",
      "eg_api": "使用 API 调用"
    }
  }
</i18n>

<template>
  <layout title="Dialog" source="dialog/index.vue" :apiLang="api">
    <div class="components-view">
      <j-code :overview="true" :langSources="code.overview"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">{{ $t('eg_base') }}</div>

      <mod-dialog v-model="show1">
        <div class="base-dialog">
          hello jsmod
        </div>
      </mod-dialog>

      <mod-dialog v-model="show1_1" :width="200" :height="200">
        <div class="base-dialog">
          hello jsmod
        </div>
      </mod-dialog>

      <mod-dialog v-model="show1_2" width="80%" height="80%">
        <div class="base-dialog">
          hello jsmod
        </div>
      </mod-dialog>

      <mod-button :inline="true" v-on:click="show1 = !show1" >{{ $t('eg_base_auto') }}</mod-button>
      <mod-button :inline="true" v-on:click="show1_1 = !show1_1" >{{ $t('eg_base_fix') }}</mod-button>
      <mod-button :inline="true" v-on:click="show1_2 = !show1_2" >{{ $t('eg_base_percentage') }}</mod-button>

      <j-code :source="code.base"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">{{ $t('eg_offset') }}</div>

      <mod-dialog v-model="show2" :offsetTop="-200">
        <div class="base-dialog">
          hello jsmod
        </div>
      </mod-dialog>

      <mod-button :inline="true" v-on:click="show2 = !show2" >{{ $t('cShow') }}</mod-button>

      <j-code :source="code.offset"></j-code>
    </div>


    <div class="components-view">
      <div class="view-title">{{ $t('eg_update') }}</div>

      <mod-dialog v-model="show3" >
        <div class="base-scroll">
          <div v-for="item in list2" clas="base-dialog-item">{{ item }}</div>

          <mod-button v-on:click="list2.push('一条数据')" >Add Item</mod-button>
        </div>
      </mod-dialog>

      <mod-button :inline="true" v-on:click="show3 = !show3" >{{ $t('cShow') }}</mod-button>

      <j-code :source="code.update"></j-code>
    </div>


    <div class="components-view">
      <div class="view-title">{{ $t('eg_mask') }}</div>

      <mod-dialog v-model="show4" :useMask="false">
        <div class="base-dialog">
          hello jsmod

          <mod-button v-on:click="show4 = false" >close</mod-button>
        </div>
      </mod-dialog>

      <mod-button :inline="true" v-on:click="show4 = !show4" >{{ $t('cShow') }}</mod-button>

      <j-code :source="code.mask"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">{{ $t('eg_mutilayer') }}</div>

      <mod-dialog :height="500" width="40%" v-model="show6" >
        <div slot="header" class="base-header">
          商品描述
        </div>

        <div class="base-scroll">
          <div class="product-title">新款单排扣牛仔半身裙弹力牛仔短裙</div>

          <div class="product-imgs">
            <img src="https://oajua4pqj.qnssl.com/o_1bep544eefrinqris5qdu113qh.jpg">
            <img src="https://oajua4pqj.qnssl.com/o_1bep529r267e1vnscrja5ouclc.jpg">

          </div>
        </div>

        <div slot="footer" class="base-footer">
          <mod-button  :status="checkoutStatus" v-on:click="checkout">
            结算
            <span slot="loading">结算中</span>
          </mod-button>
        </div>
      </mod-dialog>

      <mod-button :inline="true" v-on:click="show6 = !show6" >{{ $t('cShow') }}</mod-button>

      <j-code :langSources="code.complex"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">{{ $t('eg_opacity') }}</div>

      <mod-dialog  v-model="show7" :backgroundColor="false" >
        <mod-image :width="400" :ratio="1" src="https://oajua4pqj.qnssl.com/o_1bhto5e7k15lq1j3513ufjtv1gfr7.png"></mod-image>
      </mod-dialog>

      <mod-button :inline="true" v-on:click="show7 = !show7" >{{ $t('cShow') }}</mod-button>

      <j-code :source="code.opacity"></j-code>
    </div>


    <div class="components-view">
      <div class="view-title">{{ $t('eg_api') }}</div>

      <mod-button v-on:click="showDialog" :inline="true">{{ $t('cShow') }}</mod-button>

      <j-code :sourc="code.api"></j-code>
    </div>
  </layout>
</template>

<script>
  import Layout from '../common/common_layout';
  import code from './index.ch';
  import apiZh from './index.zh.api.md'
  import apiEn from './index.en.api.md'


  export default {
    data () {
      return {
        code: code,
        show1: false,
        show1_1: false,
        show1_2: false,
        show2: false,
        show3: false,
        show4: false,
        show5: false,
        show6: false,
        show7: false,
        api: {
          en: apiEn,
          zh: apiZh
        },
        checkoutStatus: 'default',
        list: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'k', 'm', 'o'],
        list2: ['一条数据'],
        list3: ['一条数据']
      }
    },

    methods: {
      showDialog () {
        this.$jsmod.dialog.show({
          html: 'api显示的弹窗'
        })
      },

      checkout () {
        this.checkoutStatus = 'loading';

        setTimeout(() => {
          this.checkoutStatus = 'default';
          this.show6 = false;
          this.$jsmod.toast.show({
            content: '结算成功！'
          });
        }, 1000);
      }
    },

    components: {
      Layout
    }
  }
</script>

<style lang="stylus">
  @import "~website/assets/mixin"

  .button-wrap
    .jsmod-button
      margin-bottom: 15px;

  .base-dialog
    width: 100px;
    height: 100px;
    text-align: center;
    background: #efefef;
    padding: 10px;

  .base-dialog-item
    padding: 20px 20px;

  .base-scroll
    padding: 10px;

  .base-header
    font-size: 14px;
    text-align: center;
    line-height: 24px;
    border-bottom: 1px solid border-color;
    background: #fff;
    height: 50px;
    line-height: 50px;
    background: sub-color;
    color: #fff;

  .base-footer
    padding: 10px;
    border-top: 1px solid border-color;
    background: #fff;
    height: 100px;
    background: sub-color;
    padding-top: 30px;
    text-align: center;

  .product-title
    font-size: 14px;
    line-height: 24px;
    border-bottom: 1px solid border-color;
    margin-bottom: 10px;

  .product-imgs
    img
      width: 100%;

</style>
