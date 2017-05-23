<template>
  <div class="common-footer">
    JSMOD-PC <i class="iconjsmod iconjsmod-tequanzhuanshu"></i>
  </div>
</template>

<script>

export default {
  name: 'common-footer',
  props: ['source']
}
</script>

<style scoped lang="stylus">

  @import "~website/assets/mixin"


  .common-footer
    background: #fff;
    text-align: center;
    font-family: fantasy;
    font-size: 16px;
    border-top: 1px solid border-color;
    width: 200px;
    padding-top: 10px;
    margin: 0 auto;

    i
      vertical-align: middle;

</style>
