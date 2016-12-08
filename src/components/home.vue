<template>
    <div class="page-tabbar">
        <div class="page-wrap">
            <mt-tab-container class="page-tabbar-container" v-model="selected">
                <mt-tab-container-item id="外卖">
                    <!--首页-->
                    <div id='main'>
                        <mt-header class='header' fixed title=""></mt-header>
                        <div class='main'>
                            <div class='swipe'>
                                <div class='height'></div>
                                <div class='slide-container'>
                                    <mt-swipe :auto="4000">
                                        <mt-swipe-item class="slide1"><img src='../assets/images/ad.png'
                                                                           width="100%" height='100%'></mt-swipe-item>
                                        <mt-swipe-item class="slide2"><img src='../assets/images/ad.png'
                                                                           width="100%" height='100%'></mt-swipe-item>
                                        <mt-swipe-item class="slide3"><img src='../assets/images/ad.png'
                                                                           width="100%" height='100%'></mt-swipe-item>
                                    </mt-swipe>
                                </div>
                            </div>

                            <div class='list'>
                                <mt-cell title="双色球" to='/double' icon="more">
                                    <span></span>
                                    <img slot="icon" src="../assets/images/ball_double_icon.png" width="20%"
                                         height="20%" style=' vertical-align: middle;'>
                                </mt-cell>
                            </div>
                            <div class='list'>
                                <mt-cell title="3D" icon="more">
                                    <span>02:37</span>
                                    <img slot="icon" src="../assets/images/ball_3d_icon.png" width="20%" height="20%">
                                </mt-cell>
                            </div>
                            <div class='list'>
                                <mt-cell title="东方6+1" icon="more">
                                    <span></span>
                                    <img slot="icon" src="../assets/images/ball_7lecai_icon.png" width="20%"
                                         height="20%">
                                </mt-cell>
                            </div>
                            <div class='list'>
                                <mt-cell title="快乐彩" icon="more">
                                    <span></span>
                                    <img slot="icon" src="../assets/images/ball_3d_icon.png" width="20%" height="20%">
                                </mt-cell>
                            </div>

                        </div>

                    </div>
                    <!--首页结束-->
                </mt-tab-container-item>
                <mt-tab-container-item id="订单" @click.native.prevent="handleSubmit2">
                    <!--积分服务-->
                    <mt-header class='header_jf' fixed title="积分服务"></mt-header>
                    <div class='ad'>
                        <img src='../assets/images/banner.png' width="100%" height='100%'>
                    </div>
                    <ul class='ul_jf'>
                        <router-link to="/sm" slot="left">
                            <li><img src='../assets/images/icon_1.png'>
                                <p>积分扫码</p></li>
                        </router-link>
                        <router-link to="/dh" slot="left">
                            <li><img src='../assets/images/icon_2.png'>
                                <p>升级积分兑换</p></li>
                        </router-link>
                        <router-link to="/dh" slot="left">
                            <li><img src='../assets/images/icon_3.png'>
                                <p>游戏币兑换</p></li>
                        </router-link>
                    </ul>
                    <p class='jf_title'>游戏积分</p>

                    <a class='yqs_link' href="javascript:;"><img src='../assets/images/yqs.jpg'></a>
                    <!--积分服务结束-->
                </mt-tab-container-item>
                <mt-tab-container-item id="发现">
                    <!--开奖公告开始-->
                    <mt-header class='header_jf' fixed title="开奖公告"></mt-header>
                    <div class='kj_list'>

                        <mt-cell title="双色球" to="/gg_list" label="第2016101期" is-link>
                            <ul class='ball_list'>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                                <li>6</li>
                            </ul>
                            <ul class='ball_list_blue'>
                                <li>1</li>
                            </ul>
                        </mt-cell>
                        <mt-cell title="3D" label="第2016101期" is-link>
                            <ul class='ball_list'>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>

                            </ul>

                        </mt-cell>
                        <mt-cell title="快乐彩" label="第2016101期" is-link>
                            <ul class='ball_list'>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                                <li>6</li>
                            </ul>
                            <ul class='ball_list_blue'>
                                <li>1</li>
                            </ul>

                        </mt-cell>
                    </div>


                    <!--开奖公告结束-->
                </mt-tab-container-item>
                <mt-tab-container-item id="我的">
                    <!--用户信息-->
                    <mt-cell class='info_user' title="小明" icon="more" is-link>
                        <img slot="icon" src="../assets/images/txiang.png" width="48" height="48">
                    </mt-cell>
                    <ul class='info_num_list'>
                        <li class='no-bottom no-right'><p class='info_num'>14982</p>
                            <p class='info_wz'>资金余额</p></li>
                        <li class='no-bottom no-right'><p class='info_num'>14982</p>
                            <p class='info_wz'>焕彩余额</p></li>
                        <li class='no-bottom'><p class='info_num'>14982</p>
                            <p class='info_wz'>红包余额</p></li>
                        <li class='no-right'><p class='info_num'>14982</p>
                            <p class='info_wz'>省级积分</p></li>
                        <li class='no-right'><p class='info_num'>14982</p>
                            <p class='info_wz'>游戏币</p></li>
                        <li><p class='info_num'>14982</p>
                            <p class='info_wz'>全国积分</p></li>
                    </ul>
                    <div style='clear:both'></div>
                    <div class="info_list">
                        <router-link to="/touzhu" slot="left">
                            <mt-cell title="投注记录" icon="more" is-link>
                                <img slot="icon" src="../assets/images/txiang.png" width="24" height="24">
                            </mt-cell>
                        </router-link>

                        <mt-cell title="奖金提现" icon="more" is-link>
                            <img slot="icon" src="../assets/images/txiang.png" width="24" height="24">
                        </mt-cell>
                        <mt-cell title="修改密码" icon="more" is-link>
                            <img slot="icon" src="../assets/images/txiang.png" width="24" height="24">
                        </mt-cell>
                        <mt-cell title="消息中心" icon="more" is-link>
                            <img slot="icon" src="../assets/images/txiang.png" width="24" height="24">
                            <mt-badge type="error">10</mt-badge>
                        </mt-cell>
                        <mt-cell title="设置" icon="more" is-link>
                            <img slot="icon" src="../assets/images/txiang.png" width="24" height="24">
                        </mt-cell>
                    </div>
                    <!--用户信息结束-->
                </mt-tab-container-item>
            </mt-tab-container>
        </div>

        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item id="外卖">
                <img slot="icon" src="../assets/images/home.png">
                彩票投注
            </mt-tab-item>
            <mt-tab-item id="订单">
                <img slot="icon" src="../assets/images/kaijing.png">
                积分服务
            </mt-tab-item>
            <mt-tab-item id="发现">
                <img slot="icon" src="../assets/images/jifen.png">
                开奖公告
            </mt-tab-item>
            <mt-tab-item id="我的">
                <img slot="icon" src="../assets/images/peo.png">
                我的账户
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
export default {
  name: 'page-tabbar',
  data() {
    return {
      selected: '外卖',
      methods:{
          handleSubmit2(ev){
             var _this=this;
             _this.$router.replace('/home');
          }
      }
    };
  }
};


</script>

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
  body{margin:0;padding:0;font-family:"微软雅黑"}
.header{background:#e53134 url('../assets/images/title.png') no-repeat center;background-size:35%}
.main{width:100%;margin-top:40px;padding-bottom:60px;overflow:scroll;background:#f5f5f5;}
.swipe,.swipe *{ box-sizing: border-box;width:100%;position: relative;}
.height {padding-top:50%;}
.slide-container {
           overflow: hidden;
           position: absolute;
           top: 0;
           left: 0;
           bottom: 0;
           right: 0;
           background: #ddd;
           max-height: 200px;
       }
.list{padding:2px 0;}
.list .mint-cell{height:93px;}
.kj_list .mint-cell-wrapper,.info_user .mint-cell-wrapper,.list .mint-cell-wrapper{height:100px;}
.kj_list .mint-cell-text,.info_user .mint-cell-text,.list .mint-cell-text{font-weight:bold;}
/*积分服务*/
.header_jf{background:red;}
ul,li,p{margin:0;padding:0;list-style:none;}
.ul_jf{width:100%;overflow:hidden;text-align:center;}
.ul_jf li{display:inline-block;width:119px;height:134px;margin-top:20px;}
.ul_jf li img{width:65%}
.jf_title{text-indent:33px;border-bottom:1px solid #ccc;padding:0 0 5px 0;}
.yqs_link{width:100%;text-align:center;display:inline-block;margin-top:20px;}
.yqs_link img{width:80%;}
.kj_list{margin-top:40px;}
.ball_list{}
.ball_list li{display:inline-block;width:32px;height:38px;text-align:center;background:url('../assets/images/ball_red.png') no-repeat center;background-size:100%;color:#fff;line-height:36px;font-size:12px;font-weight:bold;}
.ball_list_blue{margin-left:2px;}
.ball_list_blue li{display:inline-block;width:32px;height:38px;text-align:center;background:url('../assets/images/ball_blue.png') no-repeat center;background-size:100%;color:#fff;line-height:36px;font-size:12px;font-weight:bold;}
.info_user{background:red;color:#fff;}
.info_num_list{float:left;width:101%;border-right:1px solid #e0e0e0;}
.info_num_list li{background:url('../assets/images/arrow.jpg') no-repeat 94px;background-size:5%;padding:5px 0;border-left:0px;text-indent:20px;float:left;display:inline-block;width:32.8%;color:#ccc;font-size:12px;border:1px solid #e0e0e0;}
.info_num_list li.no-bottom{border-bottom:0px;}
.info_num_list li.no-right{border-right:0px;}
.info_wz{color:#7a7a7a;}
.info_num{color:#d83852;}
.info_list{margin-top:20px;}


</style>


