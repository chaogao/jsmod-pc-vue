<i18n>
  {
    "en": {
      "eg_base": "Basic Usage",
      "eg_base_three": "Go 3 Page",
      "eg_show_page": "Change Display Page-Label Count",
      "eg_spec": "Special page-label number of display",
      "eg_scoped": "Customize Style by scoped style"
    },
    "zh": {
      "eg_base": "基础示例",
      "eg_base_three": "跳转到第三页",
      "eg_show_page": "修改显示分页的个数",
      "eg_spec": "特殊页数时的展示情况（1，2，3 页）",
      "eg_scoped": "使用作用域插槽实现自定义样式"

    }
  }
</i18n>
<template>
  <layout title="Pagination" source="pagination/index.vue"  :apiLang="api">
    <div class="components-view">
      <j-code  :langSources="code.overview" :overview="true"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">{{ $t('eg_base') }}</div>

      <mod-pagination v-model="current" :pageCount="10" v-on:active="onActive"></mod-pagination>

      <mod-button :inline="true" v-on:click="current = 2">{{ $t('eg_base_three') }}</mod-button>

      <j-code  :source="code.base"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">{{ $t('eg_show_page') }}</div>

      <mod-pagination :maxShowPage="5" :pageCount="10"></mod-pagination>

      <j-code  :langSources="code.count"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">{{ $t('eg_spec') }}</div>

      <mod-pagination :pageCount="1" ></mod-pagination>
      <mod-pagination :pageCount="2" ></mod-pagination>
      <mod-pagination :pageCount="3" ></mod-pagination>

      <j-code  :source="code.spec"></j-code>

    </div>

    <div class="components-view">
      <div class="view-title">{{ $t('eg_scoped') }}</div>

      <mod-pagination v-model="current"  :pageCount="10" v-on:active="onActive">
        <template slot="item" scope="props" >
          <a v-if="props.type == PAGE_TYPE.PAGE || props.type == PAGE_TYPE.CURRENT"
            href="javascript:void(0)" :class="{'custom-link': true, 'custom-link-active': props.type == PAGE_TYPE.CURRENT}">{{ props.page + 1 }}</a>

          <a href="javascript:void(0)" class="custom-link" v-if="props.type == PAGE_TYPE.FIRST">首</a>
          <a href="javascript:void(0)" class="custom-link" v-if="props.type == PAGE_TYPE.LAST">尾</a>


          <a href="javascript:void(0)" :class="{'custom-link': true, 'disabled': props.disabled }" v-if="props.type == PAGE_TYPE.PRE">上</a>
          <a href="javascript:void(0)" :class="{'custom-link': true, 'disabled': props.disabled }" v-if="props.type == PAGE_TYPE.NEXT">下</a>

          <a v-if="props.type == PAGE_TYPE.OMIT">...</a>

        </template>
      </mod-pagination>

      <j-code  :langSources="code.slot"></j-code>
    </div>
  </layout>
</template>

<script>
  import Layout from '../common/common_layout'
  import code from './index.ch'
  import apiZh from './index.zh.api.md'
  import apiEn from './index.en.api.md'

  export default {
    data () {
      return {
        code: code,
        current: 0,
        PAGE_TYPE: this.$jsmod.pagination.PAGE_TYPE,
        api: {
          en: apiEn,
          zh: apiZh
        }
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
