// 弹出层基础控件
import ShowMixin from './show.mixin'


export default {
  mixins: [ShowMixin],

  computed: {
    layoutStyle () {
      let obj = {};

      if (this.inline) {
        obj.display = 'inline-block';
      }

      return obj;
    }
  },

  props: {
    inline: {
      type: Boolean,
      default: true
    },

    trigger: {
      validator (value) {
        return ['click', 'hover', 'manual'].indexOf(value) > -1;
      },

      default: 'click'
    },

    showDelay: {
      type: Number,
      default: 200
    },

    hideDelay: {
      type: Number,
      default: 200
    },

    offset: {
      type: Object,
      default () {
        return {
          left: 0,
          top: 0
        }
      }
    },

    targetType: {
      type: String,
      default: 'top'
    }
  },

  destroyed () {
    this.offEvents();
  },

  methods: {
    getTargetArr () {
      // 将字符串转化为数组
      let targetTypeArr = this.targetType.split(",");
      targetTypeArr = targetTypeArr.map((item) => {
        return item.trim();
      });

      return targetTypeArr;
    },

    fixPosition (target, element, offset) {
      var self = this,
        bounds, rect, position, targetTypeArr, horizontalFun, verticalFun;

      var targetType = this.targetType;

      /**
       * 第一个对齐参数为 top bottom
       * @inner
       * @param {object} pos     位置
       * @param {string} type    第二个定位参数
       * @param {string} [typeT] 第三个定位参数
       */
      horizontalFun = function (pos, type, typeT) {
        if (type === undefined || type == "left" || type == "right" || type == "center") {
          if (type == "left") {
            pos.left -= bounds.width / 2;
          }

          if (type == "right") {
            pos.left += bounds.width / 2;
          }
        } else {
          throw new RangeError("second targetType error");
        }

        // 第三个定位参数
        if (typeT === undefined || typeT == "left" || typeT == "right" || typeT == "center") {
          if (typeT == "left") {
            pos.left -= rect.width / 2;
          }

          if (typeT == "right") {
            pos.left += rect.width / 2;
          }
        } else {
          throw new RangeError("third targetType error");
        }

        return pos;
      }

      /**
       * 第一个对齐参数为 left、right
       * @inner
       * @param {object} pos     位置
       * @param {string} type    第二个定位参数
       * @param {string} [typeT] 第三个定位参数
       */
      verticalFun = function (pos, type, typeT) {
        if (type === undefined || type == "bottom" || type == "top" || type == "center") {
          if (type == "bottom") {
            pos.top += bounds.height / 2;
          }

          if (type == "top") {
            pos.top -= bounds.height / 2;
          }
        } else {
          throw new RangeError("second targetType error");
        }

        // 第三个定位参数
        if (typeT === undefined || typeT == "bottom" || typeT == "top" || typeT == "center") {
          if (typeT == "bottom") {
            pos.top += rect.height / 2;
          }

          if (typeT == "top") {
            pos.top -= rect.height / 2;
          }
        } else {
          throw new RangeError("third targetType error");
        }

        return pos;
      }

      // 将字符串转化为数组
      targetTypeArr = targetType.split(",");
      targetTypeArr = targetTypeArr.map((item) => {
        return item.trim();
      });

      bounds = self.getBounds(target);
      rect = self.getBounds(element);

      switch (targetTypeArr[0]) {
        case "top":
          position = {top: bounds.top - rect.height, left: bounds.left + bounds.width /2 - rect.width / 2}
          horizontalFun(position, targetTypeArr[1], targetTypeArr[2]);
          break;
        case "right":
          position = {top: bounds.top + bounds.height / 2 - rect.height / 2, left: bounds.left + bounds.width}
          verticalFun(position, targetTypeArr[1], targetTypeArr[2]);
          break;
        case "bottom":
          position = {top: bounds.top + bounds.height, left: bounds.left + bounds.width /2 - rect.width / 2}
          horizontalFun(position, targetTypeArr[1], targetTypeArr[2]);
          break;
        case "left":
          position = {top: bounds.top + bounds.height / 2 - rect.height / 2, left: bounds.left - rect.width}
          verticalFun(position, targetTypeArr[1], targetTypeArr[2]);
          break;
        case "center":
          position = {top: bounds.top + bounds.height / 2 - rect.height / 2, left: bounds.left + bounds.width /2 - rect.width / 2}
          break;
      }

      if (offset) {
        position.top += offset.top || 0;
        position.left += offset.left || 0;
      }

      this.position.left = position.left;
      this.position.top = position.top;
    },

    initEvents () {
      if (this.trigger == 'click') {
        this.initClickEvents();
      }

      if (this.trigger == 'hover') {
        this.initHoverEvents();
      }
    },

    offEvents () {
      if (this.trigger == 'click') {
        document.removeEventListener('click', this.documetClickCallback);
      }
    },

    getBounds (element) {
      let rect = element.getBoundingClientRect();

      return {
        width: parseInt(rect.width),
        height: parseInt(rect.height),
        top: element.offsetTop,
        left: element.offsetLeft
      }
    },

    initClickEvents () {
      this.getTarget().addEventListener('click', () => {
        this.canShow = !this.canShow;
      });

      document.addEventListener('click', this.documetClickCallback);
    },

    documetClickCallback (e) {
      let target = this.getTarget();

      if (target == e.target || target.contains(e.target)) {
        return;
      }

      if (this.$refs.content == e.target || this.$refs.content.contains(e.target)) {
        return;
      }

      this.canShow = false;
    },

    initHoverEvents () {
      let self = this;

      let showCallback = function () {
        self.canShow = true;
      }

      let hideCallback = function () {
        self.canShow = false;
      }

      this.getTarget().addEventListener('mouseenter', () => {
        this.showTimer && clearTimeout(this.showTimer);
        this.hideTimer && clearTimeout(this.hideTimer);

        this.showTimer = setTimeout(showCallback, this.showDelay);
      });

      this.getTarget().addEventListener('mouseleave', () => {
        this.showTimer && clearTimeout(this.showTimer);
        this.hideTimer && clearTimeout(this.hideTimer);

        this.hideTimer = setTimeout(hideCallback, this.hideDelay);
      });

      this.$refs.content.addEventListener('mouseenter', () => {
        this.hideTimer && clearTimeout(this.hideTimer);
      });

      this.$refs.content.addEventListener('mouseleave', () => {
        this.showTimer && clearTimeout(this.showTimer);
        this.hideTimer && clearTimeout(this.hideTimer);

        this.hideTimer = setTimeout(hideCallback, this.hideDelay);
      });

    },

    getTarget () {
      return this.$refs.target.children[0];
    }
  },

  watch: {
    canShow (value) {
      this.canShow && this.$nextTick(() => {
        this.fixPosition(this.getTarget(), this.$refs.content, this.offset);
      });
    },

    targetType () {
      this.canShow && this.$nextTick(() => {
        this.fixPosition(this.getTarget(), this.$refs.content, this.offset);
      })
    }
  },

  updated () {
    this.canShow && this.$nextTick(() => {
      this.fixPosition(this.getTarget(), this.$refs.content, this.offset);
    })
  },

  data () {
    return {
      position: {
        left: 0,
        top: 0
      }
    }
  },

  mounted () {
    this.initEvents();

    this.canShow && this.$nextTick(() => {
      this.fixPosition(this.getTarget(), this.$refs.content, this.offset);
    });
  }
}
