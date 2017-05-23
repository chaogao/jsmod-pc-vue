import ModDialog from './dialog.vue';
import Vue from 'vue';
const ModDialogClass = Vue.extend(ModDialog);

export default {
  show (propsData) {
    propsData.value = true;

    return new ModDialogClass({
      el: document.createElement('div'),
      propsData
    });
  }
};

export { ModDialog };
