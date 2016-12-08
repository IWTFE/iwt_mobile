<template>
    <div class="abc">
        <mt-header title="确认投注" class="back_login">
            <router-link to="/login" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button slot="right" icon="more"></mt-button>
        </mt-header>

        <div class="rePos">
            <mt-button size="small">+自选</mt-button>
            <mt-button size="small" @click="add()">+机选</mt-button>
            <mt-button size="small" @click="removeAll()">清空</mt-button>
        </div>
        <div>
            <ul class="ul_list1">
                <li v-for="(item,index) in arrList" v-bind:index="index" v-on:remove="arrList.splice(index,1)">
                    {{str}}
                    <div class="btn" @click="remove(index)"></div>
                </li>
            </ul>

        </div>

        <div class="bottom_div">
            <div class="text_price">
                <span>{{total}}</span><span>注，</span><span>{{price}}</span><span>元</span>
            </div>
            <div class="btn_touzhu">
                <router-link to="/pay" slot="left">
                    <mt-button size="small" type="primary" v-on:click="id-selected">去投注</mt-button>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
      data(){
         return{
         count:1,
         str:'"1,2,3,4,8,9,1|3"',
         arrList:[]
      }
      },
      methods:{
         add:function(){
             this.arrList.push(this.str);

         },
         remove:function(index){
             this.arrList.splice(index,1);
         },
         removeAll:function(){
            this.arrList=[];
         },

      },
       created: function () {
          console.log('my-component created!')
          this.add();

        }

  }



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


</style>