<script setup lang="ts">
defineProps<{
  href?: string
}>()
</script>

<template>
  <a
    :href="href"
    class="inline-flex items-center justify-center w-full sm:w-auto rounded-full bg-cyan-400 px-8 py-4 text-base font-semibold text-slate-950 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/30"
  >
    <slot />
  </a>
</template>