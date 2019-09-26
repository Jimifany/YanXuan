<template>
  <div>
    <div class="noTabPageContent">
      <div class="header">
        <div class="left" @click="Back">&lt;</div>
        <div class="mi">{{detailList.title}}</div>
        <div class="right"></div>
      </div>
      <div class="DetailBox">
        <div class="IMG" v-html="detailList.content"></div>
        <div class="com">
          <p class="board">
            <span>精选留言</span>
            <span class="icon iconfont icon-youdaoyunbiji"></span>
          </p>
          <!-- {{commonList}} -->
          <ul>
            <li v-for="(item,index) in commonList.data" :key="index">
              <p class="Items">
                <span>匿名评论</span>
                <span>{{item.add_time}}</span>
              </p>
              <p class="Text">{{item.content}}</p>
            </li>
             <!-- <li>
              <p class="Items">
                <span>匿名评论</span>
                <span>243224534544645</span>
              </p>
              <p class="Text">很不错呦</p>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { specialDetail } from "../../server";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("specialDetail", ["detailList", "commonList"])
  },
  methods: {
    ...mapActions("specialDetail", ["getdetailFn", "getCommonFn"]),
    Back() {
      this.$router.go(-1);
    }
  },
  created() {
    let id = this.$route.query.newId;
    console.log(id);
    this.getdetailFn({ id: id });
    console.log(this.$route.query.newId);
    this.getCommonFn({
      valueId: id,
      typeId: 1
    });
  },
  mounted() {}
};
</script>

<style>
@import url("./index.scss");
</style>