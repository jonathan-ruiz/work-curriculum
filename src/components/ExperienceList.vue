<script setup lang="ts">
import Experience from "./Experience.vue";
import {ExperienceType} from "../types.ts";

const props = defineProps<{
  experiences: Array<ExperienceType>
}>()

function groupExperiences(experiences: Array<ExperienceType>) {

  let groupStartIndex;
  experiences.forEach((experience, index) => {
    if (experiences[index+1] && experience.company === experiences[index+1].company) {

      experiences[index+1].grouped = true
      if (!groupStartIndex) groupStartIndex = index

    } else {
      if (groupStartIndex) {
        experiences[groupStartIndex].startDate = experiences[index].startDate
      }
      groupStartIndex = undefined
    }
  })
}

groupExperiences(props.experiences)

</script>

<template>
    <div class="flex">
      <div class="space-y-6 border-l-2 border-dashed w-full">
        <Experience v-for="experience in experiences" :experience="experience"/>
      </div>
    </div>

</template>