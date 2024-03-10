<script setup lang="ts">
import Skills from './Skills.vue';
import {
  AcademicCapIcon,
  CodeBracketSquareIcon,
  CloudIcon,
  DocumentMagnifyingGlassIcon,
  IdentificationIcon
} from '@heroicons/vue/24/solid';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import ExperienceList from "./ExperienceList.vue";
import {
  workExperiences,
  skills,
  skillsFromExperience,
} from "../model.ts";
import {computed, ref} from "vue";
import {ExperienceType} from "../types.ts";
import OnLineHeader from "./OnLineHeader.vue";
import PrintableHeader from "./PrintableHeader.vue";

ChartJS.register(ArcElement, Tooltip, Legend)

// Props
export interface Props {
  theme?: string,
  version?: 'printable' | 'online'
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'default',
  version: 'online'
})

// Themes
const highContrast = 'text-black dark:text-white border-black dark:border-white';
const normal = 'text-gray-800 dark:text-gray-100 border-gray-800 dark:border-gray-100 bg-gray-100 dark:bg-gray-800';
const themeClass = computed(() => {
    return props.theme == 'high-contrast' ? highContrast : normal
})

const isPrintable = computed(
    () => props.version === 'printable'
)

</script>

<template>
  <div class="container m-auto text-xs" :style="isPrintable ? 'width: 297mm' : '' ">

    <!-- Online Header    -->
    <OnLineHeader v-if="!isPrintable" :themeClass="themeClass" :class="themeClass"/>

    <div class="grid grid-cols-12 bg-white dark:bg-inherit mt-2">
      <div class="left-column">
        <!-- isPrintable header -->
        <PrintableHeader v-if="isPrintable" :themeClass="themeClass"/>
        <section class="awards">
          <h2>
            <IdentificationIcon class="w-6 inline-block"/>
            Certifications
          </h2>
          <ul>
            <li>

              <h3 class="text-center">
                <img :class="[isPrintable ? 'w-1/2 m-auto block' : ' m-auto w-1/2 hover:w-full transition-all']"
                     src="../assets/images/Machine_Learning_with_Python.png"
                     alt="IBM Certificate: Machine Learning with Python badge">
                <a
                    class="text-inherit"
                    href="https://www.credly.com/badges/b24bfb21-5d27-467d-b95e-34be4948471b">
                  IBM Certificate: Machine Learning with Python
                </a>
              </h3>
            </li>
            <li>
              <h3 class="text-center">
                <a class="text-inherit" href="https://courses.edx.org/certificates/457be78e0c8947fb8305c38ad353000b">Edx
                  Certificate: Web
                  Accessibility</a>
              </h3>
            </li>
            <li v-if="!isPrintable">
              <h3 class="text-center">
                <a class="text-inherit" href="https://www.patentguru.com/inventor/ruiz-peinado-jonathan">Registered
                  Commercial Patents</a>
              </h3>
            </li>
            <li>
              <h3 class="text-center">1st Place - University UJI of Castellon - Sumobot 2008</h3>
            </li>
            <li>
              <h3 class="text-center">2nd Place - University UJI of Castellon - Web application development 2007</h3>
            </li>
          </ul>
        </section>
        <section>
          <h2>
            <CloudIcon class="w-6 inline-block"/>
            Cloud / DevOps
          </h2>
          <skills
              :skills="skills.cloud
                .map((s)=> s.label)"

              label-class="badge"
          />
        </section>
        <section>
          <h2>
            <CodeBracketSquareIcon class="w-6 inline-block"/>
            Programming Languages
          </h2>
          <skills
              :skills="skills.coding
                .map((s) => s.label)"

              label-class="badge"
          />
        </section>
        <div class="pagebreak"></div>
        <section>
          <h2>
            <DocumentMagnifyingGlassIcon class="w-6 inline-block"/>
            Frameworks / Libs / Tools / Others
          </h2>

          <skills
              :skills="skillsFromExperience
                    .map((s)=> s.label)"


              sort="weight"

              mode="label"

              label-class="badge"
          />

        </section>
        <div class="pagebreak"></div>
        <section>
          <h2>
            <AcademicCapIcon class="w-6 inline-block"/>
            Education
          </h2>
          <ul>
            <li>
              <h3>University Jaume I</h3>
              <h4>Computer Science</h4>
            </li>
          </ul>
        </section>
      </div>
      <div class="right-column">
        <!-- isPrintable summary  -->
        <div v-if="isPrintable" class="border-l-2 border-dashed">
          <div class="mx-6 text-left">
            <div class="flex flex-wrap justify-center">
              <div class="w-full px-6 pt-4">
                <p>
                  As a software engineer, I design and develop applications and the infrastructure to support them. I
                  have over 20 years of experience in software engineering, spanning different roles, technologies and
                  platforms. I enjoy learning new skills and paradigms, and adapting to changing environments and
                  requirements.
                </p>
                <p>
                  I have led tech teams, and worked on my own products from ideation to production.
                  I have a strong background in web development, devOps and cloud. My goal is to deliver reliable,
                  scalable and user-friendly solutions that meet the needs and expectations of my team and users.
                </p>
              </div>
            </div>
          </div>
        </div>
        <section class="text-left border-0">
          <h2>
            Work Experience
          </h2>
          <ExperienceList :experiences="workExperiences as Array<ExperienceType>"/>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
