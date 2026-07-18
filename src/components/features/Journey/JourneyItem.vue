<script setup lang="ts">
import { onMounted, ref } from 'vue'

defineProps<{
  title: string
  description: string
  isLast?: boolean
}>()

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
    {
      threshold: 0.6,
    },
  )

  if (element.value) {
    observer.observe(element.value)
  }
})
</script>

<template>
  <article
    ref="element"
    class="relative flex gap-10 pb-20"
  >
    <div class="flex flex-col items-center">
      <div
        :class="[
          'relative z-10 h-5 w-5 rounded-full border-4 transition-all duration-700',
          isVisible
            ? 'scale-100 border-cyan-400 bg-cyan-400 shadow-lg shadow-cyan-400/30'
            : 'scale-75 border-slate-700 bg-slate-950',
        ]"
      />

      <div
        v-if="!isLast"
        class="relative mt-3 h-full w-px overflow-hidden bg-slate-800"
      >
        <div
          :class="[
            'absolute inset-x-0 top-0 bg-cyan-400 transition-all duration-1000 ease-out',
            isVisible ? 'h-full' : 'h-0',
          ]"
        />
      </div>
    </div>

    <div
      :class="[
        'transition-all duration-[1200ms] ease-out',
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-20 opacity-0',
      ]"
    >
      <h3 class="text-3xl font-bold text-white">
        {{ title }}
      </h3>

      <p class="mt-4 max-w-xl leading-8 text-slate-400">
        {{ description }}
      </p>
    </div>
  </article>
</template>