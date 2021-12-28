<template>
  <router-link 
    :to="path"
    class="tab-icon"
  >
    <i class="icon" :class="{'icon-active':active}">{{ iconText }}</i>
    <p class="text" :class="{'text-active':active}">
      <slot></slot>
    </p>
  </router-link>
</template>

<script setup lang="ts">
import { defineProps , withDefaults ,toRefs } from '@vue/runtime-core';
    interface Props{
        path:string;
        iconText:string;
        active:boolean; 
    }
    const props = withDefaults(defineProps<Props>(), {
        path:'',
        iconText:'',
        active:true
    })
    const {path , iconText ,active} = toRefs(props)
</script>

<style lang='less' scoped>
  .icon-active{
        background-color: #DB7093 !important;
        color: #ffffff !important;
   }
   .text-active {
        color: #DB7093 !important;
   }
  .tab-icon{
    display: flex;
    text-decoration: none;
    flex-direction: column;
    align-items: center;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background-color: #dddddd;
      color: #999999;
      font-size: 12px;
      font-style: inherit;
      text-align: center;
      margin-top: 2px;
      transition: color .5s;
    }
    .text {
      margin: 0;
      margin-top: 4px;
      font-size: 14px;
      color: #999999;
    }
  }
</style>