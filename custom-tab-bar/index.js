Component({
    data: {
      selected: 0,
      color: "#7A7E83",
      selectedColor: "#3cc51f",
      //此处list配置需要注意，pagePath须为 pages/index文件夹下的文件，此处只能配置组件名
      list: [
        {
          "pagePath": "/pages/home/index",
          "text": "",
          "iconPath": "/resource/images/icon/home-hei.png",
          "selectedIconPath": "/resource/images/icon/home-hei-active.png"
        },
        {
          "pagePath": "/pages/review/review",
          "text": "",
          "iconPath": "/resource/images/icon/huigu-hei.png",
          "selectedIconPath": "/resource/images/icon/huigu-hei-active.png"
        },
        {
          "pagePath": "/pages/user/user",
          "text": "",
          "iconPath": "/resource/images/icon/user-hei.png",
          "selectedIconPath": "/resource/images/icon/user-hei-active.png"
        }
      ]
    },
    attached() {
    },
    methods: {
      switchTab(e) {
        const data = e.currentTarget.dataset
        const url = data.path
        wx.switchTab({url})
        this.setData({
          selected: data.index
        })
      }
    }
  })