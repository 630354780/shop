<template>
  <div>
      <div class="container" v-for="(item,index) in category" :key="index">
         <div class="navsBox">
           <ul>
             <li @click="chooseClick(index)" :class="{active:index==isActive}">{{item.categoryNm}}</li>
           </ul>
         </div>
         <div class="contentBox">
          <ul>
            <li v-for="(item,index) in array" :key="index">{{item.val}}</li>
          </ul>
        </div>
      </div>
     
      <!-- <div v-for="(item, index) in categoryNm" :key="index">
          <ul id="left">
            <li>
                <a href="">{{item.categoryNm}}</a>
            </li>
        </ul>
        <div class="right">
            <ul>
                <li v-for="(item2, index2) in item.subCategory" :key="index2"> {{item2.categoryNm}} </li>
            </ul>
        </div>
      </div> -->
      
  </div>
</template>

<script>
import { getCategory } from "../../network/category.js"

export default {
    data() {
        return {
      isActive: 0,
      category: [],
      detail: [],
       items:[
         {
           val:"开关面板1"
         },{
           val:"开关面板2"
         },{
           val:"开关面板3"
         },{
           val:"开关面板4"
         },{
           val:"开关面板5"
         },{
           val:"开关面板6"
         },
       ],
       site:[
         {
           val:"开关面板内容1"
         },{
           val:"开关面板内容2"
         },{
           val:"开关面板内容3"
         },{
           val:"开关面板内容4"
         },{
           val:"开关面板内容5"
         },{
           val:"开关面板内容6"
         },
       ],
       array:[]
        }
    },
    created() {
        this.getCategory();
        // 初始化数据默认选中第一个
    this.array.push(this.site[0]);
    },
    
    methods: {
        getCategory() {
            getCategory().then((res) => {
                this.result = res;
                this.category = res.data.categor.categorItem;
                console.log(res.data.categor.categorItem);
                this.category.map(item => {
                  this.detail.push(item.subCategory)
                });
                console.log('detail', this.detail);
            })
        },
        chooseClick(index) {
            this.array = []
            this.isActive = index;
            this.array.push(this.site[index])
    },
    },
}
</script>

<style scoped>
#left{
    float: left;
    font-size: 14px;
    width: 2.6rem;
}
.right{
    float: left;
    width: 7.4rem;
    font-size: 14px;
}


.container{
      display: flex;
      
      
    }
.navsBox{
        background: #F2F2F2;
        
      }
.navsBox ul li{
          
            padding:10px 0;
            border-bottom: 1px solid #e0e0e0;
            width: 3rem;
            
          
        }
.navsBox ul li.active {
              background: #ff801f;
              color: #fff;
            }
  .contentBox{
      width: 100%;
        padding: 20px;
      }
</style>