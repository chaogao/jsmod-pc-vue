var LANG = {
  title: 'lang',

  type: 'dropdown',

  items: [
    {
      title: '中文',
      path: '/zh/'
    },
    {
      title: 'en',
      path: '/en/'
    },
  ]
}


docute.init({
  home: '/zh/README.md',

  url: '/docs',

  nav: {
    default: [
      {
        title: '首页',
        path: '/zh/'
      },

      {
        title: 'API',
        type: 'dropdown',
        items: [
          {
            title: '弹出层组',
            path: '/zh/dialog/'
          },
          {
            title: '操作控件组',
            path: '/zh/functions/'
          },
          {
            title: '展示控件组',
            path: '/zh/views/'
          },
        ]
      },

      LANG
    ],

    en: [
      {
        title: 'home',
        path: '/en/'
      },

      LANG
    ]
  }
});
