<template>
  <div class="list">
    <ConsItem 
      title="本周日期"
      :content="data.date"
    />
    <Summary 
      filed="工作"
      :contnet="data.work"
    />
    <Summary 
      filed="学业"
      :contnet="data.job"
    />
    <Summary 
      filed="恋爱"
      :contnet="data.love"
    />
    <Summary 
      filed="财运"
      :contnet="data.money"
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
