<template>
  <div>
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
  v-model="loading"                 
  :finished="finished"              
  finished-text="没有更多了"        
  @load="onLoad"
>
      <router-link to="/product/Product" class="goods">
      <div class="goods-item" v-for="(item, index) in list" :key="index">
            <img :src="item.productLapp.image" alt="">
        <div class="goods-info">
          <p>{{item.productLapp.productNm}}</p>
          <span class="price">￥{{item.productLapp.marketPrice}}</span>
          <span class="collect">销量:{{item.productLapp.salesVolume}}</span>
        </div>
        </div>
        </router-link>
        </van-list>
        </van-pull-refresh>
  </div>
</template>

<script>
import { getListdata } from "../../network/list.js"

export default {
  name: 'App',
  components: {
    
  },
  data() {
    return{
        list: [],
        loading:false,     //false:加载好了  true:加载中
           finished:false,    // false:没有加载完成 true:加载完成同时显示finished-text属性值 默认是false表示加载更多数据
           refreshing: false,
    }
  },
  created() {
    // this.getHomedata()
  },
  methods: {
    // getHomedata() {
    //   getListdata().then((res) => {
    //     this.list = res.data.list;
    //      console.log(res.data.list);
    //   })
    // },
    onLoad(){     //触底执行该事件
              //中间内容区的数据
              getListdata().then((res) => {
                  if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        this.list = res.data.list;
         console.log(res.data.list);

         // 加载状态结束
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
                  },
                  onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
  }
}
</script>

<style scoped>
.commodity{
    color: var(--color-text);
    font-size: var(--font-size);
    width: 100%;
    overflow: hidden;
    padding: 20px 20px;
}
.commodity-title{
    font-size: 28px;
}
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 3px;
  margin-bottom: 49px;
}
.goods-item {
  padding-bottom: 20px;
  position: relative;
  width: 48%;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  font-size: 28px;
  /* position: absolute; */
  margin-top: 10px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
  line-height: 40px;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-height-text);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15;
  top: -1;
  width: 14px;
  height: 14px;
}
</style>