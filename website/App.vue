<template>
  <div id="app" class="components-root">
    <nav class="components-nav">
      <router-link to="/" class="components-logo">
        <img src="./assets/logo.jpeg" />
      </router-link>


      <div class="components-group">
        <div class="components-title">弹出层组</div>

        <div class="components-links">
          <router-link to="popover">
            ModPopover
            <span class="cn-name">气泡层</span>
          </router-link>

          <router-link to="dialog">
            ModDialog
            <span class="cn-name">弹窗</span>
          </router-link>

          <router-link to="alert">
            ModAlert
            <span class="cn-name">提示窗</span>
          </router-link>

          <router-link to="confirm">
            ModConfirm
            <span class="cn-name">确认窗</span>
          </router-link>
          
          <router-link to="toast">
            ModToast
            <span class="cn-name">轻提示</span>
          </router-link>

        </div>
      </div>

      <div class="components-group">
        <div class="components-title">操作控件组</div>

        <div class="components-links">
          <router-link to="button">
            ModButton
            <span class="cn-name">按钮</span>
          </router-link>

          <router-link to="tab">
            ModTab
            <span class="cn-name">分栏</span>
          </router-link>


          <router-link to="pagination">
            ModPagination
            <span class="cn-name">分页</span>
          </router-link>
        </div>
      </div>

      <div class="components-group">
        <div class="components-title">展示控件组</div>

        <div class="components-links">
          <router-link to="image">
            ModImage
            <span class="cn-name">图片</span>
          </router-link>
          <router-link to="carousel">
            ModCarousel
            <span class="cn-name">滑动轮播</span>
          </router-link>
          <router-link to="banner">
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
      width: 200px;
      padding: 0 10px 10px 10px;

      .components-logo
        display: block;
        margin-bottom: 10px;

        img
          display: block;
          width: 100%;

    .components-router-view
      flex: 1 1 auto;

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
        width: 85px;
        float: left;
        text-align: center;

        .cn-name
          display: block;
          text-align: center;
          color: #999;
          font-size: 12px;

  .components-view
    margin-bottom: 15px;
    padding: 5px;

    .view-title
      color: main-color;
      margin-bottom: 5px;

    .view-actions
      padding: 5px 0;

    .view-tip
      border: 1px solid #ccc;
      margin-bottom: 10px;
      padding: 10px;
      border-radius: 10px;
</style>
