<template>
  <div class="jsmod-tab">
    <div :class="['jsmod-tab-card', tabContainerClass]">
      <div :class="['jsmod-tab-card-item', tabClass]"  v-for="item, idx in tabs" v-on:click="onClick(idx)" v-on:mouseenter="onHover(idx)" v-on:mouseleave="onLeave">
        <slot name="tab"
            :label="item.label"
            :data="item.data"
            :active="idx == currentInner">
          <div :class="{'jsmod-tab-card-item-default': true, 'jsmod-tab-card-item-default-active': idx == currentInner}">
            {{ item.label }}
          </div>
        </slot>
      </div>
    </div>

    <div ref="container" :style="containerStyle" :class="['jsmod-tab-container', 'jsmod-carousel-swiper', containerClass]">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Swiper from '@/components/utils/swiper'

  export default {
    props: {
      activeIndex: {
        type: Number,
        default: 0
      },

      trigger: {
        type: String,
        default: 'click'
      },

      hoverDelay: {
        type: Number,
        default: 100
      },

      tabClass: {
        type: String
      },

      tabContainerClass: {
        type: String
      },

      containerClass: {
        type: String
      },

      fade: {
        type: Boolean,
        default: false
      }
    },

    data () {
      return {
        tabs: [],
        currentInner: this.activeIndex,
        height: 0
      }
    },

    computed: {
      containerStyle () {
        let obj = {};

        obj.height = this.height + 'px';

        return obj;
      }
    },

    mounted () {
      this.updateHeight();
      this.onEvents();
    },

    destroyed () {
      this.offEvents();
    },

    watch: {
      currentInner: {
        handler () {
          this.$nextTick(() => {
            this.updateHeight();
          });

          this.toIndex(this.currentInner);

          this.$emit('active', {
            activeIndex: this.currentInner
          });
        },

        immediate: false
      }
    },

    methods: {
      onResize () {
        this.updateHeight();
      },

      offEvents () {
        window.removeEventListener('resize', this.onResize);
      },

      onEvents () {
        window.addEventListener('resize', this.onResize);
      },

      getTabs () {
        return this.$children.filter((item) => {
          return item.$options.name == 'ModTabItem';
        })
      },

      onClick (idx) {
        if (this.trigger == 'click') {
          this.currentInner = idx;
        }
      },

      onLeave () {
        this.hoverTimer && clearTimeout(this.hoverTimer);
      },

      onHover (idx) {
        if (this.trigger == 'hover') {
          this.hoverTimer && clearTimeout(this.hoverTimer);

          this.hoverTimer = setTimeout(() => {
            this.currentInner = idx;
          }, this.hoverDelay);
        }
      },

      getTabsIndex (idx) {
        let tabs = this.getTabs();

        return tabs[idx];
      },

      updateHeight () {
        let tab = this.getTabsIndex(this.currentInner);

        this.height = tab.$el.offsetHeight;
      },

      createSwiper (idx) {
        let self = this;

        this.swiper && this.swiper.destroy();
        this.swiper = new Swiper({
          container: this.$el,
          direction: 'horizontal',
          item: '.jsmod-tab-item',
          interval: 0,
          height: 'auto',
          useFade: this.fade
        }).on('swiped', (prev, index) => {
          self.currentInner = index;
        });

        if (idx && idx > 0) {
          this.swiper.go(idx, {
            duration: 'none'
          });
        }
      },

      toIndex (idx) {
        this.swiper && this.swiper.go(idx);
      },

      updateTabs (height) {
        let tabs = this.getTabs();

        this.tabs = [];

        tabs.forEach((item, idx) => {
          this.tabs.push({
            label: item.label,
            data: item.data || {}
          });

          item.idx = idx;
          item.checkActive(this.currentInner);
        });

        this.createSwiper(this.currentInner);
      }
    }

  }
</script>

<style lang="stylus">
  @import "../../styles/mixin";

  .jsmod-tab-container
    position: relative;
    overflow: hidden;

  .jsmod-tab-card-item
    display: inline-block;
    cursor: pointer;

    .jsmod-tab-card-item-default
      padding: 5px 10px;
      border-bottom: 1px solid #fff;

      &.jsmod-tab-card-item-default-active
        border-bottom: 1px solid link-color;
        color: link-color;

</style>
