<template>
  <layout title="Confirm" source="dialog/confirm.vue"  v-on:api="showApi = true">
    <div class="components-view">
      <j-code :overview="true" :source="code.overview"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">基础实例</div>

      <mod-confirm v-model="show1"  content="确认付款？"></mod-confirm>
      <mod-button :inline="true" v-on:click="show1 = !show1" >显示</mod-button>

      <j-code :source="code.base"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">处理点击回调</div>

      <mod-confirm v-model="show2" v-on:click="onClick" content="确认付款？"></mod-confirm>
      <mod-button :inline="true" v-on:click="show2 = !show2" >处理回调</mod-button>

      <j-code :source="code.event"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">自定义按钮样式（文案）</div>

      <mod-button :inline="true" v-on:click="show3 = !show3" >显示</mod-button>

      <mod-confirm v-model="show3" content="确认付款？" :btnOk="'付款'" :btnNo="'不买了'"
          :btnOkStyle="buttonOkStyle" :btnNoStyle="buttonNoStyle">

      </mod-confirm>

      <j-code :source="code.button"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">使用 slot 自定义标题，按钮</div>

      <mod-button :inline="true" v-on:click="show4 = !show4" >
        显示
      </mod-button>

      <mod-confirm v-model="show4" content="确认付款？">
        <div class="custom-title" slot="title">
          自定义标题
        </div>

        <div class="custom-footer" slot="footer">
          <a mod-no href="javascript:void(0)">取消</a>
          <a mod-ok href="javascript:void(0)">确认</a>
        </div>
      </mod-confirm>

      <j-code :source="code.slot"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">使用 api 调用</div>

      <mod-button :inline="true" v-on:click="showConfirm" >API调用</mod-button>

      <j-code :source="code.api"></j-code>
    </div>

    <mod-layer direction="horizontal" width="80%" v-model="showApi">
      <j-code  :api="true" :source="api"></j-code>
    </mod-layer>
  </layout>
</template>

<script>
  import Layout from '../common/common_layout';
  import code from './confirm.ch';
  import api from './confrim.ch.api.md'


  export default {
    data () {
      return {
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        showApi: false,
        code: code,
        api: api,

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
