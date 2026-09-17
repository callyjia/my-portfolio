<template>
  <section id="home" class="hero">
    <!-- Animated background blobs -->
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>

    <div class="hero-container">
      <!-- Left: Text -->
      <div class="hero-content">
        <p class="intro animate-fade-in-up" style="animation-delay: 0.1s">
          <span class="wave">👋</span> Hello, I'm
        </p>

        <h1 class="animate-fade-in-up" style="animation-delay: 0.2s">
          Callysta Kalyana
        </h1>

        <h2 class="animate-fade-in-up" style="animation-delay: 0.3s">
          <span class="typed-text">{{ displayText }}</span><span class="cursor">|</span>
        </h2>

        <p class="description animate-fade-in-up" style="animation-delay: 0.4s">
          I build web applications, management systems, and practical
          software solutions using modern web technologies.
        </p>

        <div class="hero-buttons animate-fade-in-up" style="animation-delay: 0.5s">
          <a href="#projects" class="btn primary">
            <span>View My Projects</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <a href="/cv.html" target="_blank" class="btn cv">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Download CV</span>
          </a>

          <a href="#contact" class="btn secondary">
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
        <div class="photo-ring"></div>
        <div class="photo-ring photo-ring-2"></div>
        <div class="photo-container">
          <img src="../assets/Callysta Kalyana 3x4 Red.JPG" alt="Callysta Kalyana" />
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
  background: var(--gradient-hero);
  padding: 100px 24px 60px;
  position: relative;
  overflow: hidden;
}

/* Animated background blobs */
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  z-index: 0;
}

.blob-1 {
  width: 400px;
  height: 400px;
  background: #4ade80;
  top: -100px;
  right: -50px;
  animation: float 8s ease-in-out infinite;
}

.blob-2 {
  width: 300px;
  height: 300px;
  background: #86efac;
  bottom: -50px;
  left: -50px;
  animation: float 10s ease-in-out infinite reverse;
}

.blob-3 {
  width: 200px;
  height: 200px;
  background: #bbf7d0;
  top: 50%;
  left: 40%;
  animation: float 7s ease-in-out infinite;
  animation-delay: 2s;
}

.hero-container {
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-content {
  max-width: 550px;
}

.intro {
  color: var(--green);
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
}

.wave {
  display: inline-block;
  animation: wave 2.5s ease-in-out infinite;
  transform-origin: 70% 70%;
}

@keyframes wave {
  0%, 100% { transform: rotate(0deg); }
  10%, 30% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  40% { transform: rotate(14deg); }
  50% { transform: rotate(-4deg); }
  60% { transform: rotate(10deg); }
}

h1 {
  font-size: 54px;
  line-height: 1.1;
  margin: 0 0 12px;
  color: var(--gray-900);
  font-weight: 800;
  letter-spacing: -1.5px;
}

h2 {
  font-size: 26px;
  font-weight: 500;
  color: var(--gray-700);
  margin-bottom: 20px;
  min-height: 36px;
}

.typed-text {
  background: var(--gradient-green);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cursor {
  color: var(--green);
  animation: blink 1s step-end infinite;
  font-weight: 300;
}

.description {
  font-size: 17px;
  line-height: 1.7;
  color: var(--gray-500);
  max-width: 500px;
}

.hero-buttons {
  display: flex;
  gap: 14px;
  margin-top: 32px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 26px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  transition: all var(--transition);
  cursor: pointer;
  border: none;
}

.btn.primary {
  background: var(--gradient-green);
  color: white;
  box-shadow: var(--shadow-green);
}

.btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(22, 163, 74, 0.35);
}

.btn.cv {
  background: white;
  color: var(--gray-700);
  border: 2px solid var(--gray-200);
}

.btn.cv:hover {
  border-color: var(--green);
  color: var(--green);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn.secondary {
  border: 2px solid transparent;
  color: var(--gray-600);
  background: transparent;
}

.btn.secondary:hover {
  border-color: var(--gray-200);
  background: white;
  transform: translateY(-2px);
}

/* Social links */
.hero-social {
  display: flex;
  gap: 12px;
  margin-top: 28px;
}

.hero-social a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: white;
  border: 1px solid var(--gray-200);
  color: var(--gray-600);
  transition: all var(--transition);
}

.hero-social a:hover {
  color: var(--green);
  border-color: var(--green);
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

/* Profile photo */
.hero-photo {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.photo-ring {
  position: absolute;
  width: 360px;
  height: 360px;
  border-radius: 50%;
  border: 2px dashed rgba(22, 163, 74, 0.25);
  animation: spin 20s linear infinite;
}

.photo-ring-2 {
  width: 400px;
  height: 400px;
  border: 1px solid rgba(22, 163, 74, 0.15);
  animation: spin 30s linear infinite reverse;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.photo-container {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  border: 6px solid white;
  box-shadow: var(--shadow-xl);
  position: relative;
  z-index: 2;
}

.photo-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
}



/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: var(--gray-400);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  z-index: 2;
}


@keyframes scroll-wheel {
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(10px); }
}

/* ===== Mobile ===== */
@media (max-width: 900px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 50px;
    text-align: center;
  }

  .hero-content {
    max-width: 100%;
    margin: 0 auto;
  }

  .hero-buttons,
  .hero-social {
    justify-content: center;
  }

  .hero-photo {
    order: -1;
  }

  .photo-container {
    width: 220px;
    height: 220px;
  }

  .photo-ring {
    width: 270px;
    height: 270px;
  }

  .photo-ring-2 {
    width: 300px;
    height: 300px;
  }

  .badge-1 {
    left: 10px;
    bottom: 20px;
  }

  .badge-2 {
    right: 10px;
    top: 20px;
  }
}

@media (max-width: 600px) {
  h1 {
    font-size: 38px;
  }

  h2 {
    font-size: 20px;
  }

  .description {
    font-size: 15px;
  }

  .btn {
    padding: 11px 20px;
    font-size: 14px;
  }

  .hero-buttons {
    flex-direction: column;
    width: 100%;
  }

  .btn {
    justify-content: center;
  }

  .photo-container {
    width: 180px;
    height: 180px;
  }

  .photo-ring {
    width: 230px;
    height: 230px;
  }

  .photo-ring-2 {
    width: 260px;
    height: 260px;
  }

  .blob {
    width: 250px !important;
    height: 250px !important;
  }
}
</style>
