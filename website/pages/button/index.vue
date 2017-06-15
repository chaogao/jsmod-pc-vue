<i18n>
  {
    "en": {
      "eg_base": "Basic Usage: Two Display Three State ",
      "eg_base_block": "Base Button(block)",
      "eg_base_inline": "Base Button(inline)",
      "eg_base_loading": "Loading Button",
      "eg_base_disabled": "Disabled Button",
      "eg_option_style": "Use Option Custom Style",
      "eg_option_style_border": "Border Button",
      "eg_option_style_no_border": "No Border Button",
      "eg_option_style_disabled": "Option For Disabled Status Not Function",
      "eg_styleobj": "Use Style-Object Custom Style"
    },
    "zh": {
      "eg_base": "基础示例：的两种展示, 三种状态",
      "eg_base_block": "基础按钮(block)",
      "eg_base_inline": "基础按钮(inline)",
      "eg_base_loading": "加载中",
      "eg_base_disabled": "禁止使用",
      "eg_option_style": "使用选项自定义样式",
      "eg_option_style_border": "带 Border 按钮",
      "eg_option_style_no_border": "不显示 Border 按钮",
      "eg_option_style_disabled": "配置对 Disabled 状态按钮不起作用",

      "eg_styleobj": "使用样式对象自定义样式"
    }
  }
</i18n>


<template>
  <layout title="Button" source="button/index.vue"  :apiLang="api">
    <div class="components-view">
      <j-code :overview="true" :langSources="code.overview"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">{{ $t('eg_base') }}</div>

      <mod-button class="custom-button">{{ $t('eg_base_block') }}</mod-button>

      <mod-button :inline="true" v-on:click="onClick">{{ $t('eg_base_inline') }}</mod-button>
      <mod-button :inline="true" status="loading" >
        <span slot="loading">{{ $t('eg_base_loading') }}</span>
      </mod-button>
      <mod-button :inline="true" status="disabeld" >{{ $t('eg_base_disabled') }}</mod-button>

      <j-code  :langSources="code.base"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">{{ $t('eg_option_style') }}</div>

      <mod-button :backgroundColor="'#fff'" :borderColor="'#f55a00'" :color="'#f55a00'" :inline="true">{{ $t('eg_option_style_border') }}</mod-button>
      <mod-button :backgroundColor="'#f55a00'"  :color="'#ff'" :inline="true">{{ $t('eg_option_style_no_border') }}</mod-button>
      <mod-button :backgroundColor="'#f55a00'"  :color="'#ff'" :inline="true" status="disabeld">{{ $t('eg_option_style_disabled') }}</mod-button>

      <j-code  :source="code.props"></j-code>
    </div>


    <div class="components-view">
      <div class="view-title">{{ $t('eg_styleobj') }}</div>

      <mod-button :customStyle="customStyle" :inline="true">{{ $t('cShow') }}</mod-button>

      <j-code  :source="code.style"></j-code>
    </div>

  </layout>
</template>

<script>
  import Layout from '../common/common_layout';
  import code from './index.ch';
  import apiZh from './index.zh.api.md'
  import apiEn from './index.en.api.md'

  export default {
    components: {
      Layout
    },

    data () {
      return {
        code: code,
        api: {
          en: apiEn,
          zh: apiZh
        },
        customStyle: {
          borderRadius: 0,
          width: '100px',
          height: '50px',
          lineHeight: '50px',
          padding: 0,
          backgroundColor: '#fa0',
          color: '#fff'
        }
      }
    },

    methods: {
      onClick (index) {
        this.$jsmod.toast.show({
          content: '点我干嘛',
        });
      }
    }
  }
</script>

<style lang="stylus">
  .custom-button
    margin-bottom: 10px;

</style>
