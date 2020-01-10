<template>
    <div class="header">
      <router-link to="/">
        <div class="iconfont header-back">&#xe61f;</div>
      </router-link>
      城市选择
    </div>
</template>

<script>
export default {
  name:'cityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .header
    position :relative
    height :$headerHeight
    line-height :$headerHeight
    background :$bgColor
    color :#fff
    text-align :center
    font-size :.32rem
    overflow :hidden
    .header-back
      position :absolute
      left :0
      top :0
      text-align :center
      font-size :.4rem
      width .64rem
      color :#fff
</style>