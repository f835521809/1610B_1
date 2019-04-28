var util = require("../../../utils/util.js");

Page({
  data: {},
  onLoad: function(options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function() {
    // 页面渲染完成
  },

  formSubmit: function(e) {
    console.log(e);
    var username = e.detail.value.username;
    var password = e.detail.value.password;
    if (username.length < 8 || password.length < 5) {
      util.alertViewWithCancel("提示", "操作有误", function() {}, "true");
      return;
    } 

      util.alertView("提示", "登录成功", function() {
        wx.switchTab({
          url: '/pages/index/index'
        })
      })
    
  },
  //注册
  register: function(e) {
    console.log("注册");
  },
  //忘记密码
  forgetpwd: function() {
    console.log("忘记密码");
  }

})