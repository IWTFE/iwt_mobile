<template>
    <div class="abc">

        <mt-header title="省级积分兑换" class="back_login">
            <router-link to="/login" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button slot="right" icon="more"></mt-button>
        </mt-header>
        <img src="../assets/images/jifen.jpg" width="100%">
        <div>
            <p class="pay_total">可兑换奖品：中国福利彩票</p>
            <div class="box_sjjf">
                <p>10000</p>
                <p>省级积分</p>
            </div>
            <div class="box_z">
                <p>0</p>
                <p>注</p>
            </div>
            <div style="clear:both"></div>
            <p class="pay_total">您账户内焕彩余额：<span>12345</span>注</p>

        </div>

        <div class='small'>
            <mt-button size="large" type="danger" @click.native.prevent="startHacking">兑换</mt-button>
        </div>

</template>
<script>
  export default {

    data() {
      return {

      };
    },
    methods:{
      startHacking () {
        this.$toast('开始兑换！')
       }
    },
    created() {

    }
  };


</script>


</script>
<style>
 .rePos{margin-left:10px;margin-top:20px;}
 .ul_list1{margin-top:10px;padding:0 10px;}
 .ul_list1 li{width:100%;height:40px;border:1px solid #f5f5f5;background:#fff;line-height:40px;margin-bottom:5px;}
 .btn{float:right;margin-top:15px;margin-right:5px;width:15px;height:15px;background:url('../assets/images/remove.png') no-repeat center;background-size:100%;}
 .bottom_div{position:absolute;height:50px;bottom:0;width:100%;background:#000;line-height:50px;}
   .btn_add{float:left;margin-left:20px;}
   .btn_touzhu{float:right;margin-right:20px;}
   .text_price{float:left;color:#fff;margin-left:30px;}
   .pay_total{text-align:center;padding:20px 0;}
   .small{padding:0 20px;margin-top:20px;}
   .box_sjjf{border:1px solid #fa7f05;background:#fa7f05;color:#fff;width:100px;padding:5px 0;background-size:100%;text-align:center;margin-left:20px;float:left;border-radius: 5px;}
   .box_z{border:1px solid #fa7f05;background:#fa7f05;color:#fff;width:80px;padding:5px 0;text-align:center;margin-right:20px;float:right;border-radius: 5px;}
</style>