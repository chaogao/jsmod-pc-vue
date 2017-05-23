<template>
  <div class="jsmod-carousel">
    <div class="jsmod-carousel-swiper" :style="{height: calcHeight}">
      <slot></slot>
    </div>

    <slot name="ext"></slot>
  </div>
</template>


<script>
  import Swiper from '@/components/utils/swiper'

  export default {
    props: {
      height: {
        type: Number,
        default: 200
      },
      ratio: {
        type: Number
      },
      direction: {
        type: String,
        default: 'horizontal'
      },
      loop: {
        type: Boolean,
        default: false
      },
      interval: {
        type: Number,
        default: 0
      },
      threshold: {
        type: Number,
        default: 50
      },
      duration: {
        type: Number,
        default: 300
      },
      current: {
        type: Number,
        default: 0
      },
      preventScrollY: {
        type: Boolean,
        default: true
      },
      value: {
        type: [Number, String],
        default: 0
      },
      fade: {
        type: Boolean,
        default: false
      },
    },

    mounted () {
      this.$nextTick(() => {
        this.createSwiper(this.currentInner);
      });

      this.childrenLength = this.$children.length;

      this.getOffsetWidth();
      this.onEvents();

      this.$watch('childrenLength', () => {
        this.createSwiper(this.currentInner);
      });
    },

    destroyed () {
      this.offEvents();
    },

    created () {
      // 以设置的 current 值为准
      this.currentInner = this.current || this.value;
    },

    updated () {
      this.childrenLength = this.$children.length;
    },

    data () {
      return {
        currentInner: 0,
        childrenLength: 0,
        offsetWidth: 0
      }
    },

    methods: {
      onResize () {
        this.getOffsetWidth();
      },

      offEvents () {
        window.removeEventListener('resize', this.onResize);
      },

      onEvents () {
        window.addEventListener('resize', this.onResize);
      },

      getOffsetWidth () {
        this.offsetWidth = this.$el.offsetWidth;
      },

      pre () {
        this.swiper && this.swiper.pre();
      },

      next () {
        this.swiper && this.swiper.next();
      },

      createSwiper (idx) {
        let self = this;

        this.swiper && this.swiper.destroy();
        this.swiper = new Swiper({
          container: this.$el,
          direction: this.direction,
          loop: this.loop,
          interval: this.interval,
          threshold: this.threshold,
          duration: this.duration,
          height: this.calcHeight,
          preventScrollY: this.preventScrollY,
          useFade: this.fade
        }).on('swiped', (prev, index) => {
          self.currentInner = index;
          self.$emit('swiped', {
            index: self.currentInner
          });
        });

        if (idx && idx > 0) {
          // debugger;
          this.swiper.go(idx, {
            duration: 'none'
          });
        }
      }
    },

    watch: {
      currentInner (value) {
        this.$nextTick(() => {
          if (this.swiper.getCurrent() != this.currentInner) {
            this.swiper && this.swiper.go(this.currentInner);
          }
        });

        this.$emit('input', value);
      },

      value (val) {
        this.currentInner = parseInt(val);
      }
    },

    computed: {
      calcHeight () {
        let height = 'auto';

        if (typeof this.height == 'number') {
          height = this.height + 'px';
        } else if (this.height != 'auto') {
          height = this.height;
        }

        if (this.ratio && this.offsetWidth) {
          height = (this.offsetWidth * this.ratio) + 'px';
        }

        return height;
      },
    },

  }

</script>


<style lang="stylus">

  .jsmod-carousel
    position: relative;

    .jsmod-carousel-swiper
      position: relative;
      overflow: hidden;


</style>
