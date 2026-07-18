<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useActiveSection } from '@/composables/useActiveSection'

const { activeSection } = useActiveSection()

const links = [
  { label: 'Work', href: '#projects' },
  { label: 'How I Work', href: '#how-i-work' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="fixed left-0 top-0 z-50 w-full px-6">
    <nav
      :class="[
        'mx-auto mt-6 flex max-w-4xl items-center justify-between transition-all duration-300',
        isScrolled
          ? 'rounded-full border border-white/10 bg-slate-900/75 px-5 py-2.5 shadow-2xl shadow-black/30 backdrop-blur-xl'
          : 'px-0 py-4',
      ]"
    >
      <a href="#" class="text-sm font-semibold tracking-wide text-white">
        Lorna Fatmi
      </a>

      <div class="hidden items-center gap-8 md:flex">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="group relative py-2 text-sm transition-colors duration-300"
          :class="
            activeSection === link.href.slice(1)
              ? 'text-cyan-400'
              : 'text-slate-400 hover:text-white'
          "
        >
          {{ link.label }}

          <span
            class="absolute bottom-0 left-0 h-px bg-cyan-400 transition-all duration-300"
            :class="
  activeSection === link.href.slice(1)
    ? 'text-cyan-400 font-medium'
    : 'text-slate-400 hover:text-white'
"
          />
        </a>
      </div>
    </nav>
  </header>
</template>