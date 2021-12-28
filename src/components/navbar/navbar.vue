<template>
    <van-tabs class="navbar" v-model:active="active" title-active-color="#DB7093" line-width="0" line-height="0" @change="change">
        <van-tab v-for="(item,index) in navData" :title="item" :key="index"></van-tab>
    </van-tabs>
</template>
  
<script setup lang="ts"> 
import {ref , reactive} from 'vue'
import navData from '@/datas/nav'
import {UseSet} from '../../hooks'
const {setConsName,getApiData} = UseSet()
const active = ref<number>(0)
const state1 = reactive(navData)
const change = (e:any):void => {
    const consName = state1[e]
    setConsName(consName)
    getApiData()
}
</script> 

<style scoped lang="less">
.navbar{
    border-bottom: 1px solid #dddddd;
}
</style>
 