<script setup lang="ts">
import { Github, Linkedin, Mail } from 'lucide-vue-next'

import Container from '@/components/common/Container.vue'
import PrimaryButton from '@/components/common/PrimaryButton.vue'
import Section from '@/components/common/Section.vue'
import SectionHeading from '@/components/common/SectionHeading.vue'
</script>

<template>
  <Section id="contact">
    <Container>
      <div
        class="relative overflow-hidden rounded-[32px] border border-slate-800 bg-slate-900/40 px-8 py-16 text-center shadow-2xl shadow-black/20 md:px-16 md:py-24"
      >
        <div
          class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),_transparent_45%)]"
        />

        <div class="relative z-10 mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Get in Touch"
            title="Let's build something together."
            description="Whether you're building a new product, modernising an existing platform or exploring AI, I'd love to hear what you're working on."
          />

          <div class="mt-10 flex justify-center">
            <PrimaryButton href="mailto:hello@lornafatmi.dev">
              Start a Conversation
            </PrimaryButton>
          </div>

          <div class="mt-12 flex flex-wrap justify-center gap-6">
            <a
              href="https://github.com/lorna22if"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
            >
              <Github :size="18" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/lorna-f-7315161a5"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
            >
              <Linkedin :size="18" />
              LinkedIn
            </a>

            <a
              href="mailto:hello@lornafatmi.dev"
              class="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
            >
              <Mail :size="18" />
              Email
            </a>
          </div>
        </div>
      </div>
    </Container>
  </Section>
</template>