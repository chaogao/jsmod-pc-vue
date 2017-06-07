<template>
  <layout title="Tab" source="tab/index.vue" v-on:api="showApi = true">
    <div class="components-view">
      <div class="view-title">基础实例</div>

      <mod-tab>
        <mod-tab-item label="项目A(click)">
          <div class="tab-content">
            <p>这是标签栏目1</p>
          </div>
        </mod-tab-item>

        <mod-tab-item label="项目B(click)">
          <div class="tab-content">
            <p>这是标签栏目2</p>
            <p>这是标签栏目2</p>
          </div>
        </mod-tab-item>
      </mod-tab>

      <mod-tab trigger="hover">
        <mod-tab-item label="项目A(hover)">
          <div class="tab-content">
            <p>这是标签栏目1</p>
          </div>
        </mod-tab-item>

        <mod-tab-item label="项目B(hover)">
          <div class="tab-content">
            <p>这是标签栏目2</p>
            <p>这是标签栏目2</p>
          </div>
        </mod-tab-item>
      </mod-tab>

      <j-code  :source="code.base"></j-code>

    </div>

    <div class="components-view">
      <div class="view-title">切换tab使用渐变，监听启用</div>

      <mod-tab v-on:active="onActive" :fade="true">
        <mod-tab-item label="项目A">
          <div class="tab-content">
            <p>这是标签栏目1</p>
            <p>这是标签栏目1</p>
            <p>这是标签栏目1</p>
          </div>
        </mod-tab-item>

        <mod-tab-item label="项目B">
          <div class="tab-content">
            <p>这是标签栏目2</p>
            <p>这是标签栏目2</p>
            <p>这是标签栏目2</p>
            <p>这是标签栏目2</p>
            <p>这是标签栏目2</p>
          </div>
        </mod-tab-item>
      </mod-tab>

      <j-code  :source="code.fade"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">使用作用域插槽实现自定义样式</div>

      <mod-tab :tabContainerClass="'custom-container-tab'"  :containerClass="'custom-container'">
        <template slot="tab" scope="props">
          <span :class="{'custom-tab': true, 'custom-tab-active': props.active}">
            {{ props.label }}
            <span class="badge" v-if="props.data.count">{{ props.data.count }}</span>
          </span>
        </template>

        <mod-tab-item label="项目A" :data="{count: 2}">
          <div class="tab-content">
            <p>这是标签栏目1</p>
            <p>这是标签栏目1</p>
            <p>这是标签栏目1</p>
            <mod-image :width="300" :ratio="0.8" src="https://oajua4pqj.qnssl.com/o_1bfba3u05hj917a9bmkeeq184dc.jpeg"></mod-image>
          </div>
        </mod-tab-item>

        <mod-tab-item label="项目B">
          <div class="tab-content">
            <p>这是标签栏目2</p>
            <p>这是标签栏目2</p>
            <p>这是标签栏目2</p>
          </div>
        </mod-tab-item>
      </mod-tab>

      <j-code  :source="code.slot"></j-code>

    </div>

    <mod-layer direction="horizontal" width="80%" v-model="showApi">
      <j-code  :api="true" :source="api"></j-code>
    </mod-layer>

  </layout>
</template>

<script>
  import Layout from '../common/common_layout'
  import code from './index.ch'
  import api from './index.ch.api.md'

  export default {
    data () {
      return {
        code: code,
        api: api,
        showApi: false
      }
    },
    
    methods: {
      onActive (e) {
        this.$jsmod.toast.show({
          content: '启动了tab：' + e.activeIndex
        });
      }
    },
    components: {
      Layout
    }
  }
</script>

<style lang="stylus">
  @import "~website/assets/mixin"

  .tab-content
    padding: 10px;

  .custom-container
    border: 1px solid main-color;

  .custom-container-tab
    padding-left: 10px;

    .custom-tab
      margin-bottom: -1px;
      display: inline-block;
      margin-right: 10px;
      padding: 10px;
      text-align: center;
      border: 1px solid main-color;
      background: #fff;

      .badge
        display: inline-block;
        background: main-color;
        color: #fff;
        border-radius: 15px;
        line-height: 20px;
        width: 20px;
        text-align: center;


      &.custom-tab-active
        border-bottom: 1px solid #fff;
        position: relative;
        z-index: 1;
        color: main-color;

</style>
