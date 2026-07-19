<script setup lang="ts">

  import PrimaryButton from '@/components/common/PrimaryButton.vue'
  import SecondaryButton from '@/components/common/SecondaryButton.vue'


  const cvUrl = `${import.meta.env.BASE_URL}cv/Lorna_Fatmi_2026.pdf`
</script>

<template>
  <div class="flex min-h-[calc(100vh-6rem)] flex-col justify-center py-16 min-w-0">
    <p class="mb-8 text-sm font-medium tracking-[0.35em] uppercase text-cyan-400">
      Lorna Fatmi
    </p>

    <h1
  class="max-w-full text-[3.25rem] font-black leading-[0.92] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl xl:text-8xl"
> 
      Building software

      <span class="block text-slate-400">
        people actually
      </span>

      <span class="block">
        enjoy using.
      </span>
    </h1>

    <p class="mt-8 max-w-md text-lg leading-8 text-slate-400 sm:mt-10 sm:text-xl sm:leading-9">
      Turning complex business problems into products that feel simple,
      reliable and fast.
    </p>

    <div class="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-5">
      <PrimaryButton href="#projects">
        Explore My Work →
      </PrimaryButton>

      <SecondaryButton :href="cvUrl"
                        target="_blank"
                        rel="noopener noreferrer">
        View CV
      </SecondaryButton>
    </div>

    <div class="mt-16">
      <p class="mb-5 text-xs uppercase tracking-[0.3em] text-slate-500">
        Trusted across
      </p>

      <div class="flex flex-wrap gap-8 text-lg text-slate-300">
        <span>Finance</span>
        <span>Hospitality</span>
        <span>Mobile</span>
      </div>
    </div>

  </div>
</template>