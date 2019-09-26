<template>
  <div class="tabPageContent">
    <div @click="tosearch">
    <Header/>
    </div>
    <div class="tabsWrap">
      <div class="tabs">
        <div
          class="tablink"
          v-for="(item,ind) in categoryList"
          :key="item.id"
          @click="tab(ind,item.id)"
          :class="{Active:count===ind}"
        >
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>
    <div id="categogContet">
        <div
          class="categoryWrap"
          :style="{background:'url( '+ currentCategory.wap_banner_url +')',backgroundSize:'100%'}"
        >{{currentCategory.front_name}}</div>
        <div class="categoryTitle">-居家分类-</div>
        <div v-for="item in currentCategory.subCategoryList" :key="item.id" class="subcontent">
          <div class="subCategory">
            <img :src="item.wap_banner_url" alt class="wapurl" />
            <div class="subCategoryItemName">
              <span>{{item.name}}</span>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import Header from "../../components/header/index";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      count: 0,
      List: []
    };
  },
  components: {
    Header
  },
  computed: {
    ...mapState("classify", ["categoryList", "currentCategory"])
  },
  mounted() {
    this.getcategoryListFn();
    this.getSubClassifyFn();
  },
  methods: {
    ...mapActions("classify", ["getcategoryListFn", "getSubClassifyFn"]),
    tab(index, id) {
      this.count = index;
      this.getSubClassifyFn({ id });
    },
    tosearch(){
      console.log(1)
      this.$router.history.push('/search')
    }
  }
};
</script>
<style>
@import url("./index.css");
</style>