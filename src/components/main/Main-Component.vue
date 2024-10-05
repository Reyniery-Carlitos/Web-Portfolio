<script setup lang="ts">
import { storeToRefs } from 'pinia'

import SocialComponent from '../header/Social-Component.vue'
import { usePersonal } from '@/stores/personal-store'
import { ref, type Ref } from 'vue'

const storePersonal = usePersonal()

const { personalInfo } = storeToRefs(storePersonal)

const seeMore: Ref<boolean> = ref(false)

function toggleSeeMore() {
  seeMore.value = !seeMore.value
}
</script>

<template>
  <main class="flex flex-col gap-5">
    <div class="relative">
      <div
        class="bg-gradient-to-r from-indigo-200 to-indigo-100 h-60 sm:h-48 transition-all delay-200"
      ></div>

      <img
        src="/public/formal.png"
        alt="Personal photo"
        class="h-24 w-24 rounded-full border-4 border-black bottom-[-45px] left-5 absolute sm:w-28 sm:h-28 transition-all delay-200"
      />
    </div>

    <div class="pt-10 px-5">
      <h1 class="text-3xl font-semibold">{{ personalInfo.fullname }} 😎</h1>
      <p>{{ personalInfo.title }}</p>
      <p>{{ personalInfo.description }}</p>
    </div>

    <div class="px-5 flex gap-2 flex-wrap">
      <template v-if="!seeMore">
        <ul class="flex flex-wrap gap-2">
          <li v-for="i in 10" v-bind:key="i">
            <a :href="personalInfo.skills.info[i].url" class="text-gray-500" target="_blank">
              #{{ personalInfo.skills.info[i].name }}
            </a>
          </li>
        </ul>
      </template>

      <template v-else>
        <ul class="flex flex-wrap gap-2">
          <li v-for="skill in personalInfo.skills.info" v-bind:key="skill.name">
            <a :href="skill.url" class="text-gray-500" target="_blank"> #{{ skill.name }} </a>
          </li>
        </ul>
      </template>

      <p
        class="text-gray-500 cursor-pointer"
        v-if="personalInfo.skills.info.length > 10 && !seeMore"
        @click="toggleSeeMore"
      >
        See more...
      </p>

      <p
        class="text-gray-500 cursor-pointer"
        v-if="personalInfo.skills.info.length > 10 && seeMore"
        @click="toggleSeeMore"
      >
        See less...
      </p>
    </div>

    <div class="flex gap-2 px-5 items-center">
      <button class="border border-slate-600 rounded-lg px-2 py-1">Curriculum</button>
      <SocialComponent />
    </div>
  </main>
</template>
