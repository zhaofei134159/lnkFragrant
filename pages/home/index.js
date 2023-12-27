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
    title: '',
    scrollH: 0,
    imgWidth: 0,
    currentPage: 0,
    pageTotal: 0,
    textHeight: 100,
    col1: [],
    col2: []
  },

  loadImages: function () {
      // 获取图片和文章信息
      let images = this.homeData()

      let col1 = this.data.col1;
      let col2 = this.data.col2;

      for (let i = 0; i < images.length; i++) {
        let img = images[i];

        let oImgW = img.width;         //图片原始宽度
        let oImgH = img.height;        //图片原始高度
        let imgWidth = this.data.imgWidth;  //图片设置的宽度
        let scale = imgWidth / oImgW;        //比例计算
        let imgHeight = oImgH * scale;      //自适应高度

        // 如果没有图片 给固定高度
        if(img.pic == ''){
          imgHeight = this.data.textHeight;
        }

        let imageObj = null
        imageObj = img 
        imageObj.imgHeight = imgHeight;

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
        let scrollH = wh + 100;

        this.setData({
            scrollH: scrollH,
            imgWidth: imgWidth
        });
        this.loadImages();
      }
    })

  },

  homeData: function () {
    var currentPage = parseInt(this.data.currentPage) + 1;

    var result = {
      images: [
        { pic: "", content: "君不见，黄河之水天上来，奔流到海不复回。\n 君不见，高堂明镜悲白发，朝如青丝暮成雪。\n 人生得意须尽欢，莫使金樽空对月。\n天生我材必有用，千金散尽还复来。\n 烹羊宰牛且为乐，会须一饮三百杯。\n 岑夫子，丹丘生，将进酒，杯莫停。\n 与君歌一曲，请君为我倾耳听。\n 钟鼓馔玉不足贵，但愿长醉不愿醒。\n 古来圣贤皆寂寞，惟有饮者留其名。\n 陈王昔时宴平乐，斗酒十千恣欢谑。\n 主人何为言少钱，径须沽取对君酌。\n 五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。", headPic: "/resource/images/head/1.jpg", userName: "爱仕达多无群二阿萨德", 'title': '古装风景图古装风景图古装风景图古装风景图古装风景图装风景图装风景图', 'id': '13', 'width': '0', 'height': '0', lookNum: '154.2k'},
        { pic: "/resource/images/bookmark/1.jpg", content: "", headPic: "/resource/images/head/1.jpg", userName: "爱仕达多无群二阿萨德", 'title': '古装风景图古装风景图古装风景图古装风景图古装风景图装风景图装风景图装风景图', 'id': '0', 'width': '420', 'height': '748', lookNum: '154.2k'},
        { pic: "/resource/images/bookmark/2.jpg", content: "", headPic: "/resource/images/head/1.jpg", userName: "爱仕达多无群二阿萨德",  'title': '古装风景图古装风景图古装风景图古装风景图古装风景图装风景图', 'id': '1', 'width': '1200', 'height': '675', lookNum: '154.2k'},
        { pic: "/resource/images/bookmark/3.jpg", content: "", headPic: "/resource/images/head/1.jpg", userName: "爱仕达多无群二阿萨德", 'title': '古装风景图古装风景图古装风景图古装风景图古装', 'id': '2', 'width': '420', 'height': '748', lookNum: '154.2k'},
        { pic: "/resource/images/bookmark/4.jpg", content: "", headPic: "/resource/images/head/1.jpg", userName: "爱仕达多无群二阿萨德",  'title': '古装风景图古装风景图古装风景图古装风景图古装风景风景图', 'id': '3', 'width': '420', 'height': '748', lookNum: '154.2k'},
        { pic: "/resource/images/bookmark/5.jpg", content: "", headPic: "/resource/images/head/1.jpg", userName: "爱仕达多无群二阿萨德",  'title': '古装风景图古装风景图古装风景图古装风景图古装风景图', 'id': '4', 'width': '1200', 'height': '675', lookNum: '154.2k'},
        { pic: "/resource/images/bookmark/6.jpeg", content: "", headPic: "/resource/images/head/1.jpg", userName: "爱仕达多无群二阿萨德",  'title': '古装风景图古装风景图古装风景图古装风景图古装风景图', 'id': '5', 'width': '420', 'height': '748', lookNum: '154.2k'},
        { pic: "/resource/images/bookmark/7.jpg", content: "", headPic: "/resource/images/head/1.jpg", userName: "爱仕达多无群二阿萨德",  'title': '古装风景图古装风景图古装风景图古装风景图古装风景图', 'id': '6', 'width': '420', 'height': '748', lookNum: '154.2k'},
        { pic: "/resource/images/bookmark/8.jpg", content: "", headPic: "/resource/images/head/1.jpg", userName: "爱仕达多无群二阿萨德",  'title': '古装风景图古装风景图古装风景图古装风景图古装风景图', 'id': '7', 'width': '420', 'height': '748', lookNum: '154.2k'},
        { pic: "/resource/images/bookmark/9.jpg", content: "", headPic: "/resource/images/head/1.jpg", userName: "爱仕达多无群二阿萨德",  'title': '古装风景图古装风景图古装风景图古装风景图古装风景图', 'id': '8', 'width': '420', 'height': '748', lookNum: '154.2k'},
        { pic: "/resource/images/bookmark/10.jpg", content: "", headPic: "/resource/images/head/1.jpg", userName: "爱仕达多无群二阿萨德",  'title': '古装风景图古装风景图古装风景图古装风景图古装风景图', 'id': '9', 'width': '1200', 'height': '675', lookNum: '154.2k'},
        { pic: "/resource/images/bookmark/11.jpg", content: "", headPic: "/resource/images/head/1.jpg", userName: "爱仕达多无群二阿萨德",  'title': '古装风景图古装风景图古装风景图古装风景图古装风景图', 'id': '10', 'width': '420', 'height': '748', lookNum: '154.2k'},
        { pic: "/resource/images/bookmark/12.jpg", content: "", headPic: "/resource/images/head/1.jpg", userName: "爱仕达多无群二阿萨德",  'title': '古装风景图古装风景图古装风景图古装风景图古装风景图装风景图装风景图', 'id': '11', 'width': '420', 'height': '748', lookNum: '154.2k'},    
        
        { pic: "", content: "大叔大婶是的那首的垃圾送点钱你未来的看似达拉斯拉到吉安卡罗打 阿斯顿阿德阿德阿德阿德啊是的请问阿松大请问刷单啊", headPic: "/resource/images/head/1.jpg", userName: "爱仕达多无群二阿萨德", 'title': '古装风景图古装风景图古装风景图古装风景图古装风景图装风景图装风景图', 'id': '12', 'width': '0', 'height': '0', lookNum: '154.2k'}    
      ],
      pageTotal: 1,
      currentPage: currentPage,
    }

    this.setData({
        pageTotal: result.pageTotal,
        currentPage: result.currentPage,
    });

    let images = result.images

    if(result.currentPage > result.pageTotal){
      images = []
    }
    // console.log('pageTotal: ' + result.pageTotal)
    // console.log('currentPage: ' + result.currentPage)
    // console.log(images)

    return images;
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
  onPullDownRefresh: function () {
    console.log(31231);
    this.loadImages();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadImages();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})