import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/category/Category.vue'
import My from '../views/my/My.vue'
import Cart from '../views/cart/Cart.vue'
import List from '../views/list/List.vue'
import Product from '../views/product/Product.vue'
import Orderadd from '../views/orderadd/Orderadd.vue'
import ContactEdit from '../views/orderadd/contactList/ContactEdit.vue'
import ContactList from '../views/orderadd/contactList/ContactList.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/Home',      //路由重定向到home
        component: Home,
        meta: {
            title: '首页'
        },
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home,
        meta: {
            title: '首页'
        },
    },
    {
        path: '/category/Category',
        name: 'category',
        component: Category,
        meta: {
            title: '分类'
        },
    },
    {
        path: '/my/My',
        name: 'my',
        component: My,
        meta: {
            title: '我的'
        },
    },
    {
        path: '/cart/Cart',
        name: 'cart',
        component: Cart,
        meta: {
            title: '购物车'
        },
    },
    {
        path: '/list/List',
        name: 'list',
        component: List,
        meta: {
            title: '列表'
        },
    },
    {
        path: '/product/Product',
        name: 'product',
        component: Product,
        meta: {
            title: '商品详情'
        },
    },
    {
        path: '/orderadd/Orderadd',
        name: 'orderadd',
        component: Orderadd,
        meta: {
            title: '提交订单'
        }
    },
    {
        path: '/contactList/ContactList',
        name: 'ContactList',
        component: ContactList,
        meta: {
            title: '收货人列表'
        }
    },
    {
        path: '/contactList/ContactEdit',
        name: 'ContactEdit',
        component: ContactEdit,
        meta: {
            title: '联系人编辑'
        }
    }
]

const router = new VueRouter({
    mode: 'history',  // 默认模式 history
    base: process.env.BASE_URL,
    routes
})

export default router
