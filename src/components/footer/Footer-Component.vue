<script setup lang="ts">
import { useTheme } from '@/stores/theme-store'
import { storeToRefs } from 'pinia'

const storeTheme = useTheme()
const { selectedTheme } = storeToRefs(storeTheme)
</script>

<template>
  <section
    class="bg-white h-10 flex items-center justify-center bottom-0"
    :style="{ backgroundColor: selectedTheme.bgColor }"
  >
    <p class="text-xs" :style="{ font: selectedTheme.fontColor }">Coded with ♥️ by Carlos Rubio</p>
  </section>
</template>
