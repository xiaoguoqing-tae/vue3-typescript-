<template>
    <van-nav-bar class="head" :title="title" :left-text="leftText" :left-arrow="leftArrow">
        <template #right v-if="right">
            <van-icon name="search" size="18" />
        </template>
    </van-nav-bar>
</template>

<script setup lang="ts">
    import { defineProps , withDefaults ,toRefs } from '@vue/runtime-core';
    interface Props{
        title:string;
        leftText?:string;
        leftArrow?:boolean;
        right?:boolean;
    }
    const props = withDefaults(defineProps<Props>(), {
        title:'标题',
        leftText:'',
        leftArrow:false,
        right:false
    })
    const {title,leftText,leftArrow,right} = toRefs(props)
</script>

<style scoped lang="less">
.head{
    background: #DB7093;
}
/deep/.van-nav-bar__title{
    color: #fff;
}
</style>
