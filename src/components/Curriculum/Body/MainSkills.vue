<script setup lang="ts">
import { skills } from "../../../model.ts";
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

// Mapping skill categories to icons and titles
const skillSections = computed(() => [
  {
    title: "Programming Languages",
    skills: skills.coding.map((s) => s.label),
    icon: CodeBracketSquareIcon,
  },
  {
    title: "Cloud/DevOps/Platform",
    skills: skills.cloud.map((s) => s.label),
    icon: CloudIcon,
  },
  {
    title: "Frameworks",
    skills: skills.frameworks.map((s) => s.label),
    icon: PencilSquareIcon,
  },
]);
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