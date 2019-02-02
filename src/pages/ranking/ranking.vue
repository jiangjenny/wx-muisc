<template>
  <div class="page-container">
    <!-- 搜索 -->
    <searchInput @searchI="searchI(searchValue)"></searchInput>
   <!-- 歌单详情/搜索内容 -->
    <searchCon  @musicUrl="musicUrl(e)" @JoinTheList="JoinTheList"></searchCon>
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
      internal: false,
      searchData: []
    }
  },
  components: {
    searchInput,
    Playing,
    searchCon
  },
  onLoad(){
    wx.setNavigationBarTitle({
        title: "最热排行榜" //页面标题为路由参数
    });
    // 借助vuex父组件向子组件传递的URL 引用歌曲详情内容组件searchCon
    let url = "http://127.0.0.1:4000/top/list?idx=1";
    this.$store.dispatch('setUrl',url);
  },
  methods:{
    searchI(searchValue){
      const url = '../search/main?search='+searchValue;
      wx.navigateTo({url})
    },
    musicUrl(e){
      const url ="../music/main?id="+e;
      wx.navigateTo({url});
    },
    listenerButtonPause(){
      let e = wx.getStorageSync("musicId");
      if(e){
        const url="../music/main?id="+e;
        wx.navigateTo({ url })
      }
    }
  }
}
</script>
<style scoped>

</style>
