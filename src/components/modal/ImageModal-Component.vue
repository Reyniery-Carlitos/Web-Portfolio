<script setup lang="ts">
import { storeToRefs } from 'pinia'
import Close from '../icons/Close.vue'

import { useModal } from '@/stores/modal-store'
import { useTheme } from '@/stores/theme-store'

const themeStore = useTheme()
const modalStore = useModal()

const { selectedTheme } = storeToRefs(themeStore)

defineProps<{
  imgPath: string
}>()
</script>

<template>
  <div class="h-screen w-full fixed bg-black/75 top-0 left-0 flex items-center justify-center z-20">
    <Close
      :color="selectedTheme.fontColor"
      class="self-end justify-self-start w-7 h-7 absolute top-5 right-5"
      @click="modalStore.toggleModal('')"
    />

    <img :src="imgPath" alt="Image" class="w-full h-auto lg:w-4/5" />
  </div>
</template>
