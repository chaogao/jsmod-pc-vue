<template>
  <layout title="Toast" source="dialog/toast.vue">
    <div class="button-wrap">
      <mod-toast v-model="show1" content="默认样式弹窗"></mod-toast>
      <mod-toast v-model="show2" type="loading"></mod-toast>
      <mod-toast v-model="show3" type="success"></mod-toast>
      <mod-toast v-model="show4" type="error"></mod-toast>

      <div class="button-groups">
        <mod-button :inline="true" v-on:click="show1 = !show1" >显示</mod-button>
        <mod-button :inline="true" v-on:click="show2 = !show2" >显示Loading</mod-button>
        <mod-button :inline="true" v-on:click="show3 = !show3" >显示Success</mod-button>
        <mod-button :inline="true" v-on:click="show4 = !show4" >显示Error</mod-button>
      </div>

      <div class="button-groups">
        <mod-button :inline="true" v-on:click="showToast" >API 调用</mod-button>
        <mod-button :inline="true" v-on:click="showToast2" >API 调用并修改实例</mod-button>
        <mod-button :inline="true" v-on:click="showToast3" >监听隐藏</mod-button>
      </div>


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
      }
    },

    methods: {
      showToast () {
        this.$jsmod.toast.show({
          content: 'api 显示的确认窗'
        })
      },

      showToast2 () {
        let toast = this.$jsmod.toast.show({
          type: 'loading'
        });

        setTimeout(() => {
          toast.type = 'success';
          toast.timeout = 2000;
        }, 2000);
      },

      showToast3 () {
        let toast = this.$jsmod.toast.show({
          content: 'api 显示'
        });

        toast.$on('hide', () => {
          this.$jsmod.toast.show({
            content: '刚刚那个隐藏了，我是新的toast'
          })
        })
      }
    },

    components: {
      Layout
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~website/assets/mixin"

  .button-wrap
    .jsmod-button
      margin-bottom: 15px;

  .button-groups
    border-bottom: 1px solid #999;
    padding-top: 10px;

</style>
