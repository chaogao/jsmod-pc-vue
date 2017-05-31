import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages'
import Dialog from '../pages/dialog'
import Alert from '../pages/dialog/alert'
import Confirm from '../pages/dialog/confirm'
import Toast from '../pages/dialog/toast'
import Button from '../pages/button'
import Carousel from '../pages/carousel'
import Banner from '../pages/carousel/banner'
import Image from '../pages/image'
import Tab from '../pages/tab'
import Pagination from '../pages/pagination'

import config from '../../config'

Vue.use(Router);

let router = new Router({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },

  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: Dialog
    },
    {
      path: '/alert',
      name: 'alert',
      component: Alert
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: Confirm
    },
    {
      path: '/toast',
      name: 'toast',
      component: Toast
    },
    {
      path: '/button',
      name: 'button',
      component: Button
    },
    {
      path: '/carousel',
      name: 'carousel',
      component: Carousel
    },
    {
      path: '/banner',
      name: 'banner',
      component: Banner
    },
    {
      path: '/image',
      name: 'image',
      component: Image
    },
    {
      path: '/tab',
      name: 'tab',
      component: Tab
    },
    {
      path: '/pagination',
      name: 'pagination',
      component: Pagination
    }
  ]
});


export default router;
