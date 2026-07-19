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
    <div class="relative min-h-[85vh] overflow-hidden lg:min-h-screen">
      <HeroBackground />

      <Container>
        <div
          class="relative z-10 grid gap-12 pb-20 pt-28 lg:min-h-[calc(100vh-6rem)] lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20 lg:pb-16 lg:pt-24"
        >
          <HeroContent />

          <div class="mx-auto mt-4 w-full min-w-0 max-w-lg lg:mt-0 lg:max-w-2xl lg:pl-4">
        
            <CodeWindow :snippets="codeSnippets" />
          </div>
        </div>
      </Container>

      <div
        class="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center text-slate-500 sm:flex"
      >
        <span class="mb-3 text-xs uppercase tracking-[0.3em]">
          Scroll
        </span>

        <div class="h-12 w-px bg-gradient-to-b from-slate-500 to-transparent" />
      </div>
    </div>
  </Section>
</template>