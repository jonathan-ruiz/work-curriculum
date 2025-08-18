<script setup lang="ts">
export interface Props {
  themeClass?: string,
}
// const props = withDefaults(defineProps<Props>(), {
//   themeClass: '',
// })

const DEFAULT_COLOR = 'bg-blue-950 dark:bg-gray-100 text-white dark:text-black';
</script>
<template>
  <section class="pt-0" :class="DEFAULT_COLOR" >

    <!-- isPrintable header profile picture -->
    <div class="mt-4 text-center" :class="'text-lg font-extrabold'">
      <span class="inline-block">
          Jonathan Ruiz
      </span> -
      <span class="inline-block">
            contact@jonathanruiz.co.uk
      </span> -
      <a href="http://jonathanruiz.co.uk" class="text-inherit font-extrabold">jonathanruiz.co.uk</a>

    </div>
  </section>
</template>