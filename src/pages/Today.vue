<template>
  <div class="container">
      <ConsCard
        :name="pageData.name"
        :allIndex="pageData.all"
      />
      <NumList 
        :data='pageData'
      />
      <ConsList
        :data='pageData'
      />
  </div>
</template>

<script setup lang="ts">
import NumList from '../components/NumList/index.vue'
import ConsList from '../components/List/Today.vue'

import {UseInit} from '../hooks/index'
import { Filed } from '@/types'
const {pageData , getData , ActivatedFunc} = UseInit(Filed.TODAY)
  getData()
  ActivatedFunc()
</script>

<style lang="less">
  
</style>
