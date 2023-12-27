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
    // 日历选择
    calendarTop: 0,
    calendarSelect: true,
    calendarType: 3,
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
  pageLifetimes: {
    show: function () { 
      this.setData({
        calendarSelect: true
      })
    },
    hide: function () {},
    resize: function (size) {},
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

      // 获取周的日期
      var weekLs = [];
      for (let i = 0; i <= 6; i++) {
        weekLs.push(new Date(Date2 - (week - i) * dayTime).getDate())
      }

      // 获取月份的日期
      var monthLs = [];
      let currentDate = new Date(year, month - 1, 1); 
      while (currentDate.getMonth() === month - 1) {
          var curDate = new Date(currentDate);

          // 如果是每月的第一天
          if(curDate.getDate() == 1){
            var curWeek = curDate.getDay();
            for(let j=0; j < curWeek; j++){
              monthLs.push(' ');
            }
          }

          // 日期添加到月
          monthLs.push(curDate.getDate());
          currentDate.setDate(currentDate.getDate() + 1);
      }

      this.setData({
        curentYear: year,
        curentMonth: month,
        currentWeekDate: weekLs,
        currentMonthDate: monthLs,
      })
    },
    // 日历选择
    calendarType: function (e) {
      this.setData({
        calendarTop: e.detail.y + 10,
        calendarSelect: !this.data.calendarSelect
      })
    },
    calendarMask: function (e) {
      this.setData({
        calendarSelect: true
      })
    },
    changeContent: function (e) {
      var calendartype = e.currentTarget.dataset.calendartype;
      var barTop = 0;

      if (calendartype == 1) {

      } else if(calendartype == 2) {
        barTop = 200;
      } else if(calendartype == 3) {
        barTop = 0;
      }

      this.setData({
        contentBarTop: barTop,
        calendarType: calendartype,
        calendarSelect: true
      })
    },
    // 滑块滚动
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
      // contentTop为控制内容位置的data属性，可以根据需要自行调整。
      var calendartype = 3;
      if (newTop != 0) {
        calendartype = 2;
      }
      this.setData({
        contentBarTop: newTop,
        calendarType: calendartype
      }); 
    },  
    barEndTouch: function() {
      // 在触摸结束时处理相关逻辑，如动画效果等。  
    }
  },
})
