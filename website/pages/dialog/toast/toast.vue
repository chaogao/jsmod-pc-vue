<template>
  <layout title="Toast" source="dialog/toast.vue" :api="api">
    <div class="components-view">
      <j-code :overview="true" :source="code.overview"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">基础实例</div>

      <mod-toast v-model="show1" content="默认样式弹窗"></mod-toast>
      <mod-toast v-model="show2" type="loading"></mod-toast>
      <mod-toast v-model="show3" type="success"></mod-toast>
      <mod-toast v-model="show4" type="error"></mod-toast>

      <mod-button :inline="true" v-on:click="show1 = !show1" >显示</mod-button>
      <mod-button :inline="true" v-on:click="show2 = !show2" >显示Loading</mod-button>
      <mod-button :inline="true" v-on:click="show3 = !show3" >显示Success</mod-button>
      <mod-button :inline="true" v-on:click="show4 = !show4" >显示Error</mod-button>

      <j-code  :source="code.base"></j-code>

    </div>

    <div class="components-view">
      <div class="view-title">API操作</div>

      <mod-button :inline="true" v-on:click="showToast" >API 调用</mod-button>
      <mod-button :inline="true" v-on:click="showToast2" >API 调用并修改实例</mod-button>
      <mod-button :inline="true" v-on:click="showToast3" >监听隐藏</mod-button>

      <j-code  :source="code.api"></j-code>

    </div>

  </layout>
</template>

<script>
  import Layout from '../../common/common_layout';
  import code from './toast.ch';
  import api from './toast.ch.api.md'

  export default {
    data () {
      return {
        api: api,
        code: code,
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

          setTimeout(() => {
            toast.hide();
          }, 1000);
        }, 2000);
      },

      showToast3 () {
        let toast = this.$jsmod.toast.show({
          content: 'api 显示',
          onHide: () => {
            this.$jsmod.toast.show({
              content: '刚刚那个隐藏了，我是新的toast'
            })
          }
        });
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
