<script setup lang="ts">
export interface Props {
  themeClass?: string,
}
const props = withDefaults(defineProps<Props>(), {
  themeClass: '',
})
</script>
<template>
  <section v-if="isPrintable" class="pt-0" :class="[themeClass]" >

    <!-- isPrintable header profile picture -->
    <div v-if="!isPrintable" class="flex flex-wrap justify-center">
      <div class="flex justify-center w-full">
        <div class="relative">
          <img src="../assets/images/profile-image-1.png"
               class="dark:shadow-xl rounded-full align-middle border-4 max-w-[150px]"
               :class="[themeClass]"
               alt="profile image"
          />
        </div>
      </div>
    </div>
    <div class="mt-4 text-center" :class="isPrintable ? 'text-xs':''">
      <h1>Jonathan Ruiz</h1>
      <h2>Software Engineer</h2>
      <span class="inline-block">
              <a href="http://jonathanruiz.co.uk" class="text-inherit">jonathanruiz.co.uk</a>
            </span>
      <span class="inline-block">
            +44 (0)7754 218 610
            </span>
      <span class="inline-block">
            contact@jonathanruiz.co.uk
            </span>
    </div>
  </section>
</template>