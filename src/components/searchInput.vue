<template>
  <!-- 搜索组件 -->
  <div class="search">
    <input type="text" placeholder="搜索歌曲" class="search-index" @input="bindKeyInput">
    <icon @click="searchI" type="search" size="25"/>
  </div>
</template>

<script>
export default {
  methods: {
    bindKeyInput(e) {
        this.bindKeyInput = e.target.value;
    },
    searchI() {
      let searchValue = this.bindKeyInput;
      this.$emit('searchI',searchValue)
    }
  }
}
</script>

<style>
</style>