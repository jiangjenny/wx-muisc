import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// 定义状态state
const state = {
  url: ''
}
const getters ={
  getStorage(state){
    //先从state里面获取url
    if(!state.url){
      state.url = wx.getStorageSync('url')
    }
    return state.url;
  }
}
const mutations = {
  // 设置URL
  setStorage (state,url) {
    state.url = url  //将URL存储在state中 
    wx.setStorageSync('url',url)   //然后在存到localStorage中
  }
}
const actions = {
  setUrl({commit},url){  //dispatch分发方法，传递url参数
    commit('setStorage',url)  //commit mutation中的方法
  }
}

// 设置暴露接口
export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})