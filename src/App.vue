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
  <header v-if="false" class="bg-gray-100 top-0 z-50 p-1 place-content-end grid">
    <button
        @click="theme = theme == 'default' ? 'high-contrast' : 'default'"
        class=" bg-blue-100 dark:bg-blue-800 rounded-md p-2 m-2 hover:bg-blue-600 dark:hover:bg-blue-900"
    >
      <SunIcon class="w-6 inline-block"></SunIcon>
      High Contrast
    </button>
  </header>
  <Curriculum :theme="theme" :version="version as 'online' | 'printable'"/>
</template>

<style scoped>

</style>
