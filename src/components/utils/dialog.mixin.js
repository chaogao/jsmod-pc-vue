const DIALOG_ZINDEX_BEGIN = 10000;

let dialogArr = {};
let zIndexOffset = 0;

// 注入弹窗的逻辑
let InjectTools = {
  append ($el) {
    if (!this.$root) {
      this.createRoot();
    }
    
    $el.style.zIndex = DIALOG_ZINDEX_BEGIN + zIndexOffset;
    zIndexOffset += 1;
    this.$root.appendChild($el);

    return $el.style.zIndex;
  },

  createRoot () {
    this.$root = document.createElement('div');
    this.$root.classList.add('jsmod-dialog-placement');
    document.body.appendChild(this.$root);
  },

  remove ($el) {
    this.$root.removeChild($el);
  },
}

export default {
  props: {
    width: {
      type: [String, Number]
    },
    height: {
      type: [String, Number]
    },
  },

  data () {
    return {
      calcWidth: undefined,
      calcHeight: undefined,
    }
  },

  beforeMount () {
    if (this.$el) {
      this.__jsmod_dialog_zindex = InjectTools.append(this.$el);
    }
  },

  mounted () {
    // 修正使用 api 加入的 dialog 的 z-index
    if (this.__jsmod_dialog_zindex) {
      this.$el.style.zIndex = DIALOG_ZINDEX_BEGIN + zIndexOffset;
    }

    if (this.$el && !this.__jsmod_dialog_zindex) {
      this.__jsmod_dialog_zindex = InjectTools.append(this.$el);
    }
  },

  destroyed () {
    InjectTools.remove(this.$el);
  },

  methods: {
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

    calcLayout () {
      this.calcWidth = this.getWidth();
      this.calcHeight = this.getHeight();
      this.onCalced && this.onCalced();
    }
  }
}
