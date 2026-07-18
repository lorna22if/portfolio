<script setup lang="ts">
import { Github, Linkedin, Mail } from 'lucide-vue-next'
</script>

<template>
  <footer class="border-t border-slate-800/80 py-12">
    <div
      class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 text-center md:flex-row md:text-left"
    >
      <div>
        <h3 class="text-lg font-semibold text-white">
          Lorna Fatmi
        </h3>

        <p class="mt-2 text-slate-400">
          Building software people actually enjoy using.
        </p>

        <p class="mt-4 text-sm text-slate-500">
          © {{ new Date().getFullYear() }} Aurora
        </p>
      </div>

      <div class="flex items-center gap-5">
        <a
          href="https://github.com/lorna22if"
          target="_blank"
          class="text-slate-400 transition hover:text-cyan-400"
        >
          <Github :size="20" />
        </a>

        <a
          href="https://linkedin.com/in/lorna-f-7315161a5/"
          target="_blank"
          class="text-slate-400 transition hover:text-cyan-400"
        >
          <Linkedin :size="20" />
        </a>

        <a
          href="mailto:lorna.fatmi@gmail.com"
          class="text-slate-400 transition hover:text-cyan-400"
        >
          <Mail :size="20" />
        </a>
      </div>
    </div>

    <div class="mt-10 text-center text-sm text-slate-600">
      Built with Vue 3 · TypeScript · Tailwind CSS
    </div>
  </footer>
</template>