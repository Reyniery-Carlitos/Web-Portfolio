<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useTheme } from '@/stores/theme-store'

const router = useRouter()
const themeStore = useTheme()

const { selectedTheme } = storeToRefs(themeStore)
</script>

<template>
  <nav class="w-full mt-5 py-4">
    <ul>
      <li
        class="flex gap-2 items-center w-full justify-between px-5"
        :style="{ color: selectedTheme.fontColor }"
      >
        <a class="font-semibold text-md cursor-pointer" @click="router.push('/')"> Home </a>
        <a class="font-semibold text-md cursor-pointer" @click="router.push('/about')"> About </a>
        <a class="font-semibold text-md cursor-pointer"> Studies </a>
        <a class="font-semibold text-md cursor-pointer"> GuestBook </a>
      </li>
    </ul>
  </nav>
</template>
