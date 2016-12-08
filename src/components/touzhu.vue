<template>
    <div class="page-navbar">
        <mt-header title="投注记录" class="back_login">
            <router-link to="/home" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button slot="right" icon="more"></mt-button>
        </mt-header>
        <mt-navbar class="page-part" v-model="selected">
            <mt-tab-item id="1">全部</mt-tab-item>
            <mt-tab-item id="2">收入</mt-tab-item>
            <mt-tab-item id="3">支出</mt-tab-item>
        </mt-navbar>


        <div class="con_list">
            <mt-tab-container v-model="selected" class="select_size">
                <mt-tab-container-item id="1">
                    <!--增加下拉更新组件开始-->
                    <div class="page-loadmore-wrapper" ref="wrapper">
                        <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">
                            <ul class="page-loadmore-list">

                                <mt-cell v-for="item in list" class="page-loadmore-listitem"
                                         :title="'收入：' + Math.floor(Math.random()*10+1)*Math.abs(item)+'元'+'('+Math.abs(item)+')笔   '+' 支出:'+Math.floor(Math.random()*10+1)*Math.abs(item)+'元'+'('+Math.abs(item)+')笔   '"/>
                            </ul>
                            <div slot="top" class="mint-loadmore-top">
                                <span v-show="topStatus !== 'loading'"
                                      :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
                                <span v-show="topStatus === 'loading'">
                                <mt-spinner type="snake"></mt-spinner>
                                </span>
                            </div>
                        </mt-loadmore>
                    </div>
                    <!--增加下拉更新组件结束-->
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <mt-cell v-for="n in 6"
                             :title="'共:'+Math.floor(Math.random()*10+1)*n+'笔 '+'收入：' + Math.floor(Math.random()*10+1)*n+'元'"/>
                </mt-tab-container-item>
                <mt-tab-container-item id="3">
                    <mt-cell v-for="n in 6"
                             :title="'共:'+Math.floor(Math.random()*10+1)*n+'笔 '+'支出：' + Math.floor(Math.random()*10+1)*n+'元'"/>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>

<script>
export default {
  name: 'page-navbar',
  data() {
    return {
      selected: '1',
      list:[],
      topStatus:"",
      wrapperHeight:500
    };
  },
  methods:{
  handleTopChange(status) {
        this.topStatus = status;
      },
 loadTop() {
        setTimeout(() => {
          let firstValue = this.list[0];
          for (let i = 1; i <= 10; i++) {
            this.list.unshift(firstValue - i);
          }
          this.$refs.loadmore.onTopLoaded();
        }, 1500);
      }
    },
 created() {
      for (let i = 1; i <= 20; i++) {
        this.list.push(i);
      }
      //alert(this.list);
    },
    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
      //alert(this.wrapperHeight);
    }

};


</script>
<style>
.page-part{font-size:16px;.border-bottom:3px solid #ccc;}
.mint-tab-item-label{font-size:16vm;}
.select_size{margin-top:10px;}
.con_list{padding:0 20px;}

 @component-namespace page {
    @component loadmore {
      @descendent desc {
        text-align: center;
        color: #666;
        padding-bottom: 5px;
        &:last-of-type {
          border-bottom: solid 1px #eee;
        }
      }
      @descendent listitem {
        height: 50px;
        line-height: 50px;
        border-bottom: solid 1px #eee;
        text-align: center;
        &:first-child {
          border-top: solid 1px #eee;
        }
      }
      @descendent wrapper {
        margin-top: -1px;
        overflow: scroll;
      }
      .mint-spinner {
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
  @component mint-loadmore-top {
    span {
      display: inline-block;
      transition: .2s linear;
      vertical-align: middle;
      @when rotate {
        transform: rotate(180deg);
      }
    }
  }
  .page-loadmore-list li{
    border-bottom:1px solid #ccc;padding:10px 0;
  }




</style>
