<template>
  <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
    <van-tabbar-item icon="home-o" to="/">
    <span>首页</span>
    </van-tabbar-item>
    <van-tabbar-item icon="apps-o" to="/category/Category">
        <span>分类</span>
    </van-tabbar-item>
    <van-tabbar-item icon="contact" to="/my/My">
        <span>我的</span>
    </van-tabbar-item>
    <van-tabbar-item icon="shopping-cart-o" to="/cart/Cart" badge="5">
        <span>购物车</span>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>