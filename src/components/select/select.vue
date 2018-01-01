<template>
  <div class="jsmod-select">
    <mod-popover :disabled="disabled" v-model="popoverShow" target-type="bottom" :arrow="false" :offset="{top: 5}">
      <div :style="_style" :class="['jsmod-select-input', disabled == true ? 'jsmod-select-input-disabled' : '']">
        {{ displayLabel }}

        <i :class="'arrow-flag iconjsmod iconjsmod-xiangxia2' + (popoverShow ? ' arrow-flag-open' : '')"></i>
      </div>

      <div slot="content">
        <div ref="options" class="jsmod-select-options-wrap" :style="_optionStyle">
          <slot></slot>
        </div>
      </div>
    </mod-popover>
  </div>

</template>


<script>
  import PopoverMixin from '../utils/popover.mixin';
  import ModPopover from '../popover/popover.vue';
  import lang from '../utils/lang';

  let langInstance = lang.get();

  const SELECT_BASE_STYLE = {
    width: '300px',
    height: '40px',
    borderRadius: '5px',
    borderColor: '#efefef',
    borderWidth: '1px',
    borderStyle: 'solid',
    padding: '5px 10px',
  };

  export default {
    components: {
      ModPopover
    },

    computed: {
      _optionStyle () {
        let style = {};

        style.width = this._style.width;
        style.border = this._style.border;
        style.borderRadius = this._style.borderRadius;

        return style;
      },

      _style () {
        let style = Object.assign({}, SELECT_BASE_STYLE, this.customStyle);

        // 如果是空的需要设置 placeholder 色
        if (!this.value || this.innerValue == '0') {
          style.color = this.placeholderColor;
        }

        if (this.popoverShow) {
          style.borderColor = this.openedBorderColor;
        }

        return style;
      }
    },

    props: {
      customStyle: {
        type: Object,
        default: () => {
          return {};
        }
      },

      placeholder: {
        type: String,
        default: langInstance.lang.selectPlaceHolder
      },

      placeholderColor: {
        type: String,
        default: '#999'
      },

      openedBorderColor: {
        type: String,
        default: '#108ee9',
      },

      value: {
        default: '',
        type: [String, Number]
      },

      disabled: {
        default: false,
        type: Boolean
      }
    },

    watch: {
      value () {
        this.innerValue = this.value;
      },

      innerValue () {
        this.updateSelectedValue();
        this.$emit('change', this.innerValue);
      }
    },

    updated () {
      this.canShow && this.$nextTick(() => {
        this.fixArrow();
      });
    },

    data () {
      return {
        popoverShow: false,
        innerValue: this.value,
        displayLabel: ''
      }
    },

    created () {

    },

    mounted () {
      this.updateSelectedValue();
    },

    methods: {
      getHeight () {
        return this._style.height;
      },

      updateSelectedValue () {
        let item = this.getSelected();

        if (item) {
          this.displayLabel = item.label;
        } else {
          this.displayLabel = this.placeholder;
        }
      },

      getSelected () {
        let selectItem;

        this.findAll((item) => {
          if (item.value == this.innerValue) {
            selectItem = item;
            item.setActive();
          } else {
            item.reset();
          }
        });

        return selectItem;
      },

      findAll (cb) {
        const find = function (child) {
          const name = child.$options.componentName;
          if (name) {
            cb(child);
          } else if (child.$children.length) {
            child.$children.forEach((innerChild) => {
                find(innerChild, cb);
            });
          }
        };

        this.$children.forEach((child) => {
          find(child);
        });
      },

      onSelect (item) {
        this.innerValue = item.value;
        this.popoverShow = false;

        this.$emit('input', item.value);
      }
    }
  }
</script>


<style lang="stylus">
  @import "../../styles/mixin";

  .jsmod-select
    position: relative;
    
    .jsmod-select-input
      display: flex;
      display: -webkit-flex;
      align-items: center;
      position: relative;
      cursor: pointer;
      
      &.jsmod-select-input-disabled
        cursor: not-allowed;
        color: #999;
      
      .arrow-flag
        position: absolute;
        right: 5px;
        top: 50%;
        margin-top: -10px;
        transition: transform 0.5s;
        
        &.arrow-flag-open
          transform: rotate(-180deg);
      
    .jsmod-select-options-wrap
      border: 1px solid border-color;
      
      .jsmod-select-item
        border-bottom: 1px solid border-color;
        
        &:last-child
          border-bottom: none;
      

</style>
