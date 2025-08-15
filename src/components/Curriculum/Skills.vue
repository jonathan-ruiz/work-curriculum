<script setup lang="ts">
import { defineProps, useAttrs } from "vue";
import { skillsState } from "../../useSkillsState"; // Import the singleton shared state

// Props declaration
export interface Props {
  skillClass?: string; // Optional class for styling skill text
  skills: string[]; // List of skills to display
}

// Destructure props
const { skillClass, skills } = defineProps<Props>();
const attrs = useAttrs(); // Pass additional attributes

/**
 * Toggles the selection state of a skill globally.
 */
function toggleSkill(skill: string) {
  // Toggle the selected state of the clicked skill
  skillsState.selectedSkills[skill] = !skillsState.selectedSkills[skill];
}
</script>

<template>
  <div
      v-for="skill in skills"
      :key="skill"
      v-bind="attrs"
      @click="toggleSkill(skill)"
      :class="[
      'skills-container cursor-pointer py-1 px-2 rounded transition-all ease-in-out duration-300',
      skillsState.selectedSkills[skill]
        ? 'border-2 border-red-500 scale-105 shadow-md'
        : 'border border-gray-300'
    ]"
  >
    <span :class="[skillClass, 'text-sm font-medium']">
      {{ skill }}
    </span>
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