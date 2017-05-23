<template>
  <layout title="Dialog" source="dialog/index.vue">
    <div class="button-wrap">

      <mod-dialog v-model="show1" >
        <div class="base-dialog">
          hello jsmod
        </div>
      </mod-dialog>

      <mod-button v-on:click="show1 = !show1" >基础弹层</mod-button>

      <mod-dialog v-model="show2" >
        <div class="base-scroll">
          <div class="base-dialog-item" v-for="item in list">{{ item }}</div>
        </div>
      </mod-dialog>

      <mod-button v-on:click="show2 = !show2" >内容区域滚动</mod-button>


      <mod-dialog v-model="show3" :useMask="false">
        <div class="base-dialog">
          hello jsmod

          <mod-button v-on:click="show3 = false" >关闭</mod-button>
        </div>
      </mod-dialog>

      <mod-button v-on:click="show3 = !show3" >不显示遮盖层</mod-button>


      <mod-dialog v-model="show4" >
        <div class="base-scroll">
          <div v-for="item in list2" clas="base-dialog-item">{{ item }}</div>

          <mod-button v-on:click="list2.push('一条数据')" >添加</mod-button>
        </div>
      </mod-dialog>

      <mod-button v-on:click="show4 = !show4" >自动计算位置</mod-button>


      <mod-dialog width="90%" height="30%" v-model="show5" >
        <div class="base-scroll">
          <b>宽度90%，高度30%，旋转屏幕，弹层保持设置的百分比</b>
          <div v-for="item in list3" clas="base-dialog-item">{{ item }}</div>

          <mod-button v-on:click="list3.push('一条数据')" >添加</mod-button>
        </div>
      </mod-dialog>

      <mod-button v-on:click="show5 = !show5" >宽高百分比</mod-button>

      <mod-dialog width="90%" v-model="show6" backgroundColor="rgba(0, 0, 0, 0)">
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
          <mod-button :status="checkoutStatus" v-on:click="checkout">
            结算
            <span slot="loading">结算中</span>
          </mod-button>
        </div>
      </mod-dialog>

      <mod-button v-on:click="show6 = !show6" >顶部，底部，复合弹层</mod-button>


      <mod-button v-on:click="showDialog" >API调用</mod-button>
    </div>
  </layout>
</template>

<script>
  import Layout from '../common/common_layout';

  export default {
    data () {
      return {
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        show5: false,
        show6: false,
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


  .base-footer
    padding: 10px;
    border-top: 1px solid border-color;
    background: #fff;

  .product-title
    font-size: 14px;
    line-height: 24px;
    border-bottom: 1px solid border-color;
    margin-bottom: 10px;

  .product-imgs
    img
      width: 100%;

</style>
