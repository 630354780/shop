<!--  -->
<template>
    <div class="">
        <van-contact-edit
            is-edit
            show-set-default
            :contact-info="editingContact"
            set-default-label="设为默认联系人"
            @save="onSave"
            @delete="onDelete"
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
            editingContact: {},
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        onSave() {
            Toast("保存");
            this.$router.push("/contactList/ContactList");
        },
        onDelete() {
            Toast("删除");
        },
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {},
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
