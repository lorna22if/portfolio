<script setup lang="ts">
import Container from '@/components/common/Container.vue'
import Section from '@/components/common/Section.vue'
import Badge from '@/components/common/Badge.vue'
import { projects } from '@/data/projects'
import SectionHeading from '@/components/common/SectionHeading.vue'
import FeaturedCaseStudy from '@/components/features/SelectedWork/FeaturedCaseStudy.vue'
import FeatureCard from '@/components/common/FeatureCard.vue'

const featuredProject = projects.find((project) => project.id === 'financial-services-platform')
const otherProjects = projects.filter((project) => project.id !== 'financial-services-platform')
</script>

<template>
  <Section id="projects">
    <Container>
  
     <SectionHeading
      eyebrow="Featured Project"
      title="Building software that businesses depend on."
      description="A selection of real-world projects across enterprise software, mobile experiences and business-critical systems."
    />

     <FeaturedCaseStudy
        v-if="featuredProject"
        :project="featuredProject"
      />

            <div class="mt-10 grid gap-6 md:grid-cols-2">
              <FeatureCard
        v-for="project in otherProjects"
        :key="project.id"
        hover
      >
        <h3 class="text-2xl font-bold text-white">
          {{ project.title }}
        </h3>

        <p class="mt-4 leading-7 text-slate-400">
          {{ project.tagline }}
        </p>

        <div class="mt-6 flex flex-wrap gap-3">
          <Badge
            v-for="technology in project.technologies"
            :key="technology"
            :label="technology"
          />
        </div>
      </FeatureCard>


      </div>
    </Container>
  </Section>
</template>