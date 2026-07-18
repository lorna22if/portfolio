<script setup lang="ts">
defineProps<{
  href?: string
}>()
</script>

<template>
  <a
    :href="href"
    class="inline-flex items-center justify-center rounded-full border border-slate-700 px-8 py-4 text-base font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-slate-900"
  >
    <slot />
  </a>
</template>