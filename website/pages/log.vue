<template>
  <layout title="Change Log">
    <div class="components-view">
      <j-code :title="false"  :langSources="log"></j-code>
    </div>

  </layout>
</template>

<script>
  import Layout from './common/common_layout'
  import logZh from './update/log.zh.md'
  import logEn from './update/log.en.md'

  export default {
    components: {
      Layout
    },
    data () {
      return {
        log: {
          en: logEn,
          zh: logZh
        }
      }
    }
  }
</script>

<style lang="stylus">
  @import "~website/assets/mixin"


</style>
