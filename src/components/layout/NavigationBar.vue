<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 30
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="fixed left-0 top-0 z-50 w-full transition-all duration-300"
    :class="
      isScrolled
        ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800'
        : 'bg-transparent'
    "
  >
    <div
      class="mx-auto flex h-20 max-w-7xl items-center justify-between px-6"
    >
      <a
        href="#"
        class="text-2xl font-black tracking-tight transition hover:text-cyan-400"
      >
        LF
      </a>

      <nav class="hidden items-center gap-8 md:flex">
        <a href="#about" class="text-slate-300 transition hover:text-cyan-400">
          About
        </a>

        <a href="#skills" class="text-slate-300 transition hover:text-cyan-400">
          Skills
        </a>

        <a href="#projects" class="text-slate-300 transition hover:text-cyan-400">
          Projects
        </a>

        <a href="#contact" class="text-slate-300 transition hover:text-cyan-400">
          Contact
        </a>

        <button
          class="rounded-full bg-cyan-400 px-5 py-2 font-semibold text-slate-950 transition hover:scale-105"
        >
          Download CV
        </button>
      </nav>
    </div>
  </header>
</template>