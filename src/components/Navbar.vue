<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="nav-container">
      <a href="#home" class="logo" @click="closeMenu">
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
        <a href="#home" @click="closeMenu">Home</a>
        <a href="#about" @click="closeMenu">About</a>
        <a href="#skills" @click="closeMenu">Skills</a>
        <a href="#projects" @click="closeMenu">Projects</a>
        <a href="#freelance" @click="closeMenu">Freelance</a>
        <a href="#contact" @click="closeMenu">Contact</a>
        <a href="/cv.html" target="_blank" class="nav-cv-btn" @click="closeMenu">Download CV</a>
      </div>
    </div>

    <!-- Mobile overlay -->
    <div
      v-if="menuOpen"
      class="nav-overlay"
      @click="closeMenu"
    ></div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
const isScrolled = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
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
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  z-index: 1000;
  transition: all var(--transition);
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.95);
  border-bottom-color: var(--gray-200);
  box-shadow: var(--shadow-sm);
}

.nav-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 22px;
  font-weight: 800;
  color: var(--gray-900);
  text-decoration: none;
  letter-spacing: -0.5px;
}

.logo-bracket {
  color: var(--green);
}

/* Desktop nav */
.nav-links {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav-links a {
  color: var(--gray-600);
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  position: relative;
  transition: color var(--transition);
}

.nav-links a:not(.nav-cv-btn)::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--green);
  border-radius: 2px;
  transition: width var(--transition);
}

.nav-links a:not(.nav-cv-btn):hover {
  color: var(--green);
}

.nav-links a:not(.nav-cv-btn):hover::after {
  width: 100%;
}

.nav-cv-btn {
  background: var(--green) !important;
  color: white !important;
  padding: 8px 18px;
  border-radius: 8px;
  font-weight: 600 !important;
  transition: all var(--transition) !important;
}

.nav-cv-btn:hover {
  background: var(--green-dark) !important;
  transform: translateY(-1px);
  box-shadow: var(--shadow-green);
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
  height: 2.5px;
  background: var(--gray-700);
  border-radius: 2px;
  transition: all var(--transition);
}

.nav-toggle.active span:nth-child(1) {
  transform: translateY(7.5px) rotate(45deg);
}

.nav-toggle.active span:nth-child(2) {
  opacity: 0;
}

.nav-toggle.active span:nth-child(3) {
  transform: translateY(-7.5px) rotate(-45deg);
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
    max-width: 320px;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    background: white;
    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
    transition: right var(--transition-slow);
    padding: 40px;
  }

  .nav-links.open {
    right: 0;
  }

  .nav-links a {
    font-size: 18px;
  }

  .nav-overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    z-index: 999;
    backdrop-filter: blur(2px);
  }
}
</style>
