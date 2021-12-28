<template>
    <van-tabbar v-model="active">
        <van-tabbar-item v-for="(item,index) in tabdata" :key="index">
            <template #icon="props">
                <tabIcon :iconText = "item.iconText" :path = "item.path" :active="props.active">
                    {{ item.tabText }}
                </tabIcon>
            </template>
        </van-tabbar-item>
    </van-tabbar>
</template>

<script lang="ts">
import tabData from '../../datas/tab'
import tabIcon from "./icon.vue"
import {defineComponent, ref } from 'vue';
export default defineComponent({
    setup(){
        const active = ref<number>(0);
        const tabdata = tabData
        return{
            active,
            tabdata
        }
    },
    components:{
        tabIcon
    }
})

</script>

<style scoped lang="less">

</style>
