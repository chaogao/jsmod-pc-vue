<template>
  <layout title="Introduce">
    
  </layout>
</template>

<script>
  import Layout from './common/common_layout';
  import introduce from './index/introduce.md';
  import introduce2 from './index/introduce2.md';


  export default {
    data () {
      return {
        show1: false,
        show2: false,
        show3: false,
        introduce: introduce,
        introduce2: introduce2
      }
    },

    components: {
      Layout
    }
  }
</script>

<style lang="stylus">
  @import "~website/assets/mixin"

  .button-wrap
    .jsmod-button
      margin-bottom: 15px;

  .custom-title
    color: #ff5a00;
    text-align: left;
    font-weight: bold;
    padding-left: 20px;
    font-size: 16px;

  .custom-footer
    text-align: right;

    a
      color: #ff5a00;
      font-size: 14px;

</style>
