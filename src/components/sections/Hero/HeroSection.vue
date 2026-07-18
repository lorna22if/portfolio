<script setup lang="ts">
import Container from '@/components/common/Container.vue'
import Section from '@/components/common/Section.vue'

import HeroBackground from './HeroBackground.vue'
import HeroContent from './HeroContent.vue'
import HeroStats from './HeroStats.vue'

import CodeWindow from '@/components/features/CodeWindow/CodeWindow.vue'
import { codeSnippets } from '@/data/codeSnippets'
</script>

<template>
 <Section>
  <div class="relative min-h-screen">
    <HeroBackground />

    <Container>
      <div class="relative z-10 grid min-h-[calc(100vh-6rem)] items-center gap-16 pt-24 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">
        <div>
          <HeroContent />
        </div>

        <div class="self-center lg:-mt-24 lg:pl-8">
          <CodeWindow :snippets="codeSnippets" />
        </div>
      </div>
    </Container>

    <div class="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center text-slate-500">
        <span class="mb-3 text-xs uppercase tracking-[0.3em]">
          Scroll
        </span>

        <div class="h-12 w-px bg-gradient-to-b from-slate-500 to-transparent"></div>
    </div>
  </div>
</Section>
</template>