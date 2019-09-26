<template>
  <div class="noTabPageContent">
    <div class="header">
      <span class="iconfont left" @click="goBack">&#xe624;</span>
      <div class="title">{{info.info.name}}</div>
      <div class="right"></div>
    </div>
    <div class="goodsPage">
      <img :src="info.info.list_pic_url" alt class="slide" />
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
      <div class="goodsMsgWrap">
        <div class="goodsNameTitle">{{info.info.name}}</div>
        <div class="goodsNameSubTitle">{{info.info.goods_brief}}</div>
        <div class="goodsPriceTitle">￥{{info.info.retail_price}}</div>
      </div>
    </div>
    <div class="goodsSize">
      <div class="goodcott"></div>
      <div class="goodcot">x {{this.goodsBuyNum}}</div>
      <div class="goodscot" @click="Show">选择规格 ></div>
    </div>
    <div class="goodsAttribute">
      <div class="goodsAttributeLine">商品参数</div>
    </div>
    <div class="goodsAttribute">
      <div class="goodsAttributeLine">常见问题</div>
      <div v-for="(item,index) in info.issue" :key="index">
        <div class="problemLabel">
          <span>√</span>
          {{item.question}}
        </div>
        <div class="problemContent">{{item.answer}}</div>
      </div>
    </div>
    <div class="goodsAttribute">
      <div class="goodsAttributeLine">大家都在看</div>
    </div>
    <div class="goodsList">
      <div class="goodsItem" v-for="item in goodsList" :key="item.id">
        <img :src="item.list_pic_url" alt class="goodsItemImg" />
        <div class="goodsItemName">{{item.name}}</div>
        <div class="goodsItemPrice">￥{{item.retail_price}}</div>
      </div>
    </div>
    <div class="goodsPageDo">
      <div class="isLike like">★</div>
      <div class="cartNum">
        <i class="iconfont">
          &#xe63b;
          <span>5</span>
        </i>
      </div>
      <div class="addCart" @click="Add">加入购物车</div>
      <div class="payGoods">立即购买</div>
    </div>
    <div>
      <Goodscart
        v-show="show"
        :show="show"
        @handShow="handClick"
        :info="info"
        :goodsBuyNum="goodsBuyNum"
        @changNum="changeClick"
        :id="this.$route.params.id"
      />
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import Goodscart from "../../components/goodscart/index";
export default {
  name: "goods",
  data() {
    return {
      goodsBuyNum: 0,
      show: false,
    };
  },
  computed: {
    ...mapState("goods", ["goodsList", "info", "goodsCount"])
  },
  mounted() {
    let id = this.$route.params;
    this.getgoodsListFn(id);
    this.getinfoFn(id);
    this.getgoodsCountFn(id);
  },
  methods: {
    ...mapActions("goods", ["getgoodsListFn", "getinfoFn", "getgoodsCountFn"]),
    ...mapActions("addcart","getaddcartFn"),
    goBack() {
      this.$router.go(-1);
    },
    Show() {
      this.show = true;
    },
    //添加到购物车
    Add(){
      console.log(1)
      // let id = this.$route.params;
      // this.getaddcartFn({goodsId:id,number:this.goodsBuyNum,productId:info.info.retail_price})
      //  console.log(id)
    },
    handClick(flag) {
      console.log(flag);
      this.show = flag;
    },
    changeClick(val, stock) {
      console.log(val);
      if (this.goodsBuyNum + val >= 0 && this.goodsBuyNum + val <= stock) {
        this.goodsBuyNum = this.goodsBuyNum + val;
      }
    }
  },
  components: {
    Goodscart
  }
};
</script>
<style>
@import "../../assets/font_n2f1soil41/iconfont.css";
@import url("./index.css");
</style>