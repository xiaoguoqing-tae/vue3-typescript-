<template>
  <div class="container">
      <ConsCard
        :name="pageData.name"
        :allIndex="pageData.all"
      />
      <ConsList 
        :data="pageData"
      />
  </div>
</template>

<script setup lang="ts">
import ConsList from '../components/List/Week.vue'

import {UseInit} from '../hooks/index'
import { Filed } from '@/types'
const {pageData , getData , ActivatedFunc} = UseInit(Filed.WEEK)
  getData()
  ActivatedFunc()
</script>

<style lang="less">
  
</style>

