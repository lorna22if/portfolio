<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

import CodeHeader from './CodeHeader.vue'
import CodeContent from './CodeContent.vue'

import type { CodeSnippet } from '@/types/code'

const props = defineProps<{
  snippets: CodeSnippet[]
}>()

const currentIndex = ref(0)
let intervalId: number | undefined

const currentSnippet = computed<CodeSnippet | undefined>(() => {
  return props.snippets[currentIndex.value]
})

onMounted(() => {
  if (props.snippets.length <= 1) return

  intervalId = window.setInterval(() => {
    currentIndex.value =
      (currentIndex.value + 1) % props.snippets.length
  }, 6000)
})

onBeforeUnmount(() => {
  if (intervalId !== undefined) {
    window.clearInterval(intervalId)
  }
})
</script>

<template>
  <article
    class="overflow-hidden rounded-[28px] border border-slate-800/60 bg-slate-950/95 shadow-[0_35px_120px_rgba(0,0,0,0.45)]"
  >
    <Transition
      mode="out-in"
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="opacity-0 translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="currentSnippet"
        :key="currentSnippet.fileName"
      >
        <CodeHeader
          :title="currentSnippet.title"
          :file-name="currentSnippet.fileName"
          :language="currentSnippet.language"
          :code="currentSnippet.code"
        />

        <CodeContent :code="currentSnippet.code" />
      </div>
    </Transition>
  </article>
</template>