import ModConfirm from './confirm.vue';
import Vue from 'vue';
const ModConfirmClass = Vue.extend(ModConfirm);

export default {
  show (propsData) {
    propsData.value = true;

    return new ModConfirmClass({
      el: document.createElement('div'),
      propsData
    });
  }
};

export { ModConfirm };
