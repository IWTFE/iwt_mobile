<template>
    <div>
        <div class="page-header-main">
            <mt-header title="找回登陆密码" class="back_login">
                <router-link to="/login" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
                <mt-button slot="right" icon="more"></mt-button>
            </mt-header>
            <div class="page-field">
                <div class="page-part">
                    <mt-field placeholder="请输入手机号" type="email"></mt-field>
                    <mt-field placeholder="请输入验证码">
                        <mt-button class="button_middle" size="small" type="primary">获取验证码</mt-button>
                    </mt-field>
                </div>
                <div class="button_pos">
                    <mt-button type="danger" size="large">提交</mt-button>
                </div>
            </div>

        </div>
    </div>
</template>

<style>
  .page-tabbar {
    overflow: hidden;
    height: 100vh;
  }
  .page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
  }
  .button_middle{margin-top:8px;}
.button_pos{margin-top:20px;padding:0 20px;}


</style>