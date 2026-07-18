<script setup lang="ts">
import NavigationBar from '@/components/layout/NavigationBar.vue'
import HeroSection from '@/components/sections/Hero/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import SelectedWorkSection from '@/components/sections/SelectedWorkSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import HowIWorkSection from '@/components/sections/HowIWorkSection.vue'
import JourneySection from '@/components/sections/JourneySection.vue'
import Reveal from '@/components/common/Reveal.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<template>
  <main class="min-h-screen bg-slate-950 text-white">
    <NavigationBar />
      <HeroSection />

      <Reveal>
        <SelectedWorkSection />
      </Reveal>

      <!--<Reveal>
        <AboutSection />
      </Reveal>-->
      <!--
      <Reveal>
        <SkillsSection />
      </Reveal>-->

     <!-- <Reveal>
        <ExperienceSection />
      </Reveal> -->

      <Reveal>
        <HowIWorkSection />
      </Reveal>

      <Reveal>
        <JourneySection />
      </Reveal>

      <Reveal>
        <ContactSection />
      </Reveal>

      <Footer />
  </main>
</template>