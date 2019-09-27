<template>
  <div class="noTabPageContent">
    <div class="header">
      <span class="iconfont left" @click="goBack">&#xe624;</span>
      <div class="title">{{brand.name}}</div>
      <div class="right"></div>
    </div>
    <div class="brandDetail">
      <img :src="brand.list_pic_url" alt class="picurl" />
      <div class="breadDesc">{{brand.simple_desc}}</div>
    </div>
    <div class="goodsListWrap">
      <div class="goodsList">
          <div class="goodsItem" v-for="item in goodsList" :key="item.id">
            <img :src="item.list_pic_url" alt class="goodsItemImg" />
            <div class="goodsItemName">{{item.name}}</div>
            <div class="goodsItemPrice">￥{{item.retail_price}}元</div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "cytodetail",
  data () {
      return {
          List:[]
      }
  },
  computed: {
    ...mapState("cytodetail", ["brand", "goodsList"])
  },
  mounted() {
    let id = this.$route.params;
    this.getcytodetailFn(id);
    this.getcytoListFn({brandId:id,page:1,size:10});
    // this.getcytoListFn();
  },
  methods: {
    ...mapActions("cytodetail", ["getcytodetailFn", "getcytoListFn"]),
 
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style>
@import url("./index.css");
</style>