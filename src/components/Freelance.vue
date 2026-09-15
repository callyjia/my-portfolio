<template>
  <section id="freelance" class="freelance-section">
    <div class="container">
      <div class="freelance-card reveal">
        <!-- Status badge -->
        <div class="status-badge">
          <span class="status-dot"></span>
          Available for Freelance Work
        </div>

        <h2 class="freelance-title">
          Let's Build Something
          <span class="gradient-text">Great Together</span>
        </h2>

        <p class="freelance-desc">
          I'm currently available for freelance projects and collaborations.
          Whether you need a web application, a management system, or a
          full-stack solution — I'm here to help bring your ideas to life.
        </p>

        <!-- Feature highlights -->
        <div class="features">
          <div class="feature">
            <div class="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <h4>Fast Delivery</h4>
              <p>Quick turnaround without compromising quality</p>
            </div>
          </div>

          <div class="feature">
            <div class="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <div>
              <h4>Quality Code</h4>
              <p>Clean, maintainable, and well-documented</p>
            </div>
          </div>

          <div class="feature">
            <div class="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <h4>Collaborative</h4>
              <p>Clear communication throughout the project</p>
            </div>
          </div>
        </div>

        <!-- CTA buttons -->
        <div class="freelance-cta">
          <a href="#contact" class="btn-primary">
            Get in Touch
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="/cv.html" target="_blank" class="btn-outline">
            View My CV
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.freelance-section {
  padding: 100px 24px;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

.freelance-card {
  background: var(--gradient-dark);
  border-radius: 24px;
  padding: 60px 50px;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow-xl);
}

/* Decorative gradient orbs */
.freelance-card::before,
.freelance-card::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.15;
}

.freelance-card::before {
  width: 250px;
  height: 250px;
  background: var(--green-accent);
  top: -80px;
  right: -50px;
}

.freelance-card::after {
  width: 200px;
  height: 200px;
  background: var(--green);
  bottom: -60px;
  left: -50px;
}

/* Status badge */
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(74, 222, 128, 0.12);
  border: 1px solid rgba(74, 222, 128, 0.3);
  color: var(--green-accent);
  padding: 8px 20px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 28px;
  position: relative;
  z-index: 1;
}

.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #22c55e;
  position: relative;
  flex-shrink: 0;
}

.status-dot::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #22c55e;
  animation: pulse-ring 2s ease-out infinite;
}

/* Title */
.freelance-title {
  font-size: 40px;
  font-weight: 800;
  color: white;
  margin-bottom: 18px;
  line-height: 1.2;
  position: relative;
  z-index: 1;
}

.gradient-text {
  background: var(--gradient-green);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
}

.freelance-desc {
  color: #d1d5db;
  font-size: 17px;
  line-height: 1.7;
  max-width: 600px;
  margin: 0 auto 40px;
  position: relative;
  z-index: 1;
}

/* Features */
.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 40px;
  position: relative;
  z-index: 1;
}

.feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
}

.feature-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: rgba(74, 222, 128, 0.12);
  color: var(--green-accent);
  transition: all var(--transition);
}

.feature:hover .feature-icon {
  background: var(--green);
  color: white;
  transform: translateY(-4px);
}

.feature h4 {
  color: white;
  font-size: 16px;
  margin: 0;
}

.feature p {
  color: #9ca3af;
  font-size: 14px;
  margin: 4px 0 0;
  line-height: 1.5;
}

/* CTA */
.freelance-cta {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--gradient-green);
  color: white;
  padding: 14px 28px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  transition: all var(--transition);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-green);
}

.btn-outline {
  display: inline-flex;
  align-items: center;
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.2);
  padding: 12px 26px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  transition: all var(--transition);
}

.btn-outline:hover {
  border-color: var(--green-accent);
  color: var(--green-accent);
  transform: translateY(-2px);
}

/* ===== Mobile ===== */
@media (max-width: 768px) {
  .freelance-card {
    padding: 40px 24px;
  }

  .freelance-title {
    font-size: 30px;
  }

  .freelance-desc {
    font-size: 15px;
  }

  .features {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .feature {
    flex-direction: row;
    text-align: left;
    gap: 16px;
  }

  .freelance-cta {
    flex-direction: column;
    width: 100%;
  }

  .btn-primary,
  .btn-outline {
    justify-content: center;
    width: 100%;
  }
}
</style>
