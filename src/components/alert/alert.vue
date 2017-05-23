<template>
  <mod-dialog v-model="canShow" background-color="rgba(0, 0, 0, 0)" :width="width" :isMaskClickHide="false" :useIscroll="useIscroll">
    <div slot="header">
      <div class="jsmod-alert-title">
        {{ title }}
      </div>
    </div>

    <div class="jsmod-alert-content">
      <slot><div v-html="content"></div></slot>
    </div>

    <div class="jsmod-alert-footer" slot="footer">
      <mod-button  v-on:click="onFooterClick" :inline="true" :customStyle="buttonCustomStyle">
        {{ btn }}
      </mod-button>
    </div>
  </mod-dialog>
</template>

<script>
  import { ModDialog } from '../dialog';
  import { ModButton } from '../button';

  export default {
    props: {
      value: {
        type: Boolean,
        default: false
      },
      buttonCustomStyle: {
        type: Object,
        default () {
          return {
            padding: '8px 25px'
          }
        }
      },
      content: {
        type: String,
        default: ''
      },
      width: {
        type: [String, Number],
        default: 520
      },
      useIscroll: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        default: ''
      },
      btn: {
        type: String,
        default: '确认'
      },
      onClick: {
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
    },

    watch: {
      value (val) {
        this.canShow = val;
      },

      canShow () {
        this.$emit('input', this.canShow);
      }
    },

    methods: {
      onFooterClick () {
        let returnValue = this.onClick();
        let e = new Event('click');

        this.$emit('click', e);

        if (returnValue !== false && e.cancelable === false) {
          this.canShow = false;
        }
      },

      hide () {
        this.canShow = false;
      },
    },

    components: {
      ModDialog,
      ModButton
    }
  }

</script>


<style lang="stylus">
  @import "../../styles/mixin";

  .jsmod-alert-title
    background: #fff;
    text-align: center;
    border-radius: 10px 10px 0px 0px;
    padding: 10px 0;
    font-weight: bold;

  .jsmod-alert-content
    background: #fff;
    padding-bottom: 15px;
    font-size: 14px;
    text-align: center;
    overflow: hidden;

  .jsmod-alert-footer
    border-radius: 0 0 10px 10px;
    padding: 10px;
    text-align: center;
    background: #fff;
    border-top: 1px solid border-color;
</style>
