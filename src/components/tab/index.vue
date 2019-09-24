<template>
  <div class="nav">
    <router-link to="/page" class="link linknav">
      <span class="el-icon-s-home"></span>
      <span>首页</span>
    </router-link>
    <router-link to="/special" class="link linknav">
      <span class="el-icon-copy-document"></span>
      <span>专题</span>
    </router-link>
    <router-link to="/classify" class="link linknav">
      <span class="el-icon-menu"></span>
      <span>分类</span>
    </router-link>
    <router-link to="/cart" class="link linknav">
      <span class="el-icon-shopping-cart-1"></span>
      <span>购物车</span>
    </router-link>
    <router-link to="/mine" class="link linknav">
      <span class="el-icon-user"></span>
      <span>我的</span>
    </router-link>
  </div>
</template>
<script>
export default {};
</script>
<style>
@import url("./index.css");
</style>