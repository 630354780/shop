<!--  -->
<template>
    <div class="">
        <van-contact-list
            v-model="chosenContactId"
            :list="list"
            default-tag-text="默认"
            @add="onAdd"
            @edit="onEdit"
            @select="onSelect"
        />
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Toast } from "vant";

export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            chosenContactId: "1",
            list: [
                {
                    id: "1",
                    name: "张三",
                    tel: "13000000000",
                    isDefault: true,
                },
                {
                    id: "2",
                    name: "李四",
                    tel: "1310000000",
                },
            ],
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        onAdd() {
            this.$router.push("/contactList/ContactEdit");
        },
        onEdit(contact) {
            Toast("编辑" + contact.id);
        },
        onSelect(contact) {
            Toast("选择" + contact.id);
        },
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {},
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
