// pages/login/choose-address/choose-address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    identityList: ['业主', '家属', '长期租客', '限期租客'],
    apartmentName: '请选择',
    buildingNo: '',
    unit: '',
    roomNo: '',
    dataList: [],
    active: 0,
    chooseTitle: '小区',
    address: '',
    identity: '',
    popupShow: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      dataList: ['体验小区1', '体验小区2', '体验小区3']
    })
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
   * 点击选择住址
   */
  handleChooseAddress: function () {
    this.setData({
      popupShow: false,
      apartmentName: '请选择',
      buildingNo: '',
      unit: '',
      roomNo: '',
      chooseTitle: '小区',
      active: 0,
      dataList: ['体验小区1', '体验小区2', '体验小区3']
    })
  },

  /**
   * 选择身份
   * @param e
   */
  bindPickerChange: function(e) {
    this.setData({
      index: e.detail.value
    })
    this.setData({
      identity: this.data.identityList[this.data.index]
    })
  },

  /**
   *  重新选择小区
   */
  handleApartment: function () {
    this.setData({
      apartmentName: '请选择',
      buildingNo: '',
      unit: '',
      roomNo: '',
      chooseTitle: '小区',
      active: 0,
      dataList: ['体验小区1', '体验小区2', '体验小区3']
    })
  },

  /**
   *  重新选择楼栋
   */
  handleBuilding: function () {
    if (this.data.active > 0) {
      this.setData({
        buildingNo: '请选择',
        unit: '',
        roomNo: '',
        chooseTitle: '栋',
        active: 1,
        dataList: ['11', '22', '35']
      })
    }
  },

  /**
   *  重新选择单元
   */
  handleUnit: function () {
    if (this.data.active > 1) {
      this.setData({
        unit: '请选择',
        roomNo: '',
        active: 2,
        chooseTitle: '单元',
        dataList: ['1单元', '2单元', '3单元']
      })
    }
  },

  /**
   * active
   * 0  小区
   * 1  楼栋
   * 2  单元
   * 3  室
   * @param item
   */
  handleChoose: function (item) {
    console.log(item)
    switch (this.data.active) {
      case 0:
        this.setData({
          apartmentName: item.currentTarget.dataset.item,
          buildingNo: '请选择',
          chooseTitle: '栋',
          active: 1,
          dataList: ['11', '22', '35']
        })
        break
      case 1:
        this.setData({
          buildingNo: item.currentTarget.dataset.item + '栋',
          unit: '请选择',
          chooseTitle: '单元',
          active: 2,
          dataList: ['1单元', '2单元', '3单元']
        })
        break
      case 2:
        this.setData({
          unit: item.currentTarget.dataset.item,
          roomNo: '请选择',
          chooseTitle: '房间',
          active: 3,
          dataList: ['101室', '308室', '409室']
        })
        break
      case 3:
        this.setData({
          address: this.data.apartmentName + this.data.buildingNo + this.data.unit + item.currentTarget.dataset.item,
          popupShow: true
        })
        break
    }
  }

})