<template>
  <layout title="Popover" source="popover/popover.vue">
    <div class="components-view">
      <div class="view-title">基础实例</div>

      <mod-popover target-type="right, top, center">
        <mod-button :inline="true" >鼠标点击</mod-button>

        <div class="my-content" slot="content">
          hello jsmod
        </div>
      </mod-popover>

      <mod-popover trigger="hover" target-type="bottom">
        <mod-button :inline="true">鼠标划过</mod-button>

        <div class="my-content" slot="content">
          hello jsmod
        </div>
      </mod-popover>
    </div>


    <div class="components-view">
      <div class="view-title">各个位置信息</div>

      <div class="view-tip">
        targetType 参数由三个字段组成，每个字段可选值有：'top', 'bottom', 'left', 'right', 'center'(center可以省略)。</br>
        例如：第一个值选择了 'top'，表示在目标元素上方，第二个值选择了 'left' 表示在目标元素的左上角，第三个元素选择了 'right' 表示在左上角的右侧
      </div>

      <div class="select-wrap">
        <span>点击相应的位置，设置 targetType </span>

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

        <div class="target-result">当前 TargetType 为：{{ targetType }}</div>

        <mod-popover :targetType="targetType" trigger="manual" :value="true">
          <div class="custom-target"></div>

          <div class="my-content" slot="content">
            {{ targetType }}
          </div>
        </mod-popover>
      </div>

    </div>

    <div class="components-view">
      <div class="view-title">角标相关设置</div>

      <mod-popover trigger="hover" :arrow="false">
        <mod-button :inline="true" >不使用角标</mod-button>

        <div class="my-content" slot="content">
          hello jsmod
        </div>
      </mod-popover>

      <mod-popover trigger="hover" target-type="top" :arrowSize="30" arrow-color="#4ad1c6" arrow-border-color="#e41b23">
        <mod-button :inline="true">自定义角标样式</mod-button>

        <div class="my-content-color" slot="content">
          hello jsmod
        </div>
      </mod-popover>
    </div>


    <div class="components-view">
      <div class="view-title">Hover Dealy</div>

      <mod-popover trigger="hover" :showDelay="1000">
        <mod-button :inline="true" >移入1s后显示</mod-button>

        <div class="my-content" slot="content">
          hello jsmod
        </div>
      </mod-popover>

      <mod-popover trigger="hover" :hideDelay="1000">
        <mod-button :inline="true" >移出1s后隐藏</mod-button>

        <div class="my-content" slot="content">
          hello jsmod
        </div>
      </mod-popover>
    </div>

    <div class="components-view">
      <div class="view-title">显示|隐藏事件</div>

      <mod-popover target-type="bottom" :offset="{top: -1}" :arrow="false" trigger="hover" v-on:onShow="show = 1" v-on:onHide="show = 0">
        <a :class="{'my-order': true, 'active': show}" href="javascript:void(0)">
          我的订单 <i class="iconjsmod iconjsmod-xiangxia2"></i>
        </a>

        <div class="my-content no-border" slot="content">
          hello jsmod
        </div>
      </mod-popover>
    </div>

    <div class="components-view">
      <div class="view-title">设置偏移</div>

      <mod-popover target-type="top" :offset="{top: -10, left: 50}" trigger="hover">
        <mod-button :inline="true" >移入</mod-button>

        <div class="my-content" slot="content">
          hello jsmod
        </div>
      </mod-popover>
    </div>


    <div class="components-view">
      <div class="view-title">内容动态载入（自动更新位置）</div>

      <mod-popover target-type="top"   v-on:onShow="loadData">
        <mod-button :inline="true" >点击</mod-button>

        <div :class="{'my-loading': true, 'loaded': !!loadedData}" slot="content">
          <div v-if="loadedData">
            <div class="data-item" v-for="item in loadedData">
              <div class="data-name">{{ item.name }}</div>
              <div class="data-desc">{{ item.desc }}</div>
            </div>
          </div>
        </div>
      </mod-popover>
    </div>


    <div class="components-view">
      <div class="view-title">手动控制 popover 显示|隐藏</div>

      <div class="view-tip">使用 v-model 绑定显示|隐藏状态</div>

      <mod-popover target-type="top" v-model="show2" trigger="manual">
        <mod-button :inline="true" @click="show2 = true">点击显示</mod-button>

        <div class="my-content" slot="content">
          <a href="javascript:void(0)" @click="show2 = false">关闭</a>
        </div>
      </mod-popover>
    </div>


    <div class="components-view">
      <div class="view-title">不使用背景</div>

      <mod-popover :background="false" trigger="click"  :arrow="false" :offset="{left: -110}">
        <mod-button >点击显示</mod-button>

        <mod-image slot="content" :width="260" :height="405" src="https://oajua4pqj.qnssl.com/o_1bhj8vas16rk1ffc1jhj1uhc13sg7.png"></mod-image>
      </mod-popover>
    </div>


  </layout>
</template>

<script>
  import Layout from '../common/common_layout';

  export default {
    data () {
      return {
        current: 0,
        PAGE_TYPE: this.$jsmod.pagination.PAGE_TYPE,
        targetType: 'top',
        show: 0,
        show2: false,
        loadedData: null
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
