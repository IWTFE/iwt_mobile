<template>
    <div class="page-field">
        <div class='bigLogo'><img src="../assets/images/bigLogo.png" width="50%"></div>
        <div class="page-part">
            <mt-field placeholder="请输入手机号" type="photo" v-model="ruleForm2.account" auto-complete="off"></mt-field>
            <mt-field placeholder="密码" type="password" v-model="ruleForm2.checkPass" auto-complete="off"></mt-field>
            <mt-button type="danger" size="large" @click.native.prevent="handleSubmit2">登陆</mt-button>
        </div>
        <div class="page-part">
            <div class="other_link">
                <router-link tag="span" class="re_sn" to="/re_sn">
                    <a>忘记密码</a>
                </router-link>
                <span>|</span>
                <router-link tag="span" to="/sign">
                    <a>注册账户</a>
                </router-link>
            </div>
        </div>


</template>

<script>
export default {
   name: 'page-field',
    data(){
       return {
         ruleForm2:{
           account:"",
           checkPass:""
         },
         rules2:{
          account:[
           {required:true,message:"请输入手机号",trigger:'blur'}
            //{ validator: validaePass }
          ],
          checkPass:[
          { required: true, message: '请输入密码', trigger: 'blur' }
          ]
         },
         checked:true
       }
    },
    methods:{
            handleReset2() {
              this.$refs.ruleForm2.resetFields();
            },
            handleSubmit2(ev) {
              var _this=this;
               _this.$router.replace('/home');
              this.$refs.ruleForm2.validate((valid) => {
                if (valid) {
                  //_this.$router.push('/home');

                } else {
                  console.log('error submit!!');
                  return false;
                }
              });
            }
    }
}


</script>
<style type="text/css">
.bigLogo{text-align:center;margin-top:120px;}
.page-part{width:90%;margin:auto;margin-top:20px;}
.other_link{margin:auto;width:100%;text-align:center;margin-top:260px;}
.other_link a{text-decoration:none;font-size:12px;color:red;padding:0 2px}
.other_link span{color:red;font-size:12px;}
.re_sn{cursor:pointer}



</style>