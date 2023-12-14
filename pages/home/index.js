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
          self.data.lun_ad = callback.data.lun_ad;
          self.data.works = Articles;
          console.log(self.data.works)
        }
      })
    },
  },
  methods: {
    
  },
})
