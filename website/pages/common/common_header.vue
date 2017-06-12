<template>
  <div class="common-header">
    <span class="title">{{ title }}</span>

    <router-link active-class="router-active" to="/" class="action-home">
      <img src="~website/assets/logo.jpeg" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'common-header',
  props: ['title', 'hideBack', 'logout'],
  methods: {
    goBack () {
      this.$router.go(-1);
    },

    goHome () {
      this.$router.replace({
        name: 'Index'
      })
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~website/assets/mixin";

  .common-header
    height: 45px;
    padding: 14px 15px;
    text-align: left;
    color: #fff;
    position: relative;
    color: main-color;
    border-left: 5px solid main-color;
    margin-bottom: 5px;

    .title
      font-size: 16px;


    .action-home
      position: absolute;
      right: -130px;
      top: 0;
      height: 45px;
      line-height: 45px;

      img
        width: 105px;


    .action-back
      position: absolute;
      padding: 0 10px;
      left: 0;
      top: 0;
      height: 45px;
      line-height: 45px;

      i
        font-size: 18px;
        margin-right: 5px;
</style>
