<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  code: string
}>()

const lines = computed(() => props.code.split('\n'))
</script>

<template>
  <div class="min-h-[18rem] overflow-x-auto bg-slate-950 py-5 sm:min-h-[22rem]">
    <div
      v-for="(line, index) in lines"
      :key="index"
      class="grid min-w-max grid-cols-[2.25rem_1fr] px-3 font-mono text-[0.7rem] leading-6 sm:grid-cols-[3rem_1fr] sm:px-5 sm:text-sm sm:leading-7"
    >
      <span class="select-none text-right text-slate-600">
        {{ index + 1 }}
      </span>

      <code class="min-h-6 whitespace-pre pl-3 text-slate-300 sm:min-h-7 sm:pl-5">
        {{ line || ' ' }}
      </code>
    </div>
  </div>
</template>