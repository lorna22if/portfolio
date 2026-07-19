<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'

import { useActiveSection } from '@/composables/useActiveSection'

const { activeSection } = useActiveSection()

const links = [
  { label: 'Work', href: '#projects' },
  { label: 'How I Work', href: '#how-i-work' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 24
}

const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

onMounted(() => {
  handleScroll()

  window.addEventListener('scroll', handleScroll, {
    passive: true,
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    :class="[
      'fixed left-0 top-0 z-50 w-full transition-all duration-300',
      isScrolled ? 'px-4 pt-3' : 'px-5 pt-0',
    ]"
  >
    <nav
      :class="[
        'mx-auto flex items-center justify-between transition-all duration-300',
        isScrolled
          ? 'max-w-3xl rounded-full border border-white/10 bg-slate-900/80 px-4 py-2.5 shadow-2xl shadow-black/30 backdrop-blur-xl'
          : 'max-w-6xl px-0 py-5',
      ]"
    >
      <a
        href="#"
        class="font-semibold tracking-wide text-white transition-all duration-300"
        :class="isScrolled ? 'text-xs sm:text-sm' : 'text-sm'"
        @click="closeMobileMenu"
      >
        Lorna Fatmi
      </a>

      <!-- Desktop navigation -->
      <div class="hidden items-center gap-8 md:flex">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="group relative py-2 text-sm transition-colors duration-300"
          :class="
            activeSection === link.href.slice(1)
              ? 'font-medium text-cyan-400'
              : 'text-slate-400 hover:text-white'
          "
        >
          {{ link.label }}

          <span
            class="absolute bottom-0 left-0 h-px bg-cyan-400 transition-all duration-300"
            :class="
              activeSection === link.href.slice(1)
                ? 'w-full opacity-100'
                : 'w-0 opacity-0'
            "
          />
        </a>
      </div>

      <!-- Mobile menu button -->
      <button
        type="button"
        class="rounded-full p-2 text-white transition hover:bg-white/10 md:hidden"
        :aria-expanded="mobileMenuOpen"
        aria-controls="mobile-navigation"
        aria-label="Toggle navigation menu"
        @click="toggleMenu"
      >
        <X v-if="mobileMenuOpen" :size="22" />
        <Menu v-else :size="22" />
      </button>
    </nav>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="-translate-y-3 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-3 opacity-0"
    >
      <div
        v-if="mobileMenuOpen"
        id="mobile-navigation"
        class="mx-auto mt-3 max-w-3xl rounded-3xl border border-white/10 bg-slate-900/95 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl md:hidden"
      >
        <div class="flex flex-col gap-2">
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            class="rounded-2xl px-4 py-3 text-base transition"
            :class="
              activeSection === link.href.slice(1)
                ? 'bg-cyan-400/10 font-medium text-cyan-300'
                : 'text-slate-300 hover:bg-white/5 hover:text-white'
            "
            @click="closeMobileMenu"
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>