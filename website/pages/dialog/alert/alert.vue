<template>
  <layout title="Alert" source="dialog/alert.vue" :api="api">
    <div class="components-view">
      <j-code :overview="true" :source="code.overview"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">基础实例</div>

      <mod-button :inline="true" v-on:click="show1 = !show1" >显示</mod-button>
      <mod-alert v-model="show1"  content="购买成功！"></mod-alert>

      <j-code :source="code.base"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">处理点击事件</div>

      <mod-button :inline="true" v-on:click="show2 = !show2" >显示</mod-button>
      <mod-button :inline="true" v-on:click="show2_2 = !show2_2" >显示（阻止关闭）</mod-button>

      <mod-alert v-model="show2" v-on:click="onClick" content="购买成功！"></mod-alert>
      <mod-alert v-model="show2_2" v-on:click="onClick2" content="无法关闭，请刷新页面！"></mod-alert>

      <j-code :source="code.event"></j-code>
    </div>


    <div class="components-view">
      <div class="view-title">自定义按钮样式（文案）</div>

      <mod-button :inline="true" v-on:click="show3 = !show3" >显示</mod-button>
      <mod-alert :buttonCustomStyle="buttonStyle" v-model="show3" title="提示" btn="好贵！" content="购买成功！"></mod-alert>


      <j-code :source="code.button"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">使用 slot 自定义标题，按钮</div>

      <mod-button :inline="true" v-on:click="show4 = !show4" >
        显示
      </mod-button>

      <mod-alert v-model="show4" content="购买成功！">
        <div class="custom-title" slot="title">
          自定义标题
        </div>

        <div class="custom-footer" slot="footer">
          <a mod-confirm href="javascript:void(0)">关闭</a>
        </div>
      </mod-alert>


      <j-code :source="code.slot"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">使用 API 进行调用</div>

      <mod-button :inline="true" v-on:click="showAlert" >API调用</mod-button>

      <j-code :source="code.api"></j-code>
    </div>
  </layout>
</template>

<script>
  import Layout from '../../common/common_layout';
  import code from './alert.ch';
  import api from './alert.ch.api.md'

  export default {
    data () {
      return {
        api: api,
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
