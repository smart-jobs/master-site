const menu = [{
  label: '首页',
  path: '/',
  key: 'home',
}, {
  label: '就业服务',
  path: '/service/guide',
  key: 'service',
  children: [{
    label: '就业指导',
    path: '/service/guide',
    key: 'guide',
  }, {
    label: '政策文件',
    path: '/service/policy',
    key: 'policy',
  }, {
    label: '常见问题',
    path: '/service/faq',
    key: 'faq',
  }],
}, {
  label: '新闻公告',
  path: '/news/focus',
  key: 'news',
  children: [{
    label: '焦点新闻',
    path: '/news/focus',
    key: 'focus',
  }, {
    label: '就业快讯',
    path: '/news/flash',
    key: 'flash',
  }, {
    label: '通知公告',
    path: '/news/notice',
    key: 'notice',
  }],
}, {
  label: '招聘信息',
  path: '/jobs/jobinfo',
  key: 'jobs',
  children: [{
    label: '招聘信息',
    path: '/jobs/jobinfo',
    key: 'jobinfo',
  }, {
    label: '招聘会',
    path: '/jobs/jobfair',
    key: 'jobfair',
  }, {
    label: '宣讲会',
    path: '/jobs/campus',
    key: 'campus',
  }],
}, {
  label: '高校分站列表',
  path: '/sites',
  key: 'sites',
}, {
  label: '联系我们',
  path: '/about/contact',
  key: 'about',
  children: [
    {
      label: '联系我们',
      path: '/about/contact',
      key: 'contact',
    }
  ]
}];

export default menu;
