<script setup lang="ts">
defineProps<{
  id?: string
}>()
</script>

<template>
  <section
    :id="id"
    class="relative pt-24 pb-12 md:pt-24"
  >
    <slot />
  </section>
</template>