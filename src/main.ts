import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ProjectsComponent from './views/Projects-Component.vue'
import AboutComponent from './views/About-Component.vue'

import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: ProjectsComponent
  },
  {
    path: '/about',
    component: AboutComponent
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const pinia = createPinia()
createApp(App).use(router).use(pinia).mount('#app')
