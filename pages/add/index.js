// 配置js
var conf = require('../../resource/js/conf.js'),
    util = require('../../utils/util.js');

// index.js
Component({
  data: {
    lun_ad: {},
    works: {},
    webUrl: conf.webUrl,
    appletName: "墨香随笔"
  },
  lifetimes: {
    attached() {
      // 加载底部tab 选中效果
      this.getTabBar().setData({
        selected: 2
      })

      // 
      var self = this;
      util.request({
        url:conf.homeUrl,
        data:{'workIndex':1},
        method:'get',
        header:{'content-type': 'application/json'},
        success: function (callback) {
          var Articles = callback.data.works;
          for (var i = 0, len = Articles.length; i < len; i++) {
            var item = Articles[i];
              item.desc = util.delHtmlTag(item.desc);
          }
          self.setData({
            lun_ad: callback.data.lun_ad,
            works: Articles,
          })        
        }
      })
    },
  },
  methods: {},
})
