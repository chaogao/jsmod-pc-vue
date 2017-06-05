<template>
  <layout title="Alert" source="dialog/alert.vue">
    <div class="components-view">
      <j-code :overview="true" :source="code.overview"></j-code>
    </div>

    <div class="button-wrap">
      <mod-alert v-model="show1"  content="购买成功！"></mod-alert>
      <mod-button v-on:click="show1 = !show1" >显示</mod-button>

      <mod-alert v-model="show2" v-on:click="onClick" content="购买成功！"></mod-alert>
      <mod-button v-on:click="show2 = !show2" >处理回调</mod-button>

      <mod-alert v-model="show3" title="提示" btn="好贵！" content="购买成功！"></mod-alert>
      <mod-button v-on:click="show3 = !show3" >自定义文案</mod-button>


      <mod-button v-on:click="showAlert" >API调用</mod-button>

    </div>
  </layout>
</template>

<script>
  import Layout from '../common/common_layout';
  import code from './alert.ch';


  export default {
    data () {
      return {
        show1: false,
        show2: false,
        show3: false,
        code: code
      }
    },

    methods: {
      onClick () {
        this.$jsmod.toast.show({
          content: '点击了确认'
        });
      },

      showAlert () {
        this.$jsmod.alert.show({
          content: 'api 显示的确认窗'
        })
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
