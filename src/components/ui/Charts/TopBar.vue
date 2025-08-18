<script setup lang="ts">
  import {SunIcon} from "@heroicons/vue/24/solid";
  import { ref } from 'vue';
  
  export interface Props {
    theme?: 'default' | 'high-contrast',
  }
  
  const props = withDefaults(defineProps<Props>(), {
    theme: 'default',
  })
  
  const currentTheme = ref(props.theme)
</script>

<template>
  <header v-if="false" class="bg-gray-100 top-0 z-50 p-1 place-content-end grid">
    <button
        @click="currentTheme = currentTheme == 'default' ? 'high-contrast' : 'default'"
        class=" bg-blue-100 dark:bg-blue-800 rounded-md p-2 m-2 hover:bg-blue-600 dark:hover:bg-blue-900"
    >
      <SunIcon class="w-6 inline-block"></SunIcon>
      High Contrast
    </button>
  </header>
</template>