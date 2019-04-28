// pages/me/me.js
Page({

  data: {
    mylist:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  login(){
    wx.navigateTo({
      url: './login/login',
    }) 
  },
  onLoad: function (options) {
     
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.request({
      url: 'http://api.budejie.com/api/api_open.php?a=square&c=topic',
      success: (res) => {
         this.setData({
           mylist: res.data.square_list
         })
        console.log(res.data.square_list)
      }
    })
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
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})