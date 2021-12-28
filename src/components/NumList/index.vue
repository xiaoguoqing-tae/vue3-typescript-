<template>
  <div class="num-list">
    <NumItem 
      v-for="(item, index) in numData" :key="index"
      :item='item'
      :data='data'
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from '@vue/runtime-core';
import numData from '@/datas/num'
import { toRefs } from '@vue/reactivity'
import NumItem from './Item.vue'
const props = defineProps<{
  data:any
}>()
const {data} = toRefs(props)
</script>

<style lang='less'>
.num-list {
  display: flex;
  flex-flow: row;
  margin: 15px 0;
  padding: 10px;
  box-shadow: 2px 2px 5px #999999;
}
</style>