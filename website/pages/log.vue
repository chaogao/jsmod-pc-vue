<template>
  <layout title="Update Logs">
    <div class="components-view">
      <j-code :title="false"  :source="log"></j-code>
    </div>

  </layout>
</template>

<script>
  import Layout from './common/common_layout'
  import log from './update/log.md'

  export default {
    components: {
      Layout
    },
    data () {
      return {
        log: log
      }
    }
  }
</script>

<style lang="stylus">
  @import "~website/assets/mixin"


</style>
