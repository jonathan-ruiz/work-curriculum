<script setup lang="ts">
import { defineProps, useAttrs } from "vue";
import { useSkillsState } from "@/composables/useSkillsState";

// Props declaration
export interface Props {
  skillClass?: string; // Optional class for styling skill text
  skills: string[]; // List of skills to display
}

// Destructure props
const { skillClass, skills } = defineProps<Props>();
const attrs = useAttrs(); // Pass additional attributes

// Use the skills state composable
const { selectedSkills, toggleSkill } = useSkillsState();

/**
 * Toggles the selection state of a skill globally.
 */
function handleSkillToggle(skill: string) {
  toggleSkill(skill);
}
</script>

<template>
  <!-- Wrap list to avoid fragment root so parent classes/attrs apply here -->
  <div v-bind="attrs">
    <div
        v-for="skill in skills"
        :key="skill"
        @click="handleSkillToggle(skill)"
        :class="[
        'skills-container cursor-pointer py-1 px-2 rounded transition-all ease-in-out duration-300 inline-block m-1',
        selectedSkills.includes(skill)
          ? 'border-2 border-red-500 scale-105 shadow-md bg-red-50 dark:bg-red-900/20'
          : 'border border-blue-500 bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700'
      ]"
    >
      <span :class="[skillClass, 'text-sm font-medium text-white']">
        {{ skill }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.skills-container {
  transition: all 0.3s ease-in-out;
}

.skills-container:hover {
  transform: scale(1.1); /* Slight zoom on hover */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); /* Shadow effect on hover */
}
</style>