import type { Personal } from '@/interfaces/personal'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
import personalInfoEN from '@/data/en-info.json'
import personalInfoES from '@/data/es-info.json'

export const usePersonal = defineStore('personal', () => {
  const currentLang: Ref<string> = ref('EN')
  const personalInfo: Ref<Personal> = ref(personalInfoEN)

  function toggleLang(lang: string) {
    currentLang.value = lang

    if (currentLang.value === 'ES') {
      personalInfo.value = personalInfoES
    } else {
      personalInfo.value = personalInfoEN
    }
  }

  return { personalInfo, toggleLang }
})
