<script setup lang="ts">
import { RouterView } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useModal } from './stores/modal-store'
import { useTheme } from './stores/theme-store'

import ImageModalComponent from './components/modal/ImageModal-Component.vue'

const themeStore = useTheme()
const modalStore = useModal()

const { openModal, imageToSee } = storeToRefs(modalStore)
const { selectedTheme } = storeToRefs(themeStore)
</script>

<template>
  <div
    class="w-full h-screen lg:w-3/5 xl:w-3/6 m-auto"
    :style="{ backgroundColor: selectedTheme.bgColor, color: selectedTheme.fontColor }"
  >
    <RouterView />
  </div>

  <ImageModalComponent :imgPath="imageToSee" v-if="openModal" />
</template>
