<template>
  <layout title="Pagination" source="pagination/index.vue"  v-on:api="showApi = true">
    <div class="components-view">
      <j-code  :source="code.overview" :overview="true"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">基础实例</div>

      <mod-pagination v-model="current" :pageCount="10" v-on:active="onActive"></mod-pagination>

      <mod-button :inline="true" v-on:click="current = 2">点击跳转到第三页</mod-button>

      <j-code  :source="code.base"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">修改显示分页的个数</div>

      <mod-pagination :maxShowPage="5" :pageCount="10"></mod-pagination>

      <j-code  :source="code.count"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">特殊页数时的展示情况（1，2，3 页）</div>

      <mod-pagination :pageCount="1" ></mod-pagination>
      <mod-pagination :pageCount="2" ></mod-pagination>
      <mod-pagination :pageCount="3" ></mod-pagination>

      <j-code  :source="code.spec"></j-code>

    </div>

    <div class="components-view">
      <div class="view-title">使用作用域插槽实现自定义样式</div>

      <mod-pagination v-model="current"  :pageCount="10" v-on:active="onActive">
        <template slot="item" scope="props" >
          <a v-if="props.type == PAGE_TYPE.PAGE || props.type == PAGE_TYPE.CURRENT"
            href="javasciprt:void(0)" :class="{'custom-link': true, 'custom-link-active': props.type == PAGE_TYPE.CURRENT}">{{ props.page + 1 }}</a>

          <a href="javasciprt:void(0)" class="custom-link" v-if="props.type == PAGE_TYPE.FIRST">首</a>
          <a href="javasciprt:void(0)" class="custom-link" v-if="props.type == PAGE_TYPE.LAST">尾</a>


          <a href="javasciprt:void(0)" :class="{'custom-link': true, 'disabled': props.disabled }" v-if="props.type == PAGE_TYPE.PRE">上</a>
          <a href="javasciprt:void(0)" :class="{'custom-link': true, 'disabled': props.disabled }" v-if="props.type == PAGE_TYPE.NEXT">下</a>

          <a v-if="props.type == PAGE_TYPE.OMIT">...</a>

        </template>
      </mod-pagination>

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
        current: 0,
        showApi: false,
        PAGE_TYPE: this.$jsmod.pagination.PAGE_TYPE,
        api: api
      }
    },
    methods: {
      onActive (e) {
        this.$jsmod.toast.show({
          content: '启动了：' + (e.page + 1) + '页'
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

  .custom-link
    border-radius: 15px;
    font-size: 12px;
    background: #efefef;
    color: #333;
    display: inline-block;
    width: 30px;
    line-height: 30px;
    text-align: center;

    &.custom-link-active
      background: main-color;
      color: #fff;

    &.disabled
      color: #999;
      background: #fff;

</style>
