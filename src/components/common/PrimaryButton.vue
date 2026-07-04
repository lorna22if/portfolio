<script setup lang="ts">
defineProps<{
  href?: string
}>()
</script>

<template>
  <a
    :href="href"
    class="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
  >
    <slot />
  </a>
</template>