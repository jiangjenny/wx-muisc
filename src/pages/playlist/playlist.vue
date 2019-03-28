<!--src/pages/playlist/playlist.wxml-->

<template>
  <div class="page-container">
     <!-- 搜索 -->
   <searchInput @searchI="searchI(searchValue)"></searchInput>
    <!-- 播放列表 -->
    <div class="Single">
      <div v-for="(item,index) in musicData" :key="item.id" class="SingWidth">
        <div class="SingleImg" @click="musicUrl(item.id)">
          <img :src="item.al.picUrl" alt="">
          <div class="SingText">
               <p class="Singname">{{item.name}}</p>
               <div class="people">
                 <p v-for="(itempeo,indexpeo) in item.ar" :key="itempeo.id">
                     {{itempeo.name}} &nbsp;
                 </p>
               </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 正在播放 -->
     <Playing @listenerButtonPause="listenerButtonPause"></Playing>
    <!-- 刷新 -->
    <div class="Refresh" @click="Refresh">
      <div class='wrap'>
          <i style="background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI1NTAwNTM2MzA3IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjUwNjAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNOTUwLjM3MTA3MiA1MzIuNzk1NjI5bC04NC4zOTgyMDItODQuMzkzMDg1Yy02LjEwMTk3NS02LjA5Njg1OC0xNC4wOTM5OTYtOS4xNDUyODctMjIuMDg3MDQxLTkuMTQzMjQxLTcuOTk1MDkxLTAuMDAxMDIzLTE1Ljk4ODEzNiAzLjA0NzQwNi0yMi4wNzk4NzggOS4xNDgzNTdsLTg0LjUxOTk3NSA4NC41MzAyMDljLTEyLjIwMDg4IDEyLjE5NTc2My0xMi4yMDA4OCAzMS45NzExNTYgMCA0NC4xNzEwMTIgNi4wOTk5MjggNi4wOTQ4MTIgMTQuMDkxOTUgOS4xNDUyODcgMjIuMDgyOTQ4IDkuMTQ1Mjg3czE1Ljk5MzI1My0zLjA1MDQ3NiAyMi4wODI5NDgtOS4xNTA0MDRsMzMuMTcxNDk0LTMzLjE3NTU4N2MtMTYuMDE5ODU5IDE3NS4zMzAyMTQtMTYzLjgxMzkyNiAzMTMuMTQ1LTM0My4yNTA2NjggMzEzLjE0NS0xOTAuMDk2NTIzIDAtMzQ0Ljc0OTgxMi0xNTQuNjUzMjg5LTM0NC43NDk4MTItMzQ0Ljc0OTgxMnMxNTQuNjUzMjg5LTM0NC43NTQ5MjggMzQ0Ljc0OTgxMi0zNDQuNzU0OTI4YzkyLjA4NDI1NSAwIDE3OC42NTgwMDYgMzUuODU5NzE5IDI0My43NzkxNjYgMTAwLjk3NTc2MiAxMi4yMDA4OCAxMi4yMDA4OCAzMS45NjYwMzkgMTIuMjAwODggNDQuMTY2OTE5IDAgMTIuMjAwODgtMTIuMTk1NzYzIDEyLjIwMDg4LTMxLjk3MTE1NiAwLTQ0LjE2NjkxOS03Ni45MTQ3NjQtNzYuOTE5ODgtMTc5LjE3NjgyMi0xMTkuMjc2NTctMjg3Ljk0NjA4NS0xMTkuMjc2NTctMjI0LjU0MzA1NiAwLTQwNy4yMTc1MzkgMTgyLjY3OTU5OS00MDcuMjE3NTM5IDQwNy4yMjI2NTUgMCAyMjQuNTM3OTM5IDE4Mi42NzQ0ODMgNDA3LjIxNzUzOSA0MDcuMjE3NTM5IDQwNy4yMTc1MzkgMjEyLjYwNDE0MiAwIDM4Ny41NzQxNTMtMTYzLjgwMDYyMyA0MDUuNTkxNTA1LTM3MS44MDgwNzRsMjkuMjM5OTUxIDI5LjIzODkyOGM2LjA5OTkyOCA2LjA5NDgxMiAxNC4wOTE5NSA5LjE0NTI4NyAyMi4wODI5NDggOS4xNDUyODcgNy45OTA5OTggMCAxNS45ODMwMi0zLjA1MDQ3NiAyMi4wODI5NDgtOS4xNTA0MDRDOTYyLjU3MTk1MiA1NjQuNzcwODc3IDk2Mi41NzE5NTIgNTQ0Ljk5NTQ4NSA5NTAuMzcxMDcyIDUzMi43OTU2Mjl6IiBwLWlkPSI1MDYxIiBmaWxsPSIjNzA1NGRkIj48L3BhdGg+PHBhdGggZD0iTTQxMS4yNDQyNDggNDI5LjA5OTkxOGwyMi4wODI5NDgtMjIuMDgyOTQ4YzEyLjIwMDg4LTEyLjE5NTc2MyAxMi4yMDA4OC0zMS45NzExNTYgMC00NC4xNjY5MTktMTIuMjAwODgtMTIuMjAwODgtMzEuOTY2MDM5LTEyLjIwMDg4LTQ0LjE2NjkxOSAwbC0yMi4wODI5NDggMjIuMDgyOTQ4Yy0xMi4yMDA4OCAxMi4xOTU3NjMtMTIuMjAwODggMzEuOTcxMTU2IDAgNDQuMTY2OTE5IDYuMDk5OTI4IDYuMDk5OTI4IDE0LjA5MTk1IDkuMTUwNDA0IDIyLjA4Mjk0OCA5LjE1MDQwNFM0MDUuMTQzMjk3IDQzNS4xOTk4NDcgNDExLjI0NDI0OCA0MjkuMDk5OTE4eiIgcC1pZD0iNTA2MiIgZmlsbD0iIzcwNTRkZCI+PC9wYXRoPjxwYXRoIGQ9Ik01NjUuODQ2MzcyIDUzOS41MzYxNDZsLTIyLjA4Mjk0OCAyMi4wODI5NDhjLTEyLjIwMDg4IDEyLjE5NTc2My0xMi4yMDA4OCAzMS45NzExNTYgMCA0NC4xNjY5MTkgNi4wOTk5MjggNi4wOTk5MjggMTQuMDkxOTUgOS4xNTA0MDQgMjIuMDgyOTQ4IDkuMTUwNDA0czE1Ljk4MzAyLTMuMDUwNDc2IDIyLjA4Mjk0OC05LjE1MDQwNGwyMi4wODI5NDgtMjIuMDgyOTQ4YzEyLjIwMDg4LTEyLjE5NTc2MyAxMi4yMDA4OC0zMS45NzExNTYgMC00NC4xNjU4OTZDNTk3LjgxMjQxMSA1MjcuMzM1MjY3IDU3OC4wNDcyNTIgNTI3LjMzNTI2NyA1NjUuODQ2MzcyIDUzOS41MzYxNDZ6IiBwLWlkPSI1MDYzIiBmaWxsPSIjNzA1NGRkIj48L3BhdGg+PHBhdGggZD0iTTMzNi40NTM4NjggNTIxLjA5MzA5OWMtNC44Njk5MTQgMjAuNjc5OTk1LTQuODA5NTM5IDYzLjk5NzU3IDI2LjM3MzY3MSA5NS4xNzU2NjMgMjIuNjYzMTYyIDIyLjY1ODA0NiA1MS45NDQwNDYgMjkuMDMyMjIgNzQuMTgwNDkgMjkuMDMyMjIgOC4xOTQ2MzYgMCAxNS40MzM1MDQtMC44Njg3ODcgMjEuMDI1ODcyLTIuMTA0OTQxIDE2LjY5NDIxNy0zLjY5MTA2NSAyNy4xMTU1NjgtMjAuMDcwMTA0IDIzLjYzODM3My0zNi44MTAzNzEtMy40NzcxOTQtMTYuNzMwMDMzLTE5Ljk2ODc5Ny0yNy41NzgxMDItMzYuNzU0MDg5LTI0LjI1ODQ5Ny0wLjI1Mzc4IDAuMDM1ODE2LTIzLjUxNjYgNC4zNzY2ODEtMzcuOTIzNzI4LTEwLjAzMDQ0Ny0xNC4wMTAwODUtMTQuMDIwMzE4LTkuOTUzNjk5LTM1LjUzOTQyNC05LjY1ODk4Ny0zNy4wMDM3NzUgMy43NDEyMDctMTYuNjczNzUxLTYuNjM5MjExLTMzLjMwMjQ3Ny0yMy4zMTI5NjItMzcuMjMxOTczQzM1Ny4yNjU4NyA0OTMuODkwNTUgMzQwLjQwODk0NyA1MDQuMjk2NTUxIDMzNi40NTM4NjggNTIxLjA5MzA5OXoiIHAtaWQ9IjUwNjQiIGZpbGw9IiM3MDU0ZGQiPjwvcGF0aD48L3N2Zz4=); background-size:80rpx 80rpx; width:80rpx;height:80rpx;margin-top:20rpx;margin-left:20rpx"></i>
      </div>
    </div>
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
      musicData: [],
      playing: []
    }
  },
  onLoad(options){
    // 刚已加载先获取本地存储中播放过的记录
    let playing = wx.getStorageSync('playing');
    let playingzheng = [];
    // 设置page的标题
    wx.setNavigationBarTitle({
      title: '播放列表',
    })
    playing = playing.reverse();
    for(var i=0;i<playing.length;i++){
      let item = playing[i];  //item是个对象obj{ id: 3120975,status:'false' }
      // 循环遍历播放每一项，发起请求，获取每一项渲染到页面
      // console.log(item);
      fly.get("http://127.0.0.1:4000/song/detail?ids="+item.id,{})
      .then(d=>{
        this.musicData.push(d.data.songs[0])
      })
      .catch(err=>{
        console.log(err.status, err.message);
      })
    }
  },
  methods: {
    searchI(searchValue){
      const url = '../search/main?search='+searchValue;
      wx.navigateTo({url})
    },
    musicUrl(e){
      const url = "../music/main?id="+e;
      wx.navigateTo({ url })
    },
    listenerButtonPause(){
      let e = wx.getStorageSync("musicId");
      if(e){
        const url="../music/main?id="+e;
        wx.navigateTo({ url })
      }
    },
    Refresh(){  //刷新
      let playing = wx.getStorageSync('playing'); //获取本地存储播放记录
      if(playing==''){
        wx.showModal({
           title: '提示',
          content: '亲爱哒，播放列表暂时空了哟！赶快去添加你喜欢的歌曲把~~~',
        })
      }
      playing = playing.reverse();
      for(let i=0;i<playing.length;i++){
        const items = playing[i];
        fly.get("http://127.0.0.1:4000/song/detail?ids="+items.id,{})
        .then(d=>{
          this.musicData.push(d.data.songs[0]);
        })
        .catch(err=>{
          console.log(err.status,err.message);
        })
      }
    }
  },
  components: {
    searchInput,
    Playing
  }
}
</script>
<style>
.Playing{
  left: 87%;
}
.Refresh{
  left: 100rpx !important;
}
</style>
