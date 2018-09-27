// pages/service/service.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    typePickerHidden: true,
    tabs: [],
    activeIndex: 0,
    categoryName: '',
    typeName: '',
    typeIndex: 0,
    categorySid: '',
    repairTypes: ['漏水问题', '绿化问题', '卫生问题', '电梯问题', '工程报修'],
    imagesList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        categorySid: 'C733AA3D-32FA-4F5B-B299-061044661DC0',
        tabs: ['公共报修', '报修记录'],
        categoryName: '报修分类'
      })
  },

  tabClick: function (e) {
    this.setData({
      activeIndex: e.currentTarget.id
    });
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
   * 公共报修
   */
  handleRepair: function () {
    this.setData({
      categorySid: 'C733AA3D-32FA-4F5B-B299-061044661DC0',
      tabs: ['公共报修', '报修记录'],
      categoryName: '报修分类'
    })
  },

  /**
   * 投诉
   */
  handleComplaint: function () {
    this.setData({
      categorySid: '7D2B996C-12EC-4CD4-8499-B453E96AF11F',
      tabs: ['我要投诉', '投诉记录'],
      categoryName: '投诉分类'
    })
  },

  /**
   * 选择分类
   *
   */
  handleTypeChoice: function () {
    this.setData({
      typePickerHidden: false
    })
  },

  handlePickerCancel: function () {
    this.setData({
      typePickerHidden: true
    })
  },

  /**
   * type picker change
   */
  handlePickerChange: function (e) {
    const val = e.detail.value
    this.setData({
      typeIndex: val[0]
    })
  },

  handlePickerOk: function () {
    this.setData({
      typeName: this.data.repairTypes[this.data.typeIndex],
      typePickerHidden: true
    })
  },

  /**
   * 上传图片
   */
  uploader: function () {
    var that = this
    let images = this.data.imagesList
    // let maxSize = 1024 * 1024
    // let maxLength
    wx.chooseImage({
      count: 4,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        let imagesTemp =images.concat(res.tempFilePaths)
        if (imagesTemp.length > 4) {
          imagesTemp = imagesTemp.slice(0,4)
        }
        console.log(imagesTemp)
        that.setData({
          imagesList: imagesTemp
        })
      }
    })
  },

  deleteImage: function (e) {
    var that = this;
    var images = that.data.imagesList;
    var index = e.currentTarget.dataset.index;//获取当前长按图片下标
    wx.showModal({
      title: '提示',
      content: '确定要删除此图片吗？',
      success: function (res) {
        if (res.confirm) {
          console.log('点击确定了');
          images.splice(index, 1);
        } else if (res.cancel) {
          console.log('点击取消了');
          return false;
        }
        that.setData({
          imagesList: images
        });
      }
    })
  }

})