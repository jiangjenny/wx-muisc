<template>
   <!-- 正在播放 -->
    <div class="Playing" @click="listenerButtonPause">
        <div class='wrap'>
          <i style="background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI1MzU5NTQ5NTE5IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIxNTIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDEwMjRjLTE0LjMzNiAwLTI1LjYtMTEuMjY0LTI1LjYtMjUuNnYtOTcyLjhjMC0xNC4zMzYgMTEuMjY0LTI1LjYgMjUuNi0yNS42czI1LjYgMTEuMjY0IDI1LjYgMjUuNnY5NzIuOGMwIDE0LjMzNi0xMS4yNjQgMjUuNi0yNS42IDI1LjZ6TTI2OC44IDc4MC44Yy0xNC4zMzYgMC0yNS42LTExLjI2NC0yNS42LTI1LjZ2LTQ4Ni40YzAtMTQuMzM2IDExLjI2NC0yNS42IDI1LjYtMjUuNnMyNS42IDExLjI2NCAyNS42IDI1LjZ2NDg2LjRjMCAxNC4zMzYtMTEuMjY0IDI1LjYtMjUuNiAyNS42ek0yNS42IDY1OS45NjhjLTE0LjMzNiAwLTI1LjYtMTEuMjY0LTI1LjYtMjUuNnYtMjQxLjE1MmMwLTE0LjMzNiAxMS4yNjQtMjUuNiAyNS42LTI1LjZzMjUuNiAxMS4yNjQgMjUuNiAyNS42djI0MS4xNTJjMCAxNC4zMzYtMTEuMjY0IDI1LjYtMjUuNiAyNS42ek03NTUuMiA3ODAuOGMtMTQuMzM2IDAtMjUuNi0xMS4yNjQtMjUuNi0yNS42di00ODYuNGMwLTE0LjMzNiAxMS4yNjQtMjUuNiAyNS42LTI1LjZzMjUuNiAxMS4yNjQgMjUuNiAyNS42djQ4Ni40YzAgMTQuMzM2LTExLjI2NCAyNS42LTI1LjYgMjUuNnpNOTk4LjQgNjU5Ljk2OGMtMTQuMzM2IDAtMjUuNi0xMS4yNjQtMjUuNi0yNS42di0yNDEuMTUyYzAtMTQuMzM2IDExLjI2NC0yNS42IDI1LjYtMjUuNnMyNS42IDExLjI2NCAyNS42IDI1LjZ2MjQxLjE1MmMwIDE0LjMzNi0xMS4yNjQgMjUuNi0yNS42IDI1LjZ6IiBwLWlkPSIyMTUzIiBmaWxsPSIjNzA1NGRkIj48L3BhdGg+PC9zdmc+); background-size:80rpx 80rpx; width:80rpx;height:80rpx;margin-top:20rpx;margin-left:20rpx"></i>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    //监听button暂停按钮
    listenerButtonPause(){
      let e = wx.getStorageSync("musicId");
      if(!e){
      }else{
        this.$emit('listenerButtonPause')
      }
    }
  }
}
</script>

<style>

</style>