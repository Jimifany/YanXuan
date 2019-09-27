<template>
  <div class="noTabPageContent">
    <div class="searchPage">
      <div class="searchFix">
        <div class="goBack">
          <span class="iconfont">&#xe624;</span>
        </div>
        <span class="iconfont search">&#xe6a2;</span>
        <input type="text" placeholder="520元礼包抢先领" class="searchInput" value v-model="name" @input="search"/>
        <div class="cancelSearch">取消</div>
      </div>
    </div>
    <div>
      <commList :hotKeywordList="hotKeywordList" v-show="show" />
    </div>
    <div>
      <Input v-show="panelShow" />
    </div>
  </div>
</template>
<script>
import commList from "../../components/commlist/index";
import Input from "../../components/serach/index";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      name: "",
      show: true,
      panelShow: false
    };
  },
  computed: {
    ...mapState("search", ["hotKeywordList", "topList"])
  },
  mounted() {
    this.getSearchFn();
    // this.getclearFn()
    // this.getQueryFn()
  },
  components: {
    commList,
    Input
  },
  methods: {
    ...mapActions("search", ["getSearchFn", "getQueryFn"]),
    search() {
      this.show = false;
      this.panelShow = true;
      let params = {
        keyword: this.name
      };
      this.getQueryFn(params); 
      this.getSearchFn();
    }
  }
};
</script>
<style>
@import url("./index.css");
</style>