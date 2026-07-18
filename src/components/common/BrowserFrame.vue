<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div
    class="group overflow-hidden rounded-[28px]
border border-slate-800
bg-slate-950
shadow-2xl shadow-black/40
transition-all duration-500
hover:border-cyan-400/30
hover:shadow-cyan-950/20"
  >
    <div
      class="flex items-center border-b border-slate-800 bg-slate-900/80 px-5 py-3"
    >
      <div class="flex gap-2">
        <span class="h-3 w-3 rounded-full bg-red-400"></span>
        <span class="h-3 w-3 rounded-full bg-yellow-400"></span>
        <span class="h-3 w-3 rounded-full bg-emerald-400"></span>
      </div>

      <div
        class="mx-auto rounded-full border border-slate-700 bg-slate-800 px-4 py-1 text-xs text-slate-400"
      >
        {{ title }}
      </div>

      <!-- balances the traffic lights -->
      <div class="w-[52px]"></div>
    </div>

    <slot />
  </div>
</template>