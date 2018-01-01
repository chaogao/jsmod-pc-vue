<template>
  <div :svalue="value" class="jsmod-select-item" :style="_style" @click="onSelect">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
  const SELECT_BASE_STYLE = {
    padding: '5px 10px',
    height: 'auto',
  };

  export default {
    componentName: 'select-item',

    props: {
      customStyle: {
        type: Object,
        default: () => {
          return {};
        }
      },

      value: {
        default: '',
        type: [String, Number]
      },

      label: {
        default: '',
        type: String,
      },

      calcHeight: {
        type: String,
        default: ''
      },

      activeColor: {
        type: String,
        default: '#108ee9'
      }
    },

    methods: {
      onSelect () {
        let $text;

        this.$parent.$parent.onSelect({
          value: this.value,
          label: this.label
        });
      },

      setActive () {
        this.active = 1;
      },

      reset () {
        this.active = 0;
      }
    },

    computed: {
      _style () {
        let style = Object.assign({}, SELECT_BASE_STYLE, this.customStyle);

        if (!style.height || style.height == 'auto') {
          style.height = this.$parent.$parent.getHeight();
        }

        if (this.active) {
          style.color = this.activeColor;
        }

        return style;
      }
    },

    data () {
      return {
        active: 0
      }
    }

  }
</script>

<style lang="stylus">
  @import "../../styles/mixin";

  .jsmod-select-item
    display: flex;
    display: -webkit-flex;
    align-items: center;
    cursor: pointer;
    
    &:hover 
      background: border-color;

</style>
