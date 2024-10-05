import type { Personal } from '@/interfaces/personal'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
import personalInfoEN from '@/data/en-info.json'
import personalInfoES from '@/data/es-info.json'

export const usePersonal = defineStore('personal', () => {
  const defaultInfoLang: Ref<string> = ref('EN')
  const personalInfo: Ref<Personal> = ref(personalInfoEN)

  return { personalInfo }
})
