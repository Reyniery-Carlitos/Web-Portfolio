import { defineStore } from 'pinia'
import { type Ref, ref } from 'vue'

export const useModal = defineStore('modal', () => {
  const imageToSee: Ref<string> = ref('')
  const openModal: Ref<boolean> = ref(false)

  function toggleModal(image: string) {
    imageToSee.value = image
    openModal.value = !openModal.value
  }

  return { toggleModal, openModal, imageToSee }
})
