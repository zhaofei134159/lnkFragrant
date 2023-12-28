// app.js
App({
  globalData: {
    userInfo: null,
    screenWidth: 0,
    screenHeight: 0,
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    wx.getSystemInfo({
      success: res => {
        this.globalData.screenWidth = res.screenWidth;
        this.globalData.screenHeight = res.screenHeight;
      },
      fail(err) {}
    })

    wx.loadFontFace({
      family: 'guoziwen-shufa',
      source: 'url("/resource/font/guoziwen-shufa.ttf")',
      success: console.log
    })
  }
})
