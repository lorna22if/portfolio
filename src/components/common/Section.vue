<script setup lang="ts">
defineProps<{
  id?: string
}>()
</script>

<template>
  <section :id="id" class="relative py-24 md:py-32">
    <slot />
  </section>
</template>