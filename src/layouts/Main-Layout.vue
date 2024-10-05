<script setup lang="ts">
import Header from '@/components/header/Header-Component.vue'
import Main from '@/components/main/Main-Component.vue'

import MenuComponent from '@/components/nav/Menu-Component.vue'
</script>

<template>
  <Header />

  <Main />

  <MenuComponent />

  <slot />
</template>
