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
  html,body{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-size: calc(100/375*100vw)
  }
</style>
