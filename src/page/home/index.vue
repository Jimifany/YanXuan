<template>
    <div class="content">
       <div class="tabPageContent">
           <router-view></router-view>
       </div>
       <Tab/>
    </div>
</template>
<script>
import Tab from '../../components/tab/index'
export default {
   components: {
       Tab
   }
}
</script>
<style>
    @import url('./index.css');
</style>