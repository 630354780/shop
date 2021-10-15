<template>
  <div class="home">
    <search></search>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        v-for="(item, index) in banner"
        :key="index"
        class="banner-img"
      >
        <a :href="item.openUrl">
          <img :src="item.picUrl" alt="" />
        </a>
      </van-swipe-item>
    </van-swipe>

    <Recommend v-bind:recommends="recommends"></Recommend>

    <router-link to="/list/List">
      <div
        class="homeBanner"
        v-for="(item, index) in advertBanner"
        :key="index"
      >
        <img :src="item.moduleObjects.picUrl" alt="" />
      </div>
    </router-link>
    
    <listData v-bind:listData="listData"></listData>

    <tab-bar></tab-bar>
  </div>
</template>

<script>
import Recommend from "@/components/Recommend.vue";
import listData from "@/components/listData.vue";
import TabBar from "@/components/tabbar/TabBar.vue";
import Search from "@/views/home/Search.vue";

// import axios from "axios";
import { getHomedata } from "../network/home.js";

export default {
  name: "Home",
  components: {
    Recommend,
    listData,
    TabBar,
    Search,
  },
  data() {
    return {
      recommends: [],
      banner: [],
      listData: [],
      advertBanner: [],
    };
  },
  created() {
    // 1.请求多个数据
    this.getHomedata();
  },
  methods: {
    getHomedata() {
      getHomedata().then((res) => {
        console.log(res);
        this.result = res;
        this.banner = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        this.listData = res.data.list.listItem;
        this.advertBanner = res.data.advertBanner;
      });
    },
  },
};
</script>

<style>
img {
  width: 100%;
}
.homeBanner {
  margin: 0px 20px 10px 20px;
}
.banner-img img {
  width: 100%;
}
</style>