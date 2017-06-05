<template>
  <mod-dialog v-model="canShow" background-color="rgba(0, 0, 0, 0)" :width="width" :isMaskClickHide="false">
    <div slot="header">
      <div class="jsmod-alert-title">
        <slot name="title">
          <div v-html="title"></div>
        </slot>
      </div>
    </div>

    <div class="jsmod-alert-content">
      <slot><div v-html="content"></div></slot>
    </div>

    <div class="jsmod-alert-footer" ref="footer" slot="footer">
      <slot name="footer">
        <mod-button  v-on:click="onFooterClick" :inline="true" :customStyle="buttonCustomStyle">
          {{ btn }}
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
    mixins: [ ShowMixin ],

    props: {
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

      title: {
        type: String,
        default: ''
      },

      btn: {
        type: String,
        default: '确认'
      }
    },

    data () {
      return {
        canShow: false
      }
    },


    mounted () {
      this.findCloseBtn();
    },

    methods: {
      findCloseBtn () {
        let $close = this.$refs.footer.querySelectorAll('[mod-confirm]');

        $close = [...$close];

        $close.forEach(($item) => {
          $item.addEventListener('click', () => {
            this.onFooterClick();
          });
        });
      },

      onFooterClick () {
        let e = customEvent('click');

        this.$emit('click', e);

        if (e.isPreventDefault === false) {
          this.canShow = false;
        }
      }
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
