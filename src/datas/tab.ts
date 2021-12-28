interface item {
  iconText: string,
  tabText: string,
  path: string
}
export default <Array<item>> [
  {
    iconText: '今',
    tabText: '今天',
    path: '/today'
  },
  {
    iconText: '明',
    tabText: '明天',
    path: '/tomorrow'
  },
  {
    iconText: '周',
    tabText: '本周',
    path: '/week'
  },
  {
    iconText: '月',
    tabText: '本月',
    path: '/month'
  },
  {
    iconText: '年',
    tabText: '本年',
    path: '/year'
  }
];