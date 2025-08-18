<script setup lang="ts">
import { usePortfolioStore } from "@/stores/portfolio";
import { defineProps, computed, useAttrs } from "vue";
import {
  CodeBracketSquareIcon,
  CloudIcon,
  PencilSquareIcon,
} from "@heroicons/vue/24/solid";
import Skills from "../Skills.vue";

// Props definition
export interface Props {
  sectionClass?: string;
}

const { sectionClass } = defineProps<Props>();
const attrs = useAttrs();

// Use the portfolio store
const portfolioStore = usePortfolioStore();

// Mapping skill categories to icons and titles
const skillSections = computed(() => {
  const allSkills = portfolioStore.allSkills;
  
  // Define skill categories
  const codingSkills = ['JavaScript', 'TypeScript', 'Python', 'C#', 'Java', 'PHP', 'SQL', 'Bash', 'PowerShell', 'TDD'];
  const cloudSkills = ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Gitlab CI', 'DataDog', 'Redis', 'PostgreSQL', 'Linux'];
  const frameworkSkills = ['React', 'Vue', 'Angular', 'Node.js', 'Express', '.NET', 'Nest.js', 'Next.js', 'Unity', 'Unreal'];
  
  return [
    {
      title: "Programming Languages",
      skills: allSkills
        .filter(skill => codingSkills.includes(skill.label))
        .map(skill => skill.label),
      icon: CodeBracketSquareIcon,
    },
    {
      title: "Cloud/DevOps/Platform",
      skills: allSkills
        .filter(skill => cloudSkills.includes(skill.label))
        .map(skill => skill.label),
      icon: CloudIcon,
    },
    {
      title: "Frameworks",
      skills: allSkills
        .filter(skill => frameworkSkills.includes(skill.label))
        .map(skill => skill.label),
      icon: PencilSquareIcon,
    },
  ];
});
</script>

<template>
  <div v-bind="attrs" id="mainSkills">
    <!-- Iterate dynamically over skill sections -->
    <section
        v-for="(section, index) in skillSections"
        :key="index"
        :class="sectionClass"
    >
      <h2 class="print:text-xs">
        <component :is="section.icon" class="w-6 inline-block" />
        {{ section.title }}
      </h2>
      <Skills :skills="section.skills" class="screen-skill" />
    </section>
  </div>
</template>