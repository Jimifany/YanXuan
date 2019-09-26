<template>
  <div class="noTabPageContent">
    <div class="header">
      <span class="iconfont left" @click="goBack">&#xe624;</span>
      <div class="title">奇趣分类</div>
      <div class="right"></div>
    </div>
    <div class="personWrap" ref="wrapper">
      <div ref="cont" class="cont">
        <div
          class="personTab"
          v-for="(item,ind) in brotherCategory"
          :key="item.id"
          @click="tab(ind,item.id)"
          :class="{activelink:count===ind}"
        >
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>
    <div class="categoryDetail">
         <div>{{currentCategory.name}}</div>
          <div>{{currentCategory.front_name}}</div>
      <div v-for="item in goodsList" :key="item.id" class="subcontent">
        <div class="subCategory">
          <img :src="item.list_pic_url" alt class="wapurl" />
          <div class="subCategoryItemName">
            <span>{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import { mapState, mapActions } from "vuex";
import "./index.scss";
export default {
  data() {
    return {
      count: 0,
      List: [],
      index
    }
  },
  computed: {
    ...mapState("category", ["brotherCategory"]),
    ...mapState("classify", ["currentCategory"]),
    ...mapState("cytodetail", ["goodsList"])
  },
  mounted() {
    let id = this.$route.params;
    this.getcurrentCategoryFn(id);
    this.$nextTick(() => {
          this.verScroll();
    });
    this.getcytoListFn({brandId:id,page:1,size:10});
  },
  methods: {
    ...mapActions("classify", ["getSubClassifyFn"]),
    ...mapActions("category", ["getcurrentCategoryFn"]),
      ...mapActions("cytodetail", [ "getcytoListFn"]),
    tab(index, id) {
      this.count = index;
      this.getSubClassifyFn({ id });
    },
    goBack(){
        this.$router.go(-1)
    },
    verScroll() {
      let width = this.brotherCategory.length * 110; // 动态计算出滚动区域的大小，前面已经说过了，产生滚动的原因是滚动区域宽度大于父盒子宽度
      this.$refs.cont.style.width = width + "px"; // 修改滚动区域的宽度
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            startX: 0, // 配置的详细信息请参考better-scroll的官方文档，这里不再赘述
            click: true,
            scrollX: true,
            scrollY: false,
            eventPassthrough: "vertical"
          });
        } else {
          this.scroll.refresh(); //如果dom结构发生改变调用该方法
        }
      });
    }
  }
};
</script>
<style>
@import "../../assets/font_ns3r446khn/iconfont.css";
@import url("./index.css");
</style>