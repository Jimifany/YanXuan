<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
*{
    margin: 0px;
    padding: 0px;
  }
  html,body,#app{
    width: 100%;
    height: 100%;
  }
  html{
    font-size: calc(100/375*100vw)
  }
</style>
