<template>
  <div class="logo" v-show="show">
    <div class="modelProps">
      <div class="document">
        <div class="goodsSizeDo">
          <div class="goodsSizeSetMsg">
            <div class="gooodsSizePriceAndSize">
              <div>
                单价:
                <span>￥{{info.info.retail_price}}</span>
              </div>
              <div>
                库存:
                <span>{{info.info.goods_number}}件</span>
                <span></span>
              </div>
              <div>
                已选择
                <span></span>
              </div>
            </div>
            <div class="closeModel" @click="disappear">
              <i class="iconfont icon">&#xe641;</i>
            </div>
          </div>
          <div class="goodsSizeWrap">
            <div class="goodsSizeItemName">数量</div>
            <div class="goodsSizeListWrap">
              <div class="goodsBuyCount">
                <div class="onePx_border" @click="changeBuyNum(-1,info.info.goods_number)">-</div>
                <div class="onePx_border">{{goodsBuyNum}}</div>
                <div class="onePx_border" @click="e=>changeBuyNum(1,info.info.goods_number)">+</div>
              </div>
            </div>
          </div>
          <div class="goodsDoWrap">
            <div @click="Add">加入购物车</div>
            <div>立即下单</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: ["show", "info", "goodsBuyNum","id"],
  data() {
    return {};
  },
  methods: {
      ...mapActions("addcart",["getaddcartFn"]),
    Add() {
         this.getaddcartFn({goodsId:this.id,number:this.goodsBuyNum,productId:this.info.info.retail_price})
    },
    disappear() {
      this.$emit("handShow", false);
    },
    /*修改购买数量*/
    changeBuyNum(val, stock) {
      this.$emit("changNum", val, stock);
    }
  }
};
</script>
<style>
@import "../../assets/font_7yq9zqreacx/iconfont.css";
@import url("./index.css");
</style>