<template>
  <div class="searchMsg">
    <div class="searchItemWrap">
      <div class="title">
        历史记录
        <i class="iconfont deleted">&#xe699;</i>
      </div>
      <div class="listWrap">
        <!-- <button class="listItem" v-for="(item,index) in hotKeywordList" :key="index">
              {{item.keyword}}
        </button>-->
      </div>
    </div>
    <div class="searchItemWrap">
      <div class="title">热门搜索</div>
      <div class="listWrap">
        <button
          class="listItem"
          v-for="(item,index) in hotKeywordList"
          :key="index"
        >{{item.keyword}}</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props:['hotKeywordList']
};
</script>
<style>
@import "../../assets/font_lpfogtet8l/iconfont.css";
@import "../../assets/font_ns3r446khn/iconfont.css";
@import "../../assets/font_oh3dxwyo25c/iconfont.css";
@import url("./index.css");
</style>