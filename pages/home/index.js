// 配置js
var conf = require('../../resource/js/conf.js'),
    util = require('../../utils/util.js');

let col1H = 0;
let col2H = 0;

//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollH: 0,
    imgWidth: 0,
    col1: [],
    col2: []
  },

  loadImages: function () {
      // 获取图片和文章信息
      let images = [
        { pic: "/resource/images/bookmark/1.jpg", 'id': '0', 'width': '420', 'height': '748'},
        { pic: "/resource/images/bookmark/2.jpg", 'id': '1', 'width': '1200', 'height': '675'},
        { pic: "/resource/images/bookmark/3.jpg", 'id': '2', 'width': '420', 'height': '748'},
        { pic: "/resource/images/bookmark/4.jpg", 'id': '3', 'width': '420', 'height': '748'},
        { pic: "/resource/images/bookmark/5.jpg", 'id': '4', 'width': '1200', 'height': '675'},
        { pic: "/resource/images/bookmark/6.jpeg", 'id': '5', 'width': '420', 'height': '748'},
        { pic: "/resource/images/bookmark/7.jpg", 'id': '6', 'width': '420', 'height': '748'},
        { pic: "/resource/images/bookmark/8.jpg", 'id': '7', 'width': '420', 'height': '748'},
        { pic: "/resource/images/bookmark/9.jpg", 'id': '8', 'width': '420', 'height': '748'},
        { pic: "/resource/images/bookmark/10.jpg", 'id': '9', 'width': '1200', 'height': '675'},
        { pic: "/resource/images/bookmark/11.jpg", 'id': '10', 'width': '420', 'height': '748'},
        { pic: "/resource/images/bookmark/12.jpg", 'id': '11', 'width': '420', 'height': '748'}      
      ];

      let col1 = this.data.col1;
      let col2 = this.data.col2;

      for (let i = 0; i < images.length; i++) {
        let img = images[i];

        let oImgW = img.width;         //图片原始宽度
        let oImgH = img.height;        //图片原始高度
        let imgWidth = this.data.imgWidth;  //图片设置的宽度
        let scale = imgWidth / oImgW;        //比例计算
        let imgHeight = oImgH * scale;      //自适应高度
        let imageObj = null
        imageObj = img 
        imageObj.height = imgHeight;

        if (col1H <= col2H) {
            col1H += imgHeight;
            col1.push(imageObj);
        } else {
            col2H += imgHeight;
            col2.push(imageObj);
        }
      }

      let data = {
          col1: col1,
          col2: col2
      }
      this.setData(data);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 图片
    wx.getSystemInfo({
      success: (res) => {
        let ww = res.windowWidth;
        let wh = res.windowHeight;
        let imgWidth = ww * 0.48;
        let scrollH = wh;

        this.setData({
            scrollH: scrollH,
            imgWidth: imgWidth
        });
        this.loadImages();
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: async function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: async function () {
    this.refresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.getAppList(true);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})