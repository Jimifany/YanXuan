<template>
  <div>
    <div class="tabPageContent">
      <a href v-for="(item,index) in specialList" :key="index">
        <img v-lazy="item.scene_pic_url" />
        <div class="topicItemTitle">{{item.title}}</div>
        <div class="topicItemSubtitle">{{item.subtitle}}</div>
        <div class="topicItemPrice">{{item.price_info}}元起</div>
      </a>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "special",
  computed: {
    ...mapState(["specialList"])
  },
  created() {
    this.$store.dispatch("getspecialListFn");
  },
  mounted() {
    // console.log(this.list);
    // console.log(this.$store.state);
    //  this.list=this.$store.state.specialList;
    // console.log(this.list)
    // this.getspecialListFn()
  }
};
</script>
<style>
@import url("./index.css");
</style>