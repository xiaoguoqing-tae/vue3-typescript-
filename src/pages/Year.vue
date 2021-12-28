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

import ConsList from '../components/List/Year.vue'

import {UseInit} from '../hooks/index'
import { Filed } from '@/types'
const {pageData , getData , ActivatedFunc} = UseInit(Filed.YEAR)
  getData()
  ActivatedFunc()
</script>

<style lang="scss">
  
</style>

