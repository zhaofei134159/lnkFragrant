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
    currentMonthDate: [],
    // 滑块 移动距离
    startBarY: '',
    currentBarY: '',
    contentBarTop: 0,
    maxBarHeight: 200,
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

      var monthLs = [];
      for (let i = 0; i <= 6; i++) {
        weekLs.push(new Date(Date2 - (week - i) * dayTime).getDate())
      }

      this.setData({
        curentYear: year,
        curentMonth: month,
        currentWeekDate: weekLs
      })
    },
    barStartTouch: function(e) {
      this.setData({ startBarY: e.touches[0].clientY });  
    },  
    barOnTouchMove: function(e) {
      this.setData({ currentBarY: e.touches[0].clientY });  
      // 根据触摸移动的距离计算内容的位置变化，这里简单地将内容向上移动，你可以根据需要进行调整。  
      var moveY = this.data.currentBarY - this.data.startBarY;  
      var newTop = this.data.contentBarTop + moveY;  
      if (newTop < 0) { // 防止内容被拖出容器外  
        newTop = 0;  
      } else if (newTop > this.data.maxBarHeight) { // 防止内容被拖进容器内  
        newTop = this.data.maxBarHeight;  
      }  
      this.setData({ contentBarTop: newTop }); // contentTop为控制内容位置的data属性，可以根据需要自行调整。  
    },  
    barEndTouch: function() {
      // 在触摸结束时处理相关逻辑，如动画效果等。  
    }
  },
})
