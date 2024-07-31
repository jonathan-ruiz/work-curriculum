<script setup lang="ts">

import {skills} from "../../../model.ts";
import {defineProps, useAttrs} from "vue";
import {
  CodeBracketSquareIcon,
  CloudIcon,
  PencilSquareIcon,
} from '@heroicons/vue/24/solid';
import Skills from "../Skills.vue";
export interface Props {
  sectionClass?: string;
}

const {sectionClass} = defineProps<Props>();
const attrs = useAttrs();
</script>

<template>
  <div v-bind="attrs" id="mainSkills">
    <section :class="sectionClass">
      <h2  class="print:text-xs">
        <CodeBracketSquareIcon class="w-6 inline-block"/>
        Programming Languages
      </h2>
      <Skills :skills="skills.coding.map(s => s.label)"
              class="screen-skill"/>
    </section>

    <section :class="sectionClass">
      <h2  class="print:text-xs">
        <CloudIcon class="w-6 inline-block"/>
        Cloud/DevOps/Platform
      </h2>
      <Skills :skills="skills.cloud.map(s => s.label)" class="screen-skill"/>
    </section>

    <section :class="sectionClass">
      <h2  class="print:text-xs">
        <PencilSquareIcon class="w-6 inline-block"/>
        Frameworks
      </h2>
      <Skills :skills="skills.frameworks.map(s => s.label)" class="screen-skill"/>
    </section>
  </div>

</template>
