<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in banner" :key="index" class="banner-img">
            <img :key="index" :src="item" alt="">
        </van-swipe-item>
    </van-swipe>
    <div v-for="(item, index) in result" :key="index">
        <div>{{ item.productNm }}</div>
        <div class="price">
            <span>{{ item.unitPrice }}</span>
            <span>{{ item.salesVolume }}</span>
        </div>
    </div>
    <div v-for="(item, index) in imagetext" :key="index">
        <img :src="item" alt="">
    </div>

    <van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" dot />
  <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
  <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
  <van-goods-action-button type="warning" text="加入购物车" />
  <van-goods-action-button type="danger" text="立即购买" />
</van-goods-action>
  </div>
</template>

<script>
import {getProductdata} from "@/network/product.js"
export default {
    data() {
        return{
            banner: [],
            result: {},
            imagetext: []
        }
    },
    created() {
        this.getProductdata()
    },
    methods: {
        getProductdata(){
            getProductdata().then((res) => {
                console.log(res);
                this.result = res;
                this.banner = res.result.imageList;
                this.imagetext = res.result.imagetext;
            })
        }
    },
}
</script>

<style scoped>
.banner-img img {
  width: 100%;
}
.price{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0.04rem;
    margin: 0.25333rem;
}
.van-goods-action{
    z-index: 9999999;
}
</style>