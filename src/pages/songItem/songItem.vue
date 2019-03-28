<template>
  <div class="page-container">
     <!-- 搜索 -->
    <searchInput @searchI="searchI(searchValue)"></searchInput>
    <!-- 介绍内容 -->
    <div class="discription">
      <p class="disContent">介绍：{{songItem.description || '阅读我哟~~'}}</p>
      <p class="palyName">—— {{nickname || '我是可爱的作者本人啦~~'}}</p>
      <div class="playItem">
        <span class="play" >播放：{{playCount}}</span>
        <span class="addPlay" @click="buttonListPlay">加入播放列表</span>
      </div>
    </div>
    <!-- 歌单详情 -->
    <searchCon  @musicUrl="musicUrl" @JoinTheList="JoinTheList" ></searchCon>
     <!-- 正在播放 -->
    <Playing @listenerButtonPause="listenerButtonPause"></Playing>
  </div>
</template>
<script>
var Fly = require("flyio/dist/npm/wx"); //npm引入方式
var fly = new Fly(); //创建fly实例
import searchInput from '../../components/searchInput'
import Playing from '../../components/playing'
import searchCon from '../../components/searchCon'
// 引入公共样式
import '../../../static/css/common.css'
export default {
  data(){
    return {
      playCount: '',
      nickname: "",
      songItem: {},
      itemId: '',
    }
  },
  components: {
    searchInput,
    Playing,
    searchCon
  },
  onLoad(options){
     // 借助vuex父组件向子组件传递的URL
    let url = "http://127.0.0.1:4000/playlist/detail?id="+options.id;
    this.$store.dispatch('setUrl',url);
    fly.get(url,{})
    .then(d=>{
      this.songItem = d.data.playlist
      this.nickname = d.data.playlist.creator.nickname
      let playCount = d.data.playlist.playCount
      if(playCount >9999){
        playCount = (Math.floor(playCount/1000)/10)+'万'
      }else{
        playCount = playCount
      }
      this.playCount = playCount
      wx.setNavigationBarTitle({
          title: d.data.playlist.name //页面标题为路由参数
      });
    })
    .catch(err=>{
      console.log(err.status,err.message);
    })
  },
  methods:{
    searchI(searchValue){
      const url = '../search/main?search='+searchValue;
      wx.navigateTo({url})
    },
    musicUrl(itemID) {
      console.log(itemID);
      this.itemId = itemID;
      const url = "../music/main?id=" + this.itemId;
      wx.navigateTo({ url });
    },
    //监听button暂停按钮
    listenerButtonPause(){
      let e = wx.getStorageSync("musicId");
      if(e){
        const url="../music/main?id="+e;
        wx.navigateTo({ url })
      }
    },
    buttonListPlay(){
      let playing = []; //加入的播放列表
      wx.setStorageSync('playing', []);
      for(let i=0;i<this.songItem.tracks.length;i++){
        const item = this.songItem.tracks[i].id;
        let status = {
          id: item,
          status: false
        }
        playing.unshift(status)
      }
      wx.setStorageSync('playing', playing)
      const url = "../music/main?id="+this.songItem.tracks[0].id  //跳转到播放页面
      wx.navigateTo({url})
    }
  }
}
</script>
<style scoped>
.discription{
  display: flex;
  flex-direction: column;
  margin: 10rpx 0;
}
.disContent{
  color: #333;
  font-size: 26rpx;
  padding: 10rpx 0;
}
.playItem{
  display: flex;
  justify-content: space-between;
  height: 60rpx;
  line-height: 80rpx;
  text-align: center;
  font-size: 32rpx;
}
.palyName{
  color: #333;
  font-size: 26rpx;
  text-align: right;
  padding: 10rpx 0 20rpx 0;
}
.play,.addPlay{
  width: 50%;
  height: 80rpx;
}
.play{
  color: #333;
  background-color: #f3fbfd;;
}
.addPlay{
  color: #fff;
  background-color: #7054dd;
}
</style>
