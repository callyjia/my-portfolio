<template>
  <section id="about" class="section">
    <div class="container">
      <p class="section-label reveal">About</p>
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
          <h3>Focus</h3>
          <ul>
            <li>
              <span class="check-icon">&#x2014;</span> Web Development
            </li>
            <li>
              <span class="check-icon">&#x2014;</span> Full-Stack Development
            </li>
            <li>
              <span class="check-icon">&#x2014;</span> Management Systems
            </li>
            <li>
              <span class="check-icon">&#x2014;</span> Database Applications
            </li>
            <li>
              <span class="check-icon">&#x2014;</span> Software Engineering
            </li>
          </ul>
        </div>
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
  color: var(--black);
  margin-bottom: 50px;
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 1.1;
}

.about-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  align-items: start;
}

.about-content p {
  color: var(--gray-text);
  font-size: 17px;
  line-height: 1.9;
  margin-bottom: 18px;
}

/* About card */
.about-card {
  background: var(--black);
  padding: 40px;
  border-radius: 0;
  transition: all var(--transition);
}

.about-card h3 {
  margin-top: 0;
  margin-bottom: 24px;
  color: var(--white);
  font-family: var(--font-serif);
  font-size: 22px;
  font-style: italic;
}

.about-card li {
  list-style: none;
  margin: 16px 0;
  color: var(--white);
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.5px;
}

.check-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  color: var(--white);
  font-size: 14px;
  flex-shrink: 0;
  opacity: 0.5;
}

/* ===== Mobile ===== */
@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  h2 {
    font-size: 36px;
  }

  .about-content p {
    font-size: 15px;
  }

  .section {
    padding: 70px 24px;
  }
}
</style>