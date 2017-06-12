<template>
  <transition v-bind:name="useMask ? 'jsmod-mask' : 'jsmod-mask-none'">
    <div @click="maskHide" v-show="canShow" :class="[
        'jsmod-mask',
        {'jsmod-mask-none': !useMask},
        direction == 'vertical' ? 'jsmod-layer-vertical' : 'jsmod-layer-horizontal',
        'jsmod-layer-vertical-' + verticalPosition,
        'jsmod-layer-horizontal-' + horizontalPosition
      ]">
      <div v-on:scroll="onScroll" ref="slotContent" :style="layerStyle" :class="['jsmod-layer-content']">
        <div ref="slotInner">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import DialogMixin from '../utils/dialog.mixin';
  import ShowMixin from '../utils/show.mixin';

  export default {
    props: {
      useMask: {
        type: Boolean,
        default: true
      },

      coverScreen: {
        type: Boolean,
        default: false,
      },

      isMaskClickHide: {
        type: Boolean,
        default: true
      },

      direction: {
        type: String,
        default: 'vertical'
      },

      verticalPosition: {
        type: String,
        default: 'bottom'
      },

      horizontalPosition: {
        type: String,
        default: 'left'
      }
    },

    watch: {
      canShow () {
        if (this.canShow) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
      }
    },

    data () {
      return {
        winWidth: window.innerWidth,
        winHeight: window.innerHeight
      }
    },

    updated () {
      this.canShow && this.calcLayout();
    },

    mounted () {
      this.canShow && this.calcLayout();

      this.onEvents();
    },

    destroyed () {
      this.offEvents();
    },

    computed: {
      layerStyle () {
        let obj = {};

        if (this.direction == 'vertical') {
          obj.height = this.calcHeight + 'px';

          if (this.coverScreen) {
            obj.height = this.winHeight + 'px';
          }

          obj.maxHeight = this.winHeight + 'px';
          obj.width = '100%';

          if (this.verticalPosition == 'top') {
            obj.top = 0;
            obj.bottom = 'auto';
          } else {
            obj.top = 'auto';
            obj.bottom = 0;
          }
        } else  {
          obj.width = this.calcWidth + 'px';

          if (this.coverScreen) {
            obj.width = this.winWidth + 'px';
          }

          obj.maxWidth = this.winWidth + 'px';
          obj.height = '100%';

          if (this.horizontalPosition == 'left') {
            obj.left = 0;
            obj.right = 'auto';
          } else {
            obj.left = 'auto';
            obj.right = 0;
          }
        }

        obj.overflow = 'auto'

        return obj;
      }
    },

    methods: {
      onCalced () {},

      onScroll (e) {
        e.stopPropagation();
      },

      offEvents () {
        window.removeEventListener('resize', this.onResize);
      },

      onEvents () {
        window.addEventListener('resize', this.onResize);
      },

      onResize () {
        if (this.canShow) {
          this.calcLayout();
        }

        this.winHeight = window.innerHeight;
        this.winWidth = window.innerWidth;
      },

      maskHide (e) {
        if (!this.isMaskClickHide) {
          return;
        }

        if (e.target.classList.contains('jsmod-mask')) {
          this.canShow = false;
        }
      }
    },

    mixins: [ShowMixin, DialogMixin]
  }

</script>


<style lang="stylus">
  .jsmod-layer-content
    bottom: 0;
    width: 100%;
    background: #fff;
    overflow: hidden;
    position: absolute;
</style>
