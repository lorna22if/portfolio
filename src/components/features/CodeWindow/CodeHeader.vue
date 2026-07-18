<script setup lang="ts">
import type { CodeLanguage } from '@/types/code'

defineProps<{
  title: string
  fileName?: string
  language: CodeLanguage
}>()

const languageLabel: Record<CodeLanguage, string> = {
  csharp: 'C#',
  json: 'JSON',
  sql: 'SQL',
}
</script>

<template>
  <header class="border-b border-slate-800/80 bg-slate-900/90">
    <div class="flex items-center justify-between px-5 py-4">
      <div class="flex items-center gap-4">
        <div class="flex gap-2">
          <span class="h-3 w-3 rounded-full bg-red-500"></span>
          <span class="h-3 w-3 rounded-full bg-yellow-500"></span>
          <span class="h-3 w-3 rounded-full bg-emerald-500"></span>
        </div>

        <div>
          <p class="text-sm font-semibold text-slate-100">
            {{ title }}
          </p>

          <p v-if="fileName" class="text-xs text-slate-500">
            {{ fileName }}
          </p>
        </div>
      </div>

      <span
        class="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-300"
      >
        {{ languageLabel[language] }}
      </span>
    </div>
  </header>
</template>