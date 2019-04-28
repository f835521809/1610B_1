const config = require("config.js");

//网络请求
function request(parameters = "", success, method = "GET", header = {}) {
  wx.request({
    url: config.BaseURL + (method == "GET" ? "?" : "") + parameters,
    data: {},
    method: method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    header: header ? header : "application/json", // 设置请求的 header
    success: function (res) {
      success(res);
    },
    fail: function () {
      // fail
    },
    complete: function () {
      // complete
    }
  })
}
//成功提示
function showSuccess(title = "成功啦", duration = 2500) {
  wx.showToast({
    title: title,
    icon: 'success',
    duration: (duration <= 0) ? 2500 : duration
  });
}
//loading提示
function showLoading(title = "请稍后", duration = 5000) {
  wx.showToast({
    title: title,
    icon: 'loading',
    duration: (duration <= 0) ? 5000 : duration
  });
}
//隐藏提示框
function hideToast() {
  wx.hideToast();
}

//显示带取消按钮的消息提示框
function alertViewWithCancel(title = "提示", content = "消息提示", confirm, showCancel = "true") {
  wx.showModal({
    title: title,
    content: content,
    showCancel: showCancel,
    success: function(res) {
      if (res.confirm) {
        confirm();
      }
    }
  });
}
//显示不取消按钮的消息提示框
function alertView(title = "提示", content = "消息提示", confirm) {
  alertViewWithCancel(title, content, confirm, false);
}

module.exports = {
  request: request,// 请求数据
  showSuccess: showSuccess, //成功提示
  showLoading: showLoading, //loading提示
  hideToast: hideToast, //隐藏提示框
  alertViewWithCancel: alertViewWithCancel, //显示带取消按钮的消息提示框
  alertView: alertView //显示不取消按钮的消息提示框
}