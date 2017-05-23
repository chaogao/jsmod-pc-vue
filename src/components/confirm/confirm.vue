<template>
  <mod-dialog v-model="canShow" background-color="rgba(0, 0, 0, 0)" :width="width" :isMaskClickHide="false" :useIscroll="useIscroll">
    <div slot="header">
      <div class="jsmod-confirm-title">
        {{ title }}
      </div>
    </div>

    <div class="jsmod-confirm-content">
      <slot><div v-html="content"></div></slot>
    </div>

    <div slot="footer">
      <div class="jsmod-confirm-footer">
        <mod-button v-on:click="_onBtnNo" :inline="true" :customStyle="buttonNoStyle">
          {{ btnNo }}
        </mod-button>
        <mod-button v-on:click="_onBtnOk" :inline="true" :customStyle="buttonOkStyle">
          {{ btnOk }}
        </mod-button>
      </div>
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
      btnOk: {
        type: String,
        default: '确认'
      },
      btnNo: {
        type: String,
        default: '取消'
      },
      content: {
        type: String,
        default: ''
      },

      onClick: {
        type: Function,
        default: () => {}
      },

      buttonOkStyle: {
        type: Object,
        default () {
          return {
            padding: '8px 25px'
          }
        }
      },

      buttonNoStyle: {
        type: Object,
        default () {
          return {
            padding: '8px 25px',
            backgroundColor: '#efefef',
            color: '#333'
          }
        }
      }
    },

    data () {
      return {
        canShow: false,
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
      _onBtnOk () {
        let returnValue = this.onClick({
          type: true
        });

        this.$emit('click', {
          type: true
        });

        if (returnValue !== false) {
          this.canShow = false;
        }
      },

      _onBtnNo () {
        let returnValue = this.onClick({
          type: false
        });

        this.$emit('click', {
          type: false
        });

        if (returnValue !== false) {
          this.canShow = false;
        }
      },

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

  .jsmod-confirm-title
    background: #fff;
    text-align: center;
    border-radius: 10px 10px 0px 0px;
    padding: 10px 0;
    font-weight: bold;

  .jsmod-confirm-content
    background: #fff;
    padding-bottom: 15px;
    font-size: 14px;
    text-align: center;
    overflow: hidden;


  .jsmod-confirm-footer
    border-radius: 0 0 10px 10px;
    padding: 10px;
    text-align: center;
    background: #fff;
    border-top: 1px solid border-color;

    a
      margin: 0 10px;

</style>
