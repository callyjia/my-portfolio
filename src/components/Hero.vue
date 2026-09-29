<template>
  <section id="home" class="hero">
    <div class="hero-container">
      <!-- Left: Text -->
      <div class="hero-content">
        <p class="intro animate-fade-in-up" style="animation-delay: 0.1s">
          Hello, I'm
        </p>

        <h1 class="animate-fade-in-up" style="animation-delay: 0.2s">
          Callysta<br />Kalyana
        </h1>

        <h2 class="animate-fade-in-up" style="animation-delay: 0.3s">
          <span class="typed-text">{{ displayText }}</span><span class="cursor">|</span>
        </h2>

        <p class="description animate-fade-in-up" style="animation-delay: 0.4s">
          I build web applications, management systems, and practical
          software solutions using modern web technologies.
        </p>

        <div class="hero-buttons animate-fade-in-up" style="animation-delay: 0.5s">
          <a href="#projects" class="btn primary" @click.prevent="scrollToSection('projects')">
            <span>View My Projects</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <a href="#contact" class="btn secondary" @click.prevent="scrollToSection('contact')">
            Contact Me
          </a>
        </div>

        <!-- Social links -->
        <div class="hero-social animate-fade-in-up" style="animation-delay: 0.6s">
          <a href="https://github.com/callyjia" target="_blank" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a href="mailto:kalyanacallysta@gmail.com" aria-label="Email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Right: Profile photo -->
      <div class="hero-photo animate-fade-in-right" style="animation-delay: 0.3s">
        <div class="photo-frame">
          <img src="../assets/Callysta Kalyana 3x4 Red.JPG" alt="Callysta Kalyana" />
        </div>
        <div class="photo-caption">
          <span>—</span> Callysta Kalyana
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const roles = [
  'Software Engineering Student',
  'Junior Full-Stack Developer',
  'Web Application Developer',
  'Problem Solver',
]

const displayText = ref('')
const currentRoleIndex = ref(0)
const currentCharIndex = ref(0)
const isDeleting = ref(false)
let typeTimer = null

function typeEffect() {
  const fullText = roles[currentRoleIndex.value]

  if (!isDeleting.value) {
    displayText.value = fullText.substring(0, currentCharIndex.value + 1)
    currentCharIndex.value++

    if (currentCharIndex.value === fullText.length) {
      isDeleting.value = true
      typeTimer = setTimeout(typeEffect, 2000)
      return
    }
    typeTimer = setTimeout(typeEffect, 70)
  } else {
    displayText.value = fullText.substring(0, currentCharIndex.value - 1)
    currentCharIndex.value--

    if (currentCharIndex.value === 0) {
      isDeleting.value = false
      currentRoleIndex.value = (currentRoleIndex.value + 1) % roles.length
    }
    typeTimer = setTimeout(typeEffect, 35)
  }
}

function scrollToSection(section) {
  const el = document.getElementById(section)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  typeTimer = setTimeout(typeEffect, 800)
})

onUnmounted(() => {
  if (typeTimer) clearTimeout(typeTimer)
})
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: var(--white);
  padding: 100px 40px 60px;
  position: relative;
  overflow: hidden;
}

.hero-container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-content {
  max-width: 600px;
}

.intro {
  color: var(--gray-text);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

h1 {
  font-family: var(--font-serif);
  font-size: 88px;
  line-height: 1;
  margin: 0 0 20px;
  color: var(--black);
  font-weight: 700;
  letter-spacing: -3px;
}

h2 {
  font-size: 18px;
  font-weight: 400;
  color: var(--gray-text);
  margin-bottom: 24px;
  min-height: 28px;
  font-style: italic;
}

.typed-text {
  color: var(--black);
  font-style: normal;
  font-weight: 500;
}

.cursor {
  color: var(--black);
  animation: blink 1s step-end infinite;
  font-weight: 300;
}

.description {
  font-size: 16px;
  line-height: 1.8;
  color: var(--gray-text);
  max-width: 480px;
}

.hero-buttons {
  display: flex;
  gap: 16px;
  margin-top: 36px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  border-radius: 0;
  text-decoration: none;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: all var(--transition);
  cursor: pointer;
  border: 1px solid var(--black);
}

.btn.primary {
  background: var(--black);
  color: var(--white);
}

.btn.primary:hover {
  background: var(--white);
  color: var(--black);
  transform: translateY(-2px);
}

.btn.secondary {
  border: 1px solid var(--gray-border);
  color: var(--black);
  background: transparent;
}

.btn.secondary:hover {
  border-color: var(--black);
  background: var(--white);
  transform: translateY(-2px);
}

/* Social links */
.hero-social {
  display: flex;
  gap: 16px;
  margin-top: 32px;
}

.hero-social a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 0;
  background: transparent;
  border: 1px solid var(--gray-border);
  color: var(--black);
  transition: all var(--transition);
}

.hero-social a:hover {
  background: var(--black);
  color: var(--white);
  border-color: var(--black);
  transform: translateY(-3px);
}

/* Profile photo — rectangular, architectural */
.hero-photo {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.photo-frame {
  width: 340px;
  height: 440px;
  overflow: hidden;
  border: 1px solid var(--black);
  position: relative;
}

.photo-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
  filter: grayscale(100%);
}

.photo-caption {
  margin-top: 16px;
  font-size: 12px;
  letter-spacing: 1px;
  color: var(--gray-text);
  text-transform: uppercase;
}

/* ===== Mobile ===== */
@media (max-width: 900px) {
  .hero {
    padding: 100px 24px 60px;
  }

  .hero-container {
    grid-template-columns: 1fr;
    gap: 50px;
    text-align: center;
  }

  .hero-content {
    max-width: 100%;
    margin: 0 auto;
  }

  .intro {
    letter-spacing: 2px;
  }

  h1 {
    font-size: 52px;
    letter-spacing: -2px;
  }

  .hero-buttons,
  .hero-social {
    justify-content: center;
  }

  .hero-photo {
    order: -1;
  }

  .photo-frame {
    width: 240px;
    height: 310px;
  }
}

@media (max-width: 600px) {
  h1 {
    font-size: 42px;
    letter-spacing: -1px;
  }

  h2 {
    font-size: 16px;
  }

  .description {
    font-size: 15px;
  }

  .btn {
    padding: 14px 24px;
    font-size: 12px;
    letter-spacing: 1.5px;
  }

  .hero-buttons {
    flex-direction: column;
    width: 100%;
  }

  .btn {
    justify-content: center;
  }

  .photo-frame {
    width: 180px;
    height: 230px;
  }
}
</style>