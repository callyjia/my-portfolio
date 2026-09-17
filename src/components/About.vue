<template>
  <section id="about" class="section">
    <div class="container">
      <p class="section-label reveal">ABOUT ME</p>
      <h2 class="reveal reveal-delay-1">Who I Am</h2>

      <div class="about-content">
        <div class="reveal reveal-delay-2">
          <p>
            I am a Software Engineering student with a strong interest in
            web development and software engineering.
          </p>

          <p>
            I enjoy turning ideas into practical software solutions,
            especially web applications, management systems, and
            database-driven applications.
          </p>

          <p>
            Through academic projects and practical development,
            I have gained experience in frontend development, backend
            development, databases, software testing, and system design.
          </p>
        </div>

        <div class="about-card reveal reveal-delay-3">
          <h3>What I Focus On</h3>
          <ul>
            <li>
              <span class="check-icon">✓</span> Web Development
            </li>
            <li>
              <span class="check-icon">✓</span> Full-Stack Development
            </li>
            <li>
              <span class="check-icon">✓</span> Management Systems
            </li>
            <li>
              <span class="check-icon">✓</span> Database Applications
            </li>
            <li>
              <span class="check-icon">✓</span> Software Engineering
            </li>
          </ul>
        </div>
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
  color: var(--gray-900);
  margin-bottom: 40px;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.about-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 50px;
  align-items: start;
}

.about-content p {
  color: var(--gray-500);
  font-size: 17px;
  line-height: 1.8;
  margin-bottom: 16px;
}

/* About card */
.about-card {
  background: var(--gray-50);
  padding: 32px;
  border-radius: 16px;
  border: 1px solid var(--gray-200);
  transition: all var(--transition);
}

.about-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.about-card h3 {
  margin-top: 0;
  margin-bottom: 20px;
  color: var(--gray-900);
}

.about-card li {
  list-style: none;
  margin: 14px 0;
  color: var(--gray-600);
  display: flex;
  align-items: center;
  gap: 10px;
}

.check-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  background: var(--green-light);
  color: var(--green-dark);
  border-radius: 50%;
  font-size: 12px;
  font-weight: 800;
  flex-shrink: 0;
}

/* ===== Mobile ===== */
@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  h2 {
    font-size: 30px;
  }

  .about-content p {
    font-size: 15px;
  }

  .section {
    padding: 70px 20px;
  }
}
</style>
