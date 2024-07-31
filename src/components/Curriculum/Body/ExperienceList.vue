<script setup lang="ts">
import Experience from "./Experience.vue";
import {ExperienceType} from "../../../types.ts";
import {useAttrs} from "vue";

const attrs = useAttrs();


const props = defineProps<{
  experiences: Array<ExperienceType>,
  itemsClass?: string
}>();

const groupExperiences = (experiences: Array<ExperienceType>) => {
  let groupStartIndex: number | undefined;

  experiences.forEach((experience, index) => {
    if (experiences[index + 1] && experience.company === experiences[index + 1].company) {
      experiences[index + 1].grouped = true;
      if (groupStartIndex === undefined) groupStartIndex = index;
    } else {
      if (groupStartIndex !== undefined) {
        experiences[groupStartIndex].startDate = experiences[index].startDate;
      }
      groupStartIndex = undefined;
    }
  });
};

groupExperiences(props.experiences);
</script>

<template>
  <div v-bind="attrs">
    <Experience
        class="print:border-l-2 md:border-l-2 border-dashed w-full"
        v-for="experience in experiences.filter(exp => !exp.highlight)"
        :key="experience.company + experience.title"
        :experience="experience"
    />
  </div>

</template>

<style scoped>
</style>
