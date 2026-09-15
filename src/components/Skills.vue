<template>
  <section id="skills" class="section skills-section">
    <div class="container">
      <p class="section-label reveal">MY SKILLS</p>
      <h2 class="reveal reveal-delay-1">Technologies I Work With</h2>

      <div class="skills-grid reveal-stagger reveal-delay-2">
        <div class="skill-card">
          <div class="skill-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
  padding: 100px 24px;
}

.skills-section {
  background: var(--gray-50);
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.section-label {
  color: var(--green);
  font-weight: 700;
  letter-spacing: 1.5px;
  font-size: 14px;
  margin-bottom: 8px;
}

h2 {
  font-size: 38px;
  margin-bottom: 40px;
  color: var(--gray-900);
  font-weight: 800;
  letter-spacing: -0.5px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.skill-card {
  background: white;
  padding: 28px 24px;
  border: 1px solid var(--gray-200);
  border-radius: 14px;
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
  height: 4px;
  background: var(--gradient-green);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--transition);
}

.skill-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: var(--green-light);
}

.skill-card:hover::before {
  transform: scaleX(1);
}

.skill-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: var(--green-light);
  color: var(--green-dark);
  margin-bottom: 18px;
  transition: all var(--transition);
}

.skill-card:hover .skill-icon {
  background: var(--green);
  color: white;
  transform: scale(1.1);
}

.skill-card h3 {
  margin-top: 0;
  margin-bottom: 16px;
  color: var(--gray-900);
  font-size: 18px;
}

.skill-card p {
  color: var(--gray-500);
  margin: 8px 0;
  font-size: 15px;
  transition: color var(--transition);
}

.skill-card:hover p {
  color: var(--gray-700);
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
    font-size: 30px;
  }

  .section {
    padding: 70px 20px;
  }
}
</style>
