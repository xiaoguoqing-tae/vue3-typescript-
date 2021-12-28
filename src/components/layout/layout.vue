<template>
    <div class="layout">
        <headbar title="星座物语"></headbar>
        <navbar></navbar>
        <ErrorTip />
        <div class="content-box">
            <router-view v-slot="{ Component }" v-if="!errorCode">
                <keep-alive>
                    <component :is='Component'></component>
                </keep-alive>
            </router-view>
        </div>
        <tabbar></tabbar>
    </div>
</template>

<script setup lang="ts">
    import headbar from "../head/head.vue"
    import tabbar from "../tabbar/tabbar.vue"
    import navbar from "../navbar/navbar.vue"
    import ErrorTip from '../ErrorTip/index.vue' 
    
    import {computed , watch} from 'vue'
    import {useRouter} from 'vue-router'
    import {useStore} from 'vuex'
    import {UseSet} from '../../hooks'
    import { Filed } from "@/types"
    const {setFiled} = UseSet()

    const router = useRouter()
    const store = useStore()
    const state = store.state
    setFiled(Filed.TODAY)
    router.push('/Today')
    watch(() => router.currentRoute.value.name,(value)=>{
        setFiled(value as Filed)
    })
    const errorCode = computed(() => state.errorCode) 

</script>

<style scoped lang="less">
.layout{
    display: flex;
    flex-direction: column;
    .content-box{
    flex: 1;
    padding-bottom: 50px;
}
} 

</style>
