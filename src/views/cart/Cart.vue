<template>
    <div>
        <div v-for="(item, index) in cart" :key="index">
            <van-checkbox-group v-model="result">
                <div class="shop-title">{{ item.shopNm }}</div>
                <van-cell-group
                    v-for="(item2, index2) in item.items"
                    :key="index2.id"
                    class="cartItem"
                >
                    <van-checkbox v-model="item2.isChecked"></van-checkbox>
                    <van-card
                        clickable
                        :num="item.useTotalIntegral"
                        :price="item.productTotalAmount"
                        :desc="item.shopNm"
                        :title="item2.name"
                        :thumb="item2.image"
                        @click="toggle(index)"
                    >
                    </van-card>
                </van-cell-group>
            </van-checkbox-group>
        </div>
        <router-link to="/orderadd/Orderadd">
            <van-submit-bar :price="3050" button-text="结算">
                <van-checkbox v-model="isAllChecked">全选</van-checkbox>
            </van-submit-bar>
        </router-link>
    </div>
</template>

<script>
import { getCart } from "../../network/cart.js";

export default {
    data() {
        return {
            result: [],
            cart: [],
            items: [],
        };
    },
    created() {
        this.getCart();
    },
    methods: {
        getCart() {
            getCart().then((res) => {
                res.result.shoppingCartVos.forEach((ele) => (ele.isChecked = false));
                this.cart = res.result.shoppingCartVos;
                console.log(res.result.shoppingCartVos);
            });
        },
        toggle(index) {
            this.$refs.checkboxes[index].toggle();
        },
    },
    computed: {
        isAllChecked: {
            //监听isAllChecked的变化
            get() {
                return this.items.every((ele) => ele.isChecked);
                //单个数据全部选定时,全选也就被选定了,单个数据有一个没被选定,那么全选也就不会被选定
            },
            set(val) {
                //val反应全选是否被选中时,全选中返回true;相反,返回false
                this.items.forEach((ele) => {
                    ele.isChecked = val;
                    //选定全选后,单个数据根据全选情况而变化(全部被选中或全部没被选择)
                });
            },
        },
        total() {
            return this.items.reduce((total, current) => {
                if (current.isChecked) {
                    return total + current.number * current.retail_price * 100;
                } else {
                    return total;
                }
            }, 0);
        },
    },
};
</script>

<style lang="scss" scoped>
//@import url(); 引入公共css类
.shop-title {
    margin-top: 0.5rem;
    font-size: 16px;
}
.cartItem {
    display: flex;
}
.cartItem .van-checkbox {
    width: 0.625rem;
    float: left;
}
.cartItem .van-card {
    float: left;
    width: 9rem;
}
</style>
