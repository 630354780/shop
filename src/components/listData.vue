<template>
    <div class="goods" to="/list/List">
        <div class="commodity">
            <div class="commodity-title left">商品推荐</div>
            <div class="commodity-more right">查看</div>
        </div>
        <div class="goods-item" v-for="(item, index) in listData" :key="index">
            <img :src="item.productLapp.image" alt="">
        <div class="goods-info">
          <p>{{item.title}}</p>
          <span class="price">￥{{item.productLapp.price.originalUnitPrice}}</span>
          <span class="collect">销量:{{item.productLapp.price.remainStock}}</span>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        listData:{
            type: Array,
            default() {
                return []
            }
        }
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