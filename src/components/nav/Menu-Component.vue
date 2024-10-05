<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTheme } from '@/stores/theme-store'

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
        <a class="font-semibold text-md"> Home </a>
        <a class="font-semibold text-md"> About </a>
        <a class="font-semibold text-md"> Studies </a>
        <a class="font-semibold text-md"> GuestBook </a>
      </li>
    </ul>
  </nav>
</template>
