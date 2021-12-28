<template>
  <div class="container">
      <ConsCard
        :name="pageData.name"
        :allIndex="Number(pageData.all)"
      />
      <ConsList 
        :data="pageData"
      />
  </div>
</template>

<script setup lang="ts">

import { Filed } from '@/types'
import ConsList from '../components/List/Month.vue'
import {UseInit} from '../hooks/index'
const {pageData , getData , ActivatedFunc} = UseInit(Filed.MONTH)
getData()
ActivatedFunc()

</script>

<style lang="scss">
  
</style>
