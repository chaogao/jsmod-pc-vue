<template>
  <transition v-bind:name="useMask ? 'jsmod-mask' : 'jsmod-mask-none'">
    <div v-on:touchmove="onTouchmove" v-show="canShow" @click="maskHide" :class="['jsmod-mask', {'jsmod-mask-none': !useMask}]">
      <div ref="htmlContent" :style="htmlStyle" :class="['jsmod-dialog-html', {'jsmod-dialog-html-none-mask': !useMask}]">
        <div ref="headerContent" class="jsmod-dialog-solt-header">
          <slot name="header"><div v-html="header"></div></slot>
        </div>
        <div ref="soltContent" class="jsmod-dialog-solt-content" :style="{overflow: 'auto', backgroundColor: soltBackgroundColor}">
          <div ref="soltContentInner">
            <slot><div v-html="html"></div></slot>
          </div>
        </div>
        <div ref="footerContent" >
          <slot name="footer"><div v-html="footer"></div></slot>
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
      html: String,
      header: String,
      footer: String,
      useMask: {
        type: Boolean,
        default: true
      },
      isScrollAble: {
        type: Boolean,
        default: false
      },
      isMaskClickHide: {
        type: Boolean,
        default: true,
      },
      width: {
        type: [String, Number]
      },
      height: {
        type: [String, Number]
      },
      offsetTop: {
        type: Number,
        default: 0
      },
      backgroundColor: {
        type: String,
        default: '#fff'
      },
      soltBackgroundColor: {
        type: String,
        default: '#fff'
      }
    },

    data () {
      return {
        calcWidth: undefined,
        calcHeight: undefined
      }
    },

    mounted () {
      this.canShow && this.calc();
      this.onEvents();
    },

    destroyed () {
      this.offEvents();
    },

    updated () {
      if (this.canShow) {
        this.$nextTick(() => {
          this.calc();
        });
      }
    },

    computed: {
      htmlStyle () {
        let obj = {
          backgroundColor: this.backgroundColor
        }

        obj.width = this.calcWidth + 'px';
        obj.height = this.calcHeight + 'px';

        return obj;
      }
    },

    methods: {
      maskHide (e) {
        if (!this.isMaskClickHide) {
          return;
        }
        if (e.target.classList.contains('jsmod-mask')) {
          this.canShow = false;
        }
      },

      onTouchmove (e) {
        if (e.target == e.currentTarget) {
          !this.isScrollAble && e.preventDefault();
        }
      },

      hide () {
        this.canShow = false;
      },

      offEvents () {
        window.removeEventListener('resize', this.onResize);
      },

      onEvents () {
        window.addEventListener('resize', this.onResize);
      },

      onResize () {
        this.calcTimer && clearTimeout(this.calcTimer);

        this.calcTimer = setTimeout(() => {
          this.canShow && this.calc();
        }, 1000);
      },

      getWidth () {
        if (this.width && typeof this.width == 'number') {
          return this.width;
        }

        if (this.width && typeof this.width == 'string' && /%$/.test(this.width)
          && !isNaN(parseInt(this.width))) {

          return (window.innerWidth * parseInt(this.width) / 100);
        }

        return undefined;
      },

      getHeight () {
        if (this.height && typeof this.height == 'number') {
          return this.height;
        }

        if (this.height && typeof this.height == 'string' && /%$/.test(this.height)
          && !isNaN(parseInt(this.height))) {

          return (window.innerHeight * parseInt(this.height) / 100);
        }

        return undefined;
      },

      calc () {
        this.calcWidth = this.getWidth();
        this.calcHeight = this.getHeight();
      }
    },

    mixins: [DialogMixin, ShowMixin],
  }
</script>


<style lang="stylus">
  .jsmod-dialog-html
    position: absolute;
    left: 50%;
    top: 50%;
    max-height: 90%;
    max-width: 90%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transform: translate(-50%, -50%);

    &.jsmod-dialog-html-none-mask
      position: fixed;
      z-index: 19999;


  .jsmod-dialog-solt-content
    overflow: hidden;
    position: relative;
    flex: 1 1 auto;

</style>
