<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { watch } from 'vue'

import MainLayout from '@/layouts/Main-Layout.vue'
import { useTheme } from '@/stores/theme-store'

const storeTheme = useTheme()
const { selectedTheme } = storeToRefs(storeTheme)

watch(selectedTheme, (newColor) => {
  document.body.style.backgroundColor = newColor.bgColor
})
</script>

<template>
  <MainLayout>
    <section class="w-full">
      <h1>About........</h1>
    </section>
  </MainLayout>
</template>
