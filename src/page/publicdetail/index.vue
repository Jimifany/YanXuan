<template>
  <div class="noTabPageContent">
    <div class="header">
      <span class="iconfont left" @click="goBack">&#xe624;</span>
      <div class="title">{{info.info.name}}</div>
      <div class="right"></div>
    </div>
    <div class="goodsPage">
      <swiper class="banner-list" :options="swiperOption" ref="bannerlist">
        <swiperSlide v-for="item in info.gallery" :key="item.id">
          <img :src="item.img_url" alt  class="slide"/>
        </swiperSlide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
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
    <div class="goodsComment">
        <div class="goodsCommentTitle">
          <div>评论 ({{info.comment.count}})</div>
          <div class="goodscount"></div>
           <div>选择规格 ></div>
        </div>
    </div>
    <div class="commentList">
       <div class="commentItem">
           <div class="userInfo">
             <div>匿名用户</div>
             <div>{{info.comment.data.add_time}}</div>
           </div>
           <div class="userComment">
               {{info.comment.data.content}}
           </div>
           <div class="commentPicList">
               <div v-for="item in info.comment.data.pic_list" :key="item.id">
                  <img :src="item.pic_url" alt="" class="commentimg">
               </div>
           </div>
       </div>
    </div>
    <div class="goodsAttribute">
      <div class="goodsAttributeLine">商品参数</div>
      <div class="goodsAttributeList">
         <div class="goodsAttributeItem" v-for="item in info.attribute" :key="item.id">
            <div class="attributeLabel">
                {{item.name}}
            </div>
            <div class="attributeContent">
               {{item.value}}
            </div>
         </div>
      </div>
    </div>
    <div class="topicDetailImg">
            <p v-html="info.info.goods_desc"></p>
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
import "swiper/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Goodscart from "../../components/goodscart/index";
export default {
  name: "goods",
  data() {
    return {
      goodsBuyNum: 0,
      show: false,
       swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
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
    Goodscart,
    swiper,
    swiperSlide
  }
};
</script>
<style>
@import "../../assets/font_n2f1soil41/iconfont.css";
@import url("./index.css");
.topicDetailImg p img{
  width: 100%;
}
</style>