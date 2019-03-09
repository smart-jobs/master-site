const menu = [{
  label: '首页',
  link: '/',
  key: 'home',
}, {
  label: '就业服务',
  link: '/service/guide',
  key: 'service',
  children: [{
    label: '就业指导',
    link: '/service/guide',
    key: 'guide',
  }, {
    label: '政策文件',
    link: '/service/policy',
    key: 'policy',
  }, {
    label: '常见问题',
    link: '/service/faq',
    key: 'faq',
  }],
}, {
  label: '新闻公告',
  link: '/news/focus',
  key: 'news',
  children: [{
    label: '焦点新闻',
    link: '/news/focus',
    key: 'focus',
  }, {
    label: '就业快讯',
    link: '/news/flash',
    key: 'flash',
  }, {
    label: '通知公告',
    link: '/news/notice',
    key: 'notice',
  }],
}, {
  label: '招聘信息',
  link: '/jobs/jobinfo',
  key: 'jobs',
  children: [
    {
      label: '招聘信息',
      link: '/jobs/jobinfo',
      key: 'jobinfo',
    }, {
      label: '招聘会',
      link: '/jobs/jobfair',
      key: 'jobfair',
    }, {
      label: '宣讲会',
      link: '/jobs/campus',
      key: 'campus',
    }],
}, {
  label: '联系我们',
  link: '/about/contact',
  key: 'about',
}];

export default menu;
