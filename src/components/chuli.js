import Vue from "vue"
import App1 from "./communication5/app1.vue"
import App2 from "./communication5/app2.vue"
let AppVM1 = new Vue(App1).$mount('#app')
let AppVM2 = new Vue(App2).$mount('#app2')
AppVM2.setOtherApp(AppVM1)
