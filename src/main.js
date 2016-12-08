import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import Validator from 'vue-validator'
import Vuex from 'vuex'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import './assets/css/common.css'
import VueHighcharts from 'vue-highcharts'


Vue.use(MintUI)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Validator)
Vue.use(VueHighcharts)


import Login from './components/login.vue'
import Home from './components/home.vue'
import Resn from './components/re_sn.vue'
import sign from './components/sign.vue'
import double from './components/double.vue'
import caozuo from './components/caozuo.vue'
import pay from './components/pay.vue'
import gg_list from './components/gonggao_list.vue'
import touzhu from './components/touzhu.vue'
import sm from './components/sm.vue'
import dh from './components/dh.vue'
import chart from './components/chart.vue'

import common from './assets/js/common.js'



/*设置路由*/
const routes = [
    {path: '/login', component: Login},
    {path: '/home', component: Home},
    {path: '/re_sn', component: Resn},
    {path: '/sign', component: sign},
    {path: '/double', component: double},
    {path: '/caozuo', component: caozuo},
    {path: '/pay', component: pay},
    {path: '/gg_list', component: gg_list},
    {path: '/touzhu', component: touzhu},
    {path: '/sm', component: sm},
    {path: '/dh', component: dh},
    {path: '/chart', component: chart}


]
const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    NProgress.start();
    next()
})
router.afterEach(transition => {
    NProgress.done();
})
new Vue({
    el: '#app',
    template: '<App/>',
    router,
    components: {App}
}).$mount('#app')

router.replace('/login')


