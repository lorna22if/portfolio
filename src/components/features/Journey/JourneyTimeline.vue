<script setup lang="ts">
import JourneyItem from './JourneyItem.vue'
import { journey } from '@/data/journey'
</script>

<template>
  <div class="mx-auto mt-24 max-w-3xl">
    <JourneyItem
      v-for="(step, index) in journey"
      :key="step.title"
      :title="step.title"
      :description="step.description"
      :is-last="index === journey.length - 1"
    />
  </div>
</template>