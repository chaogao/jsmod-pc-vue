<template>
  <div :class="{
    'jsmod-tab-item': true,
    'jsmod-tab-item-fade': fade,
    'jsmod-tab-item-active': this.active
  }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ModTabItem',

    props: {
      label: {
        type: String
      },

      data: {
        type: Object
      }
    },

    data () {
      return {
        height: 0,
        fade: this.$parent.fade,
        active: false,
        idx: null
      }
    },

    created () {
      let self = this;

      this.$parent.$on('active', (e) => {
        self.checkActive(e.activeIndex);
      });
    },

    methods: {
      checkActive (activeIndex) {
        if (this.idx == activeIndex) {
          this.active = true;
        } else {
          this.active = false;
        }
      }
    },

    updated () {
      let height = this.$el.offsetHeight;

      if (height != this.height) {
        this.height = height;
        this.$parent.updateHeight();
      }
    },

    mounted () {
      this.height = this.$el.offsetHeight
      this.$parent.updateTabs(this.height);
    }
  }
</script>


<style lang="stylus">
  .jsmod-tab-item
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    
    &.jsmod-tab-item-fade
      position: relative;
      height: 0;
      overflow: hidden;
      
      &.jsmod-tab-item-active
        display: block;
        overflow: auto;
        height: auto;

</style>
