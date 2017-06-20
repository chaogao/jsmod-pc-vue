import Vue from 'vue'
import App from './App'
import router from './router'

import Jsmod from '../src'
Vue.use(Jsmod, {
  lang: 'en'
});

import JCode from './tools/code'
Vue.component('JCode', JCode)

import VueMarkdown from 'vue-markdown'
Vue.component('VueMarkdown', VueMarkdown)

import 'website/assets/main.styl'

import i18n from './tools/i18n'

new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: { App }
});
