//logs.js
const data = require('../../mock/data.js')
Page({
  data: {
    data: data
  },

  btn(e) {
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/new/detail/detail?id=' + id
    })
  }
})