<script setup lang="ts">
import Container from '@/components/common/Container.vue'
import Section from '@/components/common/Section.vue'
import SectionHeading from '@/components/common/SectionHeading.vue'
import JourneyTimeline from '@/components/features/Journey/JourneyTimeline.vue'
</script>

<template>
  <Section id="journey">
    <Container>
      <SectionHeading
        eyebrow="Journey"
        title="Growing through curiosity, engineering and continuous learning."
        description="Every step has taught me something that shapes how I build software today."
      />

      <JourneyTimeline />
    </Container>
  </Section>
</template>