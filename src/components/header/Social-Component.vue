<script setup lang="ts">
import { storeToRefs } from 'pinia'

import LinkedinComponent from '../icons/Linkedin-Component.vue'
import GithubComponent from '../icons/Github-Component.vue'
import { useTheme } from '@/stores/theme-store'

const themeStore = useTheme()

const { selectedTheme } = storeToRefs(themeStore)
</script>

<template>
  <div class="flex gap-2">
    <LinkedinComponent class="w-7 h-7" :color="selectedTheme.fontColor" />
    <GithubComponent class="w-7 h-7" :color="selectedTheme.fontColor" />
  </div>
</template>
