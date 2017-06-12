<template>
  <div ref="code" :class="{'code-wrap': true, 'code-wrap-api': api, 'code-wrap-overview': overview}">
    <div v-if="title && !api && !overview" class="code-title"><i class="iconjsmod iconjsmod-jujia"></i>{{ title }}</div>
    <vue-markdown :source="source"></vue-markdown>
  </div>
</template>


<script>
  import hljs from 'hljs';

  hljs.configure({
    languages: ['javascript', 'xml']
  });

  export default {
    props: {
      source: {
        type: String
      },

      title: {
        type: [Boolean, String],
        default: '示例说明（代码）'
      },

      api: {
        type: Boolean,
        default: false
      },

      overview: {
        type: Boolean,
        default: false
      }
    },

    data () {
      return {
        code: ''
      }
    },

    mounted () {
      let $pres = this.$refs.code.querySelectorAll('pre');

      $pres = [...$pres];
      $pres.forEach(($code) => {
        hljs.highlightBlock($code);
      });
    },

    methods: {

    }
  }
</script>


<style lang="stylus">
  @import "~website/assets/mixin"

  .code-wrap
    margin-top: 10px;

    &.code-wrap-api
      padding: 30px;
      padding-top: 10px;

    &.code-wrap-overview
      background: #f9f9f9;
      padding: 10px 15px;
      border: 1px solid main-color;
      border-radius: 5px;
      margin-top: 0;

    .code-title
      font-size: 13px;
      line-height: 30px;

      i
        color: main-color;
        margin-right: 5px;
        vertical-align: middle;

</style>
