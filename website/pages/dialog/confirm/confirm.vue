<i18n>
  {
    "en": {
      "eg_base": "Basic Usage",
      "eg_event": "Processing Confirm Event",
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
  <layout title="Confirm" source="dialog/dialog/confirm.vue"  :apiLang="api">
    <div class="components-view">
      <j-code :overview="true" :langSources="code.overview"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">{{ $t('eg_base') }}</div>

      <mod-confirm v-model="show1"  content="确认付款？"></mod-confirm>
      <mod-button :inline="true" v-on:click="show1 = !show1" >{{ $t('cShow') }}</mod-button>

      <j-code :source="code.base"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">{{ $t('eg_event') }}</div>

      <mod-confirm v-model="show2" v-on:click="onClick" content="确认付款？"></mod-confirm>
      <mod-button :inline="true" v-on:click="show2 = !show2" >处理回调</mod-button>

      <j-code :langSources="code.event"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">{{ $t('eg_custom_button') }}</div>

      <mod-button :inline="true" v-on:click="show3 = !show3" >{{ $t('cShow') }}</mod-button>

      <mod-confirm v-model="show3" content="确认付款？" :btnOk="'付款'" :btnNo="'不买了'"
          :btnOkStyle="buttonOkStyle" :btnNoStyle="buttonNoStyle">

      </mod-confirm>

      <j-code :langSources="code.button"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">{{ $t('eg_slot') }}</div>

      <mod-button :inline="true" v-on:click="show4 = !show4" >{{ $t('cShow') }}</mod-button>

      <mod-confirm v-model="show4" content="确认付款？">
        <div class="custom-title" slot="title">
          自定义标题
        </div>

        <div class="custom-footer" slot="footer">
          <a mod-no href="javascript:void(0)">cancel</a>
          <a mod-ok href="javascript:void(0)">ok</a>
        </div>
      </mod-confirm>

      <j-code :langSources="code.slot"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">{{ $t('eg_api') }}</div>

      <mod-button :inline="true" v-on:click="showConfirm" >API调用</mod-button>

      <j-code :source="code.api"></j-code>
    </div>

  </layout>
</template>

<script>
  import Layout from '../../common/common_layout'
  import code from './confirm.ch'
  import apiZh from './confirm.zh.api.md'
  import apiEn from './confirm.en.api.md'

  export default {
    data () {
      return {
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        code: code,

        api: {
          en: apiEn,
          zh: apiZh
        },

        buttonOkStyle: {
          border: '1px solid #ff5a00',
          backgroundColor: '#fff',
          color: '#ff5a00',
          borderRadius: 0
        },

        buttonNoStyle: {
          border: '1px solid #ccc',
          backgroundColor: '#fff',
          color: '#ccc',
          borderRadius: 0
        },
      }
    },

    methods: {
      onClick (e) {
        this.$jsmod.toast.show({
          content: '点击了：' + (e.result ? '确认' : '取消')
        });
      },

      showConfirm () {
        let self = this;

        this.$jsmod.confirm.show({
          content: 'api 显示的确认窗',
          onClick (e) {
            self.$jsmod.toast.show({
              content: '点击了：' + (e.result ? '确认' : '取消')
            });
          }
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
      margin-left: 10px;

</style>
