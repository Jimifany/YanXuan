<template>
  <div class="login-page">
    <div class="login-box">
      <div class="login-logo">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt />
      </div>
      <div class="login-main">
        <div class="login-input">
          <input type="text" placeholder="请输入手机号" v-model="mobile"/>
        </div>
        <div class="login-input">
          <input type="password" placeholder="请输入密码" v-model="password"/>
        </div>
        <div class="login-input">
          <button @click="handleLogin()">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {login} from '../../server/index'
export default {
     name:'login',
    data() {
      return {
        mobile:"",
        password:''
      }
    },
    methods: {
      handleLogin(){
        let params={
          mobile: this.mobile,
          password: this.password
        }
        console.log(params)
        login(params).then(res=>{
          console.log(res)
          this.$router.history.push('/home')
        })
      }
    },
}
</script>
<style>
@import url('./index.css');
</style>