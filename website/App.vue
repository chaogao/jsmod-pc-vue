<template>
  <div id="app" class="components-root">
    <nav class="components-nav">
      <div class="start-group">
        <router-link active-class="router-active" :to="{name: 'index'}" exact>
          <i class="iconjsmod iconjsmod-shouye"></i> 介绍和使用
        </router-link>

        <router-link active-class="router-active" :to="{name: 'log'}">
          <i class="iconjsmod iconjsmod-tongzhi"></i> 更新版本
        </router-link>
      </div>

      <div class="components-group">
        <div class="components-title">弹出层组</div>

        <div class="components-links">
          <router-link active-class="router-active" to="popover">
            ModPopover
            <span class="cn-name">气泡层</span>
          </router-link>

          <router-link active-class="router-active" to="dialog">
            ModDialog
            <span class="cn-name">弹窗</span>
          </router-link>

          <router-link active-class="router-active" to="alert">
            ModAlert
            <span class="cn-name">提示窗</span>
          </router-link>

          <router-link active-class="router-active" to="confirm">
            ModConfirm
            <span class="cn-name">确认窗</span>
          </router-link>

          <router-link active-class="router-active" to="toast">
            ModToast
            <span class="cn-name">轻提示</span>
          </router-link>

        </div>
      </div>

      <div class="components-group">
        <div class="components-title">操作控件组</div>

        <div class="components-links">
          <router-link active-class="router-active" to="button">
            ModButton
            <span class="cn-name">按钮</span>
          </router-link>

          <router-link active-class="router-active" to="tab">
            ModTab
            <span class="cn-name">分栏</span>
          </router-link>


          <router-link active-class="router-active" to="pagination">
            ModPagination
            <span class="cn-name">分页</span>
          </router-link>
        </div>
      </div>

      <div class="components-group">
        <div class="components-title">展示控件组</div>

        <div class="components-links">
          <router-link active-class="router-active" to="image">
            ModImage
            <span class="cn-name">图片</span>
          </router-link>
          <router-link active-class="router-active" to="carousel">
            ModCarousel
            <span class="cn-name">滑动轮播</span>
          </router-link>
          <router-link active-class="router-active" to="banner">
            ModBanner
            <span class="cn-name">广告展示</span>
          </router-link>
        </div>
      </div>
    </nav>

    <div class="components-router-view">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>

</script>

<style lang="stylus">
  @import "~website/assets/mixin"

  .components-root
    display: flex;
    flex-direction: row;

    .components-nav
      width: 230px;
      padding: 0 10px 10px 10px;

      .start-group
        padding: 10px;
        margin-top: 15px;

        a
          display: block;
          padding-bottom: 10px;
          color: #999;
          font-size: 14px;
          margin-bottom: 5px;

          &.router-active
            color: main-color;

          i
            color: main-color;

          &:last-child
            margin-bottom: 10px;


      .components-logo
        display: block;
        margin-bottom: 10px;

        img
          display: block;
          width: 100%;

    .components-router-view
      width: 0;
      flex: 1 1 auto;
      padding-right: 140px;

  .components-group
    padding: 5px;
    margin-bottom: 10px;

    .components-title
      font-size: 14px;
      line-height: 24px;
      border-bottom: 1px solid main-color;
      margin-bottom: 5px;
      padding-left: 9px;

    .components-links
      overflow: hidden;

      a
        display: inline-block;
        font-size: 14px;
        margin: 0 0 10px 0;
        color: main-color;
        display: inline-block;
        width: 100px;
        float: left;
        text-align: center;
        padding: 5px;

        &.router-active
          background: main-color;
          color: #fff;

          .cn-name
            color: #fff;

        .cn-name
          display: block;
          text-align: center;
          color: #999;
          font-size: 12px;

  .components-view
    margin-bottom: 25px;
    padding: 5px;

    .view-title
      color: main-color;
      margin-bottom: 5px;
      font-size: 16px;

    .view-actions
      padding: 5px 0;

    .view-tip
      border: 1px solid #ccc;
      margin-bottom: 10px;
      padding: 10px;
      border-radius: 10px;
</style>
