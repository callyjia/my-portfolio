<template>
  <div class="project-page">
    <section class="project-header">
      <div class="container">
        <p class="project-label reveal">Web Application</p>
        <h1 class="reveal reveal-delay-1">Warehouse Management System</h1>
        <p class="subtitle reveal reveal-delay-2">
          A warehouse management web application for managing
          inventory operations, traceability, sealing processes,
          and historical records.
        </p>

        <div class="project-meta reveal reveal-delay-3">
          <div class="meta-item">
            <span class="meta-label">Role</span>
            <span class="meta-value">Full-Stack Developer</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Type</span>
            <span class="meta-value">Corporate Internship</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Stack</span>
            <span class="meta-value">Vue · Spring Boot · MySQL</span>
          </div>
        </div>
      </div>
    </section>

    <section class="project-content">
      <div class="container">
        <div class="project-section reveal">
          <h2>Project Overview</h2>
          <p>
            This project was developed as part of a software development
            project focused on warehouse management and logistics
            information systems.
          </p>
          <p>
            The system provides functionality for managing warehouse
            operations and tracking inventory-related information
            throughout different stages of the process.
          </p>
        </div>

        <div class="project-section reveal">
          <h2>My Role</h2>
          <p>
            I worked on the implementation of the inventory traceability
            and sealing management modules.
          </p>
          <ul>
            <li>Inventory traceability</li>
            <li>Board lifecycle tracking</li>
            <li>Sealing and unsealing operations</li>
            <li>Historical records</li>
            <li>Query functionality</li>
          </ul>
        </div>

        <div class="project-section reveal">
          <h2>Technologies</h2>
          <div class="technology-list">
            <span>Vue.js</span>
            <span>Element Plus</span>
            <span>Java</span>
            <span>Spring Boot</span>
            <span>MySQL</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
        </div>

        <div class="project-section reveal">
          <h2>Project Screenshots</h2>
          <div class="screenshots">
            <figure class="screenshot">
              <img :src="wmsInventory" alt="WMS real-time inventory overview dashboard" />
              <figcaption>Real-time Inventory Overview</figcaption>
            </figure>
            <figure class="screenshot">
              <img :src="wmsInbound" alt="WMS inbound order creation form" />
              <figcaption>Inbound Order Creation</figcaption>
            </figure>
            <figure class="screenshot">
              <img :src="wmsForecasting" alt="WMS forecasting module" />
              <figcaption>Forecasting</figcaption>
            </figure>
            <figure class="screenshot">
              <img :src="wmsLifecycle" alt="WMS board lifecycle tracking" />
              <figcaption>Board Lifecycle Tracking</figcaption>
            </figure>
          </div>
        </div>

        <div class="project-actions reveal">
          <a href="https://github.com/5trety/corporate-internship" target="_blank" class="btn-github">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View on GitHub
          </a>
          <router-link to="/" class="back-button">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'
import wmsForecasting from '../assets/wms-forecasting.png'
import wmsLifecycle from '../assets/wms-lifecycle.png'
import wmsInbound from '../assets/wms-inbound.png'
import wmsInventory from '../assets/wms-inventory.png'

useScrollReveal()
</script>

<style scoped>
.project-page {
  padding-top: 70px;
}

.project-header {
  background: var(--white);
  padding: 120px 40px;
  border-bottom: 1px solid var(--black);
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.project-label {
  color: var(--gray-text);
  font-weight: 400;
  letter-spacing: 3px;
  font-size: 12px;
  text-transform: uppercase;
}

.project-header h1 {
  font-family: var(--font-serif);
  font-size: 64px;
  color: var(--black);
  margin: 16px 0;
  font-weight: 700;
  letter-spacing: -1.5px;
  line-height: 1.05;
}

.subtitle {
  max-width: 750px;
  color: var(--gray-text);
  font-size: 18px;
  line-height: 1.8;
}

/* Meta info */
.project-meta {
  display: flex;
  gap: 50px;
  margin-top: 40px;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.meta-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--gray-text);
  font-weight: 500;
}

.meta-value {
  font-size: 15px;
  color: var(--black);
  font-weight: 500;
}

.project-content {
  padding: 80px 40px;
}

.project-section {
  margin-bottom: 60px;
}

.project-section h2 {
  font-family: var(--font-serif);
  font-size: 36px;
  color: var(--black);
  margin-bottom: 24px;
  font-weight: 600;
  letter-spacing: -0.5px;
}

.project-section p,
.project-section li {
  color: var(--gray-text);
  font-size: 17px;
  line-height: 1.8;
}

.project-section p {
  margin-bottom: 16px;
}

.project-section ul {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.project-section li {
  margin: 0;
  padding-left: 28px;
  position: relative;
}

.project-section li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10px;
  width: 12px;
  height: 1px;
  background: var(--black);
}

.technology-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.technology-list span {
  background: transparent;
  color: var(--black);
  padding: 8px 16px;
  border-radius: 0;
  font-size: 13px;
  font-weight: 500;
  border: 1px solid var(--gray-border);
  transition: all var(--transition);
}

.technology-list span:hover {
  background: var(--black);
  color: var(--white);
  border-color: var(--black);
  transform: translateY(-2px);
}

.screenshots {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.screenshot {
  margin: 0;
  border-radius: 0;
  overflow: hidden;
  border: 1px solid var(--gray-border);
  background: var(--white);
  transition: all var(--transition);
  position: relative;
}

.screenshot:hover {
  transform: translateY(-4px);
  border-color: var(--black);
}

.screenshot img {
  display: block;
  width: 100%;
  height: auto;
}

.screenshot figcaption {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 14px 18px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 1px;
  color: var(--white);
  text-align: center;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.5) 70%,
    transparent 100%
  );
  transform: translateY(4px);
  opacity: 0.85;
  transition: opacity var(--transition), transform var(--transition);
}

.screenshot:hover figcaption {
  opacity: 1;
  transform: translateY(0);
}

.project-actions {
  display: flex;
  gap: 16px;
  padding-top: 20px;
  flex-wrap: wrap;
}

.btn-github,
.back-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 0;
  text-decoration: none;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  transition: all var(--transition);
}

.btn-github {
  background: var(--black);
  color: var(--white);
  border: 1px solid var(--black);
}

.btn-github:hover {
  background: var(--white);
  color: var(--black);
  transform: translateY(-2px);
}

.back-button {
  background: transparent;
  color: var(--black);
  border: 1px solid var(--gray-border);
}

.back-button:hover {
  border-color: var(--black);
  background: var(--white);
  transform: translateY(-2px);
}

/* ===== Mobile ===== */
@media (max-width: 700px) {
  .project-header h1 {
    font-size: 40px;
  }

  .subtitle {
    font-size: 16px;
  }

  .project-meta {
    flex-direction: column;
    gap: 16px;
  }

  .screenshots {
    grid-template-columns: 1fr;
  }

  .project-actions {
    flex-direction: column;
  }

  .btn-github,
  .back-button {
    justify-content: center;
    text-align: center;
  }

  .project-section ul {
    grid-template-columns: 1fr;
  }

  .project-section h2 {
    font-size: 28px;
  }

  .project-content {
    padding: 50px 24px;
  }

  .project-header {
    padding: 80px 24px;
  }
}
</style>