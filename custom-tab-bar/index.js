Component({
    data: {
      selected: 0,
      color: "#3d3d3d",
      selectedColor: "white",
      list: [
        {
          pagePath: "/pages/home/index",
          iconPath: "/resource/images/icon/home-hei.png",
          selectedIconPath: "/resource/images/icon/home-hei-active.png",
          text: "首页",
        },
        {
          pagePath: "/pages/classify/index",
          iconPath: "/resource/images/icon/friends-circle.png",
          selectedIconPath: "/resource/images/icon/friends-circle-active.png",
          text: "朋友"
        },
        {
          pagePath: "/pages/add/index",
          iconPath: "/resource/images/icon/add-hei.png",
          selectedIconPath: "/resource/images/icon/add-hei-active.png",
          bulge:true,
          text: ""
        },
        {
          pagePath: "/pages/message/index",
          iconPath: "/resource/images/icon/message.png",
          selectedIconPath: "/resource/images/icon/message-active.png",
          text: "消息",
        },
        {
          pagePath: "/pages/user/user",
          iconPath: "/resource/images/icon/user-hei.png",
          selectedIconPath: "/resource/images/icon/user-hei-active.png",
          text: "我的"
        },
      ]
    },
    attached() {
    },
    methods: {
      switchTab(e) {
        const data = e.currentTarget.dataset
        const url = data.path
        wx.switchTab({'url':url})
        // this.setData({
        //   selected: data.index
        // })
      }
    }
  })