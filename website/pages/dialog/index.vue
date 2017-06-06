<template>
  <layout title="Dialog" source="dialog/index.vue" v-on:api="showApi = true">
    <div class="components-view">
      <j-code :overview="true" :source="code.overview"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">基础实例</div>

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

      <mod-button :inline="true" v-on:click="show1 = !show1" >显示（自动宽高）</mod-button>
      <mod-button :inline="true" v-on:click="show1_1 = !show1_1" >显示（固定值）</mod-button>
      <mod-button :inline="true" v-on:click="show1_2 = !show1_2" >显示（固定百分比）</mod-button>

      <j-code :source="code.base"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">向上方偏移</div>

      <mod-dialog v-model="show2" :offsetTop="-200">
        <div class="base-dialog">
          hello jsmod
        </div>
      </mod-dialog>

      <mod-button :inline="true" v-on:click="show2 = !show2" >显示</mod-button>

      <j-code :source="code.offset"></j-code>
    </div>


    <div class="components-view">
      <div class="view-title">自动更新位置</div>

      <mod-dialog v-model="show3" >
        <div class="base-scroll">
          <div v-for="item in list2" clas="base-dialog-item">{{ item }}</div>

          <mod-button v-on:click="list2.push('一条数据')" >添加</mod-button>
        </div>
      </mod-dialog>

      <mod-button :inline="true" v-on:click="show3 = !show3" >显示</mod-button>

      <j-code :source="code.update"></j-code>
    </div>


    <div class="components-view">
      <div class="view-title">不显示遮罩层</div>

      <mod-dialog v-model="show4" :useMask="false">
        <div class="base-dialog">
          hello jsmod

          <mod-button v-on:click="show4 = false" >关闭</mod-button>
        </div>
      </mod-dialog>

      <mod-button :inline="true" v-on:click="show4 = !show4" >显示</mod-button>

      <j-code :source="code.mask"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">复合弹层</div>

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

      <mod-button :inline="true" v-on:click="show6 = !show6" >显示</mod-button>

      <j-code :source="code.complex"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">透明背景</div>

      <mod-dialog  v-model="show7" :backgroundColor="false" >
        <mod-image :width="400" :ratio="1" src="https://oajua4pqj.qnssl.com/o_1bhto5e7k15lq1j3513ufjtv1gfr7.png"></mod-image>
      </mod-dialog>

      <mod-button :inline="true" v-on:click="show7 = !show7" >显示</mod-button>

      <j-code :source="code.opacity"></j-code>
    </div>


    <div class="components-view">
      <div class="view-title">API 调用</div>

      <mod-button v-on:click="showDialog" :inline="true">API调用</mod-button>

      <j-code :source="code.api"></j-code>
    </div>


    <mod-layer direction="horizontal" width="80%" v-model="showApi">
      <j-code  :api="true" :source="api"></j-code>
    </mod-layer>
  </layout>
</template>

<script>
  import Layout from '../common/common_layout';
  import code from './index.ch';
  import api from './index.ch.api.md'


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
        showApi: false,
        api: api,
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
