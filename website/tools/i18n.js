import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en',
  messages: {
    en: {
      'cShow': 'Click Me',
      'hShow': 'Hover Me'
    },

    zh: {
      'cShow': '点击显示',
      'hShow': '划过显示',
    }
  }
});

export default i18n;
