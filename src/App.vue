<script setup lang="ts">
import Curriculum from './components/Curriculum/Curriculum.vue';
</script>

<template>
  <Curriculum
      class="container m-auto text-xs print-curriculum"
  />
</template>

<style scoped>
/* Print-specific styles */
@media print {
  .print-curriculum {
    width: 297mm;
    font-size: 18px;
    line-height: 1.2;
  }
}
</style>