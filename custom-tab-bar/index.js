import {storeBindingsBehavior} from '../miniprogram/miniprogram_npm/mobx-miniprogram-bindings/index'
import {store} from '../store/store'
Component({
  /**
   * 组件的初始数据
   */
  data: {
    active: 0,
    list: [
      {
        "pagePath": "pages/home/index",
        "text": "",
        "iconPath": "resource/images/icon/home-hei.png",
        "selectedIconPath": "resource/images/icon/home-hei-active.png",
        "info": 0
      },
      {
        "pagePath": "pages/review/review",
        "text": "",
        "iconPath": "resource/images/icon/huigu-hei.png",
        "selectedIconPath": "resource/images/icon/huigu-hei-active.png",
        "info": 2
      },
      {
        "pagePath": "pages/user/user",
        "text": "",
        "iconPath": "resource/images/icon/user-hei.png",
        "selectedIconPath": "resource/images/icon/user-hei-active.png",
        "info": 0
      }
    ]
  },
  behaviors:[storeBindingsBehavior],
  storeBindings: {
    store,
    fields: {
      sum: "sum",
    },
    actions: {
    },
  },
  observers:{
    'sum':function(val){
      // console.log(val);
      this.setData({
       'list[1].info':val>0?val:0 //三元运算符，如果数字徽标的数值小于零，就赋值为0
      })
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
 
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      // event.detail 的值为当前选中项的索引
      this.setData({ active: event.detail });
    },
  }
})