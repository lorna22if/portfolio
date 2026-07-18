<script setup lang="ts">
import Badge from '@/components/common/Badge.vue'
import type { Project } from '@/data/projects'
import BrowserFrame from '@/components/common/BrowserFrame.vue'

defineProps<{
  project: Project
}>()
</script>

<template>
  <article
    class="mt-12 overflow-hidden rounded-[32px] border border-slate-800/80 bg-slate-900/40 backdrop-blur"
  >
   <BrowserFrame :title="project.title">
      <img
        :src="project.image"
        :alt="`${project.title} application screenshot`"
        class="w-full transition-transform duration-700 group-hover:scale-[1.015]"
      />
    </BrowserFrame>

    <div class="grid gap-12 p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-10">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Featured Case Study
        </p>

        <h3 class="mt-6 text-4xl font-black tracking-[-0.04em] text-white lg:text-5xl">
          {{ project.title }}
        </h3>

        <p class="mt-5 text-xl leading-8 text-slate-400">
          {{ project.tagline }}
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          <Badge
            v-for="technology in project.technologies"
            :key="technology"
            :label="technology"
          />
        </div>
      </div>

      <div class="grid gap-8 sm:grid-cols-2">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Challenge
          </p>

          <p class="mt-3 leading-7 text-slate-300">
            {{ project.challenge }}
          </p>
        </div>

        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            My Role
          </p>

          <p class="mt-3 leading-7 text-slate-300">
            Contributed to full-stack development across production financial systems,
            translating business requirements into backend, data and user-facing features.
          </p>
        </div>

        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Solution
          </p>

          <p class="mt-3 leading-7 text-slate-300">
            {{ project.solution }}
          </p>
        </div>

        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Outcome
          </p>

          <p class="mt-3 leading-7 text-slate-300">
            {{ project.outcome }}
          </p>
        </div>
      </div>
    </div>
  </article>
</template>