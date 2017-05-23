import ModToast from './toast.vue';
import Vue from 'vue';
const ModToastClass = Vue.extend(ModToast);

export default {
  show (propsData) {
    propsData.value = true;

    return new ModToastClass({
      el: document.createElement('div'),
      propsData
    });
  }
};

export { ModToast };
