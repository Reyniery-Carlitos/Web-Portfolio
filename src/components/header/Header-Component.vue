<script setup lang="ts">
import { storeToRefs } from 'pinia'
import DarkComponent from '@/components/icons/Dark-Component.vue'
import LightComponent from '@/components/icons/Light-Component.vue'

import { useTheme } from '@/stores/theme-store'

const storeTheme = useTheme()
const { selectedTheme, currentTheme } = storeToRefs(storeTheme)
</script>

<template>
  <header
    class="w-full h-16 flex items-center justify-between px-2 fixed z-10 lg:w-3/5 xl:w-3/6 m-auto"
    :style="{ backgroundColor: selectedTheme.bgColor, color: selectedTheme.fontColor }"
  >
    <img src="/public/logo.png" alt="Logo image" class="w-10 h-10 rounded-full" />

    <DarkComponent
      class="w-9 h-9"
      :color="selectedTheme.fontColor"
      v-if="currentTheme === 'light'"
      @click="storeTheme.toggleTheme"
    />

    <LightComponent
      class="w-9 h-9"
      :color="selectedTheme.fontColor"
      v-if="currentTheme === 'dark'"
      @click="storeTheme.toggleTheme"
    />
  </header>
</template>
