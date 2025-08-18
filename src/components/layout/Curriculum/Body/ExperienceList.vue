<script setup lang="ts">
import Experience from "./Experience.vue";
import type { ExperienceType } from "@/types";
import { useAttrs, computed } from "vue";

// Define props with optional itemsClass and required experiences
const props = defineProps<{
  experiences: ExperienceType[];
  itemsClass?: string;
}>();

// Access additional attributes passed to this component
const attrs = useAttrs();

/**
 * Groups experiences based on the same company.
 * The processed list is immutable and prevents side effects.
 */
const groupedExperiences = computed(() => {
  if (!props.experiences || !props.experiences.length) return [];

  const experiencesCopy = [...props.experiences]; // Avoid mutating the original props
  let activeGroupIndex: number | undefined;

  experiencesCopy.forEach((experience, index) => {
    const nextExperience = experiencesCopy[index + 1];

    // Check if the next experience belongs to the same company
    if (nextExperience && experience.company === nextExperience.company) {
      experiencesCopy[index + 1].grouped = true; // Mark as grouped
      if (activeGroupIndex === undefined) activeGroupIndex = index; // Store group start
    } else if (activeGroupIndex !== undefined) {
      // Set the startDate of the grouped experience
      experiencesCopy[activeGroupIndex].startDate = experience.startDate;
      activeGroupIndex = undefined; // Reset group index
    }
  });

  return experiencesCopy;
});

/**
 * Filters out highlighted experiences that should not appear in this list.
 */
const nonHighlightedExperiences = computed(() =>
    groupedExperiences.value.filter((exp) => !exp.highlight)
);
</script>

<template>
  <div v-bind="attrs">
    <Experience
        v-for="experience in nonHighlightedExperiences"
        :key="experience.company + experience.title"
        :experience="experience"
        class="print:border-l-2 md:border-l-2 border-dashed w-full"
        :class="itemsClass"
    />
  </div>
</template>

<style scoped>
</style>