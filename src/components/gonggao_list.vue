<template>
    <div class="abc">
        <mt-header title="开奖公告-双色球" class="back_login">
            <router-link to="/double" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button slot="right" icon="more"></mt-button>
        </mt-header>

        <mt-cell title="双色球" label="第2016101期" is-link>
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
        <mt-cell title="双色球" label="第2016101期" is-link>
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
        <mt-cell title="双色球" label="第2016101期" is-link>
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
        <mt-cell title="双色球" label="第2016101期" is-link>
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
        <mt-cell title="双色球" label="第2016101期" is-link>
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
        <mt-cell title="双色球" label="第2016101期" is-link>
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
        <mt-cell title="双色球" label="第2016101期" is-link>
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
        <mt-cell title="双色球" label="第2016101期" is-link>
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
        <mt-cell title="双色球" label="第2016101期" is-link>
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

        <div>


        </div>


</template>
<script>
  export default {
    name: 'page-checklist',
    data() {
      return {
        value1: [],
        value2: ['选中禁用的值'],
        value3: ['选项A'],
        value4: []
      };
    },
    methods:{
      startHacking () {
        this.$toast('跳转到微信接口！')
       }
    },
    created() {
      this.options1 = ['资金余额   1489元', '焕彩余额  7074元'];
      this.options3 = ['选项A', '选项B', '选项C', '选项D'];
      this.options4 = ['选项A', '选项B', '选项C', '选项D'];
      this.options2 = [
        {
          label: '被禁用',
          value: '值F',
          disabled: true
        },
        {
          label: '选中禁用',
          value: '选中禁用的值',
          disabled: true
        },
        {
          label: '选项A',
          value: '值A'
        },
        {
          label: '选项B',
          value: '值B'
        }
      ];
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
   .ball_list{padding:20px 0;}
</style>