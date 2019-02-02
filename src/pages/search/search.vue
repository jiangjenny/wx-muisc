<template>
  <div class="page-container">
     <!-- 搜索 -->
    <div class="search">
      <input type="text" placeholder="搜索歌曲" class="search-index" @input="bindKeyInput" :value="firstName">
      <icon @click="searchI" type="search" size="25"/>
    </div>
    <!-- 搜索内容 -->
    <div class="searchCon">
      <div class="searchTitle" v-for="item in searchData" :key="item.id" >
        <div @click="musicUrl(item.id)" class="searchLeft">
          <div class="searchN">{{item.name}}</div>
          <div class="searchName">
            <span v-for="(itempeo,indexpeo) in item.artists" :key="indexpeo">
                {{itempeo.name}}&nbsp;
            </span>
            <span>- {{item.album.name}}</span>
          </div>
        </div>
         <i @click="JoinTheList(item.id)" style="background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI1NDI2MTQwNDE3IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM4MDMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTE0LjA0OCA2Mi40NjRxOTMuMTg0IDAgMTc1LjYxNiAzNS4zMjh0MTQzLjg3MiA5Ni43NjggOTYuNzY4IDE0My44NzIgMzUuMzI4IDE3NS42MTZxMCA5NC4yMDgtMzUuMzI4IDE3Ni4xMjh0LTk2Ljc2OCAxNDMuMzYtMTQzLjg3MiA5Ni43NjgtMTc1LjYxNiAzNS4zMjhxLTk0LjIwOCAwLTE3Ni42NC0zNS4zMjh0LTE0My44NzItOTYuNzY4LTk2Ljc2OC0xNDMuMzYtMzUuMzI4LTE3Ni4xMjhxMC05My4xODQgMzUuMzI4LTE3NS42MTZ0OTYuNzY4LTE0My44NzIgMTQzLjg3Mi05Ni43NjggMTc2LjY0LTM1LjMyOHpNNzcyLjA5NiA1NzYuNTEycTI2LjYyNCAwIDQ1LjA1Ni0xOC45NDR0MTguNDMyLTQ1LjU2OC0xOC40MzItNDUuMDU2LTQ1LjA1Ni0xOC40MzJsLTE5Mi41MTIgMCAwLTE5Mi41MTJxMC0yNi42MjQtMTguOTQ0LTQ1LjU2OHQtNDUuNTY4LTE4Ljk0NC00NS4wNTYgMTguOTQ0LTE4LjQzMiA0NS41NjhsMCAxOTIuNTEyLTE5Mi41MTIgMHEtMjYuNjI0IDAtNDUuMDU2IDE4LjQzMnQtMTguNDMyIDQ1LjA1NiAxOC40MzIgNDUuNTY4IDQ1LjA1NiAxOC45NDRsMTkyLjUxMiAwIDAgMTkxLjQ4OHEwIDI2LjYyNCAxOC40MzIgNDUuNTY4dDQ1LjA1NiAxOC45NDQgNDUuNTY4LTE4Ljk0NCAxOC45NDQtNDUuNTY4bDAtMTkxLjQ4OCAxOTIuNTEyIDB6IiBwLWlkPSIzODA0IiBmaWxsPSIjNzA1NGRkIj48L3BhdGg+PC9zdmc+); background-size:40rpx 40rpx; width:40rpx;height:40rpx;"></i>
      </div>
    </div>
    <!-- 正在播放 -->
    <Playing @listenerButtonPause="listenerButtonPause"></Playing>
  </div>
</template>
<script>
var Fly = require("flyio/dist/npm/wx"); //npm引入方式
var fly = new Fly(); //创建fly实例
import Playing from '../../components/playing'
// 引入公共样式
import '../../../static/css/common.css'
export default {
  data(){
    return {
      internal: false,
      firstName: '',
      searchData: []
    }
  },
  components:{
     Playing
  },
  onLoad(options) {
    wx.setNavigationBarTitle({
        title: "搜索界面" //页面标题为路由参数
    });
    // 获取本地存储中的数据
    this.searchData = wx.getStorageSync("startData");
  },
  methods: {
    bindKeyInput: function(e) {
        this.bindKeyInput = e.target.value;
    },
    searchI(){
      this.searchData = [];
      let searchValue = this.bindKeyInput;
      this.firstName = searchValue;
      fly.get("http://127.0.0.1:4000/search?keywords="+searchValue,{})
      .then(d=>{
        this.searchData = d.data.result.songs;
        wx.setStorageSync("startData",this.searchData);
      })
      .catch(err=>{
         console.log(err.status, err.message);
      })
    },
    musicUrl(e) {
      const url = "../music/main?id=" + e;
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
    JoinTheList(e){
      let chongfu = [];
      let playing = wx.getStorageSync("playing");
      for(let i=0; i<playing.length; i++){
        const items = playing[i].id;
        chongfu.push(items)
      }
      for(let i=0; i<chongfu.length;i++){
        const item  = chongfu[i];
        if(item == e){
          var ischongfu = true
        }
      }
      if(!ischongfu){
        let status = {
          id: e,
          status: false
        }
        playing.unshift(status);
        wx.setStorageSync('playing', playing)
      }
    }
  }
}
</script>
<style scoped>
.searchCon{
  margin-top: 20rpx;
  display: flex;
  flex-direction: column;
}
.searchTitle{
  font-size: 32rpx;
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: 20rpx 0;
  justify-content: space-between;
  align-items: center;
}
.searchLeft{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.searchN{
  display: block;
}
.searchName{
  display: block;
  font-size: 24rpx;
  color: #666;
  margin-top: 10rpx;
}
</style>
