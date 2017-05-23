import ModAlert from './alert.vue';
import Vue from 'vue';
const ModAlertClass = Vue.extend(ModAlert);

export default {
  show (propsData) {
    propsData.value = true;

    return new ModAlertClass({
      el: document.createElement('div'),
      propsData
    });
  }
};

export { ModAlert };
