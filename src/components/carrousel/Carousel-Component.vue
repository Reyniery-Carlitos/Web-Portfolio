<script setup lang="ts">
import { ref, computed, type Ref } from 'vue'
import { storeToRefs } from 'pinia'
import NextButtonComponent from '../icons/NextButton-Component.vue'
import BeforeButtonComponent from '../icons/BeforeButton-Component.vue'

import { useTheme } from '@/stores/theme-store'
import { useModal } from '@/stores/modal-store'

const modalStore = useModal()

const themeStore = useTheme()
const { selectedTheme } = storeToRefs(themeStore)
// Definir props
const props = defineProps<{
  images: string[]
}>()

const currentIndex: Ref<number> = ref(0)

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}
</script>

<template>
  <div class="carousel relative overflow-hidden">
    <!-- Contenedor de imágenes -->
    <div
      class="flex transition-transform duration-700 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div v-for="(image, index) in images" :key="index" class="w-full flex-shrink-0">
        <img
          :src="image"
          class="w-full h-auto"
          alt="Carousel Image"
          @click="modalStore.toggleModal(image)"
        />
      </div>
    </div>

    <BeforeButtonComponent
      @click="prev"
      class="absolute w-10 h-10 left-0 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full"
      :color="selectedTheme.fontColor"
      v-if="images.length > 1"
    />

    <NextButtonComponent
      class="absolute w-10 h-10 right-0 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full"
      @click="next"
      :color="selectedTheme.fontColor"
      v-if="images.length > 1"
    />
  </div>
</template>
