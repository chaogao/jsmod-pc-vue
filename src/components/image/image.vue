<template>
  <div v-bind:style="imageStyle" v-bind:class="['jsmod-image']">
    <div v-if="showLoading && isLoading" class="jsmod-image-loading"
        v-bind:style="[{backgroundImage: 'url(' + loadingUrl + ')'}, loadingStyle]"></div>

    <img ref="img" v-if="isLoading || isLoaded"
      v-bind:src="getSrc" :data-src="src" v-bind:class="imgClass" v-bind:style="imageScaleStyle" />

    <slot></slot>

    <div v-if="isError" class="jsmod-image-error">
      <slot name="error">
        <div v-on:click="() => {this.clickReload && this.loadImage()}" class="jsmod-image-error-inner">
          <div class="jsmod-image-error-inner-content">
            <i v-bind:class="['iconjsmod', 'iconjsmod-guanbi2']"></i>加载失败
          </div>
        </div>
      </slot>
    </div>
  </div>

</template>


<script>
  import LOADING_GIF from '@/styles/load.gif'
  import scale from './scale'
  import Blazy from 'blazy'
  import uuid from '../utils/uuid'

  const ALLOW_SCALE_TYPES = ['cover', 'contain', 'none'];

  export default {
    props: {
      src: {
        type: String
      },

      container: String,

      lazy: {
        type: Boolean,
        default: false
      },

      scale: {
        type: String,
        validator (value) {
          return ALLOW_SCALE_TYPES.indexOf(value) > -1;
        },
        default: 'cover'
      },

      width: {
        type: [String, Number],
        default: 'auto'
      },

      height: {
        type: [String, Number],
        default: 'auto'
      },

      ratio: {
        type: Number
      },

      auto: {
        type: Boolean,
        default: true
      },

      clickReload: {
        type: Boolean,
        default: false
      },

      showLoading: {
        type: Boolean,
        default: true
      },

      loadingStyle: {
        type: Object
      },

      loadingUrl: {
        type: String,
        default: LOADING_GIF
      }
    },

    data () {
      return {
        offsetWidth: 0,
        isLoading: 0,
        isLoaded: 0,
        isError: 0,
        imageScaleStyle: {}
      }
    },

    mounted () {
      this.getOffsetWidth();
      this.auto && this.loadImage();
      this.onEvents();
    },

    destroyed () {
      this.offEvents();
    },

    methods: {
      getOffsetWidth () {
        this.offsetWidth = this.$el.offsetWidth;
      },

      onResize () {
        this.getOffsetWidth();
      },

      offEvents () {
        window.removeEventListener('resize', this.onResize);
      },

      onEvents () {
        window.addEventListener('resize', this.onResize);
      },

      initLazy () {
        let id = uuid.created('jsmod-image');
        let self = this;

        this.$refs.img.setAttribute('id', id);

        setTimeout(() => {
          this.bLazy = new Blazy({
            container: this.container,
            selector: `#${id}`,
            success (ele) {
              self.loadSuccess();
            },
            error (ele, msg) {
              self.loaderror();
            }
          });
        }, 100);
      },

      loadImage () {
        this.isLoading = 1;
        this.isLoaded = 0;
        this.isError = 0;

        if (!this.lazy) {
          this.$nextTick(() => {
            let img = this.$refs.img;

            if (img.complete) {
              this.loadSuccess();
            } else {
              img.onload = () => {
                this.loadSuccess()
              }

              img.onerror = () => {
                this.loaderror();
              }
            }
          });
        }

        if (this.lazy) {
          this.$nextTick(() => {
            this.initLazy();
          })
        };
      },

      loadSuccess () {
        this.isLoading = 0;
        this.isLoaded = 1;
        this.setImageScale();
        this.$emit('loaded');
      },

      setImageScale () {
        // 重置以前的设置
        this.imageScaleStyle = {};
        this.$nextTick(() => {
          let width = this.$el.offsetWidth;
          let height = this.$el.offsetHeight;
          if (width == 0 || height == 0) {
            width = parseFloat(this.imageStyle.width);
            height = parseFloat(this.imageStyle.height);
          }

          if (isNaN(width) || isNaN(height)) {
            return;
          }


          this.imageScaleStyle = scale(this.$refs.img, width, height, this.scale);
        });
      },

      loaderror () {
        this.isError = 1;
        this.isLoading = 0;
        this.isLoaded = 0;
      }
    },

    watch: {
      offsetWidth () {
        if (this.isLoaded) {
          this.$nextTick(() => {
            this.setImageScale();
          });
        }
      },

      width () {
        if (this.isLoaded) {
          this.$nextTick(() => {
            this.setImageScale();
          });
        }
      },

      height () {
        if (this.isLoaded) {
          this.$nextTick(() => {
            this.setImageScale();
          });
        }
      },

      ratio () {
        if (this.isLoaded) {
          this.$nextTick(() => {
            this.setImageScale();
          });
        }
      },

      scale () {
        if (this.isLoaded) {
          this.$nextTick(() => {
            this.setImageScale();
          });
        }
      },

      src () {
        this.auto && this.loadImage();
      },

      auto () {
        if (this.auto) {
          this.loadImage();
        }
      }
    },


    computed: {
      imageStyle () {
        let obj = {};

        if (typeof this.width == 'number') {
          obj.width = this.width + 'px';
        } else if (this.width != 'auto') {
          obj.width = this.width;
        }

        if (typeof this.height == 'number') {
          obj.height = this.height + 'px';
        } else if (this.height != 'auto') {
          obj.height = this.height;
        }

        if (this.ratio) {
          if (this.offsetWidth) {
            obj.height = (this.offsetWidth * this.ratio) + 'px';
          }

          if (!isNaN(parseInt(obj.width))) {
            obj.height = (parseInt(obj.width) * this.ratio) + 'px';
          }
        }

        return obj;
      },

      imgClass () {
        return this.isLoading ? 'jsmod-image-img-loading' : 'jsmod-image-img-loaded';
      },

      getSrc () {
        if (this.lazy) {
          return 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
        } else {
          return this.src;
        }
      }
    },

    created () {

    }
  }

</script>


<style lang="stylus">
  @import "../../styles/mixin";

  .jsmod-image
    overflow: hidden;
    position: relative;

    img
      display: block;
      transition: opacity 0.3s;
      max-width: none;
      max-height: none;

    .jsmod-image-img-loading
      opacity: 0;
      width: 100%;
      height: 100%;

    .jsmod-image-img-loaded
      opacity: 1;

  .jsmod-image-loading
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-repeat: no-repeat;
    background-position: center center;

  .jsmod-image-error-inner
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: #efefef;

    .jsmod-image-error-inner-content
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 14px;

      i
        vertical-align: middle;
        margin-right: 5px;



</style>
