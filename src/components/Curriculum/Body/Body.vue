<script setup lang="ts">
import {defineProps, ref, useAttrs} from "vue";
import {industriesFromExperience, skills, skillsFromExperience, workExperiences} from "../../../model.ts";
import {IndustryType} from "../../../types.ts";
import IndustryIcon from "../../IndustryIcon.vue";
import {
  CodeBracketSquareIcon,
  CloudIcon,
  PencilSquareIcon,
} from '@heroicons/vue/24/solid';
import ExperienceList from "./ExperienceList.vue";
import Skills from "../Skills.vue";
import MainSkills from "./MainSkills.vue";

export interface Props {
  sectionClass?: string;
}

const {sectionClass} = defineProps<Props>();
const attrs = useAttrs();

function toggleIndustry(industry: IndustryType) {
  selectedIndustries.value.includes(industry)
      ? selectedIndustries.value = selectedIndustries.value.filter(i => i !== industry)
      : selectedIndustries.value.push(industry);
}

const selectedIndustries = ref<IndustryType[]>([]);

</script>
<template>

  <div v-bind="attrs">
    <section :class="sectionClass" class="print:break-after-page">
      <MainSkills class="print:grid print:grid-cols-3 md:grid md:grid-cols-3" section-class="text-center"/>
    </section>
    <section :class="sectionClass">
      <h2>Other Skills:</h2>
      <Skills
          :skills="skillsFromExperience
            .map(s => s.label)
            .filter(sl => !skills.coding.map(s => s.label).includes(sl))
            .filter(sl => !skills.cloud.map(s => s.label).includes(sl))
            .filter(sl => !skills.frameworks.map(s => s.label).includes(sl))"
          sort="weight"
          class="screen-skill"
      />
    </section>
    <section :class="sectionClass">
      <h2 class="mb-2 text-left">Work Experience</h2>
      <!--      <div class="flex flex-wrap mb-2">-->
      <!--        <span class="sr-only">Filters</span>-->
      <!--        <div v-for="industry in industriesFromExperience" :key="industry.label" class="inline-flex mr-3">-->
      <!--          <button-->
      <!--              :class="selectedIndustries.includes(industry.label as IndustryType) ? 'border-green-200 bg-green-50 text-black' : 'border-gray-200 text-black dark:text-white'"-->
      <!--              @click="toggleIndustry(industry.label as IndustryType)"-->
      <!--              class="rounded-sm flex items-center space-x-2 p-0.5 cursor-pointer border border-solid mb-1"-->
      <!--          >-->
      <!--            <IndustryIcon :name="industry.label as IndustryType"/>-->
      <!--            <span>{{ industry.label }}</span>-->
      <!--          </button>-->
      <!--        </div>-->
      <!--      </div>-->

      <ExperienceList
          class="grid grid-cols-1"
          :experiences="workExperiences.filter(we => selectedIndustries.length > 0 ? selectedIndustries.includes(we.industry as IndustryType) : true)"
      />

    </section>
  </div>

</template>