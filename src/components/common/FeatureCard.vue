<script setup lang="ts">
withDefaults(
  defineProps<{
    as?: 'article' | 'div'
    hover?: boolean
    padded?: boolean
  }>(),
  {
    as: 'article',
    hover: false,
    padded: true,
  },
)
</script>

<template>
  <component
    :is="as"
    :class="[
      'rounded-[28px] border border-slate-800 bg-slate-900/30 transition-all duration-300',
      padded && 'p-8',
      hover && 'hover:-translate-y-1 hover:border-cyan-400/30',
    ]"
  >
    <slot />
  </component>
</template>