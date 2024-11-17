<script setup lang="ts">
import { storeToRefs } from 'pinia'

import SocialComponent from '../header/Social-Component.vue'
import { usePersonal } from '@/stores/personal-store'
import { useTheme } from '@/stores/theme-store'
import { ref, type Ref } from 'vue'
import DotsComponent from '../icons/Dots-Component.vue'

const storePersonal = usePersonal()
const storeTheme = useTheme()

const { personalInfo } = storeToRefs(storePersonal)
const { selectedTheme } = storeToRefs(storeTheme)

const seeMore: Ref<boolean> = ref(false)
const showLang: Ref<boolean> = ref(false)

function showLangs() {
  showLang.value = !showLang.value
}

function toggleSeeMore() {
  seeMore.value = !seeMore.value
}
</script>

<template>
  <main class="flex flex-col gap-3">
    <div class="relative">
      <div
        class="bg-gradient-to-r from-indigo-200 to-indigo-100 h-60 sm:h-56 transition-all delay-200"
      ></div>

      <img
        src="/public/formal.png"
        alt="Personal photo"
        class="h-24 w-24 rounded-full border-4 bottom-[-45px] left-5 absolute sm:w-28 sm:h-28 transition-all delay-200"
        :style="{ borderColor: selectedTheme.bgTagColor }"
      />
    </div>

    <div class="pt-10 px-5">
      <h1 class="text-2xl font-semibold">{{ personalInfo.fullname }} 🐺</h1>
      <p>{{ personalInfo.title }}</p>
      <p>{{ personalInfo.description }}</p>
    </div>

    <div class="px-5 flex gap-2 flex-wrap">
      <template v-if="!seeMore">
        <ul class="flex flex-wrap gap-2">
          <li v-for="i in 10" v-bind:key="i">
            <a
              :href="personalInfo.skills.info[i].url"
              class="text-gray-500 text-sm"
              target="_blank"
            >
              #{{ personalInfo.skills.info[i].name }}
            </a>
          </li>
        </ul>
      </template>

      <template v-else>
        <ul class="flex flex-wrap gap-2">
          <li v-for="skill in personalInfo.skills.info" v-bind:key="skill.name">
            <a :href="skill.url" class="text-gray-500 text-sm" target="_blank">
              #{{ skill.name }}
            </a>
          </li>
        </ul>
      </template>

      <p
        class="text-gray-500 cursor-pointer text-sm"
        v-if="personalInfo.skills.info.length > 10 && !seeMore"
        @click="toggleSeeMore"
      >
        See more...
      </p>

      <p
        class="text-gray-500 cursor-pointer text-sm"
        v-if="personalInfo.skills.info.length > 10 && seeMore"
        @click="toggleSeeMore"
      >
        See less...
      </p>
    </div>

    <div class="px-5 flex items-center gap-2">
      <div class="flex gap-2 items-center">
        <a
          class="border border-slate-600 rounded-lg px-2 py-1"
          :href="personalInfo.cv"
          target="_blank"
          >Curriculum</a
        >
        <SocialComponent />
      </div>

      <div class="relative top-0 right-0">
        <DotsComponent :color="selectedTheme.fontColor" class="w-5 h-5" @click="showLangs" />

        <div
          class="flex flex-col items-center rounded-lg px-10 font-semibold py-2 gap-2 absolute shadow-lg"
          :style="{ backgroundColor: selectedTheme.bgColor }"
          v-if="showLang"
        >
          <span @click="storePersonal.toggleLang('EN')" class="cursor-pointer"> EN </span>
          <span @click="storePersonal.toggleLang('ES')" class="cursor-pointer"> ES </span>
        </div>
      </div>
    </div>
  </main>
</template>
