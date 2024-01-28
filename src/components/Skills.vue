<script setup lang="ts">

import {ref} from "vue";
export interface Props {
  skills: Array<string>,
  colors?: Array<string>,
  weights?: Array<number>
  sort?: 'label' | 'weight',
  labelClass?: string,
  limit?: number,
  showMore?: boolean,
  mode?: 'bar' | 'cloud' | 'year'
}

const props = withDefaults(defineProps<Props>(), {
  colors: null,
  weights: null,
  sort: 'label',
  labelClass: null,
  limit: null,
  showMore: false,
  mode: 'bar'
})

const DEFAULT_COLOR = 'bg-blue-950 dark:bg-gray-100 text-white dark:text-black';

const maxWeight = props.weights ? Math.max(...props.weights) : null;
const normalizedWeights = props.weights ? props.weights.map((weight) => weight / maxWeight) : [0]
const badgesObject = arraysToObject(props.skills, normalizedWeights, props.colors).sort((a, b) => {
  return props.sort == 'weight' ? b.weight - a.weight || a.label.localeCompare(b.label) : a.label.localeCompare(b.label) || b.weight - a.weight
})

// Ref
const badgesObjectLimited = ref(Array.from(badgesObject))

// Adjust the array to the limit if it was set
badgesObjectLimited.value.length = Math.min(props.skills.length, props.limit || props.skills.length)

// Functions
function showAllBadges() {
  badgesObjectLimited.value = Array.from(badgesObject);
}

function getNormalizedWeightClass(weight: number) {
  let modeClass = props.mode === 'cloud' ? '' : 'rounded-t-sm text-sm'

  if (weight >= 1) return props.mode === 'cloud' ? 'text-6xl' : `pt-10 ${modeClass}`
  if (weight >= 0.9) return props.mode === 'cloud' ? 'text-5xl' : `pt-9 ${modeClass}`
  if (weight >= 0.8) return props.mode === 'cloud' ? 'text-4xl' : `pt-8 ${modeClass}`
  if (weight >= 0.7) return props.mode === 'cloud' ? 'text-3xl' : `pt-7 ${modeClass}`
  if (weight >= 0.6) return props.mode === 'cloud' ? 'text-2xl' : `pt-6 ${modeClass}`
  if (weight >= 0.5) return props.mode === 'cloud' ? 'text-xl' : `pt-5 ${modeClass}`
  if (weight >= 0.4) return props.mode === 'cloud' ? 'text-lg' : `pt-4 ${modeClass}`
  if (weight >= 0.3) return props.mode === 'cloud' ? 'text-base' : `pt-3 ${modeClass}`
  if (weight >= 0.2) return props.mode === 'cloud' ? 'text-sm' : `pt-2 ${modeClass}`
  if (weight >= 0.1) return props.mode === 'cloud' ? 'text-xs' : `pt-1 ${modeClass}`

  return props.mode === 'cloud' ? 'text-xs' : `pt-0 ${modeClass}`
}

function getAbsoluteWeightClass(weight: number) {
  let modeClass = 'rounded-t-sm text-md'

  if ((weight * maxWeight) / 365 >= 7) return `pb-10 ${modeClass}`
  if ((weight * maxWeight) / 365 >= 5) return `pb-7 ${modeClass}`
  if ((weight * maxWeight) / 365 >= 3) return `pb-4 ${modeClass}`
  if ((weight * maxWeight) / 365 >= 1) return `pb-1 ${modeClass}`

  return `pt-0 ${modeClass}`
}

function getAbsoluteWeightLabel(weight: number) {

  if ((weight * maxWeight) / 365 >= 7) return `+7 Years`
  if ((weight * maxWeight) / 365 >= 5) return `+5 Years`
  if ((weight * maxWeight) / 365 >= 3) return `+3 Years`
  if ((weight * maxWeight) / 365 >= 1) return `+1 Year`

  return `< 1 Year`
}

function arraysToObject(badges: Array<string>, weights: Array<number>, colors?: Array<string>): [{
  label: string,
  weight: number,
  color: string
}] {
  const res = [];

  for (let i = 0; i < badges.length; i++) {
    res.push({
      label: badges[i],
      weight: weights[i],
      color: colors?.[i] || DEFAULT_COLOR
    });
  }

  return res;
}

</script>

<template>
  <div
      v-for="badge in badgesObjectLimited"
      :class="[
          labelClass || '',
          badge.color,
          mode == 'cloud' || mode == 'bar' ?
           getNormalizedWeightClass(badge.weight) : ''
        ]"
  >
    <span class="block text-xs pt-0.5" :class="[getAbsoluteWeightClass(badge.weight)]" v-if="mode === 'year'">{{ getAbsoluteWeightLabel(badge.weight) }}</span>
    <span class="text-md">{{ badge.label }}</span>
  </div>
  <button class="p0.5" v-if="showMore && limit && badgesObjectLimited.length == limit" @click="showAllBadges">more...
  </button>
  <button class="p0.5" v-if="showMore && limit && badgesObjectLimited.length != limit"
          @click="badgesObjectLimited.length = props.limit">less...
  </button>
</template>