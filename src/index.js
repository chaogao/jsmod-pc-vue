import Dialog from './components/dialog';
import Alert from './components/alert';
import Confirm from './components/confirm';
import Toast from './components/toast';

import { ModDialog } from './components/dialog';
import { ModAlert } from './components/alert';
import { ModConfirm } from './components/confirm';
import { ModToast } from './components/toast';

import { ModButton } from './components/button';

import { ModCarousel } from './components/carousel';
import { ModCarouselItem } from './components/carousel';
import { ModBanner } from './components/banner';

import { ModImage } from './components/image';

import { ModTab, ModTabItem } from './components/tab';

import { ModPagination, PAGE_TYPE } from './components/pagination';

import { ModPopover } from './components/popover';


import './styles/utils.styl';
import './styles/transition.styl';
import './styles/iconfont/iconfont.css'

const Components = {
  ModDialog,
  ModAlert,
  ModConfirm,
  ModToast,
  ModButton,
  ModCarousel,
  ModCarouselItem,
  ModBanner,
  ModImage,
  ModTab,
  ModTabItem,
  ModPagination,
  ModPopover
}

const install = (Vue, options) => {
  if (install.installed) {
    return;
  }

  Object.keys(Components).forEach(key => Vue.component(key, Components[key]));

  Vue.prototype.$jsmod = {
    'dialog': Dialog,
    'alert': Alert,
    'confirm': Confirm,
    'toast': Toast,
    'pagination': {
      PAGE_TYPE: PAGE_TYPE
    }
  };
}

export default {
  install
}
