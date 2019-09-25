<template>
  <div>
    <div class="noTabPageContent" >
       <div class="header">
      <div class="left">&lt;</div>
      <div class="mi">{{detailList.title}}</div>
      <div class="right"></div>
    </div>
    <div class="DetailBox">
      <!-- <div class="Pic" v-for="(value,key,index) in detailList" :key="index"> -->
        <div class="IMG" v-html="detailList.content"></div>
        <!-- </div> -->
        <!-- <img :src="detailList.item_pic_url" alt=""> -->

    </div>
   
    </div>
   
 
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { specialDetail } from '../../server';
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("specialDetail", ["detailList"])
  },
  methods: {
    ...mapActions("specialDetail", ["getdetailFn"])
    
  },
  created() {
    let id = this.$route.query.newId;
    console.log(id);
    this.getdetailFn({ id: id });
    console.log(this.$route.query.newId);
    
  },
  mounted() {
    
  }
};
</script>

<style>
@import url("./index.scss");
</style>