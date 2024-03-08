<script setup lang="ts">
import {ArrowRightCircleIcon} from "@heroicons/vue/24/solid";
import Skills from "./Skills.vue";
import Highlighter from 'vue-highlight-words'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {
  faGamepad,
  faBuilding,
  faStethoscope,
  faBus,
  faShoppingCart,
  faSatellite,
  faRobot,
  faGraduationCap,
  faSatelliteDish,
  faCreditCard
} from '@fortawesome/free-solid-svg-icons'

library.add(faGamepad, faBuilding, faStethoscope, faBus, faShoppingCart, faSatellite, faRobot, faGraduationCap, faSatelliteDish, faCreditCard)

import {ExperienceType} from "../types.ts";

const dateOptions: Intl.DateTimeFormatOptions = {
  month: 'short',
  year: 'numeric'
}
const props = defineProps<{
  experience: ExperienceType
}>()

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
</script>

<template>
  <div v-if="!experience.grouped">
    <div class="flex items-center" :class="[experience.industry || experience.project? 'mb-0' : 'mb-4']">
      <div v-if="!experience.grouped" class="dark:font-white dark:text-black dark:bg-white font-black bg-blue-950 text-white p-2 rounded-r-md -ml-4">
         @ {{ experience.company }}
      </div>
      <template v-if="!experience.grouped">
        <div class="grow border-b border-black dark:border-gray-200"></div>
        <div class="border border-black dark:border-gray-200 px-2">
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
    <font-awesome-icon v-if="experience.industry === 'gaming'" class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7"
                       :icon="['fas', 'gamepad']"/>
    <font-awesome-icon v-else-if="experience.industry === 'building'" class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7"
                       :icon="['fas', 'building']"/>
    <font-awesome-icon v-else-if="experience.industry === 'health'" class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7"
                       :icon="['fas', 'stethoscope']"/>
    <font-awesome-icon v-else-if="experience.industry === 'public infrastructure'"
                       class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7" :icon="['fas', 'bus']"/>
    <font-awesome-icon v-else-if="experience.industry === 'ecommerce'" class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7"
                       :icon="['fas', 'cart-shopping']"/>
    <font-awesome-icon v-else-if="experience.industry === 'telecommunications'"
                       class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7" :icon="['fas', 'satellite-dish']"/>
    <font-awesome-icon v-else-if="experience.industry === 'robotics'" class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7"
                       :icon="['fas', 'robot']"/>
    <font-awesome-icon v-else-if="experience.industry === 'learning'" class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7"
                       :icon="['fas', 'graduation-cap']"/>
    <font-awesome-icon v-else-if="experience.industry === 'aeronautics'"
                       class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7"
                       :icon="['fas', 'satellite']"/>
    <font-awesome-icon v-else-if="experience.industry === 'finance'"
                       class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7"
                       :icon="['fas', 'credit-card']"/>
    <ArrowRightCircleIcon v-else class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7"/>


    <div class="ml-6">
      <div class="flex items-center" :class="[experience.industry || experience.project? 'mb-0' : 'mb-4']">
        <div class="font-black" >
          {{ experience.title }} <template v-if="experience.finalClient">({{ experience.finalClient }})</template>
        </div>
        <template v-if="!experience.grouped">
        </template>
      </div>
      <div v-if="experience.industry"
           :class="experience.project ? '' : 'mb-4'"
           class="bg-amber-50 rounded-b-md">
        <span class="mb-4" v-html="experience.industry.toUpperCase()"/>
      </div>
      <div v-if="experience.project" class="mb-4">
        in <span class="mb-4" v-html="experience.project"/>
      </div>
      <div class="grid grid-cols-4 place-content-between">
        <ul class="list-disc ml-4 mr-2 col-span-4">
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
      <div class="text-justify mt-6">
        <skills
            :skills="experience.skills
              .map(skill => skill.label)"

            label-class="badge"

            sort="weight"
        />
      </div>
    </div>
    <img v-if="experience.image"
         class="transition transition-all ease-in-out delay-150 brightness-50 h-6 hover:h-64 w-full mx-auto object-cover"
         :src="`/src/assets/${experience.image}`" alt="work experience footer image">
  </div>
  <div v-if="experience.breakPageAfter" class="pagebreak"></div>
</template>