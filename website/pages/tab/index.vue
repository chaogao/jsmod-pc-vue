<template>
  <layout title="Tab" source="tab/index.vue">
    <div class="components-view">
      <div class="view-title">基础实例，使用默认样式</div>

      <mod-tab v-on:active="onActive">
        <mod-tab-item label="项目A">
          <div class="tab-content">
            这是标签栏目1
            这是标签栏目1
            这是标签栏目1
            这是标签栏目1
            这是标签栏目1
            这是标签栏目1
            这是标签栏目1
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
    </div>

    <div class="components-view">
      <div class="view-title">使用作用域插槽实现自定义样式、设置默认展示的 tab 索引</div>

      <mod-tab v-on:active="onActive" :activeIndex="1" :tabWrapClass="'custom-tab-wrap'" :tabClass="'custom-tab-item'">
        <template slot="tab" scope="props">
          <span :class="{'custom-tab': true, 'custom-tab-active': props.active}">
            {{ props.label }}
          </span>
        </template>
        <mod-tab-item label="项目A">
          <div class="tab-content">
            这是标签栏目1
            这是标签栏目1
            这是标签栏目1
            这是标签栏目1
            这是标签栏目1
            这是标签栏目1
            这是标签栏目1
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
    </div>

    <div class="components-view">
      <div class="view-title">切换tab使用渐变</div>

      <mod-tab v-on:active="onActive" :fade="true">
        <mod-tab-item label="项目A">
          <div class="tab-content">
            这是标签栏目1
            这是标签栏目1
            这是标签栏目1
            这是标签栏目1
            这是标签栏目1
            这是标签栏目1
            这是标签栏目1
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
    </div>
  </layout>
</template>

<script>
  import Layout from '../common/common_layout';

  export default {
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

  .custom-tab-wrap
    display: flex;

    .custom-tab-item
      flex: 1 1 auto;

      .custom-tab
        display: block;
        padding: 10px;
        text-align: center;

        &.custom-tab-active
          border-radius: 20px;
          background: #ff5a00;
          color: #fff;

</style>
