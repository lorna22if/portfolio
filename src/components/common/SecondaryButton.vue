<script setup lang="ts">
defineProps<{
  href?: string
}>()
</script>

<template>
  <a
    :href="href"
    class="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
  >
    <slot />
  </a>
</template>