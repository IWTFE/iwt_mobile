<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">

    <div class="page">
        <div class="page1">
            <mt-header title="双色球" class="back_login" v-on:click="Alert();">
                <router-link to="/home?" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
                <mt-button slot="right" icon="more"></mt-button>
            </mt-header>

            <p class="title_red">红球至少选6个</p>
            <ul class="redball">
                <li v-for="(item,index) in redball" v-bind:index="index" v-bind:class="[item.stat?'active':'']"
                    v-on:click="add(index,0)">
                    {{ item.num }}
                </li>
            </ul>
            <p class="title_blue">蓝球至少选1个</p>
            <ul class="blueball">
                <li v-for="(item,index) in blueball" v-bind:index="index" v-bind:class="[item.stat?'active':'']"
                    v-on:click="add(index,1)">
                    {{ item.num }}
                </li>
            </ul>
            <p class="title_blue">加入{{selectCount}}次</p>
            <div class="bottom_div">
                <div class="btn_add">
                    <mt-button size="small" type="primary" @click="selectList()">加入号码栏</mt-button>

                </div>
                <div class="text_price">
                    <span>{{total}}</span><span>注，</span><span>{{price}}</span><span>元</span>
                </div>

                <div class="btn_touzhu">

                    <mt-button size="small" type="primary" v-on:click="touzhu()">去投注</mt-button>

                </div>
            </div>
        </div>
        <div class="page2" v-bind:class="[act?'act':'']">
            <!--添加删除列表-->
            <mt-header title="确认投注" class="back_login">
                <mt-button icon="back"></mt-button>
            </mt-header>

            <div class="rePos">
                <mt-button size="small" @click="zixuan()">+自选</mt-button>
                <mt-button size="small" @click="add_list()">+机选</mt-button>
                <mt-button size="small" @click="removeAll()">清空</mt-button>
            </div>
            <div>
                <ul class="ul_list1">
                    <li v-for="(item,index) in selectedArr" v-bind:index="index"
                        v-on:remove="selectedArr.splice(index,1)">
                        {{selectedArr[index]}}
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
        <!--添加删除列表-->
    </div>

</template>
<script>
  export default {
    data(){
      return {
        r_red_arr:[],//选出的红球
        r_blue_arr:[],//选出的篮球
        open:false,//投注开关
        str:"", //放入数组的字符串
        selectCount:0, //加入好栏的次数
        selectedArr:[],//加入号栏的数组
        redCount:0, //红球个数
        blueCount:0,//篮球个数
        total:0,//总注数
        price:0,//钱数
        act:false,//点击小球时候样式开关
        i:0,
        redArr:[],//红球数组
        blueArr:[],//篮球数组
        blueball:[//篮球个数16
        {num:"1",stat:""},{num:"2",stat:""},{num:"3",stat:""},{num:"4",stat:""},{num:"5",stat:""},{num:"6",stat:""},{num:"7",stat:""},{num:"8",stat:""},{num:"9",stat:""},{num:"10",stat:""},{num:"11",stat:""},{num:"12",stat:""},{num:"13",stat:""},{num:"14",stat:""},{num:"15",stat:""},{num:"16",stat:""}
         ],
        redball:[//红球个数33
                 {num:"1",stat:""},{num:"2",stat:""},{num:"3",stat:""},{num:"4",stat:""},{num:"5",stat:""},{num:"6",stat:""},{num:"7",stat:""},{num:"8",stat:""},{num:"9",stat:""},{num:"10",stat:""},{num:"11",stat:""},{num:"12",stat:""},{num:"13",stat:""},{num:"14",stat:""},{num:"15",stat:""},{num:"16",stat:""},{num:"17",stat:""},{num:"18",stat:""},{num:"19",stat:""},{num:"20",stat:""},{num:"21",stat:""},{num:"22",stat:""},{num:"23",stat:""},{num:"24",stat:""},{num:"25",stat:""},{num:"26",stat:""},{num:"27",stat:""},{num:"28",stat:""},{num:"29",stat:""},{num:"30",stat:""},{num:"31",stat:""},{num:"32",stat:""},{num:"33",stat:""}]
      }
    },
    methods:{
        unique:function(arr){
               var res = [arr[0]];
                for(var i = 1; i < arr.length; i++){
                    var repeat = false;
                    for(var j = 0; j < res.length; j++){
                        if(arr[i] == res[j]){
                            repeat = true;
                            break;
                        }
                    }
                    if(!repeat){
                        res.push(arr[i]);
                    }
                }
                return res;
            },
        //点击小球加class
        addClass:function(ballArr,index){
             if( ballArr[index].stat==false){ballArr[index].stat=true;
             }else{ballArr[index].stat=false;}
        },
        //给每一个小球添加click事件
        add:function(index,num){

            if(num==0){//红球
                this.addClass(this.redball,index);
                 if(this.redball[index].stat==true){
                 this.unique(this.redArr.push(index+1));
                }else{
                this.unique(this.redArr.pop());
                }
                //alert(this.redArr.length);
                this.sf();
            }else{//篮球

                this.addClass(this.blueball,index);
                if(this.blueball[index].stat==true){
                   this.unique(this.blueArr.push(index+1));
                }else{
                   this.unique(this.blueArr.pop());
            }
             this.sf();
            }
        },
        //用复式选球公式算出注数和价格
        sf:function(){
           this.price=0;
           this.total=0;
           var red_temp=this.redArr.length;  //7
           var num_temp=this.redArr.length-6;//1
           if((num_temp)>=0 && this.blueArr.length>0){
             //alert(red_temp+"--"+num_temp);
           var num=this.factorial(red_temp)/(this.factorial(num_temp)*this.factorial(6));
           var num11=num*this.blueArr.length;
           this.total=num11;
           this.price=num11*2;
             //console.log(num);
            }
        },
        //N次幂的算法
        factorial:function(n){
            return ( n <= 1 ) ? 1 : n * this.factorial( n-1 );
        },//点击进入投注页
        touzhu:function(){
          if(this.open){
            this.act=true;
            //alert(this.str);
            this.add_list(this.str);
            //alert(this.add_list.length);

            //this.open=false;
          }else{
          this.$toast('请先加入号码栏！');
          }
        },
        //清除所有的stat态
         clearStat:function(arr){
             for(var i=0;i<arr.length;i++){
                 arr[i].stat="";
             }
          },
          //点击自选回到选球页
         zixuan:function(){
          this.clearStat(this.redball);
          this.clearStat(this.blueball);
          this.act=false;
        },
        //选球进行拼接并放入数组->加入号码栏
        selectList:function(){
            //alert(this.redArr.length+"--"+this.blueArr.length);
            if(this.redArr.length<6 || this.blueArr.length<=0){
                 this.$toast('请选球！');
            }else{
            this.clearStat(this.redball);
             this.clearStat(this.blueball);
             var str='';
             var num_red=this.redArr.join(' ').toString();
             //alert(num_red);
             var num_blue=this.blueArr.join(' ').toString();
             var str=num_red+" | "+num_blue+"     "+this.total+"注"+this.price+"元";
             //alert(str);
             this.str=str;
             this.selectCount++;
             //alert(this.selectedArr);
             this.redArr=[];
             this.blueArr=[];
             this.open=true;
             }
        },
        //随机选6红球
        random_ball_:function (num,ball){
                    var a=[];
                    for(var i=0;i<num;i++){
                        a[i]=parseInt(Math.random()*ball+1);
                        for(var j=0;j<i;j++){
                           if(a[j]==a[i]){
                              i--;
                              break;
                           }
                        }
                    }
                    return a;
                },
        //添加到添加删除栏
        add_list:function(str){
             if(str==undefined){
                 //str="2 3 4 5 10 12 7| 9";
                //随机选择1注

                this.random_ball_(6,33);
                this.random_ball_(1,16);
                str=this.random_ball_(6,33).join(' ')+" | "+this.random_ball_(1,16)+" 1注2元";




             }
             if(this.selectCount!=0){
              this.selectedArr.push(str);
              //alert(this.selectedArr.length);
             }else{
               this.$toast('请先选择号码！');
             }
        },//删除单个选项
          remove:function(index){
             this.selectedArr.splice(index,1);
         },//删除所有选项
         removeAll:function(){
            this.selectedArr=[];
         },
         Alert:function(){
             alert("所有选项！");
         }
    },
    created:function(){
    }
  }


</script>
<style>
 .redball,.blueball{overflow:hidden;padding:0 20px;}
 .redball li,.blueball li{margin:0 2px;width:33px;height:46px;line-height:40px;text-align:center;border:0px solid red;display:inline-block;background:url('../assets/images/ball_white.png') no-repeat center;background-size:100%;}
 .blueball li.active{background:url('../assets/images/ball_blue.png') no-repeat center;background-size:100%;color:#fff;}
 .redball li.active{background:url('../assets/images/ball_red.png') no-repeat center;background-size:100%;color:#fff;}
 .title_red{color:red;padding:0 20px;margin:10px 0;}
 .title_blue{color:blue;padding:0 20px;margin:10px 0;}
 .bottom_div{position:absolute;height:50px;bottom:0;width:100%;background:#000;line-height:50px;}
 .btn_add{float:left;margin-left:20px;}
 .btn_touzhu{float:right;margin-right:20px;}
 .text_price{float:left;color:#fff;margin-left:30px;}
 .page2{position:absolute;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background:#fff;z-index:9999;display:none;}
 .act{display:block;}
 //page2
  .rePos{margin-left:10px;margin-top:20px;}
 .ul_list1{margin-top:10px;padding:0 10px;}
 .ul_list1 li{width:100%;height:40px;border:1px solid #f5f5f5;background:#fff;line-height:40px;margin-bottom:5px;font-size:14px;}
 .btn{float:right;margin-top:15px;margin-right:5px;width:15px;height:15px;background:url('../assets/images/remove.png') no-repeat center;background-size:100%;}
 .bottom_div{position:absolute;height:50px;bottom:0;width:100%;background:#000;line-height:50px;}
   .btn_add{float:left;margin-left:20px;}
   .btn_touzhu{float:right;margin-right:20px;}
   .text_price{float:left;color:#fff;margin-left:30px;}


</style>
