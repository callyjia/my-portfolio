<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <!-- Mobile overlay (rendered first so it sits behind nav content) -->
    <div
      v-if="menuOpen"
      class="nav-overlay"
      @click="closeMenu"
    ></div>

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
        <a href="#contact" @click="closeMenu">Contact</a>
      </div>
    </div>
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
    z-index: 1000;
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
