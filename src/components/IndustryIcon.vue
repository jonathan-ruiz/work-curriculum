<script setup lang="ts">
import {ArrowRightCircleIcon} from "@heroicons/vue/24/solid";
import {IndustryType} from "../types.ts";
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

const props = withDefaults(defineProps<Props>(), {})
const attrs = useAttrs();
</script>

<template>
  <font-awesome-icon v-if="name === 'gaming'" :icon="['fas', 'gamepad']" v-bind="attrs"/>
  <font-awesome-icon v-else-if="name === 'building'" :icon="['fas', 'building']" v-bind="attrs"/>
  <font-awesome-icon v-else-if="name === 'health'" :icon="['fas', 'stethoscope']"/>
  <font-awesome-icon v-else-if="name === 'public infrastructure'" :icon="['fas', 'bus']" v-bind="attrs"/>
  <font-awesome-icon v-else-if="name === 'ecommerce'" :icon="['fas', 'cart-shopping']" v-bind="attrs"/>
  <font-awesome-icon v-else-if="name === 'telecommunications'" :icon="['fas', 'satellite-dish']" v-bind="attrs"/>
  <font-awesome-icon v-else-if="name === 'robotics'" :icon="['fas', 'robot']" v-bind="attrs"/>
  <font-awesome-icon v-else-if="name === 'learning'" :icon="['fas', 'graduation-cap']" v-bind="attrs"/>
  <font-awesome-icon v-else-if="name === 'aeronautics'" :icon="['fas', 'satellite']" v-bind="attrs"/>
  <font-awesome-icon v-else-if="name === 'finance'" :icon="['fas', 'credit-card']" v-bind="attrs"/>
  <ArrowRightCircleIcon v-else v-bind="attrs"/>
</template>

<style scoped>

</style>