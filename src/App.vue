<template>
  <div id="nav">
    <router-view v-if="!login"></router-view>
    <layout v-if="login"></layout>
  </div>
</template>
<script setup lang="ts">
import layout from './components/layout/layout.vue'
import {computed} from 'vue'
import {useStore} from 'vuex'
const state = useStore().state
const login = computed(() => state.login)
</script>

<style lang="scss">

</style>
