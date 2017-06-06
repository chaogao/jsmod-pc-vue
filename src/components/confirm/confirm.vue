<template>
  <mod-dialog v-model="canShow" :backgroundColor="'#fff'" :extendStyle="baseStyle" :width="width" :isMaskClickHide="false" >
    <div slot="header">
      <div class="jsmod-confirm-title">
        <slot name="title">
          <div v-html="title"></div>
        </slot>
      </div>
    </div>

    <div class="jsmod-confirm-content">
      <slot><div v-html="content"></div></slot>
    </div>

    <div class="jsmod-confirm-footer" ref="footer" slot="footer">
      <slot name="footer">
        <mod-button class="jsmod-confirm-footer-btn" v-on:click="_onBtnNo" :inline="true" :customStyle="btnNoStyle">
          {{ btnNo }}
        </mod-button>

        <mod-button class="jsmod-confirm-footer-btn" v-on:click="_onBtnOk" :inline="true" :customStyle="btnOkStyle">
          {{ btnOk }}
        </mod-button>
      </slot>
    </div>
  </mod-dialog>
</template>

<script>
  import { ModDialog } from '../dialog';
  import { ModButton } from '../button';
  import { customEvent } from '../utils/event';
  import ShowMixin from '../utils/show.mixin';

  export default {
    mixins: [ShowMixin],

    props: {
      value: {
        type: Boolean,
        default: false
      },
      width: {
        type: [String, Number],
        default: 520
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

      btnOkStyle: {
        type: Object,
        default () {
          return {
            padding: '8px 25px'
          }
        }
      },

      btnNoStyle: {
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
        baseStyle: {
          'border-radius': '10px'
        }
      }
    },

    mounted () {
      this.findBtn();
    },

    methods: {
      findBtn () {
        let $no = this.$refs.footer.querySelectorAll('[mod-no]');

        $no = [...$no];

        $no.forEach(($item) => {
          $item.addEventListener('click', () => {
            this._onBtnNo();
          });
        });

        let $ok = this.$refs.footer.querySelectorAll('[mod-ok]');

        $ok = [...$ok];

        $ok.forEach(($item) => {
          $item.addEventListener('click', () => {
            this._onBtnOk();
          });
        });
      },

      _onBtnOk () {
        let evt = customEvent('click');
        evt.result = true;
        this.$emit('click', evt);

        let returnValue = this.onClick({
          result: true
        });

        if (evt.isPreventDefault === false && returnValue !== false) {
          this.canShow = false;
        }
      },

      _onBtnNo () {
        let evt = customEvent('click');
        evt.result = false;
        this.$emit('click', evt);

        let returnValue = this.onClick({
          result: false
        });

        if (evt.isPreventDefault === false && returnValue !== false) {
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

    .jsmod-confirm-footer-btn
      margin: 0 10px;

</style>
