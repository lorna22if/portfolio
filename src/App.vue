<script setup lang="ts">
import NavigationBar from '@/components/layout/NavigationBar.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<template>
  <main class="min-h-screen bg-slate-950 text-white">
    <NavigationBar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ExperienceSection />
    <ContactSection />
    <Footer />
  </main>
</template>