// logs.js
const util = require('../../utils/util.js')

Component({
  data: {
    logs: []
  },
  lifetimes: {
    attached() {
      // 加载底部tab 选中效果
      this.getTabBar().setData({
        selected: 1
      })

      // this.setData({
      //   logs: (wx.getStorageSync('logs') || []).map(log => {
      //     return {
      //       date: util.formatTime(new Date(log)),
      //       timeStamp: log
      //     }
      //   })
      // })
    }
  },
})
