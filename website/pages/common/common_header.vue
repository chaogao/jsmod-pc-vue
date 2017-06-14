<template>
  <div class="common-header">
    <span class="title">{{ title }}</span>

    <router-link active-class="router-active" to="/" class="action-home">
      <img src="~website/assets/logo.jpeg" />
    </router-link>

    <div class="lang-wrap">
      <a v-on:click="changeLang('en')" href="javascript:void(0)" :class="{'lang-item': true, 'lang-active': lang == 'en'}">En</a>
      <a v-on:click="changeLang('zh')" href="javascript:void(0)" :class="{'lang-item': true, 'lang-active': lang == 'zh'}">中文</a>
    </div>


  </div>
</template>

<script>
export default {
  name: 'common-header',
  props: ['title', 'hideBack', 'logout'],
  data () {
    return {
      'lang': this.$i18n.locale
    }
  },
  methods: {
    changeLang (lang) {
      this.$i18n.locale = lang;
      this.lang = lang;
    },
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

    .lang-wrap
      position: absolute;
      right: -130px;
      top: 130px;
      height: 30px;
      line-height: 30px;

      .lang-item
        display: block;
        float: left;
        padding: 5px 10px;
        border: 1px solid main-color;
        width: 50px;
        text-align: center;
        color: #999;

        &.lang-active
          color: #fff;
          background: main-color;

        &:first-child
          border-right: none;


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
