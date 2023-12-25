// 配置js
var conf = require('../../resource/js/conf.js'),
    util = require('../../utils/util.js');

// index.js
Component({
  data: {
    title: "日历",
    weekSetting: ['日', '一', '二', '三', '四', '五', '六'],
    curentYear: '',
    curentMonth: '',
    currentWeekDate: [],
    currentMonthDate: []
  },
  lifetimes: {
    attached() {
      // 加载底部tab 选中效果
      this.getTabBar().setData({
        selected: 1
      })

      // 
      this.getDateInfo();
    },
  },
  methods: {
    // 获取日期的当前周、月
    getDateInfo: function (dateS='') {
      // 一天的毫秒数
      var dayTime = 3600 * 24 * 1000;

      // 日期
      var date = new Date();
      if (dateS != '') {
        date = new Date(dateS);
      }
      var Date2 = date.getTime();
      var week = date.getDay();

      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();

      var weekLs = [];
      for (let i = 0; i <= 6; i++) {
        weekLs.push(new Date(Date2 - (week - i) * dayTime).getDate())
      }

      this.setData({
        curentYear: year,
        curentMonth: month,
        currentWeekDate: weekLs
      })
    }
  },
})
