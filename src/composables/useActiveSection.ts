import { onBeforeUnmount, onMounted, ref } from 'vue'

const sectionIds = ['projects', 'how-i-work', 'journey', 'contact']

export function useActiveSection() {
  const activeSection = ref('')

  const updateActiveSection = () => {
    const activationLine = window.innerHeight * 0.35

    const active = sectionIds.find((id) => {
      const section = document.getElementById(id)

      if (!section) {
        return false
      }

      const rect = section.getBoundingClientRect()

      return rect.top <= activationLine && rect.bottom > activationLine
    })

    if (active) {
      activeSection.value = active
      return
    }

    // Keep Contact active when the user reaches the very bottom.
    const atBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 2

    if (atBottom) {
      activeSection.value = 'contact'
    }
  }

  onMounted(() => {
    updateActiveSection()

    window.addEventListener('scroll', updateActiveSection, {
      passive: true,
    })

    window.addEventListener('resize', updateActiveSection)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', updateActiveSection)
    window.removeEventListener('resize', updateActiveSection)
  })

  return {
    activeSection,
  }
}