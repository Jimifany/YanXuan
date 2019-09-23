<template>
  <div><div ><dt></dt></div></div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "special",
  data(){
return{
    // Special:[]
}
  },
  computed: {
    ...mapState(["specialList"])
  },
  created() {
    this.$store.dispatch("getspecialListFn");
  },
  mounted(){
    //   this.Special=
     console.log(this.$store.state.specialList) ;
    //   console.log(this.Special)
    // this.getspecialListFn()
  }
};
</script>
<style>
@import url("./index.css");
</style>