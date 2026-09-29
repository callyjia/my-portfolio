<template>
  <section id="projects" class="section">
    <div class="container">
      <p class="section-label reveal">Selected Work</p>
      <h2 class="reveal reveal-delay-1">Featured Projects</h2>

      <div class="projects-grid reveal-stagger reveal-delay-2">
        <!-- Project 1 -->
        <article class="project-card">
          <div class="project-image wms-bg">
            <span class="project-abbreviation">WMS</span>
          </div>

          <div class="project-content">
            <p class="project-type">Web Application</p>
            <h3>Warehouse Management System</h3>
            <p>
              A warehouse management web application designed to manage
              inventory operations, traceability, sealing processes,
              and historical records.
            </p>

            <div class="tech-stack">
              <span>Vue</span>
              <span>Element Plus</span>
              <span>Spring Boot</span>
              <span>MySQL</span>
            </div>

            <div class="project-links">
              <router-link to="/project/wms" class="link-primary">
                View Details
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </router-link>
              <a href="https://github.com/5trety/corporate-internship" target="_blank" class="link-secondary">
                GitHub
              </a>
            </div>
          </div>
        </article>

        <!-- Project 2 -->
        <article class="project-card">
          <div class="project-image pos-bg">
            <span class="project-abbreviation">POS</span>
          </div>

          <div class="project-content">
            <p class="project-type">Android Application</p>
            <h3>Point-of-Sale System</h3>
            <p>
              A mobile checkout app for small and medium-sized retail stores
              enabling digitalization of the entire process, including product
              scanning, rapid checkout, and daily account settlement.
            </p>

            <div class="tech-stack">
              <span>Kotlin</span>
              <span>Gradle</span>
              <span>Jetpack Compose</span>
            </div>

            <div class="project-links">
              <router-link to="/project/acro" class="link-primary">
                View Details
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </router-link>
              <a href="https://github.com/callyjia/Acro" target="_blank" class="link-secondary">
                GitHub
              </a>
            </div>
          </div>
        </article>


      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 120px 40px;
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
  max-width: 900px;
  margin: 0 auto;
}

.project-card {
  border: 1px solid var(--gray-border);
  border-radius: 0;
  overflow: hidden;
  background: var(--white);
  transition: all var(--transition);
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-8px);
  border-color: var(--black);
}

/* Project image headers — pure black */
.project-image {
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: var(--black);
}

.project-image::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 50%, rgba(255,255,255,0.05) 0%, transparent 50%);
}

.wms-bg {
  background: var(--black);
}

.pos-bg {
  background: var(--black);
}

.project-abbreviation {
  font-family: var(--font-serif);
  font-size: 42px;
  font-weight: 400;
  font-style: italic;
  color: var(--white);
  letter-spacing: 2px;
  position: relative;
  z-index: 1;
  transition: transform var(--transition);
}

.project-card:hover .project-abbreviation {
  transform: scale(1.1);
}

.project-content {
  padding: 30px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-type {
  color: var(--gray-text);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.project-content h3 {
  font-family: var(--font-serif);
  font-size: 24px;
  color: var(--black);
  margin-bottom: 12px;
  font-weight: 600;
  letter-spacing: -0.5px;
}

.project-content p {
  color: var(--gray-text);
  line-height: 1.7;
  font-size: 15px;
  flex: 1;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 20px 0;
}

.tech-stack span {
  background: transparent;
  color: var(--black);
  padding: 6px 14px;
  border-radius: 0;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.5px;
  border: 1px solid var(--gray-border);
  transition: all var(--transition);
}

.project-card:hover .tech-stack span {
  border-color: var(--black);
}

.project-links {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: auto;
}

.link-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--black);
  font-weight: 600;
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: gap var(--transition);
}

.link-primary:hover {
  gap: 12px;
}

.link-secondary {
  color: var(--gray-text);
  font-weight: 500;
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: color var(--transition);
}

.link-secondary:hover {
  color: var(--black);
}

/* ===== Mobile ===== */
@media (max-width: 900px) {
  .projects-grid {
    grid-template-columns: 1fr;
    max-width: 450px;
    margin: 0 auto;
  }
}

@media (max-width: 600px) {
  h2 {
    font-size: 36px;
  }

  .section {
    padding: 70px 24px;
  }

  .project-content {
    padding: 24px;
  }
}
</style>