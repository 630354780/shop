import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// 手机屏幕自适应
// import '@/assets/static/rem.js'
import 'amfe-flexible/index.js'

Vue.config.productionTip = false

// 全局导入 vant 所需组件，在其他页面直接使用
import { Swipe, SwipeItem, Tabbar, TabbarItem, Icon, List, PullRefresh, Search, GoodsAction, GoodsActionIcon, GoodsActionButton, TreeSelect, Card, SubmitBar, ContactCard, Toast, Checkbox, CheckboxGroup, Cell, CellGroup, Stepper, ContactList, ContactEdit } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
Vue.use(Search);
Vue.use(List);
Vue.use(PullRefresh);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(TreeSelect);
Vue.use(Card);
Vue.use(SubmitBar);
Vue.use(ContactCard);
Vue.use(Toast);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Stepper);
Vue.use(ContactList);
Vue.use(ContactEdit);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

// 6.封装request模块
import { request } from "./network/request";

request({
    url: 'http://123.207.32.32:8000./network/request'
}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})


