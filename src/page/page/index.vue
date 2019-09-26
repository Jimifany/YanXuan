<template>
  <div class="wrap">
    <div class="focus">
      <swiper class="banner-list" :options="swiperOption" ref="bannerlist">
        <swiperSlide v-for="item in banner" :key="item.id">
          <img :src="item.image_url" alt class="img" />
        </swiperSlide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="channelWrap">
      <router-link
        :to="`/homedetail/${item.id}`"
        class="channelItem"
        v-for="item in channel"
        :key="item.id"
      >
        <li>
          <img :src="item.icon_url" alt class="iconurl" />
        </li>
        <li>{{item.name}}</li>
      </router-link>
    </div>
    <div class="brandBox">
      <div class="brandTitle">品牌制造商直供</div>
      <div class="brandwrap">
        <router-link
          :to="`/cytodetail/${item.id}`"
          class="brandItem"
          v-for="item in brandList"
          :key="item.id"
        >
          <div class="brandItemName">{{item.name}}</div>
          <div class="brandItemMinPrice">{{item.floor_price}}元起</div>
          <img :src="item.new_pic_url" alt class="newurl" />
        </router-link>
      </div>
    </div>
    <div class="newGoodsBox">
      <div class="newGoodsTitle">新品首发</div>
      <div class="newGoodsWrap">
        <router-link
          :to="`/goodsdetail/${item.id}`"
          class="newGoodsItem"
          v-for="item in newGoodsList"
          :key="item.id"
        >
          <img :src="item.list_pic_url" alt class="picurl" />
          <div class="newGoodsName">{{item.name}}</div>
          <div class="newGoodsPrice">{{item.retail_price}}</div>
        </router-link>
      </div>
    </div>
    <div class="hotGoodsBox">
      <div class="hotGoodsTitle">人气推荐</div>
      <div class="hotGoodsWrap">
        <router-link
          :to="`/publicdetail/${item.id}`" class="hotGoodsItem" v-for="item in hotGoodsList" :key="item.id">
          <img :src="item.list_pic_url" alt class="list_picurl" />
          <div class="hotGoodsInfos">
            <div class="hotGoodsName">{{item.name}}</div>
            <div class="hotGoodsInfo">{{item.goods_brief}}</div>
            <div class="hotGoodsPrice">{{item.retail_price}}</div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="topGoodsBox">
      <div class="topGoodsTitle">专题精选</div>
      <div class="topGoodsWrap">
        <swiper class="banner-list" :options="swiperOption" ref="bannerlist">
          <swiperSlide class="topGoodsItem" v-for="item in topicList" :key="item.id">
            <img :src="item.item_pic_url" alt class="itemurl" />
            <div class="topGoodSubTitle">
              {{item.title}}
              <span class="topGoodPrice">￥{{item.price_info}}元起</span>
            </div>
            <div class="topGoodTitle">{{item.subtitle}}</div>
          </swiperSlide>
        </swiper>
      </div>
    </div>
    <div class="cateGoryBox">
      <div class="cateGory" v-for="list in categoryList" :key="list.id">
        <div class="cateGoryName">{{list.name}}</div>
        <router-link
          :to="`/publicdetail/${item.id}`" class="cateGoryGoodsWrap" v-for="item in list.goodsList" :key="item.id">
          <img :src="item.list_pic_url" alt class="goodsItemImg" />
          <div class="goodsItemName">{{item.name}}</div>
          <div class="goodsItemPrice">￥{{item.retail_price}}</div>
        </router-link>
        <div class="categoryMoreGoods">
          <div>更多{{list.name}}好物</div>
          <img src="../../static/img/icon_go_more.png" class="morePng" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import "swiper/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
// import morePng from '../../static/img/icon_go_more.png'
export default {
  name: "home",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  computed: {
    ...mapState("home", [
      "banner",
      "brandList",
      "channel",
      "hotGoodsList",
      "newGoodsList",
      "topicList",
      "categoryList"
    ])
  },
  mounted() {
    this.getHome();
  },
  methods: {
    ...mapActions("home", ["getHome"]),
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>
<style>
@import url("./index.css");
</style>