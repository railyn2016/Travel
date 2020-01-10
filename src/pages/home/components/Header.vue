<template>
    <div class="header">
        <div class="header-left">
          <div class="iconfont back-icon">&#xe61f;</div>
        </div>
        <div class="header-input">
          <span class="iconfont">&#xe632;</span>
          输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
          <div class="header-right">
            <!-- {{this.city}} 默认json文件获取 不同于下面显示，最终显示是简化映射后的代码-->
            <!-- {{this.$store.state.city}} 根据前端页面选择地址-->
            <!-- {{this.doubleCity}} getter测试-->
            {{this.city}}
            <span class="iconfont arrow-icon">&#xe7ff;</span>
          </div>
        </router-link>
    </div>
</template>
<script>
// import { mapState, mapGetters } from "vuex";
import { mapState } from "vuex";
export default{
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']),
    //...mapGetters(['doubleCity'])
  }
  // props:{
  //   city:String
  // }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .header
    display: flex
    line-height: $headerHeight
    background :$bgColor
    color :#fff
    .header-left
      width:.64rem
      float:left
      .back-icon
        font-size :.4rem
        text-align :center
    .header-input
      flex:1
      height :.64rem
      line-height :.64rem
      margin-top:.12rem
      margin-left :.2rem
      background :#fff
      border-radius:.1rem
      color:#ccc
      padding-left .2rem
    .header-right
      min-width :1.04rem
      padding :0 0.1rem
      float:right
      text-align :center
      color :#fff
      .arrow-icon
        font-size :.4rem;
        margin-left :-0.04rem;

</style>
