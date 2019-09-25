<template>
  <div>
    <div class="tabPageContent">
      <!-- <router-link :to="{path:'/specialDetail',query:{id:item.id}}"> -->
      <a v-for="(item,index) in specialList" :key="index" @click="Todetail(item.id)">
        <img v-lazy="item.scene_pic_url" />
        <div class="topicItemTitle">{{item.title}}</div>
        <div class="topicItemSubtitle">{{item.subtitle}}</div>
        <div class="topicItemPrice">{{item.price_info}}元起</div>
      </a>
      <!-- <p></p> -->
      <!-- </router-link> -->
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "special",
  computed: {
    ...mapState("special", ["specialList"])
  },
  mounted() {
    this.getspecialListFn();
  },
  methods: {
    ...mapActions("special", ["getspecialListFn"]),
    Todetail(id) {
      console.log(11111)
      console.log(id);
      this.$router.push({ path: `/specialDetail/${id}`, query: { newId: id } });
    }
  }
};
</script>
<style>
@import url("./index.css");
</style>