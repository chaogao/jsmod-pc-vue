<template>
  <layout title="Button" source="button/index.vue"  :api="api">
    <div class="components-view">
      <j-code :overview="true" :source="code.overview"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">基础示例：按钮的两种展示，三种状态</div>

      <mod-button class="custom-button">默认（block）</mod-button>

      <mod-button :inline="true" v-on:click="onClick">默认</mod-button>
      <mod-button :inline="true" status="loading" >
        <span slot="loading">加载中</span>
      </mod-button>
      <mod-button :inline="true" status="disabeld" >禁止使用</mod-button>

      <j-code  :source="code.base"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">使用参数配置样式</div>

      <mod-button :backgroundColor="'#fff'" :borderColor="'#f55a00'" :color="'#f55a00'" :inline="true">显示border</mod-button>
      <mod-button :backgroundColor="'#f55a00'"  :color="'#ff'" :inline="true">隐藏border</mod-button>
      <mod-button :backgroundColor="'#f55a00'"  :color="'#ff'" :inline="true" status="disabeld">disabeld配置颜色不起作用</mod-button>

      <j-code  :source="code.base"></j-code>
    </div>


    <div class="components-view">
      <div class="view-title">使用样式对象</div>

      <mod-button :customStyle="customStyle" :inline="true">自由配置</mod-button>

      <j-code  :source="code.style"></j-code>
    </div>

  </layout>
</template>

<script>
  import Layout from '../common/common_layout';
  import code from './index.ch';
  import api from './index.ch.api.md'

  export default {
    components: {
      Layout
    },

    data () {
      return {
        code: code,
        api: api,
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
