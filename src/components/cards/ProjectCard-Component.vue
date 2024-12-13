<script setup lang="ts">
import { storeToRefs } from 'pinia'

import LikeComponent from '../icons/Like-Component.vue'
import CommentComponent from '../icons/Comment-Component.vue'
import { useTheme } from '@/stores/theme-store'
import EyeComponent from '../icons/Eye-Component.vue'
import CarouselComponent from '@/components/carrousel/Carousel-Component.vue'
import GithubComponent from '../icons/Github-Component.vue'
import type { Url } from '@/interfaces/personal'

const themeStore = useTheme()

const { selectedTheme, currentTheme } = storeToRefs(themeStore)

defineProps<{
  name: string
  title: string
  description: string
  tags: string[]
  imgs: string[]
  urls: Url[]
}>()

function redirectTo(url: string) {
  window.open(url, '_blank')
}
</script>

<template>
  <div class="w-full px-5 py-3 mt-2 flex gap-2 hover:rounded-lg" :class="currentTheme">
    <img class="w-10 h-10 rounded-full items-center" src="/public/formal.png" alt="Formal photo" />

    <div class="w-full flex flex-col justify-around gap-1">
      <p class="text-sm">{{ name }} 😎</p>

      <div class="flex flex-col gap-2">
        <h2 class="text-md font-medium">{{ title }}</h2>
        <p class="text-sm">
          {{ description }}
        </p>

        <ul class="flex gap-2 flex-wrap">
          <li class="text-gray-500 text-xs" v-for="tag in tags" v-bind:key="tag">#{{ tag }}</li>
        </ul>
      </div>

      <div class="w-full h-auto">
        <CarouselComponent :images="imgs" />
      </div>

      <footer class="flex justify-between">
        <div class="flex gap-5 items-center">
          <div class="flex gap-2 items-center">
            <LikeComponent class="w-5 h-5" :color="selectedTheme.fontColor" />
            <span> 0 </span>
          </div>

          <div class="flex items-center gap-2">
            <CommentComponent class="w-5 h-5" :color="selectedTheme.fontColor" />
            <span> 0 </span>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <EyeComponent
            :color="selectedTheme.fontColor"
            class="w-5 h-5"
            v-if="urls[1].url.length > 0"
            @click="redirectTo(urls[1].url)"
          />

          <GithubComponent
            :color="selectedTheme.fontColor"
            class="w-5 h-5"
            v-if="urls[0].url.length > 0"
            @click="redirectTo(urls[0].url)"
          />
        </div>
      </footer>
    </div>
  </div>
</template>

<style>
.dark:hover {
  background-color: #242424;
}

.light:hover {
  background-color: #f3f4f6;
}
</style>
