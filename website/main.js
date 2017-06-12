// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import Jsmod from '../src'
// Vue.use(Jsmod);

debugger;
Vue.use(window['jsmod-pc']);

import JCode from './tools/code'
Vue.component('JCode', JCode);

import VueMarkdown from 'vue-markdown'
Vue.component('VueMarkdown', VueMarkdown);

import 'website/assets/main.styl'

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
