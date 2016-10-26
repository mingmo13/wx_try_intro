//note.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    modalHidden1: true,
    modalHidden2: true,
    modalHidden3: true
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  modalTap1: function(e) {
    this.setData({
      modalHidden1: false
    })
  },
  modalChange1: function(e) {
    this.setData({
      modalHidden1: true
    })
  },

  modalTap2: function(e) {
    this.setData({
      modalHidden2: false
    })
  },
  modalChange2: function(e) {
    this.setData({
      modalHidden2: true
    })
  },

  modalTap3: function(e) {
    this.setData({
      modalHidden3: false
    })
  },
  modalChange3: function(e) {
    this.setData({
      modalHidden3: true
    })
  },

  onLoad: function () {
    console.log('NOTEonLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
