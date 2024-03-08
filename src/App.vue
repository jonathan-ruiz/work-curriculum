<script setup lang="ts">
  import Curriculum from './components/Curriculum.vue'
  import {
    SunIcon,
  } from '@heroicons/vue/24/solid';
  import {computed, ref} from "vue";
  import {useRoute} from 'vue-router'

  const route = useRoute()
  const theme = ref('high-contrast')

  //TODO: route is undefined it will allways be online
  const version = computed(() => {
    return route?.query.version || 'online'
  })
</script>

<template>
  <Curriculum :version="version as 'online' | 'printable'"/>
</template>

<style scoped>

</style>
