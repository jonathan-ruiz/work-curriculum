<script setup lang="ts">
import Skills from "../Skills.vue";
import Highlighter from 'vue-highlight-words'
import {ExperienceType, SkillType} from "../../../types.ts";
import {ref, useAttrs} from "vue";
import IndustryIcon from "../../IndustryIcon.vue";

const dateOptions: Intl.DateTimeFormatOptions = {
  month: 'short',
  year: 'numeric'
}

export interface Props {
  experience: ExperienceType,
}

const props = withDefaults(defineProps<Props>(), {
})

function skillFilter(skill: SkillType) {
  return skill.value > 89;
}

function monthDiff(d1: Date, d2: Date): number {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 1 : Math.ceil(months);
}

function monthDiffToString(monthsDiff: number): string {
  const years = monthsDiff / 12
  const months = monthsDiff % 12
  let result = ''
  if (Math.trunc(years) > 0) result += ` ${Math.trunc(years)} Years `
  if (months > 0) result += ` ${months} Months `

  return result.trim()
}
const attrs = useAttrs();
const showMore = ref(false)
</script>

<template>
  <div v-bind="attrs">
    <div v-if="!experience.grouped" class="mb-2">
      <div class="print:flex print:items-center md:flex md:items-center" :class="[experience.industry || experience.project? 'mb-0' : 'mb-4']">
        <div v-if="!experience.grouped"
             class="block md:inline text-lg dark:font-white dark:text-white text-black p-2 rounded-r-md -ml-4">
          <span class="hidden md:inline font-bold text-2xl text-yellow-500">@</span> <span class="block md:inline">{{ experience.company }}</span>
        </div>
        <template v-if="!experience.grouped">
          <div class="hidden print:block md:block grow border-b border-black dark:border-gray-200"></div>
          <div class="block print:inline md:inline border border-black dark:border-gray-200 px-2">
            <span class="text-xs">{{ experience.startDate.toLocaleDateString(undefined, dateOptions) }}</span>
            <template v-if="experience.endDate"> <span class="text-xs"> - {{
                experience.endDate.toLocaleDateString(undefined, dateOptions)
              }}</span></template>
            <template v-else><span class="text-xs"> - Present</span></template>
            <span v-if="experience.endDate" class="text-xs"> ({{
                monthDiffToString(monthDiff(experience.startDate, experience.endDate || new Date()) + 1)
              }})</span>
          </div>
        </template>
      </div>
    </div>
    <div class="relative w-full mb-6">
      <IndustryIcon :name="experience.industry" class="hidden print:block md:block absolute top-0 left-0 -ml-3 h-5 w-5"/>

      <div class="ml-1 print:ml-6 md:ml-6">
        <div class="flex items-center" :class="[experience.industry || experience.project? 'mb-0' : 'mb-4']">

          <span class="text-xs print:text-base md:text-base bg-yellow-700 sm:bg-inherit hover:bg-yellow-500 md:hover:bg-inherit text-white sm:text-black font-bold sm:font-normal py-1 sm:py-0 px-4 sm:px-0 border sm:border-0 mb-2 md:mb-0 border-yellow-700 rounded">{{ experience.title }}</span>
          <span v-if="experience.finalClient" class="ml-2">@{{ experience.finalClient }}</span>
          <template v-if="!experience.grouped">
          </template>
        </div>

        <div v-if="experience.project" class="mb-4 text-left">
          in <span class="mb-4" v-html="experience.project"/>
        </div>

          <div class="grid grid-cols-4 place-content-between overflow-hidden mb-0">
            <ul class="list-disc ml-4 mr-2 col-span-4 text-left">
              <li v-if="experience.achievements" v-for="achievement in experience.achievements">
                <Highlighter
                    highlightClassName="badge-in-text"
                    :autoEscape="true"
                    :textToHighlight="achievement"
                    :searchWords="experience.skills.map(s => s.label)"
                />
              </li>
              <li v-for="task in experience.tasks">
                <Highlighter
                    highlightClassName="badge-in-text"
                    :autoEscape="true"
                    :textToHighlight="task"
                    :searchWords="experience.skills.map(s => s.label)"
                />
              </li>
            </ul>
          </div>

        <div class="text-justify">
          <skills
              :skills="experience.skills
                .filter((skill) => skillFilter(skill))
                .map(skill => skill.label)"
              class="screen-skill"
          />
        </div>
      </div>
      <img v-if="experience.image"
           class="transition transition-all ease-in-out delay-150 brightness-50 h-6 hover:h-64 w-full mx-auto object-cover"
           :src="`/src/assets/${experience.image}`" alt="work experience footer image">
    </div>
    <div v-if="experience.breakPageAfter" class="pagebreak"></div>
  </div>
</template>