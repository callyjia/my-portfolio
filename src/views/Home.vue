<template>
  <div>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Freelance />
    <Contact />
  </div>
</template>

<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Skills from '../components/Skills.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'

useScrollReveal()
</script>
