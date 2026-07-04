<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  description?: string
}>()
</script>

<template>
  <div class="max-w-3xl">
    <p
      v-if="eyebrow"
      class="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400"
    >
      {{ eyebrow }}
    </p>

    <h2 class="text-4xl font-bold tracking-tight text-white md:text-5xl">
      {{ title }}
    </h2>

    <p v-if="description" class="mt-5 text-lg leading-8 text-slate-400">
      {{ description }}
    </p>
  </div>
</template>