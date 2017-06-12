<template>
  <layout title="Introduce">
    <div class="components-view">
      <j-code :title="false" :source="introduce"></j-code>

      <p>1. 如果是后台产品，只需要显示普通的弹窗</p>
      <mod-alert v-model="show1" content="最普通的弹窗"></mod-alert>
      <mod-button v-on:click="show1 = true" :inline="true">显示</mod-button>

      <p>2. 产品说<code>要统一风格，设计了一个主题配色</code></p>
      <mod-alert v-model="show2" content="主题配置弹窗" :buttonCustomStyle="{color: '#ff5a00', background: '#fff', borderColor: '#ff5a00'}"></mod-alert>
      <mod-button v-on:click="show2 = true" :inline="true">显示</mod-button>

      <p>3. UE设计了新的布局，需要完全自定义标题，按钮</p>
      <mod-alert v-model="show3" content="自定义布局弹窗">
        <div class="custom-title" slot="title">
          标题
        </div>

        <div class="custom-footer" slot="footer">
          <a mod-confirm href="javascript:void(0)">关闭</a>
        </div>
      </mod-alert>
      <mod-button v-on:click="show3 = true" :inline="true">显示</mod-button>

      <j-code :title="false" :source="introduce2"></j-code>

    </div>
  </layout>
</template>

<script>
  import Layout from './common/common_layout';
  import introduce from './index/introduce.md';
  import introduce2 from './index/introduce2.md';


  export default {
    data () {
      return {
        show1: false,
        show2: false,
        show3: false,
        introduce: introduce,
        introduce2: introduce2
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
