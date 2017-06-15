<i18n>
  {
    "en": {
      "eg_base": "Basic Usage",
      "eg_event": "Processing Alert Event",
      "eg_event_prevent": "Click Me(Prevent Hide)",
      "eg_custom_button": "Custom Button Style",
      "eg_slot": "Use slot custom the layout of Title, Button",
      "eg_api": "Use API"

    },
    "zh": {
      "eg_base": "基础示例",
      "eg_event": "处理确定点击事件",
      "eg_event_prevent": "点击(阻止默认关闭)",
      "eg_custom_button": "自定义按钮样式",
      "eg_slot": "使用 Slot 自定义标题，按钮的布局",
      "eg_api": "使用API"
    }
  }
</i18n>

<template>
  <layout title="Alert" source="dialog/alert/alert.vue" :apiLang="api">
    <div class="components-view">
      <j-code :overview="true" :langSources="code.overview"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">{{ $t('eg_base') }}</div>

      <mod-button :inline="true" v-on:click="show1 = !show1" >{{ $t('cShow') }}</mod-button>
      <mod-alert v-model="show1"  content="购买成功！"></mod-alert>

      <j-code :source="code.base"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">{{ $t('eg_event') }}</div>

      <mod-button :inline="true" v-on:click="show2 = !show2" >{{ $t('cShow') }}</mod-button>
      <mod-button :inline="true" v-on:click="show2_2 = !show2_2" >{{ $t('eg_event_prevent') }}</mod-button>

      <mod-alert v-model="show2" v-on:click="onClick" content="购买成功！"></mod-alert>
      <mod-alert v-model="show2_2" v-on:click="onClick2" content="无法关闭，请刷新页面！"></mod-alert>

      <j-code :langSources="code.event"></j-code>
    </div>


    <div class="components-view">
      <div class="view-title">{{ $t('eg_custom_button') }}</div>

      <mod-button :inline="true" v-on:click="show3 = !show3" >{{ $t('cShow') }}</mod-button>
      <mod-alert :buttonCustomStyle="buttonStyle" v-model="show3" title="提示" btn="好贵！" content="购买成功！"></mod-alert>


      <j-code :langSources="code.button"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">{{ $t('eg_slot') }}</div>

      <mod-button :inline="true" v-on:click="show4 = !show4" >{{ $t('cShow') }}</mod-button>

      <mod-alert v-model="show4" content="购买成功！">
        <div class="custom-title" slot="title">
          自定义标题
        </div>

        <div class="custom-footer" slot="footer">
          <a mod-confirm href="javascript:void(0)">close</a>
        </div>
      </mod-alert>


      <j-code :langSources="code.slot"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">{{ $t('eg_api') }}</div>

      <mod-button :inline="true" v-on:click="showAlert" >{{ $t('eg_api') }}</mod-button>

      <j-code :source="code.api"></j-code>
    </div>
  </layout>
</template>

<script>
  import Layout from '../../common/common_layout';
  import code from './alert.ch';
  import apiZh from './alert.zh.api.md'
  import apiEn from './alert.en.api.md'

  export default {
    data () {
      return {
        api: {
          en: apiEn,
          zh: apiZh
        },
        show1: false,
        show2: false,
        show2_2: false,
        show3: false,
        show4: false,
        code: code,
        buttonStyle: {
          border: '1px solid #ff5a00',
          backgroundColor: '#fff',
          color: '#ff5a00',
          borderRadius: 0
        }
      }
    },

    methods: {
      onClick () {
        this.$jsmod.toast.show({
          content: '点击了确认'
        });
      },

      onClick2 (e) {
        e.preventDefault();
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

  .custom-title
    color: #ff5a00;
    text-align: left;
    font-weight: bold;
    padding-left: 20px;
    font-size: 16px;

  .custom-footer
    text-align: right;

    a
      color: #ff5a00;
      font-size: 14px;

</style>
