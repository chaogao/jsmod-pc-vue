<template>
  <layout title="Button" source="button/index.vue">
    <div class="button-wrap">
      <mod-button v-on:click="onClick(1)" :customStyle="customStyle">按钮</mod-button>
      <mod-button class="custom-button" :customStyle="customStyle">自定义类名</mod-button>

      <mod-button v-on:click="getApi()" :status="btnStatus" :customStyle="customStyle" :border="true">
        获取API
        <span slot="loading">加载中</span>
      </mod-button>

      <mod-button v-on:click="onClick(2)" border="#ff5a00" color="#ff5a00" background-color="#fff" :customStyle="customStyle">自定义颜色按钮</mod-button>

      <mod-button :href="'http://baidu.com'" :customStyle="customStyle">
        跳转到百度
      </mod-button>

      <mod-button :status="'disabeld'" :customStyle="customStyle">禁止</mod-button>

      <div class="button-inline">
        <mod-button :inline="true" :customStyle="customStyle">行内按钮1</mod-button>
        <mod-button :inline="true" :border="true" color="#ff5a00" background-color="#fff"  :customStyle="customStyle">行内按钮2</mod-button>
        <mod-button :inline="true" :customStyle="{backgroundColor: '#f50', marginBottom: '10px'}">行内按钮3</mod-button>
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
        btnStatus: 'default',

        customStyle: {
          marginBottom: '10px'
        }
      }
    },

    methods: {
      onClick (index) {
        this.$jsmod.toast.show({
          content: '按钮' + index,
        });
      },

      getApi () {
        console.log('getapi');
        this.btnStatus = 'loading';

        let loading = this.$jsmod.toast.show({
          type: 'loading'
        });

        setTimeout(() => {
          loading.hide();
          this.btnStatus = 'default';
        }, 1000);
      }
    }
  }
</script>

<style lang="stylus">
  .custom-button
    border-radius: 0!important;
    background: #ff5a00!important;

</style>
