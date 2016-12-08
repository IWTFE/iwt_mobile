<template>
   <div>
      <div class="page-header-main">
        <mt-header title="注册用户" class="back_login">
          <router-link to="/login" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
          <mt-button slot="right" icon="more"></mt-button>
        </mt-header>
        <div class="page-field">
            <div class="page-part">
              <mt-field placeholder="请输入手机号" type="email"></mt-field>
              <mt-field  placeholder="请输入验证码">
                   <mt-button class="button_middle" size="small" type="primary">获取验证码</mt-button>
              </mt-field>
            </div>
         </div>
         <div class="sel_div">
             <div class="page-picker-wrapper">
                  <mt-picker :slots="addressSlots" @change="onAddressChange" :visible-item-count="5"></mt-picker>
             </div>

         </div>

         </div>
      </div>
    </div>
</template>

 <script>
