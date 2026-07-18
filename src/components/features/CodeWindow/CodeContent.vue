<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  code: string
}>()

const lines = computed(() => props.code.split('\n'))
</script>

<template>
  <div class="min-h-[22rem] overflow-x-auto bg-slate-950 py-5">
    <div
      v-for="(line, index) in lines"
      :key="index"
      class="grid grid-cols-[3rem_1fr] px-5 font-mono text-sm leading-7"
    >
      <span class="select-none text-right text-slate-600">
        {{ index + 1 }}
      </span>

      <code class="min-h-7 whitespace-pre pl-5 text-slate-300">
        {{ line || ' ' }}
      </code>
    </div>
  </div>
</template>