<i18n>
  {
    "en": {
      "eg_base": "Basic Usage",
      "eg_api": "Use API",
      "eg_api_base": "Create",
      "eg_api_modify": "Create && Modify",
      "eg_api_event": "Listen Events"
    },
    "zh": {
      "eg_base": "基础示例",
      "eg_api": "使用API",
      "eg_api_base": "创建",
      "eg_api_modify": "创建并修改",
      "eg_api_event": "监听事件"
    }
  }
</i18n>

<template>
  <layout title="Toast" source="dialog/toast/toast.vue" :apiLang="api">
    <div class="components-view">
      <j-code :overview="true" :langSources="code.overview"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">{{ $t('eg_base') }}</div>

      <mod-toast v-model="show1" content="默认样式弹窗"></mod-toast>
      <mod-toast v-model="show2" type="loading"></mod-toast>
      <mod-toast v-model="show3" type="success"></mod-toast>
      <mod-toast v-model="show4" type="error"></mod-toast>

      <mod-button :inline="true" v-on:click="show1 = !show1" >{{ $t('cShow') }}</mod-button>
      <mod-button :inline="true" v-on:click="show2 = !show2" >{{ $t('cShow') }} Loading</mod-button>
      <mod-button :inline="true" v-on:click="show3 = !show3" >{{ $t('cShow') }} Success</mod-button>
      <mod-button :inline="true" v-on:click="show4 = !show4" >{{ $t('cShow') }} Error</mod-button>

      <j-code  :langSources="code.base"></j-code>

    </div>

    <div class="components-view">
      <div class="view-title">{{ $t('eg_api') }}</div>

      <mod-button :inline="true" v-on:click="showToast" >{{ $t('eg_api_base') }}</mod-button>
      <mod-button :inline="true" v-on:click="showToast2" >{{ $t('eg_api_modify') }}</mod-button>
      <mod-button :inline="true" v-on:click="showToast3" >{{ $t('eg_api_event') }}</mod-button>

      <j-code  :langSources="code.api"></j-code>

    </div>

  </layout>
</template>

<script>
  import Layout from '../../common/common_layout';
  import code from './toast.ch';
  import apiZh from './toast.zh.api.md'
  import apiEn from './toast.en.api.md'

  export default {
    data () {
      return {
        api: {
          en: apiEn,
          zh: apiZh
        },
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
