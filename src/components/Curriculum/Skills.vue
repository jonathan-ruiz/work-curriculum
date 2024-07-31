<script setup lang="ts">
import {defineProps, useAttrs} from 'vue';

export interface Props {
  skillClass?: string;
  skills: string[];
}
const { skillClass, skills } = defineProps<Props>();
const attrs = useAttrs();
</script>

<template>
  <div v-bind="attrs" v-for="skill in skills" :key="skill" >
    <span :class="skillClass" >{{ skill }}</span>
  </div>
</template>