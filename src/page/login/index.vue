<template>
    <div className="loginBox">
        <div className="logo">
          <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
        </div>
        <div className="loginMain">
          <div className="inputWrap onePx_bottom">
            <input type="text"  defaultValue={15323807318} placeholder="请输入手机号码" />
          </div>
          <div className="inputWrap onePx_bottom">
            <input type="password" defaultValue={123456} placeholder="请输入登录密码" />
          </div>
          <div className="loginBtn">
            <Button type="primary">登录</Button>
          </div>
        </div>
      </div>
</template>
<script>
export default {
    
}
</script>
<style>
    @import url('index.scss');
</style>