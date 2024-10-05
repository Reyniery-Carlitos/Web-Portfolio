<script setup lang="ts">
import { storeToRefs } from 'pinia'

import MainLayout from '@/layouts/Main-Layout.vue'
import ProjectCardComponent from '@/components/cards/ProjectCard-Component.vue'

import { usePersonal } from '@/stores/personal-store'
import { useTheme } from '@/stores/theme-store'
import { watch } from 'vue'

const storeTheme = useTheme()
const storePersonalInfo = usePersonal()

const { personalInfo } = storeToRefs(storePersonalInfo)
const { selectedTheme } = storeToRefs(storeTheme)

watch(selectedTheme, (newColor) => {
  document.body.style.backgroundColor = newColor.bgColor
})
</script>

<template>
  <MainLayout>
    <section
      class="px-5 flex flex-col gap-2"
      :style="{ backgroundColor: selectedTheme.bgColor, color: selectedTheme.fontColor }"
    >
      <template v-for="project in personalInfo.projects.info" v-bind:key="project">
        <ProjectCardComponent
          :name="personalInfo.name"
          :title="project.title"
          :description="project.description"
          :tags="project.tags"
          :imgs="project.imgs"
          :urls="project.urls"
        />
      </template>
    </section>
  </MainLayout>
</template>
