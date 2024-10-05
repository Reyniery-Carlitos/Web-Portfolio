<script setup lang="ts">
import { storeToRefs } from 'pinia'

import LinkedinComponent from '../icons/Linkedin-Component.vue'
import GithubComponent from '../icons/Github-Component.vue'
import { useTheme } from '@/stores/theme-store'
import { usePersonal } from '@/stores/personal-store'

const personalInfoStore = usePersonal()
const themeStore = useTheme()

const { selectedTheme } = storeToRefs(themeStore)
const { personalInfo } = storeToRefs(personalInfoStore)

function redirectTo(url: string) {
  window.open(url, '_blank')
}
</script>

<template>
  <div class="flex gap-2">
    <LinkedinComponent
      class="w-7 h-7"
      :color="selectedTheme.fontColor"
      @click="redirectTo(personalInfo.social.linkedin)"
    />
    <GithubComponent
      class="w-7 h-7"
      :color="selectedTheme.fontColor"
      @click="redirectTo(personalInfo.social.github)"
    />
  </div>
</template>
