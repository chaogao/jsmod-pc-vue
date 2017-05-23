<template>
  <layout title="Confirm" source="dialog/confirm.vue">
    <div class="button-wrap">
      <mod-confirm v-model="show1"  content="确认付款？"></mod-confirm>
      <mod-button v-on:click="show1 = !show1" >显示</mod-button>

      <mod-confirm v-model="show2" v-on:click="onClick" content="确认付款？"></mod-confirm>
      <mod-button v-on:click="show2 = !show2" >处理回调</mod-button>

      <mod-confirm title="奸商" btnOk="我土豪" btnNo="坑你妹了？" v-model="show3" v-on:click="onClick" content="买个老司机？$10w"></mod-confirm>
      <mod-button v-on:click="show3 = !show3" >自定义文案</mod-button>

      <mod-button v-on:click="showConfirm" >API调用</mod-button>


      <mod-confirm title="奸商" btnOk="我土豪" btnNo="坑你妹了？" v-model="show3" v-on:click="onClickBuy" content="买个老司机？$10w"></mod-confirm>
      <mod-button v-on:click="show3 = !show3" >复合例子</mod-button>

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
      }
    },

    methods: {
      onClick (e) {
        this.$jsmod.toast.show({
          content: '点击了：' + (e.type ? '确认' : '取消')
        });
      },

      showConfirm () {
        this.$jsmod.confirm.show({
          content: 'api 显示的确认窗'
        })
      },

      onClickBuy ({ type }) {
        if (type) {
          let toast = this.$jsmod.toast.show({
            type: 'loading',
            content: '购买中'
          });

          setTimeout(() => {
            toast.type = 'default';
            toast.content = '土豪做我爸爸吧！';
            toast.timeout = 1000;
          }, 1000);
        } else {
          this.$jsmod.toast.show({
            content: '活该你码代码'
          });
        }
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

</style>
