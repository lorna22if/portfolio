<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <span class="rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300">
    {{ label }}
  </span>
</template>