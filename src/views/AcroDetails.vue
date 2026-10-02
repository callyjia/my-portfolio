<template>
  <div class="project-page">
    <!-- Hero -->
    <section class="project-header">
      <div class="container">
        <p class="project-label">Android Application</p>

        <h1>POS Management System</h1>

        <p class="subtitle">
          A lightweight offline-first Point of Sale application
          designed to help small store owners manage products,
          inventory, sales, payments, and order history.
        </p>
      </div>
    </section>

    <!-- Overview -->
    <section class="project-content">
      <div class="container">

        <div class="project-section">
          <h2>Project Overview</h2>

          <p>
            Acro is a mobile Point of Sale (POS) management system
            developed for convenience store owners. The application
            focuses on offline-first operation, allowing store data
            to be stored locally on the Android device.
          </p>

          <p>
            The system provides product management, inventory tracking,
            shopping cart and checkout functionality, payment QR code
            generation, order history, sales analytics, and application
            settings.
          </p>
        </div>

        <!-- Key Features -->
        <div class="project-section">
          <h2>Key Features</h2>

          <div class="feature-grid">

            <div class="feature-card">
              <div class="feature-icon">📦</div>
              <h3>Product Management</h3>
              <p>
                Add, edit, delete, search, and manage products
                together with stock quantities and product images.
              </p>
            </div>

            <div class="feature-card">
              <div class="feature-icon">🛒</div>
              <h3>Cart & Transactions</h3>
              <p>
                Add products to the cart, manage quantities,
                calculate totals, and process customer orders.
              </p>
            </div>

            <div class="feature-card">
              <div class="feature-icon">📷</div>
              <h3>Barcode Scanning</h3>
              <p>
                Use the device camera to scan product barcodes
                during product management and ordering.
              </p>
            </div>

            <div class="feature-card">
              <div class="feature-icon">💳</div>
              <h3>Payment QR</h3>
              <p>Generate an amount-aware payment QR code
                for checkout.
              </p>
            </div>

            <div class="feature-card">
              <div class="feature-icon">📊</div>
              <h3>Sales Analytics</h3>
              <p>
                Analyze revenue, order statistics, average order
                value, and inventory statistics.
              </p>
            </div>

            <div class="feature-card">
              <div class="feature-icon">📋</div>
              <h3>Order History</h3>
              <p>
                Review previous orders and inspect detailed
                transaction information.
              </p>
            </div>

          </div>
        </div>

        <!-- Technology -->
        <div class="project-section">
          <h2>Technologies</h2>
          <div class="technology-list">
            <span>Kotlin</span>
            <span>Jetpack Compose</span>
            <span>Material 3</span>
            <span>Room Database</span>
            <span>ViewModel</span>
            <span>StateFlow</span>
            <span>CameraX</span>
            <span>ML Kit</span>
            <span>ZXing</span>
            <span>Coil</span>
          </div>
        </div>

        <!-- Architecture -->
        <div class="project-section">
          <h2>Architecture</h2>
          <p>
            The application follows the MVVM architecture pattern.
            The project separates database, ViewModel, analytics,
            UI screens, navigation, and theme-related functionality.
          </p>

          <div class="architecture">
            <div class="architecture-item">
              <strong>UI Layer</strong>
              <span>Jetpack Compose</span>
            </div>

            <div class="architecture-arrow">&rarr;</div>

            <div class="architecture-item">
              <strong>ViewModel</strong>
              <span>StateFlow</span>
            </div>

            <div class="architecture-arrow">&rarr;</div>

            <div class="architecture-item">
              <strong>Data Layer</strong>
              <span>Room Database</span>
            </div>
          </div>
        </div>

        <!-- Main Modules -->
        <div class="project-section">
          <h2>Main Modules</h2>

          <div class="module-list">
            <div class="module">
              <span class="number">01</span>
              <div>
                <h3>Dashboard</h3>
                <p>
                  Displays sales information and shortcuts
                  for daily store operations.
                </p>
              </div>
            </div>

            <div class="module">
              <span class="number">02</span>
              <div>
                <h3>Product Management</h3>
                <p>
                  Provides product creation, editing, deletion,
                  search, image capture, and stock management.
                </p>
              </div>
            </div>

            <div class="module">
              <span class="number">03</span>
              <div>
                <h3>Cart & Checkout</h3>
                <p>
                  Handles shopping cart operations, quantity changes,
                  total calculation, and checkout.
                </p>
              </div>
            </div>

            <div class="module">
              <span class="number">04</span>
              <div>
                <h3>Order History</h3>
                <p>
                  Provides access to previous orders and
                  detailed transaction information.
                </p>
              </div>
            </div>

            <div class="module">
              <span class="number">05</span>
              <div>
                <h3>Analytics</h3>
                <p>
                  Provides revenue, order, and inventory statistics
                  for store management.
                </p>
              </div>
            </div>

            <div class="module">
              <span class="number">06</span>
              <div>
                <h3>Settings</h3>
                <p>
                  Supports currency selection, UI scaling,
                  dark/light mode, and application information.
                </p>
              </div>
            </div>

          </div>
        </div>

        <!-- Screenshots -->
        <div class="project-section">
          <h2>Project Screenshots</h2>

          <p class="section-description">
            Screenshots of the Acro POS mobile application.
          </p>

          <div class="screenshots">

            <figure class="screenshot-item">
              <img :src="acroAnalytics" alt="Acro Analytics dashboard showing revenue and order statistics" />
              <figcaption>Analytics Dashboard</figcaption>
            </figure>

            <figure class="screenshot-item">
              <img :src="acroProducts" alt="Acro product grid with snack items and stock counts" />
              <figcaption>Product List</figcaption>
            </figure>

            <figure class="screenshot-item">
              <img :src="acroPaymentQr" alt="Acro payment QR code screen" />
              <figcaption>Payment QR</figcaption>
            </figure>

            <figure class="screenshot-item">
              <img :src="acroOrders" alt="Acro order history showing previous orders" />
              <figcaption>Order History</figcaption>
            </figure>

          </div>
        </div>

        <!-- Actions -->
        <div class="project-actions">
          <a
            href="https://github.com/callyjia/Acro"
            target="_blank"
            rel="noopener noreferrer"
            class="github-button"
          >
          View Source Code
          </a>

          <router-link to="/" class="back-button">
            Back to Portfolio
          </router-link>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'

import acroAnalytics from '../assets/acro-analytics.png'
import acroPaymentQr from '../assets/acro-payment-qr.png'
import acroProducts from '../assets/acro-products.png'
import acroOrders from '../assets/acro-orders.png'

useScrollReveal()
</script>

<style scoped>
.project-page {
  padding-top: 70px;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

/* Header */
.project-header {
  background: var(--white);
  padding: 120px 40px;
  border-bottom: 1px solid var(--black);
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
  font-size: 72px;
  color: var(--black);
  margin: 16px 0;
  font-weight: 700;
  letter-spacing: -1.5px;
  line-height: 1.05;
}

.subtitle {
  max-width: 760px;
  color: var(--gray-text);
  font-size: 18px;
  line-height: 1.8;
}

/* Content */
.project-content {
  padding: 80px 40px;
}

.project-section {
  margin-bottom: 70px;
}

.project-section h2 {
  font-family: var(--font-serif);
  font-size: 36px;
  color: var(--black);
  margin-bottom: 24px;
  font-weight: 600;
  letter-spacing: -0.5px;
}

.project-section p {
  color: var(--gray-text);
  font-size: 17px;
  line-height: 1.8;
}

.section-description {
  margin-top: -10px;
}

/* Features */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.feature-card {
  padding: 32px 28px;
  border: 1px solid var(--gray-border);
  border-radius: 0;
  background: var(--white);
  transition: all var(--transition);
}

.feature-card:hover {
  transform: translateY(-4px);
  border-color: var(--black);
}

.feature-icon {
  font-size: 28px;
  margin-bottom: 16px;
}

.feature-card h3 {
  margin: 0 0 10px;
  color: var(--black);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.feature-card p {
  font-size: 14px;
  margin: 0;
  line-height: 1.7;
}

/* Technologies */
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
}

/* Architecture */
.architecture {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 40px;
  background: var(--gray-bg);
  border-radius: 0;
}

.architecture-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 24px;
  min-width: 170px;
  background: var(--white);
  border: 1px solid var(--gray-border);
  border-radius: 0;
}

.architecture-item strong {
  color: var(--black);
  font-size: 15px;
  letter-spacing: 0.5px;
}

.architecture-item span {
  color: var(--gray-text);
  font-size: 13px;
}

.architecture-arrow {
  font-size: 24px;
  color: var(--black);
}

/* Modules */
.module-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.module {
  display: flex;
  gap: 20px;
  padding: 28px;
  border: 1px solid var(--gray-border);
  border-radius: 0;
  transition: all var(--transition);
}

.module:hover {
  border-color: var(--black);
}

.number {
  color: var(--black);
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 20px;
  font-weight: 600;
}

.module h3 {
  margin: 0 0 8px;
  color: var(--black);
  font-size: 16px;
  font-weight: 600;
}

.module p {
  font-size: 14px;
  margin: 0;
  line-height: 1.7;
}

/* Screenshots */
.screenshots {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.screenshot-item {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 20px;
  border: 1px solid var(--gray-border);
  border-radius: 0;
  background: var(--white);
  transition: all var(--transition);
}

.screenshot-item:hover {
  transform: translateY(-4px);
  border-color: var(--black);
}

.screenshot-item img {
  display: block;
  width: 100%;
  max-width: 260px;
  height: auto;
  border-radius: 0;
  border: 1px solid var(--gray-border);
}

.screenshot-item figcaption {
  font-size: 13px;
  font-weight: 500;
  color: var(--black);
  text-align: center;
  letter-spacing: 1px;
}

/* Buttons */
.github-button,
.back-button {
  padding: 14px 28px;
  border-radius: 0;
  text-decoration: none;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  transition: all var(--transition);
}

.github-button {
  background: var(--black);
  color: var(--white);
  border: 1px solid var(--black);
}

.github-button:hover {
  background: var(--white);
  color: var(--black);
  border-color: var(--black);
}

.back-button {
  border: 1px solid var(--gray-border);
  color: var(--black);
  background: transparent;
}

.back-button:hover {
  border-color: var(--black);
  background: var(--white);
}

.project-actions {
  display: flex;
  gap: 16px;
}

/* Mobile */
@media (max-width: 800px) {
  .feature-grid {
    grid-template-columns: 1fr 1fr;
  }

  .module-list {
    grid-template-columns: 1fr;
  }

  .architecture {
    flex-direction: column;
  }

  .architecture-arrow {
    transform: rotate(90deg);
  }
}

@media (max-width: 600px) {
  .project-header h1 {
    font-size: 44px;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }

  .screenshots {
    grid-template-columns: 1fr;
  }

  .project-actions {
    flex-direction: column;
  }

  .github-button,
  .back-button {
    text-align: center;
    justify-content: center;
  }

  .project-content {
    padding: 50px 24px;
  }

  .project-header {
    padding: 80px 24px;
  }
}
</style>