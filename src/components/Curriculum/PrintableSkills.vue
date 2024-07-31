<script setup lang="ts" xmlns="http://www.w3.org/1999/html">

// Define the props
interface Props {
  skills: Array<string>,
}

// Use defineProps to define and use the props
const props = defineProps<Props>();

</script>

<template>
  <div>
  <span v-for="skill in props.skills.slice(0, -1)" :key="skill">
    {{ skill }},
  </span>
    <span v-if="props.skills.length - 1 >= 0"> {{props.skills[props.skills.length - 1] }} </span>
  </div>
</template>
