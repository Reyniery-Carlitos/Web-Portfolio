<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { watch } from 'vue'

import MainLayout from '@/layouts/Main-Layout.vue'
import { usePersonal } from '@/stores/personal-store'
import { useTheme } from '@/stores/theme-store'

const storePersonalInfo = usePersonal()
const storeTheme = useTheme()

const { personalInfo } = storeToRefs(storePersonalInfo)
const { selectedTheme } = storeToRefs(storeTheme)

watch(selectedTheme, (newColor) => {
  document.body.style.backgroundColor = newColor.bgColor
})
</script>

<template>
  <MainLayout>
    <div class="flex flex-col gap-2 px-5">
      <h1 class="font-semibold text-lg">Educacion</h1>

      <div
        class="container border-l-8 border-black pl-5 py-2"
        :style="{
          borderColor: selectedTheme.borderTagColor,
          backgroundColor: selectedTheme.bgTagColor
        }"
      >
        <h1 class="font-semibold text-lg">Primaria</h1>
        <p class="text-md">Escuela Republica de Francia</p>
        <p class="text-xs">Feb. 2008 - Nov. 2013</p>
        <p class="text-sm">Generacion del 2013, Graduado con excelencia academica.</p>
      </div>

      <div
        class="container border-l-8 border-black pl-5 py-2"
        :style="{
          borderColor: selectedTheme.borderTagColor,
          backgroundColor: selectedTheme.bgTagColor
        }"
      >
        <h1 class="font-semibold text-lg">Secundaria</h1>
        <p class="text-md">Instituto Superacion San Francisco</p>
        <p class="text-xs">Feb. 2014 - Nov. 2019</p>
        <p class="text-sm">
          Generacion del 2019, Graduado con excelencia academica (2do lugar de la promocion).
        </p>
        <p class="text-md">Tecnico Profesional en Informatica</p>
      </div>

      <div
        class="container border-l-8 border-black pl-5 py-2"
        :style="{
          borderColor: selectedTheme.borderTagColor,
          backgroundColor: selectedTheme.bgTagColor
        }"
      >
        <h1 class="font-semibold text-lg">Superior</h1>
        <p class="text-md">Universidad Nacional Autonoma de Honduras (UNAH)</p>
        <p class="text-xs">Ene. 2020 - Presente</p>
        <p class="text-md">Generacion del 2013, Graduado con excelencia academica.</p>
        <p class="text-sm">Ingeniera en sistemas</p>
      </div>
    </div>

    <div class="mt-5 pl-5 flex flex-col gap-2 mb-10">
      <h1 class="font-semibold text-lg">Cursos Recibidos</h1>

      <ol
        class="container border-l-8 border-black pl-5 text-sm py-2"
        :style="{
          borderColor: selectedTheme.borderTagColor,
          backgroundColor: selectedTheme.bgTagColor
        }"
      >
        <li>1. Modulo I y II de ingles (INFOP)</li>
        <li>2. Certificacion base de datos Oracle Academy Completa</li>
        <li>3. Certificacion completa programa Oracle Next Education</li>
        <li>4. Principios SOLID (Udemy)</li>
        <li>5. Git y Github (Udemy)</li>
        <li>6. CCNA1 Cisco</li>
      </ol>
    </div>
  </MainLayout>
</template>

<!-- <style>
.container::before {
  background-color: black;
  content: '';
  display: block;
  height: 10px;
  position: relative;
  top: 0px;
  left: -26px;
  border-radius: 100%;
  width: 10px;
}

.container::after {
  background-color: black;
  content: '';
  display: block;
  height: 10px;
  position: relative;
  top: 0px;
  left: -26px;
  border-radius: 100%;
  width: 10px;
}
</style> -->
