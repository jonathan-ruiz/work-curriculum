<script setup lang="ts">
import {ArrowRightCircleIcon} from "@heroicons/vue/24/solid";
import type { IndustryType } from "@/types";
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
import {useAttrs} from "vue";

library.add(faGamepad, faBuilding, faStethoscope, faBus, faShoppingCart, faSatellite, faRobot, faGraduationCap, faSatelliteDish, faCreditCard)

export interface Props {
  name?: IndustryType,
}

const props = withDefaults(defineProps<Props>(), {
  name: undefined
})
const attrs = useAttrs();
</script>

<template>
  <font-awesome-icon v-if="props.name === 'gaming'" :icon="['fas', 'gamepad']" v-bind="attrs"/>
  <font-awesome-icon v-else-if="props.name === 'building'" :icon="['fas', 'building']" v-bind="attrs"/>
  <font-awesome-icon v-else-if="props.name === 'health'" :icon="['fas', 'stethoscope']"/>
  <font-awesome-icon v-else-if="props.name === 'public infrastructure'" :icon="['fas', 'bus']" v-bind="attrs"/>
  <font-awesome-icon v-else-if="props.name === 'ecommerce'" :icon="['fas', 'cart-shopping']" v-bind="attrs"/>
  <font-awesome-icon v-else-if="props.name === 'telecommunications'" :icon="['fas', 'satellite-dish']" v-bind="attrs"/>
  <font-awesome-icon v-else-if="props.name === 'robotics'" :icon="['fas', 'robot']" v-bind="attrs"/>
  <font-awesome-icon v-else-if="props.name === 'learning'" :icon="['fas', 'graduation-cap']" v-bind="attrs"/>
  <font-awesome-icon v-else-if="props.name === 'aeronautics'" :icon="['fas', 'satellite']" v-bind="attrs"/>
  <font-awesome-icon v-else-if="props.name === 'finance'" :icon="['fas', 'credit-card']" v-bind="attrs"/>
  <ArrowRightCircleIcon v-else v-bind="attrs"/>
</template>

<style scoped>

</style>