
const app = getApp()
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    year: {
      type: String,
      value: ''
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    currentYear: '2022',
    weekSetting: ['日', '一', '二', '三', '四', '五', '六'],
    monthLs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    dateLs: [],
    // 日历切换
    startYearX: 0,
    currentYearX: 0,
    contentYearLeft: 0,
    maxYearWith: 0,
  },
  lifetimes: {
    attached() {
      this.setData({
        currentYear: this.data.year,
      })

      // 获取 年月的日期
      this.getYearMonth();
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getYearMonth: function () {
      for(var month in this.data.monthLs){
        this.getDateInfo(this.data.currentYear, parseInt(month) + 1);
      }
    },
    // 获取日期的当前周、月
    getDateInfo: function (year, month) {
      // 获取月份的日期
      var dateJson = this.data.dateLs
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
      dateJson[month] = monthLs;

      this.setData({
        dateLs: dateJson,
      })
    },
    changeMonth: function (e) {
      var getYear = e.currentTarget.dataset.year
      var getMonth = (e.currentTarget.dataset.month < 10) ? '0' + e.currentTarget.dataset.month : e.currentTarget.dataset.month;
      this.triggerEvent('changeYearMonth', getYear + '-' + getMonth)
    },
    // 日历切换年
    yearStartTouch: function (e) {
      wx.showLoading({
       title: '耐心等待'
      })

      this.setData({
        startYearX: e.touches[0].clientX
      });
    },
    yearOnTouchMove: function (e) {
      this.setData({ currentYearX: e.touches[0].clientX });

      var moveX = this.data.currentYearX - this.data.startYearX;  
      var newLeft = this.data.contentYearLeft + moveX;  
      if (newLeft > (app.globalData.screenWidth / 100)) { // 防止内容被拖出容器外  
        newLeft = app.globalData.screenWidth;
      } else if (newLeft < -(app.globalData.screenWidth / 100)) { // 防止内容被拖进容器内  
        newLeft = -app.globalData.screenWidth;
      }

      this.setData({
        contentYearLeft: newLeft,
      })
    },
    yearEndTouch: function () {
      var newYear = this.data.currentYear;
      if (this.data.contentYearLeft < 0) {
        newYear = parseInt(this.data.currentYear) + 1;
      } else if (this.data.contentYearLeft > 0) {
        newYear = parseInt(this.data.currentYear) - 1;
      }

      this.triggerEvent('changeYear', newYear)

      this.setData({
        contentYearLeft: 0,
        currentYear: newYear
      })

      this.getYearMonth();

      setTimeout(function(){
        wx.hideLoading()
      }, 500)
    }
  },
})
