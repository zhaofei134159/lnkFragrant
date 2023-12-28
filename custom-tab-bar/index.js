Component({
    data: {
      selected: 0,
      color: "#3d3d3d",
      selectedColor: "white",
      list: [
        {
          pagePath: "/pages/home/index",
          iconPath: "",
          selectedIconPath: "",
          text: "首页",
        },
        {
          pagePath: "/pages/classify/index",
          iconPath: "",
          selectedIconPath: "",
          text: "分类"
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
          iconPath: "",
          selectedIconPath: "",
          text: "消息",
        },
        {
          pagePath: "/pages/user/user",
          iconPath: "",
          selectedIconPath: "",
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