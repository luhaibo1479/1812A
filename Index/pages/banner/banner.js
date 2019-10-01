// pages/banner/banner.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 拨打电话
  gettel:function(){
    wx.makePhoneCall({
      phoneNumber:"18235953256",
      success:function(){
        console.log("拨打成功")
      },
      fail:function(){
        console.log("电话未接通")
      }
    })
  },
  // 复制电话号码
  getcopy:function(){
    wx.setClipboardData({
      data: '465091397@qq.com',
      success:function(){
        console.log("复制成功")
      },
      fail:function(){
        console.log("复制失败")
      }
    })
  },
  // 复制职业信息
  getcopy1:function(){
    wx.setClipboardData({
      data: 'Web前端开发工程师',
      success: function () {
        console.log("复制成功")
      },
      fail: function () {
        console.log("复制失败")
      }
    })
  },
  // 保存电话到联系人
  getpush:function(){
    wx.addPhoneContact({
      firstName: '陆海波',
      mobilePhoneNumber:"18235953256"
    })
  },
  // 分享给好友
  getpp: function (res) {
    if (res.from === 'button') {

    }
    return {
      title: '转发',
      path: '/pages/index/community/topic/topic?jsonStr=' + this.data.list,
      success: function (res) {
        console.log('成功', res)
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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