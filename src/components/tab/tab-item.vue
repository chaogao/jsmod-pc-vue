<template>
  <div class="jsmod-tab-item">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ModTabItem',

    props: {
      label: {
        type: String
      }
    },

    mounted () {
      this.$parent.updateTabs(this.$el.offsetHeight);
    }
  }
</script>


<style lang="stylus">
  .jsmod-tab-item
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;

</style>
