<template>
  <div class="list">
    <Summary 
      filed="健康"
      :contnet="data.health"
    />
    <Summary 
      filed="工作"
      :contnet="data.work"
    />
    <Summary 
      filed="爱情"
      :contnet="data.love"
    />
    <Summary 
      filed="财运"
      :contnet="data.money"
    />
    <Summary 
      filed="本月"
      :contnet="data.all"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from '@vue/runtime-core';
import { toRefs } from "vue"

const props = defineProps<{
    data:any
}>()
const {data} = toRefs(props)
</script>

<style lang='less'>
.list {
  padding: 15px 10px;
  box-sizing: borer-box;
}
</style>
