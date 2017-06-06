<template>
  <div class="jsmod-popover" :style="layoutStyle">
    <div ref="target" class="jsmod-popover-target">
      <slot></slot>
    </div>

    <transition v-bind:name="useFade ? 'jsmod-transition-popover' : 'jsmod-mask-none'">
      <div v-show="canShow" ref="content" class="jsmod-popover-content" :style="[contentStyle]">
        <slot name="content"></slot>
        <span v-if="arrow" :style="arrowStyle" class="jsmod-popover-arrow">
          <span :style="arrowInnerStyle" class="jsmod-popover-arrow-inner"></span>
        </span>
      </div>
    </transition>
  </div>

</template>


<script>
  import PopoverMixin from '../utils/popover.mixin';

  export default {
    mixins: [ PopoverMixin ],

    props: {
      background: {
        type: [String, Boolean],
        default: '#fff'
      },

      useFade: {
        type: Boolean,
        default: true
      },

      arrow: {
        type: Boolean,
        default: true,
      },

      arrowColor: {
        type: String,
        default: '#fff'
      },

      arrowBorderColor: {
        type: String,
        default: '#ccc'
      },

      arrowSize: {
        type: Number,
        default: 10
      }
    },

    watch: {
      canShow () {
        this.canShow && this.$nextTick(() => {
          this.fixArrow();
        })
      },

      targetType () {
        this.canShow && this.$nextTick(() => {
          this.fixArrow();
        })
      }
    },

    updated () {
      this.canShow && this.$nextTick(() => {
        this.fixArrow();
      });
    },

    data () {
      return {
        arrowPosition: {
          left: 0,
          top: 0
        }
      }
    },

    mounted () {
      this.canShow && this.$nextTick(() => {
        this.fixArrow();
      });
    },

    methods: {
      fixArrow () {
        if (!this.arrow) {
          return;
        }

        let position;
        let targetTypeArr = this.getTargetArr();

        let horizontalFun = function (pos, type, typeT) {
          if (type == typeT && type !== undefined) {
            if (type == 'left') {
              pos.left = bounds.width - rect.width;
            } else {
              pos.left = 0;
            }
            return;
          }

          if (type === undefined || type == "left" || type == "right" || type == "center") {
            if (type == "left") {
              pos.left += bounds.width / 5;
            }

            if (type == "right") {
              pos.left -= bounds.width / 5;
            }
          } else {
            throw new RangeError("second targetType error");
          }

          // 第三个定位参数
          if (typeT === undefined || typeT == "left" || typeT == "right" || typeT == "center") {
            if (typeT == "left") {
              pos.left += bounds.width / 2;
            }

            if (typeT == "right") {
              pos.left -= bounds.width / 2;
            }
          } else {
            throw new RangeError("third targetType error");
          }

          return pos;
        }

        let verticalFun = function (pos, type, typeT) {
          if (type == typeT && type !== undefined) {
            if (type == 'top') {
              pos.top = bounds.height - rect.height;
            } else {
              pos.top = 0;
            }
            return;
          }

          if (type === undefined || type == "bottom" || type == "top" || type == "center") {
            if (type == "bottom") {
              pos.top -= bounds.height / 5;
            }

            if (type == "top") {
              pos.top += bounds.height / 5;
            }
          } else {
            throw new RangeError("second targetType error");
          }

          // 第三个定位参数
          if (typeT === undefined || typeT == "bottom" || typeT == "top" || typeT == "center") {
            if (typeT == "bottom") {
              pos.top -= bounds.height / 2;
            }

            if (typeT == "top") {
              pos.top += bounds.height / 2;
            }
          } else {
            throw new RangeError("third targetType error");
          }

          return pos;
        }

        let rect = {
          width: this.arrowSize,
          height: this.arrowSize,
          left: 0,
          top: 0
        };

        let bounds = this.getBounds(this.$refs.content);

        switch (targetTypeArr[0]) {
          case "top":
            position = {top: bounds.height, left: bounds.width /2 - rect.width / 2};
            horizontalFun(position, targetTypeArr[1], targetTypeArr[2])
            break;
          case "right":
            position = {top: bounds.height /2 - rect.height / 2, left: -rect.width};
            verticalFun(position, targetTypeArr[1], targetTypeArr[2]);
            break;
          case "bottom":
            position = {top: -rect.width, left: bounds.width /2 - rect.width / 2};
            horizontalFun(position, targetTypeArr[1], targetTypeArr[2])
            break;
          case "left":
            position = {top: bounds.height /2 - rect.height / 2, left: bounds.width};
            verticalFun(position, targetTypeArr[1], targetTypeArr[2]);
            break;
        }

        this.arrowPosition.left = position.left;
        this.arrowPosition.top = position.top;
      }
    },

    computed: {
      contentStyle () {
        let obj = {};
        let arrowOffset = {
          top: 0,
          left: 0
        }

        // 有 arrow 时需要计算偏移
        if (this.arrow) {
          let targetTypeArr = this.getTargetArr();

          switch (targetTypeArr[0]) {
            case "top":
              arrowOffset.top = -this.arrowSize / 2;
              break;
            case "right":
              arrowOffset.left = +this.arrowSize / 2;
              break;
            case "bottom":
              arrowOffset.top = +this.arrowSize / 2;
              break;
            case "left":
              arrowOffset.left = -this.arrowSize / 2;
              break;
          }
        }

        obj.left = (this.position.left + arrowOffset.left) + 'px';
        obj.top = (this.position.top + arrowOffset.top) + 'px';


        if (this.background) {
          obj.background = this.background;
        }

        return obj;
      },

      arrowStyle () {
        let obj = {};
        let targetTypeArr = this.getTargetArr();

        obj.left = this.arrowPosition.left + 'px';
        obj.top = this.arrowPosition.top + 'px';

        switch (targetTypeArr[0]) {
          case "top":
            obj.borderTopColor = this.arrowBorderColor;
            break;
          case "right":
            obj.borderRightColor = this.arrowBorderColor;
            break;
          case "bottom":
            obj.borderBottomColor = this.arrowBorderColor;
            break;
          case "left":
            obj.borderLeftColor = this.arrowBorderColor;
            break;
        }

        obj.borderWidth = this.arrowSize / 2 + 'px';

        return obj;
      },

      arrowInnerStyle () {
        let obj = {};
        let targetTypeArr = this.getTargetArr();

        switch (targetTypeArr[0]) {
          case "top":
            obj.borderTopColor = this.arrowColor;
            obj.left = -(this.arrowSize / 2) + 'px';
            obj.top = -(this.arrowSize / 2 + 2) + 'px';
            break;
          case "right":
            obj.borderRightColor = this.arrowColor;
            obj.left = -(this.arrowSize / 2 - 2) + 'px';
            obj.top = -(this.arrowSize / 2) + 'px';
            break;
          case "bottom":
            obj.borderBottomColor = this.arrowColor;
            obj.left = -(this.arrowSize / 2) + 'px';
            obj.top = -(this.arrowSize / 2 - 2) + 'px';
            break;
          case "left":
            obj.borderLeftColor = this.arrowColor;
            obj.left = -(this.arrowSize / 2 + 2) + 'px';
            obj.top = -(this.arrowSize / 2) + 'px';
            break;
        }

        obj.borderWidth = (this.arrowSize / 2) + 'px';

        return obj;
      }
    }
  }
</script>


<style lang="stylus">
  .jsmod-popover
    position: relative;

    .jsmod-popover-content
      position: absolute;
      z-index: 1;

    .jsmod-popover-arrow,
    .jsmod-popover-arrow-inner
      content: "";
      display: block;
      width: 0;
      height: 0;
      border-style: solid;
      border-color: transparent;
      position: absolute;

</style>
