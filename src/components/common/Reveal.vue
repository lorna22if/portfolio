<script setup lang="ts">
import { onMounted, ref } from 'vue'

const element = ref<HTMLElement | null>(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if(!entry) return

      if (entry.isIntersecting) {
        isVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.15 },
  )

  if (element.value) {
    observer.observe(element.value)
  }
})
</script>

<template>
  <div
    ref="element"
    :class="[
      'transition-all duration-700 ease-out',
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
    ]"
  >
    <slot />
  </div>
</template>