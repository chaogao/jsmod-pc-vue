<i18n>
  {
    "en": {
      "step1": "1. in cms product, needs to show normal style alert",
      "step2": "2. for better looks, we need a uniform theme color",
      "step3": "3. designer provide custom alert layout, we need custom title(buttons) style and position"
    },
    "zh": {
      "step1": "1.如果是后台产品，只需要显示普通的弹窗",
      "step2": "2.产品说<code>要统一风格，设计了一个主题配色</code>",
      "step3": "3.UE设计了新的布局，需要完全自定义标题，按钮"
    }
  }
</i18n>

<template>
  <layout title="Introduce && Usage">
    <div class="components-view">
      <j-code :title="false" :langSources="introduce"></j-code>
      <p>{{ $t('step1') }}</p>
      <mod-alert v-model="show1" content="最普通的弹窗"></mod-alert>
      <mod-button v-on:click="show1 = true" :inline="true">{{ $t('cShow') }}</mod-button>

      <p v-html="$t('step2')"></p>
      <mod-alert v-model="show2" content="主题配置弹窗" :buttonCustomStyle="{color: '#ff5a00', background: '#fff', borderColor: '#ff5a00'}"></mod-alert>
      <mod-button v-on:click="show2 = true" :inline="true">{{ $t('cShow') }}</mod-button>

      <p>{{ $t('step3') }}</p>
      <mod-alert v-model="show3" content="自定义布局弹窗">
        <div class="custom-title" slot="title">
          标题
        </div>

        <div class="custom-footer" slot="footer">
          <a mod-confirm href="javascript:void(0)">关闭</a>
        </div>
      </mod-alert>
      <mod-button v-on:click="show3 = true" :inline="true">{{ $t('cShow') }}</mod-button>

      <j-code :title="false" :langSources="introduce2"></j-code>

    </div>
  </layout>
</template>

<script>
  import Layout from './common/common_layout';

  import introduceEn from './index/introduce.en.md';
  import introduceZh from './index/introduce.zh.md';

  import introduce2En from './index/introduce2.en.md';
  import introduce2Zh from './index/introduce2.zh.md';


  export default {
    data () {
      return {
        show1: false,
        show2: false,
        show3: false,
        introduce: {
          en: introduceEn,
          zh: introduceZh
        },
        introduce2: {
          en: introduce2En,
          zh: introduce2Zh
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
