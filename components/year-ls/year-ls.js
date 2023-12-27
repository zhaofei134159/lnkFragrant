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
    weekSetting: ['日', '一', '二', '三', '四', '五', '六'],
    monthLs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    dateLs: []
  },
  lifetimes: {
    attached() {
      for(var month in this.data.monthLs){
        this.getDateInfo(this.data.year, parseInt(month) + 1);
      }
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
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
  },
})
