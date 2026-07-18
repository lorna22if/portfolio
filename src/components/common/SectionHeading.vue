<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description?: string
}>()
</script>

<template>
  <header class="max-w-3xl">
    <p
      class="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400"
    >
      {{ eyebrow }}
    </p>

    <h2
      class="mt-6 text-5xl font-black leading-tight tracking-[-0.04em] text-white lg:text-6xl"
    >
      {{ title }}
    </h2>

    <p
      v-if="description"
      class="mt-8 text-xl leading-9 text-slate-400"
    >
      {{ description }}
    </p>
  </header>
</template>