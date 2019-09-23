<template>
  <div class="nav">
    <router-link to="/page" class="link linknav">
      <li><i class="el-icon-s-home"></i></li>
      <li>首页</li>
    </router-link>
    <router-link to="/special" class="link linknav">
      <li><i class="el-icon-copy-document"></i></li>
      <li>专题</li>
    </router-link>
    <router-link to="/classify" class="link linknav">
      <li><i class="el-icon-menu"></i></li>
      <li>分类</li>
    </router-link>
    <router-link to="/cart" class="link linknav">
      <li><i class="el-icon-shopping-cart-1"></i></li>
      <li>购物车</li>
    </router-link>
    <router-link to="/mine" class="link linknav">
      <li><i class="el-icon-user"></i></li>
      <li>我的</li>
    </router-link>
  </div>
</template>
<script>
export default {};
</script>
<style>
@import url("./index.css");
</style>