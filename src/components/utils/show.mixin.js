let InjectTools = {
  props: {
    value: {
      type: Boolean,
      default: false,
    }
  },

  data () {
    return {
      canShow: false
    }
  },

  created () {
    if (typeof this.value !== 'undefined') {
      this.canShow = this.value
    }
  },

  methods: {
    hide () {
      this.canShow = false;
    },

    show () {
      this.canShow = true;
    }
  },

  watch: {
    value: {
      handler: function (val) {
        this.canShow = val
      },
      immediate: true
    },

    canShow () {
      this.$emit('input', this.canShow);

      if (this.canShow) {
        this.$emit('onShow');
      } else {
        this.$emit('onHide');
      }
    }
  },
}

export default InjectTools;
