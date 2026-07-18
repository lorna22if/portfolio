<script setup lang="ts">
defineProps<{
  value: string
  label: string
  description?: string
}>()
</script>

<template>
  <div
    class="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-5 backdrop-blur-sm transition hover:border-cyan-400/40"
  >
    <p class="text-4xl font-black tracking-tight text-white">
      {{ value }}
    </p>

    <p class="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
      {{ label }}
    </p>

    <p v-if="description" class="mt-2 text-sm leading-6 text-slate-400">
      {{ description }}
    </p>
  </div>
</template>