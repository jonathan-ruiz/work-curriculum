<script setup lang="ts">
import {useAttrs} from "vue";
import Header from "./Header/Header.vue";
import Body from "./Body/Body.vue";
// Define props
const attrs = useAttrs();
</script>

<template>
  <div v-bind="attrs">
    <Header class="text-center mx-2"/>
    <Body class="bg-white dark:bg-inherit mt-2"
          section-class="text-center"/>
  </div>
</template>