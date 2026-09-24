<template>
  <div class="project-page">
    <!-- Hero --> 
    <section class="project-header"> 
      <div class="container"> 
        <p class="project-label">ANDROID APPLICATION</p> 
        
        <h1>Acro POS</h1> 
        
        <p class="subtitle"> 
          A lightweight offline-first Point of Sale application 
          designed to help small store owners manage products, 
          inventory, sales, payments, and order history. 
        </p> 
        
        <div class="header-actions"> 
          <a href="https://github.com/callyjia/Acro" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="github-button" > 
            View on GitHub 
          </a> 
          
          <router-link to="/" class="back-button"> 
            Back to Portfolio 
          </router-link> 
        </div> 
      </div> 
    </section>

    <!-- Overview-->
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
              <p> Generate an amount-aware payment QR code 
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

        <!--Technology-->
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

        <!--Architecture-->
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

            <div class="architecture-arrow">→</div>

            <div class="architecture-item"> 
              <strong>ViewModel</strong> 
              <span>StateFlow</span> 
            </div>

            <div class="architecture-arrow">→</div>

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
            <div class="screenshot-placeholder"> 
              <span>Acro Screenshot 1</span> 
            </div>

            <div class="screenshot-placeholder"> 
              <span>Acro Screenshot 2</span> 
            </div>

            <div class="screenshot-placeholder"> 
              <span>Acro Screenshot 3</span> 
            </div>

            <div class="screenshot-placeholder"> 
              <span>Acro Screenshot 4</span> 
            </div>

          </div>
        </div>

        <!-- Actions-->
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
  background: #f0fdf4; 
  padding: 100px 24px; 
}

.project-label { 
  color: #16a34a; 
  font-weight: 700; 
  letter-spacing: 1px; 
  font-size: 14px; 
}

.project-header h1 { 
  font-size: 52px; 
  color: #111827; 
  margin: 15px 0; 
}

.subtitle { 
  max-width: 760px; 
  color: #6b7280; 
  font-size: 19px; 
  line-height: 1.7; 
}

/* Header buttons */ 

.header-actions { 
  display: flex; 
  gap: 15px; 
  margin-top: 30px; 
}

/* Content */

.project-content { 
  padding: 80px 24px; 
} 

.project-section { 
  margin-bottom: 70px; 
}

.project-section h2 { 
  font-size: 30px; 
  color: #111827; 
  margin-bottom: 20px; 
}

.project-section p { 
  color: #4b5563; 
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
  gap: 20px; 
}

.feature-card { 
  padding: 25px; 
  border: 1px solid #e5e7eb; 
  border-radius: 12px; 
  background: white; 
  transition: 0.2s ease; 
}

.feature-card:hover { 
  transform: translateY(-4px); 
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06); 
}

.feature-icon {
  font-size: 30px; 
  margin-bottom: 15px; 
}

.feature-card h3 { 
  margin: 0 0 10px; 
  color: #111827; 
}

.feature-card p { 
  font-size: 15px; 
  margin: 0; 
}

/* Technologies */ 

.technology-list { 
  display: flex; 
  flex-wrap: wrap; 
  gap: 10px; 
}

.technology-list span { 
  background: #dcfce7; 
  color: #166534; 
  padding: 8px 14px; 
  border-radius: 6px; 
  font-size: 14px; 
  font-weight: 600; 
}

/* Architecture */ 

.architecture { 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  gap: 15px; padding: 35px; 
  background: #f9fafb; 
  border-radius: 12px; 
}

.architecture-item { 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  gap: 8px; 
  padding: 20px; 
  min-width: 170px; 
  background: white; 
  border: 1px solid #e5e7eb; 
  border-radius: 10px; 
}

.architecture-item strong { 
  color: #111827; 
}

.architecture-item span { 
  color: #6b7280; 
  font-size: 14px; 
}

.architecture-arrow { 
  font-size: 28px; 
  color: #16a34a; 
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
  padding: 25px; 
  border: 1px solid #e5e7eb; 
  border-radius: 10px; 
}

.number { 
  color: #16a34a; 
  font-size: 18px; 
  font-weight: 700; 
}

.module h3 { 
  margin: 0 0 8px; 
  color: #111827; 
}

.module p { 
  font-size: 15px; 
  margin: 0; 
}

/* Screenshots */ 

.screenshots { 
  display: grid; 
  grid-template-columns: repeat(2, 1fr); 
  gap: 20px; 
}

.screenshot-placeholder { 
  height: 420px; 
  background: #f3f4f6; 
  border: 1px dashed #d1d5db; 
  border-radius: 12px; 
  
  display: flex; 
  align-items: center; 
  justify-content: center; 
  
  color: #6b7280; 
  font-weight: 600; 
}

/* Buttons */ 

.github-button, 
.back-button { 
  padding: 13px 22px; 
  border-radius: 8px; 
  text-decoration: none; 
  font-weight: 600; 
}

.github-button { 
  background: #16a34a; 
  color: white; 
}

.github-button:hover { 
  background: #15803d; 
} 

.back-button { 
  border: 1px solid #d1d5db; 
  color: #374151; 
  background: white; 
}

.back-button:hover { 
  border-color: #16a34a; 
  color: #16a34a; 
} 

.project-actions { 
  display: flex; 
  gap: 15px; 
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
    font-size: 38px; 
  } 
  
  .feature-grid { 
    grid-template-columns: 1fr; 
  } 
  
  .screenshots { 
    grid-template-columns: 1fr; 
  } 
  
  .header-actions, 
  .project-actions { 
    flex-direction: column; 
  } 
  
  .github-button, 
  .back-button { 
    text-align: center; 
  } 
}

</style>
  
  