// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginTitle: '01 验证手机',
    codeBtnBackColor: '#e6e6e6',    //发送验证码按钮背景颜色
    codeButtonDisabled: true,
    phone: '',
    codeBtnText: '发送验证码',
    currentTime: 61,
    submitText: '下一步',
    firstPageShow: true
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

  },

  /**
   * 当输入正确手机号时让发送验证码按钮解除禁用
   */
  handlePhoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
    if (this.data.phone.length === 11) {
      this.setData({
        codeButtonDisabled: false,
        codeBtnBackColor: '#E76055'
      })
    } else {
      this.setData({
        codeButtonDisabled: true,
        codeBtnBackColor: '#e6e6e6'
      })
    }

  },

  /**
   * 获取验证码
   */
  handleGetCode: function () {
    var that = this
    // 没有这步，重复点击会出现多个定时器
    var currentTime = that.data.currentTime
    console.log('begin')
    var interval = setInterval(function () {
      currentTime--
      that.setData({
        codeBtnText: currentTime + 's',
        codeButtonDisabled: true,
        codeBtnBackColor: '#e6e6e6'
      })
      if (currentTime <= 0) {
        clearInterval(interval)
        that.setData({
          codeBtnText: '发送验证码',
          codeButtonDisabled: false,
          codeBtnBackColor: '#E76055'
        })
      }
    },1000)
  },

  handleSubmit: function (e) {
    console.log(e)
    if (this.data.submitText === '下一步') {
      // 验证验证码是否正确

      this.setData({
        submitText: '确认并提交',
        firstPageShow: false
      })
    }

    if (this.data.submitText === '确认并提交') {
          // ...
    }
  }


})