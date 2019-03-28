<template>
    <!-- 歌单详情/搜索内容 -->
   <div class="searchCon">
      <div class="searchTitle" v-for="item in songItem" :key="item.id" >
        <div @click="musicUrl(item.id)" class="rankingLeft">
          <img :src="item.al.picUrl" class="ranking-img" alt="">
          <div class="searchLeft rankingMid">
            <div class="searchN">{{item.name}}</div>
            <div class="searchName">
              <span v-for="(itempeo,indexpeo) in item.ar" :key="indexpeo">
                  {{itempeo.name}}&nbsp;
              </span>
              <span>- {{item.al.name}}</span>
            </div>
          </div>
        </div>
         <i @click="JoinTheList(item.id)" style="background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI1NDI2MTQwNDE3IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM4MDMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTE0LjA0OCA2Mi40NjRxOTMuMTg0IDAgMTc1LjYxNiAzNS4zMjh0MTQzLjg3MiA5Ni43NjggOTYuNzY4IDE0My44NzIgMzUuMzI4IDE3NS42MTZxMCA5NC4yMDgtMzUuMzI4IDE3Ni4xMjh0LTk2Ljc2OCAxNDMuMzYtMTQzLjg3MiA5Ni43NjgtMTc1LjYxNiAzNS4zMjhxLTk0LjIwOCAwLTE3Ni42NC0zNS4zMjh0LTE0My44NzItOTYuNzY4LTk2Ljc2OC0xNDMuMzYtMzUuMzI4LTE3Ni4xMjhxMC05My4xODQgMzUuMzI4LTE3NS42MTZ0OTYuNzY4LTE0My44NzIgMTQzLjg3Mi05Ni43NjggMTc2LjY0LTM1LjMyOHpNNzcyLjA5NiA1NzYuNTEycTI2LjYyNCAwIDQ1LjA1Ni0xOC45NDR0MTguNDMyLTQ1LjU2OC0xOC40MzItNDUuMDU2LTQ1LjA1Ni0xOC40MzJsLTE5Mi41MTIgMCAwLTE5Mi41MTJxMC0yNi42MjQtMTguOTQ0LTQ1LjU2OHQtNDUuNTY4LTE4Ljk0NC00NS4wNTYgMTguOTQ0LTE4LjQzMiA0NS41NjhsMCAxOTIuNTEyLTE5Mi41MTIgMHEtMjYuNjI0IDAtNDUuMDU2IDE4LjQzMnQtMTguNDMyIDQ1LjA1NiAxOC40MzIgNDUuNTY4IDQ1LjA1NiAxOC45NDRsMTkyLjUxMiAwIDAgMTkxLjQ4OHEwIDI2LjYyNCAxOC40MzIgNDUuNTY4dDQ1LjA1NiAxOC45NDQgNDUuNTY4LTE4Ljk0NCAxOC45NDQtNDUuNTY4bDAtMTkxLjQ4OCAxOTIuNTEyIDB6IiBwLWlkPSIzODA0IiBmaWxsPSIjNzA1NGRkIj48L3BhdGg+PC9zdmc+); background-size:40rpx 40rpx; width:40rpx;height:40rpx;"></i>
      </div>
    </div>
</template>

<script>
var Fly = require("flyio/dist/npm/wx"); //npm引入方式
var fly = new Fly(); //创建fly实例

export default {
  data(){
    return {
      songItem: [],
      itemID: ''
    }
  },
  onLoad(options){
    // 获取到vuex中的url
    let url = this.$store.getters.getStorage;
    // console.log(url);
    fly.get(url,{})
    .then(d=>{
      this.songItem = d.data.playlist.tracks
      // console.log(this.songItem);
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
  methods: {
    musicUrl(e) {
      this.itemID = e;
      this.$emit('musicUrl',this.itemID)
    },
    JoinTheList(e) {
        let chongfu = [];
        let playing = wx.getStorageSync("playing");
        for (let i = 0; i < playing.length; i++) {
            const ele = playing[i].id;
            chongfu.push(ele);
        }
        for (let i= 0; i < chongfu.length; i++) {
            const eleq = chongfu[i];
            if (eleq == e) {
                var panduanchongfu = true;
            }
        }
        if (!panduanchongfu) {
            let status = {
                id: e,
                status: false
            };
            playing.push(status);
            wx.setStorageSync("playing", playing);
        }
    }
  }
}
</script>

<style>
.ranking-img{
  width: 120rpx;
  height: 120rpx;
  min-width: 120rpx;
  min-height: 120rpx;
  border-radius: 10rpx;
}
.rankingLeft{
   display: flex;
}
.rankingMid{
  margin-left: 20rpx;
}
.rankingT{
  border: none !important;
}
</style>