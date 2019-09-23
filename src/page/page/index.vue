<template>
  <div class="wrap">
    <!-- <span v-for="(item,index) in list" :key="index">
          {{item.image_url}}
          <img :src="item.image_url" alt="">
    </span>-->
    <div class="focus">
      <swiper class="banner-list" :options="swiperOption" ref="bannerlist">
        <swiperSlide v-for="item in list" :key="item.id">
          <img :src="item.image_url" alt class="img" />
        </swiperSlide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="channelWrap">
      <div class="channelItem" v-for="item in channel" :key="item.id">
        <li>
          <img :src="item.icon_url" alt class="iconurl" />
        </li>
        <li>{{item.name}}</li>
      </div>
    </div>
    <div class="brandBox">
      <div class="brandTitle">品牌制造商直供</div>
      <div class="brandwrap">
          <div class="brandItem" v-for="item in brandList" :key="item.id">
           <div class="brandItemName">{{item.name}}</div>
           <div class="brandItemMinPrice">{{item.floor_price}}元起</div>
            <img :src="item.new_pic_url" alt="" class="newurl">
      </div>
     
      </div>
    </div>
    <div class="newGoodsBox">
        <div class="newGoodsTitle">新品首发</div>
        <div class="newGoodsWrap">
            <div class="newGoodsItem">
                <img :src="item.list_pic_url" alt="" class="picurl">
                <div class="newGoodsName">蔓越莓曲奇 200克</div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import "swiper/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "home",
  data() {
    return {
      list: [],
      channel: [],
      brandList:[],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  computed: mapState(["Banner", "brandList", "channel","newGoodsList"]),
  mounted() {
    this.$store.dispatch("home/getHome");
    this.list = this.$store.state.home.Banner;
    this.channel = this.$store.state.home.channel;
    this.brandList=this.$store.state.home.brandList;
     this.newGoodsList=this.$store.state.home.newGoodsList;
  },
  methods: {},
  components: {
    swiper,
    swiperSlide
  }
};
</script>
<style>
@import url("./index.css");
</style>