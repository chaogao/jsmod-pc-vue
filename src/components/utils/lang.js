import Vue from 'vue'

const ZH = {
  'confirm': '确认',
  'cancel': '取消',
  'ok': '确认',

  'loading': '加载中',
  'success': '成功',
  'error': '失败',

  'prePage': '上一页',
  'nextPage': '下一页',

  'selectPlaceHolder': '请选择',
}

const EN = {
  'confirm': 'Confrim',
  'cancel': 'Cancel',
  'ok': 'Ok',

  'loading': 'Loading',
  'success': 'Success',
  'error': 'Error',

  'prePage': 'Pre',
  'nextPage': 'Next',

  'selectPlaceHolder': 'Select'
}

let vm = new Vue({
  data: {
    lang: ZH
  }
})

export default {
  set (option) {
    if (option == 'en') {
      vm.lang = EN;
    }

    if (option == 'zh') {
      vm.lang = ZH;
    }
  },

  get () {
    return vm
  }
}
