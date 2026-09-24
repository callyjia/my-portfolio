<template>
  <section id="projects" class="section">
    <div class="container">
      <p class="section-label reveal">MY WORK</p>
      <h2 class="reveal reveal-delay-1">Featured Projects</h2>

      <div class="projects-grid reveal-stagger reveal-delay-2">
        <!-- Project 1 -->
        <article class="project-card">
          <div class="project-image wms-bg">
            <span class="project-abbreviation">WMS</span>
          </div>

          <div class="project-content">
            <p class="project-type">WEB APPLICATION</p>
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
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
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
            <p class="project-type">ANDROID APPLICATION</p>
            <h3>Point-of-sale System</h3>
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
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </router-link>
              <a href="https://github.com/callyjia/Acro" target="_blank" class="link-secondary">
                GitHub
              </a>
            </div>
          </div>
        </article>

        <!-- Project 3 -->
        <article class="project-card">
          <div class="project-image fds-bg">
            <span class="project-abbreviation">FDS</span>
          </div>

          <div class="project-content">
            <p class="project-type">WEB APPLICATION</p>
            <h3>Food Delivery System</h3>
            <p>
              A meal-ordering app enabling users to place orders,
              merchants to accept those orders, and a backend system to
              manage dishes throughout the entire process.
            </p>

            <div class="tech-stack">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Postman</span>
            </div>

            <div class="project-links">
              <a href="#" target="_blank" class="link-secondary">GitHub</a>
              <a href="#" target="_blank" class="link-secondary">Details</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 100px 24px;
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.project-card {
  border: 1px solid var(--gray-200);
  border-radius: 16px;
  overflow: hidden;
  background: white;
  transition: all var(--transition);
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
  border-color: var(--green-light);
}

/* Project image headers with different gradients */
.project-image {
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.project-image::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 50%, rgba(255,255,255,0.15) 0%, transparent 50%);
}

.wms-bg {
  background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
}

.pos-bg {
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
}

.fds-bg {
  background: linear-gradient(135deg, #0d9488 0%, #0f766e 100%);
}

.project-abbreviation {
  font-size: 32px;
  font-weight: 800;
  color: white;
  letter-spacing: 2px;
  position: relative;
  z-index: 1;
  transition: transform var(--transition);
}

.project-card:hover .project-abbreviation {
  transform: scale(1.15);
}

.project-content {
  padding: 26px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-type {
  color: var(--green);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.project-content h3 {
  font-size: 21px;
  color: var(--gray-900);
  margin-bottom: 10px;
  font-weight: 700;
}

.project-content p {
  color: var(--gray-500);
  line-height: 1.6;
  font-size: 14px;
  flex: 1;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 18px 0;
}

.tech-stack span {
  background: var(--gray-100);
  color: var(--gray-600);
  padding: 5px 12px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  transition: all var(--transition);
}

.project-card:hover .tech-stack span {
  background: var(--green-light);
  color: var(--green-dark);
}

.project-links {
  display: flex;
  gap: 16px;
  align-items: center;
  margin-top: auto;
}

.link-primary {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--green);
  font-weight: 600;
  text-decoration: none;
  font-size: 14px;
  transition: gap var(--transition);
}

.link-primary:hover {
  gap: 10px;
}

.link-secondary {
  color: var(--gray-500);
  font-weight: 600;
  text-decoration: none;
  font-size: 14px;
  transition: color var(--transition);
}

.link-secondary:hover {
  color: var(--green);
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
    font-size: 30px;
  }

  .section {
    padding: 70px 20px;
  }

  .project-content {
    padding: 20px;
  }
}

</style>
