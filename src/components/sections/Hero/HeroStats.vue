<template>
  <div class="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
    <StatCard
      value="7+"
      label="Years"
      description="Commercial software development"
    />

    <StatCard
      value="20+"
      label="Projects"
      description="Finance, hospitality & mobile"
    />

    <StatCard
      value="5"
      label="Industries"
      description="Building products for real businesses"
    />
  </div>
</template>

<script setup lang="ts">
import StatCard from '@/components/common/StatCard.vue'
</script>