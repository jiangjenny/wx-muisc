<template>
  <div class="page-container">
       <!-- 搜索 -->
    <searchInput @searchI="searchI(searchValue)"></searchInput>
    <!-- 今日歌单 -->
    <div class="songList">
      <div class="songitem">
        <div v-for="item in songitem" :key="item.id" @click="songItem(item.id)">
          <div class="songImg">
            <img :src="item.picUrl" alt="">
            <p class="itemCount">
              <span>{{ item.playCount }}</span>
            </p>
          </div>
           <p class="itemname">{{item.name}}</p>
        </div>
      </div>
    </div>
     <!-- 正在播放 -->
    <Playing @listenerButtonPause="listenerButtonPause"></Playing>
  </div>
</template>
<script>
var Fly = require("flyio/dist/npm/wx"); //npm引入方式
var fly = new Fly(); //创建fly实例
import searchInput from '../../components/searchInput'
import Playing from '../../components/playing'
// 引入公共样式
import '../../../static/css/common.css'
export default {
  data(){
    return {
      songitem: []
    }
  },
  onLoad(options){
    wx.setNavigationBarTitle({
      title: '精品歌单推荐',
    })
    fly.get("http://127.0.0.1:4000/personalized",{})
    .then(d=>{
      this.songitem = d.data.result
    })
  },
  methods:{
    searchI(searchValue){
      const url = '../search/main?search='+searchValue;
      wx.navigateTo({url})
    },
    songItem(e){
      const url = '../songItem/main?id='+e;
      wx.navigateTo({url})
    },
    //监听button暂停按钮
    listenerButtonPause(){
      let e = wx.getStorageSync("musicId");
      if(e){
        const url="../music/main?id="+e;
        wx.navigateTo({ url })
      }
    }
  },
  components: {
    searchInput,
    Playing
  }
}
</script>
<style scoped>
.songList{
  padding-top: 0 !important;
  border-top: none !important;
  margin-top:20rpx
}
</style>
