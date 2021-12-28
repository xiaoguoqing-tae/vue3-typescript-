<template>
  <div class="error-tip" v-if="errorCode">
      <img src="../../assets/img/error.png">
      <p>{{ errorData }}</p>
  </div>
</template>

<script setup lang='ts'>

import errordata from '@/datas/error'
import { computed} from 'vue'

import { Store, useStore } from 'vuex'
const store:Store<any> = useStore()
const errorCode = computed(():number|string => store.state.errorCode)
const errorData = errordata[errorCode.value]

</script>

<style lang='less'>
.error-tip {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;

  img {
    width: 100px;
    vertical-align: bottom;
  }

  p {
    margin-top: 15px;
    font-size: 14px;
    color: #999999;
  }
}
</style>
