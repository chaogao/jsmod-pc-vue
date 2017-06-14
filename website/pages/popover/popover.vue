<i18n>
  {
    "en": {
      "eg_base": "Basic Usage",
      "eg_targetType": "Popover Position",
      "eg_targetType_result": "Current TargetType is:",
      "eg_arrow": "Arrow Config",
      "eg_arrow_no": "No Arrow",
      "eg_arrow_custom": "Custom Arrow Style",
      "eg_delay_show": "Mouseenter 1s Show",
      "eg_delay_hide": "Mouseout 1s Hide",
      "eg_event": "Display Events",
      "eg_offset": "Set Offset",
      "eg_load": "Auto Update Position",
      "eg_manual": "Manual control display",
      "eg_background": "Use custom background style"
    },
    "zh": {
      "eg_base": "基础示例",
      "eg_targetType": "设置 Popover 的位置",
      "eg_targetType_result": "当前 TargetType:",
      "eg_arrow": "角标配置",
      "eg_arrow_no": "不使用角标",
      "eg_arrow_custom": "自定义角标",
      "eg_delay_show": "移入1s后显示",
      "eg_delay_hide": "移出1s后隐藏",
      "eg_event": "显示|隐藏事件",
      "eg_offset": "设置偏移",
      "eg_load": "内容改变自动更新位置",
      "eg_manual": "手动控制显示状态",
      "eg_background": "使用自定义背景"
    }
  }
</i18n>

<template>
  <layout title="Popover" source="popover/popover.vue" :apiLang="api">
    <div class="components-view">
      <j-code :overview="true" :langSources="code.overview"></j-code>
    </div>


    <div class="components-view">
      <div class="view-title">{{ $t('eg_base') }}</div>

      <div class="view-demo" id="demo-base">
        <mod-popover >
          <mod-button :inline="true" >{{ $t('cShow') }}</mod-button>

          <div class="my-content" slot="content">
            hello jsmod
          </div>
        </mod-popover>

        <mod-popover trigger="hover" target-type="bottom">
          <mod-button :inline="true">{{ $t('hShow') }}</mod-button>

          <div class="my-content" slot="content">
            hello jsmod
          </div>
        </mod-popover>
      </div>

      <j-code :source="code.base"></j-code>

    </div>


    <div class="components-view">
      <div class="view-title">{{ $t('eg_targetType') }}</div>

      <j-code :title="false" :langSources="code.position"></j-code>

      <div class="select-wrap">
        <div class="target-wrap">
          <div class="target-box">

              <a href="javascript:void(0)" @click="setTargetType" class="type-top">top</a>
              <a href="javascript:void(0)" @click="setTargetType" class="type-top-left">top,left</a>
              <a href="javascript:void(0)" @click="setTargetType" class="type-top-left-right">top,left,right</a>

              <a href="javascript:void(0)" @click="setTargetType" class="type-top-right">top,right</a>
              <a href="javascript:void(0)" @click="setTargetType" class="type-top-right-left">top,right,left</a>


              <a href="javascript:void(0)" @click="setTargetType" class="type-bottom">bottom</a>
              <a href="javascript:void(0)" @click="setTargetType" class="type-bottom-left">bottom,left</a>
              <a href="javascript:void(0)" @click="setTargetType" class="type-bottom-left-right">bottom,left,right</a>

              <a href="javascript:void(0)" @click="setTargetType" class="type-bottom-right">bottom,right</a>
              <a href="javascript:void(0)" @click="setTargetType" class="type-bottom-right-left">bottom,right,left</a>


              <a href="javascript:void(0)" @click="setTargetType" class="type-left">left</a>
              <a href="javascript:void(0)" @click="setTargetType" class="type-left-top">left,top</a>
              <a href="javascript:void(0)" @click="setTargetType" class="type-left-top-bottom">left,top,bottom</a>

              <a href="javascript:void(0)" @click="setTargetType" class="type-left-bottom">left,bottom</a>
              <a href="javascript:void(0)" @click="setTargetType" class="type-left-bottom-top">left,bottom,top</a>


              <a href="javascript:void(0)" @click="setTargetType" class="type-right">right</a>
              <a href="javascript:void(0)" @click="setTargetType" class="type-right-top">right,top</a>
              <a href="javascript:void(0)" @click="setTargetType" class="type-right-top-bottom">right,top,bottom</a>

              <a href="javascript:void(0)" @click="setTargetType" class="type-right-bottom">right,bottom</a>
              <a href="javascript:void(0)" @click="setTargetType" class="type-right-bottom-top">right,bottom,top</a>
          </div>

        </div>

        <div class="target-result"><b> {{ $t('eg_targetType_result') }} </b>{{ targetType }}</div>

        <mod-popover :targetType="targetType" trigger="manual" :value="true">
          <div class="custom-target"></div>

          <div class="my-content" slot="content">
            {{ targetType }}
          </div>
        </mod-popover>
      </div>

    </div>

    <div class="components-view">
      <div class="view-title">{{ $t('eg_arrow') }}</div>

      <mod-popover trigger="hover" :arrow="false">
        <mod-button :inline="true" >{{ $t('eg_arrow_no') }}</mod-button>

        <div class="my-content" slot="content">
          hello jsmod
        </div>
      </mod-popover>

      <mod-popover trigger="hover" target-type="top" :arrowSize="30" arrow-color="#4ad1c6" arrow-border-color="#e41b23">
        <mod-button :inline="true">{{ $t('eg_arrow_custom') }}</mod-button>

        <div class="my-content-color" slot="content">
          hello jsmod
        </div>
      </mod-popover>

      <j-code :source="code.arrow"></j-code>

    </div>


    <div class="components-view">
      <div class="view-title">Hover Dealy</div>

      <mod-popover trigger="hover" :showDelay="1000">
        <mod-button :inline="true" >{{ $t('eg_delay_show') }}</mod-button>

        <div class="my-content" slot="content">
          hello jsmod
        </div>
      </mod-popover>

      <mod-popover trigger="hover" :hideDelay="1000">
        <mod-button :inline="true" >{{ $t('eg_delay_hide') }}</mod-button>

        <div class="my-content" slot="content">
          hello jsmod
        </div>
      </mod-popover>

      <j-code :source="code.hover"></j-code>
    </div>

    <div class="components-view">
      <div class="view-title">{{ $t('eg_event') }}</div>

      <mod-popover target-type="bottom" :offset="{top: -1}" :arrow="false" trigger="hover" v-on:onShow="show = 1" v-on:onHide="show = 0">
        <a :class="{'my-order': true, 'active': show}" href="javascript:void(0)">
          我的订单 <i class="iconjsmod iconjsmod-xiangxia2"></i>
        </a>

        <div class="my-content no-border" slot="content">
          hello jsmod
        </div>
      </mod-popover>

      <j-code :source="code.event"></j-code>

    </div>

    <div class="components-view">
      <div class="view-title">{{ $t('eg_offset') }}</div>

      <mod-popover target-type="top" :offset="{top: -10, left: 50}" trigger="hover">
        <mod-button :inline="true" >{{ $t('hShow') }}</mod-button>

        <div class="my-content" slot="content">
          hello jsmod
        </div>
      </mod-popover>

      <j-code :source="code.offset"></j-code>

    </div>


    <div class="components-view">
      <div class="view-title">{{ $t('eg_load') }}</div>

      <mod-popover target-type="top"   v-on:onShow="loadData">
        <mod-button :inline="true" >{{ $t('cShow') }}</mod-button>

        <div :class="{'my-loading': true, 'loaded': !!loadedData}" slot="content">
          <div v-if="loadedData">
            <div class="data-item" v-for="item in loadedData">
              <div class="data-name">{{ item.name }}</div>
              <div class="data-desc">{{ item.desc }}</div>
            </div>
          </div>
        </div>
      </mod-popover>

      <j-code :source="code.updatePos"></j-code>

    </div>


    <div class="components-view">
      <div class="view-title">{{ $t('eg_manual') }}</div>

      <mod-popover target-type="top" v-model="show2" trigger="manual">
        <mod-button :inline="true" @click="show2 = true">{{ $t('cShow') }}</mod-button>

        <div class="my-content" slot="content">
          <a href="javascript:void(0)" @click="show2 = false">close</a>
        </div>
      </mod-popover>

      <j-code :source="code.manual"></j-code>
    </div>


    <div class="components-view">
      <div class="view-title">{{ $t('eg_background') }}</div>

      <mod-popover :background="false" trigger="click"  :arrow="false" :offset="{left: -110}">
        <mod-button >{{ $t('cShow') }}</mod-button>

        <mod-image slot="content" :width="260" :height="405" src="https://oajua4pqj.qnssl.com/o_1bhj8vas16rk1ffc1jhj1uhc13sg7.png"></mod-image>
      </mod-popover>

      <j-code :source="code.background"></j-code>
    </div>


  </layout>
</template>

<script>
  import Layout from '../common/common_layout';
  import code from './popover.code';

  import apiZh from './popover.zh.api.md'
  import apiEn from './popover.en.api.md'


  export default {
    data () {
      return {
        targetType: 'top',
        show: 0,
        show2: false,
        loadedData: null,
        code: code,
        api: {
          en: apiEn,
          zh: apiZh
        }
      }
    },
    methods: {
      loadData () {
        setTimeout(() => {
          this.loadedData = [
            {
              name: 'CDLIST',
              desc: 'CMS系统快速构建列表应用'
            },
            {
              name: 'JSMOD MOBILE',
              desc: '桌面端面向用户产品的 vue 组件库'
            },
            {
              name: 'JSMOD PC',
              desc: '移动端面向用户产品的 vue 组件库'
            }
          ];
        }, 500);
      },

      setTargetType (e) {
        let activeEl = e.target;

        this.activeEl && this.activeEl.classList.remove('active');
        activeEl.classList.add('active');

        this.activeEl = activeEl;

        this.targetType = activeEl.innerText;

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

  .my-content
    width: 100px;
    padding: 10px 0;
    text-align: center;
    border: 1px solid #ccc;

    &.no-border
      border-top: none;

  .my-loading
    min-width: 100px;
    min-height: 40px;
    border: 1px solid border-color;
    background: url('~website/assets/load.gif') center center no-repeat;
    padding: 15px;

    &.loaded
      width: 200px;
      background: #fff;

    .data-item
      border-bottom: 1px solid main-color;
      margin-bottom: 10px;
      padding-bottom: 10px;

      &:last-child
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;

      .data-name
        font-weight: bold;

      .data-desc
        font-size: 12px;



  .my-content-color
    width: 200px;
    padding: 10px 0;
    text-align: center;
    border: 1px solid main-color;
    background: blue-color;
    color: #333;
    border-radius: 10px;

  .select-wrap
    margin-bottom: 50px;

  .target-wrap
    padding: 50px;
    position: relative;
    padding-left: 100px;

    .target-box
      width: 300px;
      height: 300px;
      border: 1px solid #999;
      background: #fff;
      position: relative;
      margin-bottom: 50px;
      background: url('~website/assets/logo.jpeg') no-repeat center center;

      a
        position: absolute;
        width: 100px;
        height: 40px;
        bottom: 0;
        background: #efefef;
        border: 1px solid #ccc;
        text-align: center;
        line-height: 40px;
        opacity: 0.5;
        color: #333;
        transition: opacity 0.3s;
        font-size: 12px;

        &:hover
          opacity: 1;
          z-index: 2;
          border: 1px solid #999;

        &.active
          opacity: 1;
          z-index: 1;
          border: 1px solid main-color;
          color: #fff;
          background: main-color;


      .type-top
        top: -40px;
        left: 100px;

      .type-top-left-right
        top: -40px;
        left: 0;

      .type-top-left
        top: -40px;
        left: -50px;

      .type-top-right
        top: -40px;
        left: 250px;

      .type-top-right-left
        top: -40px;
        left: 200px;


      .type-bottom
        bottom: -40px;
        left: 100px;

      .type-bottom-left-right
        bottom: -40px;
        left: 0;

      .type-bottom-left
        bottom: -40px;
        left: -50px;

      .type-bottom-right
        bottom: -40px;
        left: 250px;

      .type-bottom-right-left
        bottom: -40px;
        left: 200px;

      .type-left
        top: 130px;
        left: -100px;

      .type-left-top
        top: -20px;
        left: -100px;

      .type-left-top-bottom
        top: 0;
        left: -100px;

      .type-left-bottom
        bottom: -20px;
        left: -100px;

      .type-left-bottom-top
        bottom: 0;
        left: -100px;

      .type-right
        top: 130px;
        right: -100px;

      .type-right-top
        top: -20px;
        right: -100px;

      .type-right-top-bottom
        top: 0;
        right: -100px;

      .type-right-bottom
        bottom: -20px;
        right: -100px;

      .type-right-bottom-top
        bottom: 0;
        right: -100px;

  .custom-target
    width: 150px;
    height: 150px;
    background: blue-color;
    border: 1px solid #efefef;

  .target-result
    margin-bottom: 50px;

  .my-order
    display: inline-block;
    border: 1px solid border-color;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;

    i
      transition: transform 0.3s;
      display: inline-block;

    &.active i
      transform: rotate(180deg);


</style>
