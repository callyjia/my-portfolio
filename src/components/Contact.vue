<template>
  <section id="contact" class="section contact-section">
    <!-- Animated background -->
    <div class="contact-bg">
      <div class="bg-orb bg-orb-1"></div>
      <div class="bg-orb bg-orb-2"></div>
    </div>

    <div class="container">
      <h2 class="reveal">Contact Me</h2>

      <p class="contact-text reveal reveal-delay-1">
        Got a project waiting to be realized? Let's collaborate and make it happen!
      </p>

      <form
        class="contact-form reveal reveal-delay-2"
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
            <span>SEND</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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

    <!-- Bottom gradient line -->
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
  // Build a mailto link so the user's email client opens with the form filled in
  const to = 'kalyanacallysta@gmail.com'
  const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
  const body = encodeURIComponent(
    `Name: ${form.name}\nEmail/Phone: ${form.contact}\n\n${form.message}`
  )

  const mailtoLink = `mailto:${to}?subject=${subject}&body=${body}`

  // Open the user's mail client
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
  padding: 100px 24px 0;
  position: relative;
  overflow: hidden;
}

.contact-section {
  background: var(--dark);
  color: white;
}

.contact-section .container {
  text-align: left;
  position: relative;
  z-index: 1;
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
  opacity: 0.12;
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
  bottom: 200px;
  right: -50px;
  animation: float 10s ease-in-out infinite reverse;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

h2 {
  font-size: 42px;
  font-weight: 800;
  letter-spacing: -1px;
  color: white;
  margin-bottom: 18px;
}

.contact-text {
  color: #d1d5db;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 35px;
}

/* Form */
.contact-form {
  width: 100%;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin-bottom: 18px;
}

.form-group {
  width: 100%;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 16px 18px;
  background: white;
  border: 1px solid var(--gray-200);
  border-radius: 6px;
  color: var(--gray-900);
  font-family: inherit;
  font-size: 15px;
  transition: all var(--transition);
  outline: none;
}

.form-group textarea {
  resize: vertical;
  min-height: 240px;
  line-height: 1.6;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--gray-400);
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--green);
  box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.15);
}

/* Send button */
.form-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 18px;
}

.send-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: white;
  color: var(--gray-900);
  border: 1px solid var(--gray-300);
  padding: 14px 26px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1.5px;
  cursor: pointer;
  transition: all var(--transition);
}

.send-btn:hover {
  background: var(--gray-50);
  border-color: var(--green);
  color: var(--green);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.send-btn:active {
  transform: translateY(0);
}

/* Status message */
.status-message {
  margin-top: 14px;
  padding: 10px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
}

.status-message.success {
  background: rgba(74, 222, 128, 0.1);
  color: var(--green-accent);
  border: 1px solid rgba(74, 222, 128, 0.3);
}

/* Bottom accent line */
.bottom-accent {
  position: relative;
  height: 3px;
  background: linear-gradient(90deg,
    transparent 0%,
    var(--green-accent) 30%,
    var(--green) 50%,
    var(--green-accent) 70%,
    transparent 100%);
  margin-top: 50px;
  z-index: 1;
}

/* Footer */
.contact-footer {
  padding: 30px 24px;
  text-align: center;
  color: #6b7280;
  font-size: 14px;
  background: var(--dark);
  position: relative;
  z-index: 1;
}

.footer-year {
  margin-top: 4px;
  font-size: 13px;
}

/* ===== Mobile ===== */
@media (max-width: 600px) {
  .section {
    padding: 70px 20px 0;
  }

  h2 {
    font-size: 32px;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .form-group input,
  .form-group textarea {
    padding: 14px 16px;
    font-size: 14px;
  }

  .form-group textarea {
    min-height: 180px;
  }

  .send-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>