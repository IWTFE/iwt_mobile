<template>
    <div class="abc">

        <mt-header title="确认支付" class="back_login">
            <router-link to="/login" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button slot="right" icon="more"></mt-button>
        </mt-header>

        <div>
            <p class="pay_total">应付金额：2元</p>
            <ul class="ul_pay">
                <li>
                    <mt-radio
                            class="page-part"
                            title=""
                            v-model="value2"
                            :options="options1">

                    </mt-radio>
                </li>
            </ul>

        </div>

        <div class='small'>
            <mt-button size="large" type="danger" @click.native.prevent="startHacking">确认支付（资金2元）</mt-button>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'page-radio',
    data() {
      return {
        value1: '',
        value2: '1',

      };
    },
    methods:{
      startHacking () {
        this.$toast('跳转到微信接口！')
       }
    },
    created() {
      //this.options1 = ['资金余额   1489元', '焕彩余额  7074元'];
      this.options1 = [
      {
        label: '资金余额 1489元',
        value: '0'
      },
      {
        label: '焕彩余额 1489元',
        value: '1'
      }
    ];
  }

  };


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
   .mint-radio-core::after {top:6px;left:6px;}
</style>