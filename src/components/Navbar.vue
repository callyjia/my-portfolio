<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <!-- Mobile overlay (rendered first so it sits behind nav content) -->
    <div
      v-if="menuOpen"
      class="nav-overlay"
      @click="closeMenu"
    ></div>

    <div class="nav-container">
      <a href="#home" class="logo" @click.prevent="goToSection('home')">
        <span class="logo-bracket">&lt;</span>Callysta<span class="logo-bracket">/&gt;</span>
      </a>

      <!-- Hamburger toggle -->
      <button
        class="nav-toggle"
        :class="{ active: menuOpen }"
        @click="toggleMenu"
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Nav links -->
      <div class="nav-links" :class="{ open: menuOpen }">
        <a href="#home" @click.prevent="goToSection('home')">Home</a>
        <a href="#about" @click.prevent="goToSection('about')">About</a>
        <a href="#skills" @click.prevent="goToSection('skills')">Skills</a>
        <a href="#projects" @click.prevent="goToSection('projects')">Projects</a>
        <a href="#contact" @click.prevent="goToSection('contact')">Contact</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const menuOpen = ref(false)
const isScrolled = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

function goToSection(section) {
  closeMenu()
  if (route.path === '/') {
    const el = document.getElementById(section)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  } else {
    router.push({ path: '/', hash: '#' + section })
  }
}

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  z-index: 1000;
  transition: all var(--transition);
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.98);
  border-bottom-color: var(--black);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-family: var(--font-serif);
  font-size: 24px;
  font-weight: 700;
  color: var(--black);
  text-decoration: none;
  letter-spacing: -0.5px;
}

.logo-bracket {
  font-weight: 400;
  font-style: italic;
}

/* Desktop nav */
.nav-links {
  display: flex;
  align-items: center;
  gap: 40px;
}

.nav-links a {
  color: var(--black);
  text-decoration: none;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  position: relative;
  transition: opacity var(--transition);
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--black);
  transition: width var(--transition);
}

.nav-links a:hover {
  opacity: 0.5;
}

.nav-links a:hover::after {
  width: 100%;
}

/* Hamburger */
.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  z-index: 1001;
}

.nav-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--black);
  border-radius: 0;
  transition: all var(--transition);
}

.nav-toggle.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.nav-toggle.active span:nth-child(2) {
  opacity: 0;
}

.nav-toggle.active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile overlay */
.nav-overlay {
  display: none;
}

/* ===== Mobile ===== */
@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 75%;
    max-width: 360px;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    gap: 36px;
    background: var(--black);
    box-shadow: -10px 0 40px rgba(0, 0, 0, 0.15);
    transition: right var(--transition-slow);
    padding: 40px;
    z-index: 1000;
  }

  .nav-links.open {
    right: 0;
  }

  .nav-links a {
    font-size: 16px;
    color: var(--white);
  }

  .nav-links a::after {
    background: var(--white);
  }

  .nav-overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
}
</style>