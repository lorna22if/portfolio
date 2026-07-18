<script setup lang="ts">
import { ref } from 'vue'
import { Copy, Check } from 'lucide-vue-next'

const props = defineProps<{
  text: string
}>()

const copied = ref(false)

const copy = async () => {
  await navigator.clipboard.writeText(props.text)

  copied.value = true

  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>

<template>
  <button
    @click="copy"
    class="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
    :aria-label="copied ? 'Copied' : 'Copy code'"
  >
    <Check
      v-if="copied"
      :size="16"
      class="text-emerald-400"
    />

    <Copy
      v-else
      :size="16"
    />
  </button>
</template>