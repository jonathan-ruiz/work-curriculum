<script setup lang="ts">
import { defineProps, ref, computed, useAttrs } from "vue";
import { usePortfolioStore } from "@/stores/portfolio";
import { useSkillsState } from "@/composables/useSkillsState";
import type { IndustryType } from "@/types";
import ExperienceList from "./ExperienceList.vue";
import Skills from "../Skills.vue";
import MainSkills from "./MainSkills.vue";

// Props definition
export interface Props {
  sectionClass?: string;
}

const { sectionClass } = defineProps<Props>();
const attrs = useAttrs();

// Use the new store and composables
const portfolioStore = usePortfolioStore();
const { selectedSkills, filteredExperiences } = useSkillsState();

// State for selected industries for filtering (if filter is enabled)
const selectedIndustries = ref<IndustryType[]>([]);

// Computed for filtering experiences based on selected industries
const filteredWorkExperiences = computed(() => {
  if (selectedIndustries.value.length > 0) {
    return filteredExperiences.value.filter((we) =>
        selectedIndustries.value.includes(we.industry as IndustryType)
    );
  }
  return filteredExperiences.value;
});

// Computed for "Other Skills"
const otherSkills = computed(() => {
  const allSkills = portfolioStore.allSkills;
  const excludedSkills = [
    'JavaScript', 'TypeScript', 'Python', 'C#', 'Java', 'PHP', 'SQL',
    'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform',
    'React', 'Vue', 'Angular', 'Node.js', 'Express'
  ];
  return allSkills
      .map((s) => s.label)
      .filter((sl) => !excludedSkills.includes(sl));
});

/**
 * Function to clear all filters: selected industries and selected skills.
 */
const clearFilters = () => {
  selectedIndustries.value = []; // Clear selected industries
  portfolioStore.clearSkills(); // Clear selected skills
};

/**
 * Computed property to determine if any skill is selected.
 * Returns true if at least one skill is selected.
 */
const hasSelectedSkills = computed(() => {
  return selectedSkills.value.length > 0;
});
</script>

<template>
  <div v-bind="attrs">
    <!-- Main Skills Section -->
    <section :class="sectionClass">
      <MainSkills
          class="print:grid print:grid-cols-3 md:grid md:grid-cols-3"
          section-class="text-center"
      />
    </section>

    <!-- Other Skills Section -->
    <section :class="sectionClass" class="print:break-after-page">
      <h2>Other Skills:</h2>
      <Skills
          :skills="otherSkills"
          sort="weight"
          class="screen-skill"
      />
    </section>

    <!-- Work Experience Section -->
    <section :class="sectionClass">
      <h2 class="mb-2 text-left">Work Experience</h2>

      <!-- Remove All Filters Button -->
      <button
          v-if="hasSelectedSkills"
          @click="clearFilters"
          class="px-4 py-2 mb-4 text-white bg-red-500 rounded hover:bg-red-600"
      >
        Remove All Filters
      </button>

      <!-- Experience List -->
      <ExperienceList
          class="grid grid-cols-1"
          :experiences="filteredWorkExperiences"
      />
    </section>
  </div>
</template>