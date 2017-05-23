<template>
  <mod-dialog v-model="canShow"  :width="width" :useMask="false"
    :useIscroll="false"
    :soltBackgroundColor="'rgba(0, 0, 0, 0)'"
    :backgroundColor="'rgba(0, 0, 0, 0)'">

    <div class="jsmod-totast">
      <div v-if="_icon" class="jsmod-toast-icon">
        <i v-bind:class="['iconjsmod ' + _icon, this.type == 'loading' ? 'jsmod-loading': '']"></i>
      </div>

      <div class="jsmod-toast-content">
        {{ _content }}
      </div>
    </div>
  </mod-dialog>
</template>

<script>
  import { ModDialog } from '../dialog';

  const TOAST_TYPES = {
    'loading': {
      icon: 'iconjsmod-shuaxin',
      content: '加载中',
      timeout: 0
    },

    'success': {
      icon: 'iconjsmod-yuanxingxuanzhong',
      content: '成功',
      timeout: 1500,
    },

    'error': {
      icon: 'iconjsmod-guanbi2',
      content: '失败',
      timeout: 1500,
    },

    'default': {
      timeout: 1500
    }
  }

  export default {
    props: {
      width: {
        type: [String, Number]
      },
      value: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'default'
      },
      useIscroll: {
        type: Boolean,
        default: true
      },
      icon: {
        type: String,
        default: undefined
      },
      content: {
        type: String,
        default: undefined
      },
      timeout: {
        type: Number,
        default: undefined
      },
      onHide: {
        type: Function,
        default: () => {}
      }
    },

    data () {
      return {
        canShow: false
      }
    },

    created () {
      if (this.value !== undefined) {
        this.canShow = this.value
      }

      let timeout = this._timeout;

      if (timeout > 0) {
        this._timer = setTimeout(() => {
          this.hide();
        }, timeout);
      }
    },

    computed: {
      _timeout () {
        if (this.timeout !== undefined) {
          return this.timeout;
        } else {
          return TOAST_TYPES[this.type] && TOAST_TYPES[this.type].timeout;
        }
      },

      _icon () {
        if (this.icon !== undefined) {
          return this.icon;
        } else {
          return TOAST_TYPES[this.type] && TOAST_TYPES[this.type].icon;
        }
      },

      _content () {
        if (this.content !== undefined) {
          return this.content;
        } else {
          return TOAST_TYPES[this.type] && TOAST_TYPES[this.type].content;
        }
      }
    },

    watch: {
      value (val) {
        this.canShow = val;
      },

      timeout (val) {
        this._timer && clearTimeout(this._timer);

        this._timer = setTimeout(() => {
          this.hide();
        }, this.timeout);
      },

      canShow (val) {
        this.$emit('input', this.canShow);

        if (this.canShow == false) {
          this.$emit('hide');
          this.onHide();
        }

        if (val === true && this._timeout > 0) {
          this._timer && clearTimeout(this._timer);

          this._timer = setTimeout(() => {
            this.hide();
          }, this._timeout);
        }
      }
    },

    methods: {
      hide () {
        this.canShow = false;
      },
    },

    components: {
      'mod-dialog': ModDialog
    }
  }

</script>


<style lang="stylus">
  @import "../../styles/mixin";

  .jsmod-totast
    background: rgba(45, 45, 45, 0.9);
    padding: 15px;
    border-radius: 10px;
    color: #fff;

    .jsmod-toast-icon
      text-align: center;
      padding-bottom: 5px;

      i
        font-size: 24px;

    .jsmod-toast-content
      font-size: 13px;
      text-align: center;

</style>
