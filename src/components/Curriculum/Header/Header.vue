<script setup lang="ts">
import {
  AcademicCapIcon,
  KeyIcon,
  PrinterIcon
} from '@heroicons/vue/24/solid';
import IntroductionLetter from "./IntroductionLetter.vue";
import {useAttrs} from "vue";

const attrs = useAttrs();
</script>
<template>
  <div v-bind="attrs" class="">
    <div
        class=" lg:w-full group min-w-0 mt-20 break-words md:border rounded-md md:shadow-md"
        :class="$attrs.class">
      <div class="pb-6">
        <div class="flex flex-wrap justify-center">
          <div class="flex justify-center w-full">
            <div class="relative">
              <img src="../../../assets/images/profile-image.gif"
                   class="align-middle border-0 absolute -m-12 -ml-18 lg:-ml-16 min-w-[120px] max-w-[300px]"
                   alt="profile image"
              />
            </div>
          </div>
        </div>
        <div class="mt-32 text-center">
          <h1>Jonathan Ruiz</h1>
          <h2 class="mb-1">Software Engineer</h2>
          <a href="jonathan_ruiz.pdf" class="print:hidden">
            <PrinterIcon class="w-4 inline-block"></PrinterIcon>
            Printer version</a>

        </div>
        <div class="pt-6 mx-1 md:mx-6 mt-6 text-left border-t">
          <div class="flex flex-wrap justify-center">
            <div class="w-full px-1 md:px-6">
              <IntroductionLetter/>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-black dark:bg-white py-2 text-white dark:text-black">
        <span class="block md:inline">
          <AcademicCapIcon class="w-4 inline-block"/>
          Computer Science degree
        </span><span class="hidden md:inline mx-1">|</span>
        <span class="block md:inline">
          contact@jonathanruiz.co.uk
        </span><span class="print:hidden hidden md:inline mx-1">|</span>
        <span class="print:hidden block md:inline">
          <KeyIcon class="w-4 inline-block"/>
          Public Key <a href="/id_rsa.pub" class="text-inherit">HERE</a>
        </span><span class="print:hidden hidden md:inline mx-1">|</span>
        <div class="print:hidden text-center inline-block ">
          <div class="flex justify-center pb-0 ">
            <div class="flex space-x-2 ">
              <a
                  class="p-1 -m-1 hover:text-amber-500 focus:outline-none focus-visible:ring-2 ring-primary text-white"
                  href="https://twitter.com/jonathan_ruiz3"
                  rel="noopener"
                  aria-label="Jonathan Ruiz on Twitter"
                  target="_blank"
              >
                <svg class="w-4 overflow-visible fill-current" aria-hidden="true" viewBox="0 -70 140 140">
                  <path
                      d="M67 .55C40.648 3.3 17.102 20.649 6.398 45.2-.5 61.05-1.648 79.3 3.25 96.101c6.05 20.949 21.7 38.648 41.95 47.5 15.85 6.898 34.1 8.046 50.902 3.148 25.148-7.25 44.949-27.898 51.449-53.55C157.699 53 132.8 11.897 92.5 2.3 83.648.2 75.852-.351 67 .55ZM68 47c6.398 8.5 11.8 15.5 12 15.5.2 0 6.852-7 14.7-15.5l14.35-15.5h8.15l-1.75 1.852c-1 1.046-7.5 8.097-14.45 15.648-6.95 7.55-13.75 14.898-15.102 16.25L83.5 67.8l18.75 24.95c10.3 13.75 18.75 25.148 18.75 25.352 0 .25-6.148.398-13.602.398l-13.648-.05-12.7-17C72.3 89.7 68.2 84.647 67.8 84.95c-.3.25-7.402 7.902-15.8 17L36.75 118.5h-3.852c-2.148 0-3.898-.102-3.898-.25 0-.148 7.95-8.852 17.648-19.3 9.653-10.45 17.653-19.2 17.75-19.348C64.45 79.398 56.5 68.55 46.75 55.5 37 42.5 29 31.75 29 31.648c0-.097 6.148-.148 13.7-.148h13.698Zm0 0"/>
                  <path
                      d="M41.352 38.2c.199.35 12.796 17.25 27.898 37.448l27.5 36.801 6.148.051c3.801 0 6.102-.2 6-.5-.046-.25-12.597-17.148-27.796-37.5l-27.704-37H47.2c-5.148 0-6.199.102-5.847.7Zm0 0"/>
                </svg>
              </a>

              <a class="p-1 -m-1 hover:text-amber-500 focus:outline-none focus-visible:ring-2 ring-primary text-white"

                 href="https://github.com/jonathan-ruiz" rel="noopener" aria-label="Jonathan Ruiz on Github"
                 target="_blank">
                <svg class="w-4 overflow-visible fill-current" aria-hidden="true"
                     viewBox="0 -60 130 130">
                  <path
                      d="M70 1.633a70 70 0 00-21.7 136.559h1.692a5.833 5.833 0 006.183-6.184v-1.225-6.358a2.917 2.917 0 00-1.167-1.925 2.917 2.917 0 00-2.45-.583C36.925 125.3 33.6 115.5 33.367 114.858a27.067 27.067 0 00-10.034-12.775 6.767 6.767 0 00-.875-.641 3.675 3.675 0 012.217-.409 8.575 8.575 0 016.708 5.134 17.5 17.5 0 0023.334 6.766 2.917 2.917 0 001.691-2.1 11.667 11.667 0 013.267-7.175 2.917 2.917 0 00-1.575-5.075c-13.825-1.575-27.942-6.416-27.942-30.275a23.333 23.333 0 016.125-16.216A2.917 2.917 0 0036.808 49a20.533 20.533 0 01.059-14 32.317 32.317 0 0114.7 6.708 2.858 2.858 0 002.45.409A61.892 61.892 0 0170 39.958a61.075 61.075 0 0116.042 2.159 2.858 2.858 0 002.391-.409 32.608 32.608 0 0114.7-6.708 20.825 20.825 0 010 13.883 2.917 2.917 0 00.525 3.092 23.333 23.333 0 016.125 16.042c0 23.858-14.175 28.641-28.058 30.216a2.917 2.917 0 00-1.575 5.134 12.833 12.833 0 013.558 10.15v18.55a6.183 6.183 0 002.1 4.841 7 7 0 006.184 1.109A70 70 0 0070 1.633z"
                  ></path>
                </svg>
              </a>

              <a
                  class="p-1 -m-1 hover:text-amber-500 focus:outline-none focus-visible:ring-2 ring-primary text-white"
                  href="https://www.linkedin.com/in/jonathanruizx"
                  rel="noopener"
                  aria-label="Jonathan Ruiz on Linkedin"
                  target="_blank"
              >
                <svg class="w-4 overflow-visible fill-current" aria-hidden="true"
                     viewBox="0 -60 140 140">
                  <path
                      d="M23.4 44.59h-4.75a12.76 12.76 0 00-9.73 2.19 9.44 9.44 0 00-2.35 7.12V131a9.08 9.08 0 002.3 7 9.24 9.24 0 006.82 2c2.22 0 4.15-.21 8.24-.06a12 12 0 009.25-2 9.1 9.1 0 002.29-7V53.9a9.44 9.44 0 00-2.34-7.12 12.68 12.68 0 00-9.73-2.19zM21 0A16.19 16.19 0 005.09 15.6 16.52 16.52 0 0021 31.86 16.12 16.12 0 0037 15.6 16.18 16.18 0 0021 0zM99.74 43.63a31.09 31.09 0 00-20.93 6.3A7.25 7.25 0 0077 46.34a6.08 6.08 0 00-4.52-1.78 119.08 119.08 0 00-15 .3c-4.16.84-6.18 3.79-6.18 9V131a9.14 9.14 0 002.28 7 12.06 12.06 0 009.26 2c4.47-.17 5.74.06 8.22.06a9.26 9.26 0 006.83-2 9.12 9.12 0 002.3-7V89.88A12.48 12.48 0 0192.93 76 12.44 12.44 0 01106 89.88V131a9.1 9.1 0 002.29 7 12 12 0 009.24 2c1.83-.07 4-.07 5.8 0a12.09 12.09 0 009.26-2 9.14 9.14 0 002.28-7V78.32a33.07 33.07 0 00-35.13-34.69z"
                  ></path>
                </svg>
              </a>

              <a
                  class="p-1 -m-1 hover:text-amber-500 focus:outline-none focus-visible:ring-2 ring-primary text-white"
                  href="https://www.youtube.com/@jonathanruiz3"
                  rel="noopener"
                  aria-label="Jonathan Ruiz on Youtube"
                  target="_blank"
              >
                <svg class="w-4 overflow-visible fill-current" aria-hidden="true"
                     viewBox="0 -65 140 140">
                  <path
                      d="M115 15H25A25 25 0 000 40v60a25 25 0 0025 25h90a25 25 0 0025-25V40a25 25 0 00-25-25zM95.71 76.25L63.58 94.1A7.15 7.15 0 0153 87.85v-35.7a7.15 7.15 0 0110.6-6.26l32.11 17.86a7.15 7.15 0 010 12.5z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>