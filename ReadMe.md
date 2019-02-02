

# 🎵♥music(音乐播放器) / 微信小程序

## 项目说明

运行项目时，微信开发者工具只需将 dist 文件夹放入即可。`特别提醒:  请将微信开发者工具中的 【不校验合法域名】 勾选！ 否则无法获取`

数据均来自 [网易云API](https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3), 启动项目前，`特别注意：请先启动网易云API服务器`。以下是具体操作步骤：

```bash
安装
$ git clone git@github.com:Binaryify/NeteaseCloudMusicApi.git
$ npm install 或者 yarn（建议用）

运行
$ node app.js
服务器启动默认端口为 3000, 若不想使用 3000 端口 , 可使用以下命令 : Mac/Linux

$ PORT=4000 node app.js
windows 下使用 git-bash 或者 cmder 等终端执行以下命令 :

$ set PORT=4000 && node app.js  （本人使用的是4000端口）


```

`因涉及到账号资质问题，此小程序并没有上线`

## 项目完成情况

```
- 页面
  - index  首页
  - music  播放界面
  - search  搜索界面
  - playlist  播放列表
  - songItem  歌单详情
  - ranking  歌曲排行榜
  - MoreSongList  精品歌单推荐
- 功能
  - 搜索
  - 加入播放列表
  - 暂停/播放
  - 整个歌单加入播放列表
  - 刷新播放列表
  - 上一曲/下一曲
  - 点赞
  - 评论轮播
  - banner轮播图
 
 还有部分功能未完成，后续有时间在完善；
 小程序结合mpvue的demo，同时借鉴了（https://github.com/x751685875）写的项目，主要目的是学习小程序；并非原创，如有侵权，拜托拜托！
 借鉴同时，有在原项目的基础上进行功能逻辑的修改，并且将原项目进行代码的组件化，提高了复用性，减少代码的冗余
```

## 项目预览

- 橙色区域均为可点击区域

![CUev6A.png](https://s1.ax1x.com/2018/05/06/CUev6A.png)
![CUeqYD.png](https://s1.ax1x.com/2018/05/06/CUeqYD.png)
![CUmSmt.png](https://s1.ax1x.com/2018/05/06/CUmSmt.png)
![CUeXSH.png](https://s1.ax1x.com/2018/05/06/CUeXSH.png)
![CUeLfe.png](https://s1.ax1x.com/2018/05/06/CUeLfe.png)
![CUejld.png](https://s1.ax1x.com/2018/05/06/CUejld.png)
![CUmp0P.png](https://s1.ax1x.com/2018/05/06/CUmp0P.png)
![CUexOI.png](https://s1.ax1x.com/2018/05/06/CUexOI.png)

## Build Setup

```bash
# install dependencies
npm install 或者 yarn

# serve with hot reload at localhost:8080
npm run dev （运行）

# build for production with minification
npm run build （打包）

# build for production and view the bundle analyzer report
npm run build --report
```
For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).