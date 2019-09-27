<template>
  <div>
    <div class="serviceList">
      <li>
        <span>★</span>30天无忧退货
      </li>
      <li>
        <span>★</span>48小时快速退款
      </li>
      <li>
        <span>★</span>满88元免邮费
      </li>
    </div>
    <div class="cartGoodsListWrap">
      <div v-for="item in cartList" :key="item.id">
        <div class="cartGoodsItem">
          <div class="isCheckItem">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg=="
              alt="check"
              class="isCheckItem"
            />
          </div>
          <div class="goodsImg">
            <div>
              <img :src="item.list_pic_url" alt class="goodsImg" />
            </div>
          </div>
          <div class="cartGoodsMsg">
            <div>{{item.goods_name}}</div>
            <div>{{item.goods_specifition_name_value}}</div>
            <div :style="{color: 'red'}">￥{{item.retail_price}}</div>
          </div>
          <div class="cartGoodsNum">x{{item.number}}</div>
        </div>
        <div class="cartGoodsDo">
      <div class="isCheckItem">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg=="
          alt="check"
          class="isCheckItem"
        />
      </div>
      <div class="cartMsgAll">已选({{item.number}}) ￥{{item.retail_price}}</div>
      <div class="cartAllDoButton">编辑</div>
      <div class="cartAllDoButton pay">下单</div>
    </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "cart",
  computed: {
    ...mapState("cart", ["cartList"])
  },
  mounted() {
    this.getcartFn();
  },
  methods: {
    ...mapActions("cart", ["getcartFn"])
  }
};
</script>
<style>
@import url("./index.css");
</style>