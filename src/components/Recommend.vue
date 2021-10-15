<template>
    <div class="recommend">
        <div class="recommend-item" v-for="(item, index) in recommends" :key="index">
            <a href="">
                <img :src="item.picUrl" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        recommends:{
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style>
    .recommend {
        display: flex;
        text-align: center;
        font-size: 12px;
        padding: 10px 0px 20px;
        border-bottom: 8px solid #eee;
        margin-bottom: 20px;
    }
    .recommend-item {
        flex: 1;
    }
    .recommend-item img{
        width: 80%;
        margin-bottom: 10px;
    }
</style>