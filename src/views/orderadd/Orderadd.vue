<!--  -->
<template>
    <div class="">
        <van-contact-card
            type="edit"
            :name="currentContact.name"
            :tel="currentContact.tel"
            @click="onEdit()"
        />
        <div v-for="(item, index) in cart" :key="index">
            <div class="shop-title">{{ item.shopNm }}</div>
            <van-card
                v-for="(item2, index2) in item.items"
                :key="index2"
                :num="item.useTotalIntegral"
                :price="item.productTotalAmount"
                :desc="item.shopNm"
                :title="item2.name"
                :thumb="item2.image"
            >
            </van-card>
        </div>

        <van-submit-bar :price="3050" button-text="提交订单" />
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { getCart } from "../../network/cart.js";

export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            cart: [],
            currentContact: {
                name: "张三",
                tel: "13000000000",
            },
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        onEdit() {
            this.$router.push("/contactList/ContactList");
        },
        getCart() {
            getCart().then((res) => {
                this.cart = res.result.shoppingCartVos;
                console.log(res.result.shoppingCartVos);
            });
        },
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.getCart();
    },
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.shop-title {
    margin-top: 0.5rem;
    font-size: 16px;
}
</style>
