<template>
  <section id="skills" class="section skills-section">
    <div class="container">
      <p class="section-label reveal">Expertise</p>
      <h2 class="reveal reveal-delay-1">Technologies I Work With</h2>

      <div class="skills-grid reveal-stagger reveal-delay-2">
        <div class="skill-card">
          <div class="skill-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
          <h3>Programming</h3>
          <p>Java</p>
          <p>Python</p>
          <p>JavaScript</p>
          <p>C++</p>
          <p>HTML &amp; CSS</p>
          <p>SQL</p>
        </div>

        <div class="skill-card">
          <div class="skill-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </div>
          <h3>Frontend</h3>
          <p>Vue.js</p>
          <p>Vite</p>
          <p>Element Plus</p>
          <p>HTML5</p>
          <p>CSS3</p>
        </div>

        <div class="skill-card">
          <div class="skill-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
              <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
              <line x1="6" y1="6" x2="6.01" y2="6" />
              <line x1="6" y1="18" x2="6.01" y2="18" />
            </svg>
          </div>
          <h3>Backend</h3>
          <p>Spring Boot</p>
          <p>Node.js</p>
          <p>REST APIs</p>
        </div>

        <div class="skill-card">
          <div class="skill-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 7V4h16v3" />
              <path d="M9 20h6" />
              <path d="M12 4v16" />
            </svg>
          </div>
          <h3>Database &amp; Tools</h3>
          <p>MySQL</p>
          <p>Git &amp; GitHub</p>
          <p>Docker</p>
          <p>Postman</p>
          <p>Linux</p>
          <p>VS Code</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 120px 40px;
}

.skills-section {
  background: var(--gray-bg);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-label {
  color: var(--gray-text);
  font-weight: 400;
  letter-spacing: 3px;
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 12px;
}

h2 {
  font-family: var(--font-serif);
  font-size: 56px;
  margin-bottom: 50px;
  color: var(--black);
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 1.1;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.skill-card {
  background: var(--white);
  padding: 36px 28px;
  border: 1px solid var(--gray-border);
  border-radius: 0;
  transition: all var(--transition);
  position: relative;
  overflow: hidden;
}

.skill-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--black);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--transition);
}

.skill-card:hover {
  transform: translateY(-6px);
  border-color: var(--black);
}

.skill-card:hover::before {
  transform: scaleX(1);
}

.skill-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 0;
  background: var(--black);
  color: var(--white);
  margin-bottom: 20px;
  transition: all var(--transition);
}

.skill-card:hover .skill-icon {
  background: var(--white);
  color: var(--black);
  border: 1px solid var(--black);
  transform: scale(1.1);
}

.skill-card h3 {
  margin-top: 0;
  margin-bottom: 18px;
  color: var(--black);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.skill-card p {
  color: var(--gray-text);
  margin: 8px 0;
  font-size: 14px;
  transition: color var(--transition);
}

.skill-card:hover p {
  color: var(--black);
}

/* ===== Mobile ===== */
@media (max-width: 900px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }

  h2 {
    font-size: 36px;
  }

  .section {
    padding: 70px 24px;
  }
}
</style>