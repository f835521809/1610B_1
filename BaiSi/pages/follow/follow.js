var app = getApp();
Page({
  data: {
    msgData: []
  },
  changeInputValue(ev) {
    this.setData({
      inputVal: ev.detail.value
    })
  },

  //添加留言
  addMsg(e) {
    var list = this.data.msgData;
    list.push({
      msg: this.data.inputVal
    });
    //更新
    this.setData({
      msgData: list,
      inputVal: ''
    });
  },

  //删除留言
  DelMsg(ev) {
    var n = ev.target.dataset.index;
    var list = this.data.msgData;
    list.splice(n, 1);
    this.setData({
      msgData: list
    });
  },
})