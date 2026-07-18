<script setup lang="ts">
import { Layers3, RefreshCw, Search } from 'lucide-vue-next'

import Container from '@/components/common/Container.vue'
import Section from '@/components/common/Section.vue'
import { principles } from '@/data/principles'
import SectionHeading from '@/components/common/SectionHeading.vue'
import FeatureCard from '@/components/common/FeatureCard.vue'

const iconMap = {
  search: Search,
  layers: Layers3,
  refresh: RefreshCw,
}
</script>

<template>
  <Section id="how-i-work">
    <Container>
     <SectionHeading
        eyebrow="How I Work"
        title="Engineering first. Users always."
        description="I believe the best software comes from understanding people, solving the right problem and continually refining the product."
      />

      <div class="mt-20 grid gap-6 md:grid-cols-3">
      <FeatureCard
          v-for="(principle, index) in principles"
          :key="principle.title"
          hover
          class="group relative overflow-hidden"
        >
          <span class="absolute right-6 top-5 text-sm font-semibold text-slate-700">
            0{{ index + 1 }}
          </span>

          <div
            class="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
          >
            <component :is="iconMap[principle.icon]" :size="22" />
          </div>

          <h3 class="text-2xl font-bold text-white">
            {{ principle.title }}
          </h3>

          <p class="mt-5 leading-8 text-slate-400">
            {{ principle.description }}
          </p>
        </FeatureCard>
      </div>
    </Container>
  </Section>
</template>