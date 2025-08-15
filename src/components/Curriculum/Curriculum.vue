<script setup lang="ts">
import { useAttrs } from "vue";
import Header from "./Header/Header.vue";
import Body from "./Body/Body.vue";

// Handle custom props for styling
interface Props {
  headerClass?: string;
  bodyClass?: string;
  bodySectionClass?: string;
}
defineProps<Props>();

// Extract and bind dynamic attributes
const attrs = useAttrs();
</script>

<template>
  <div v-bind="attrs">
    <!-- Header section -->
    <Header
        :class="headerClass || 'text-center mx-2'"
    />

    <!-- Body section -->
    <Body
        :class="bodyClass || 'bg-white dark:bg-inherit mt-2'"
        :section-class="bodySectionClass || 'text-center'"
    />
  </div>
</template>

<style scoped>
/* Example Scoped Style (optional) */
:host {
  display: block;
  margin: auto;
}

/* Customize as needed */
</style>