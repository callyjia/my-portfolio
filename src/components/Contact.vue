<template>
  <section id="contact" class="section contact-section">
    <div class="container">
      <p class="section-label reveal">Get in Touch</p>
      <h2 class="reveal reveal-delay-1">Contact Me</h2>

      <p class="contact-text reveal reveal-delay-2">
        Got a project waiting to be realized? Let's collaborate and make it happen.
      </p>

      <form
        class="contact-form reveal reveal-delay-3"
        @submit.prevent="handleSubmit"
      >
        <div class="form-row">
          <div class="form-group">
            <input
              v-model="form.name"
              type="text"
              placeholder="Your Name *"
              required
              autocomplete="name"
            />
          </div>

          <div class="form-group">
            <input
              v-model="form.contact"
              type="text"
              placeholder="Email / Phone *"
              required
              autocomplete="email"
            />
          </div>
        </div>

        <div class="form-group">
          <textarea
            v-model="form.message"
            placeholder="Message *"
            required
            rows="10"
          ></textarea>
        </div>

        <div class="form-actions">
          <button type="submit" class="send-btn">
            <span>Send</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>

        <p v-if="statusMessage" class="status-message" :class="statusType">
          {{ statusMessage }}
        </p>
      </form>
    </div>

    <!-- Bottom hairline -->
    <div class="bottom-accent"></div>

    <!-- Footer -->
    <footer class="contact-footer">
      <p>Designed &amp; built by Callysta Kalyana</p>
      <p class="footer-year">&copy; {{ year }}</p>
    </footer>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  contact: '',
  message: '',
})

const statusMessage = ref('')
const statusType = ref('success')

const year = new Date().getFullYear()

function handleSubmit() {
  const to = 'kalyanacallysta@gmail.com'
  const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
  const body = encodeURIComponent(
    `Name: ${form.name}\nEmail/Phone: ${form.contact}\n\n${form.message}`
  )

  const mailtoLink = `mailto:${to}?subject=${subject}&body=${body}`
  window.location.href = mailtoLink

  statusType.value = 'success'
  statusMessage.value = 'Opening your email client...'

  setTimeout(() => {
    form.name = ''
    form.contact = ''
    form.message = ''
    statusMessage.value = ''
  }, 3000)
}
</script>

<style scoped>
.section {
  padding: 120px 40px 0;
  position: relative;
  overflow: hidden;
}

.contact-section {
  background: var(--black);
  color: var(--white);
}

.contact-section .container {
  text-align: left;
  position: relative;
  z-index: 1;
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
  font-size: 64px;
  font-weight: 700;
  letter-spacing: -1px;
  color: var(--white);
  margin-bottom: 20px;
  line-height: 1.1;
}

.contact-text {
  color: var(--gray-text);
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 40px;
  max-width: 500px;
}

/* Form */
.contact-form {
  width: 100%;
  max-width: 700px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.form-group {
  width: 100%;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 16px 20px;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--gray-text);
  border-radius: 0;
  color: var(--white);
  font-family: var(--font-sans);
  font-size: 15px;
  transition: all var(--transition);
  outline: none;
}

.form-group textarea {
  resize: vertical;
  min-height: 200px;
  line-height: 1.6;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--gray-text);
}

.form-group input:focus,
.form-group textarea:focus {
  border-bottom-color: var(--white);
}

/* Send button */
.form-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
}

.send-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--white);
  color: var(--black);
  border: 1px solid var(--white);
  padding: 16px 32px;
  border-radius: 0;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all var(--transition);
}

.send-btn:hover {
  background: transparent;
  color: var(--white);
  border-color: var(--white);
  transform: translateY(-2px);
}

.send-btn:active {
  transform: translateY(0);
}

/* Status message */
.status-message {
  margin-top: 16px;
  padding: 12px 18px;
  border-radius: 0;
  font-size: 14px;
  font-weight: 500;
}

.status-message.success {
  background: transparent;
  color: var(--white);
  border: 1px solid var(--white);
}

/* Bottom accent — solid white hairline */
.bottom-accent {
  position: relative;
  height: 1px;
  background: var(--white);
  margin-top: 60px;
  z-index: 1;
}

/* Footer */
.contact-footer {
  padding: 30px 40px;
  text-align: center;
  color: var(--gray-text);
  font-size: 13px;
  background: var(--black);
  position: relative;
  z-index: 1;
  letter-spacing: 0.5px;
}

.footer-year {
  margin-top: 6px;
  font-size: 12px;
}

/* ===== Mobile ===== */
@media (max-width: 600px) {
  .section {
    padding: 70px 24px 0;
  }

  h2 {
    font-size: 40px;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .form-group input,
  .form-group textarea {
    padding: 14px 16px;
    font-size: 14px;
  }

  .form-group textarea {
    min-height: 160px;
  }

  .send-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>