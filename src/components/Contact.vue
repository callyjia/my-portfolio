<template>
  <section id="contact" class="section contact-section">
    <!-- Animated background -->
    <div class="contact-bg">
      <div class="bg-orb bg-orb-1"></div>
      <div class="bg-orb bg-orb-2"></div>
    </div>

    <div class="container">
      <p class="section-label reveal">CONTACT</p>
      <h2 class="reveal reveal-delay-1">Let's Work Together</h2>

      <p class="contact-text reveal reveal-delay-2">
        I'm interested in web development, software projects,
        and freelance opportunities. Feel free to reach out.
      </p>

      <div class="contact-links reveal reveal-delay-3">
        <a href="mailto:callysta@example.com" class="contact-card">
          <div class="contact-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <span class="contact-label">Email Me</span>
          <span class="contact-value">callysta@example.com</span>
        </a>

        <a href="https://github.com/callyjia" target="_blank" class="contact-card">
          <div class="contact-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </div>
          <span class="contact-label">GitHub</span>
          <span class="contact-value">github.com/callyjia</span>
        </a>

        <a href="https://www.upwork.com" target="_blank" class="contact-card">
          <div class="contact-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
              <line x1="9" y1="9" x2="9.01" y2="9" />
              <line x1="15" y1="9" x2="15.01" y2="9" />
            </svg>
          </div>
          <span class="contact-label">Upwork</span>
          <span class="contact-value">Hire me on Upwork</span>
        </a>
      </div>

      <!-- Footer -->
      <footer class="contact-footer reveal reveal-delay-4">
        <p>Designed &amp; built by Callysta Kalyana</p>
        <p class="footer-year">&copy; {{ year }}</p>
      </footer>
    </div>
  </section>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.section {
  padding: 100px 24px 40px;
  position: relative;
  overflow: hidden;
}

.contact-section {
  background: var(--dark);
  color: white;
  text-align: center;
}

/* Animated background orbs */
.contact-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
}

.bg-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
}

.bg-orb-1 {
  width: 300px;
  height: 300px;
  background: var(--green-accent);
  top: -80px;
  left: -50px;
  animation: float 8s ease-in-out infinite;
}

.bg-orb-2 {
  width: 250px;
  height: 250px;
  background: var(--green);
  bottom: -50px;
  right: -50px;
  animation: float 10s ease-in-out infinite reverse;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.section-label {
  color: var(--green-accent);
  font-weight: 700;
  letter-spacing: 1.5px;
  font-size: 14px;
  margin-bottom: 8px;
}

h2 {
  font-size: 42px;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.contact-text {
  color: #d1d5db;
  font-size: 18px;
  line-height: 1.7;
  max-width: 550px;
  margin: 16px auto 40px;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.contact-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 28px 24px;
  border-radius: 14px;
  text-decoration: none;
  color: white;
  transition: all var(--transition);
  width: 200px;
}

.contact-card:hover {
  background: rgba(74, 222, 128, 0.08);
  border-color: rgba(74, 222, 128, 0.3);
  transform: translateY(-6px);
  box-shadow: 0 10px 30px rgba(74, 222, 128, 0.1);
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(74, 222, 128, 0.12);
  color: var(--green-accent);
  transition: all var(--transition);
  margin-bottom: 4px;
}

.contact-card:hover .contact-icon {
  background: var(--green);
  color: white;
  transform: scale(1.1);
}

.contact-label {
  font-weight: 700;
  font-size: 15px;
}

.contact-value {
  color: #9ca3af;
  font-size: 13px;
}

/* Footer */
.contact-footer {
  margin-top: 60px;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #9ca3af;
  font-size: 14px;
}

.footer-year {
  margin-top: 4px;
}

/* ===== Mobile ===== */
@media (max-width: 600px) {
  h2 {
    font-size: 32px;
  }

  .contact-text {
    font-size: 15px;
  }

  .contact-card {
    width: 100%;
  }

  .section {
    padding: 70px 20px 30px;
  }
}
</style>
