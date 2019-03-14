const menu = [{
  label: '首页',
  link: '/www/',
  key: 'home',
}, {
  label: '就业服务',
  link: '/www/service/guide',
  key: 'service',
  children: [{
    label: '就业指导',
    link: '/www/service/guide',
    key: 'guide',
  }, {
    label: '政策文件',
    link: '/www/service/policy',
    key: 'policy',
  }, {
    label: '常见问题',
    link: '/www/service/faq',
    key: 'faq',
  }],
}, {
  label: '新闻公告',
  link: '/www/news/focus',
  key: 'news',
  children: [{
    label: '焦点新闻',
    link: '/www/news/focus',
    key: 'focus',
  }, {
    label: '就业快讯',
    link: '/www/news/flash',
    key: 'flash',
  }, {
    label: '通知公告',
    link: '/www/news/notice',
    key: 'notice',
  }],
}, {
  label: '招聘信息',
  link: '/www/jobs/jobinfo',
  key: 'jobs',
  children: [{
    label: '招聘信息',
    link: '/www/jobs/jobinfo',
    key: 'jobinfo',
  }, {
    label: '招聘会',
    link: '/www/jobs/jobfair',
    key: 'jobfair',
  }, {
    label: '宣讲会',
    link: '/www/jobs/campus',
    key: 'campus',
  }],
}, {
  label: '高校分站列表',
  link: '/www/sites',
  key: 'sites',
}, {
  label: '联系我们',
  link: '/www/about/contact',
  key: 'about',
  children: [
    {
      label: '联系我们',
      link: '/www/about/contact',
      key: 'contact',
    }
  ]
}];

export default menu;
