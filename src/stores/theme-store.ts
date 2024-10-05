import { defineStore } from 'pinia'
import themesData from '../data/themes.json'
import { type IThemes, type IThemeProperties } from '../interfaces/theme'
import { ref, type Ref } from 'vue'

export const useTheme = defineStore('theme', () => {
  const themes: Ref<IThemes> = ref(themesData)
  const currentTheme: Ref<string> = ref('light')
  const selectedTheme: Ref<IThemeProperties> = ref(themes.value[currentTheme.value])

  function toggleTheme() {
    currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light'

    selectedTheme.value = themes.value[currentTheme.value]
  }

  return { selectedTheme, currentTheme, toggleTheme }
})
