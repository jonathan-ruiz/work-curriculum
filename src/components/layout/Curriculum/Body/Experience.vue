<script setup lang="ts">
import Skills from "../Skills.vue";
import Highlighter from "vue-highlight-words";
import type { ExperienceType, SkillType } from "@/types";
import { computed, useAttrs } from "vue";
import type { IndustryType } from "@/types";
import IndustryIcon from "../../../ui/IndustryIcon.vue";

/**
 * Props definition
 * Expects `experience` of type `ExperienceType`
 */
export interface Props {
  experience: ExperienceType;
}
const props = defineProps<Props>();
const attrs = useAttrs();

/**
 * Formatting options for dates (e.g., Mar 2023)
 */
const dateOptions: Intl.DateTimeFormatOptions = {
  month: "short",
  year: "numeric",
};

/**
 * Filters skills based on a threshold value
 */
const skillFilter = (skill: SkillType) => skill.value > 89;

/**
 * Calculates the difference between two dates in months
 */
function monthDiff(d1: Date, d2: Date): number {
  let months = (d2.getFullYear() - d1.getFullYear()) * 12 + (d2.getMonth() - d1.getMonth());
  return months <= 0 ? 1 : Math.ceil(months);
}

/**
 * Converts the month difference into a string (e.g., "2 Years 5 Months")
 */
function monthDiffToString(monthsDiff: number): string {
  const years = Math.floor(monthsDiff / 12);
  const months = monthsDiff % 12;
  const yearText = years > 0 ? `${years} Year${years > 1 ? "s" : ""} ` : "";
  const monthText = months > 0 ? `${months} Month${months > 1 ? "s" : ""}` : "";
  return `${yearText}${monthText}`.trim();
}

/**
 * Compute the formatted duration string for the experience;
 * handles Present if no end date is provided.
 */
const formattedDuration = computed(() => {
  const startDate = props.experience.startDate.toLocaleDateString(undefined, dateOptions);
  const endDate = props.experience.endDate
      ? props.experience.endDate.toLocaleDateString(undefined, dateOptions)
      : "Present";
  const durationText = monthDiffToString(
      monthDiff(props.experience.startDate, props.experience.endDate || new Date())
  );
  return `${startDate} - ${endDate} (${durationText})`;
});

// const showMore = ref(false); // Removed unused variable
</script>

<template>
  <!-- Root container -->
  <div v-bind="attrs">
    <!-- Company Header -->
    <div v-if="!experience.grouped" class="mb-2">
      <div
          class="print:flex print:items-center md:flex md:items-center"
          :class="[experience.industry || experience.project ? 'mb-0' : 'mb-4']"
      >
        <!-- Company Name -->
        <div
            v-if="!experience.grouped"
            class="block md:inline text-lg dark:font-white dark:text-white text-black p-2 rounded-r-md -ml-4"
        >
          <span class="hidden md:inline font-bold text-2xl text-yellow-500">@</span>
          <span class="block md:inline">{{ experience.company }}</span>
        </div>

        <!-- Timeline -->
        <div class="hidden print:block md:block grow border-b border-black dark:border-gray-200"></div>
        <div class="block print:inline md:inline border border-black dark:border-gray-200 px-2">
          <span class="text-xs">{{ formattedDuration }}</span>
        </div>
      </div>
    </div>

    <!-- Experience Details -->
    <div class="relative w-full mb-6">
      <!-- Industry Icon -->
      <IndustryIcon
          v-if="experience.industry"
          :name="experience.industry as IndustryType"
          class="hidden print:block md:block absolute top-0 left-0 -ml-3 h-5 w-5"
      />

      <!-- Description Container -->
      <div class="ml-1 print:ml-6 md:ml-6">
        <!-- Title and Final Client -->
        <div :class="[experience.industry || experience.project ? 'mb-0' : 'mb-4']" class="flex items-center">
          <span
              class="text-xs print:text-base md:text-base bg-yellow-700 sm:bg-inherit hover:bg-yellow-500 md:hover:bg-inherit text-white dark:text-white sm:text-black font-bold sm:font-normal py-1 sm:py-0 px-4 sm:px-0 border sm:border-0 mb-2 md:mb-0 border-yellow-700 rounded"
          >
            {{ experience.title }}
          </span>
          <span v-if="experience.finalClient" class="ml-2">@ {{ experience.finalClient }}</span>
        </div>

        <!-- Project Info -->
        <div v-if="experience.project" class="mb-4 text-left">
          in <span class="mb-4" v-html="experience.project" />
        </div>

        <!-- Achievements & Tasks -->
        <div class="grid grid-cols-4 place-content-between overflow-hidden mb-0">
          <ul class="list-disc ml-4 mr-2 col-span-4 text-left">
            <!-- Iterate over achievements -->
            <li
                v-if="experience.achievements"
                v-for="achievement in experience.achievements"
                :key="achievement"
            >
              <Highlighter
                  :highlightClassName="'badge-in-text'"
                  :autoEscape="true"
                  :textToHighlight="achievement"
                  :searchWords="experience.skills.map((s) => s.label)"
              />
            </li>

            <!-- Iterate over tasks -->
            <li v-for="task in experience.tasks" :key="task">
              <Highlighter
                  :highlightClassName="'badge-in-text'"
                  :autoEscape="true"
                  :textToHighlight="task"
                  :searchWords="experience.skills.map((s) => s.label)"
              />
            </li>
          </ul>
        </div>

        <!-- Skills -->
        <div class="text-justify">
          <Skills
              :skills="experience.skills.filter(skillFilter).map((skill) => skill.label)"
              class="screen-skill"
          />
        </div>
      </div>

      <!-- Image -->
      <img
          v-if="experience.image"
          class="transition transition-all ease-in-out delay-150 brightness-50 h-6 hover:h-64 w-full mx-auto object-cover"
          :src="`/src/assets/${experience.image}`"
          alt="work experience footer image"
      />
    </div>

    <!-- Page Break -->
    <div v-if="experience.breakPageAfter" class="pagebreak"></div>
  </div>
</template>