import { onMounted, onUnmounted } from 'vue'

/**
 * Scroll reveal composable using IntersectionObserver.
 * Automatically adds 'is-visible' class to elements with 'reveal' class
 * when they enter the viewport.
 */
export function useScrollReveal() {
  let observer = null

  onMounted(() => {
    // Small delay to ensure DOM is fully rendered
    requestAnimationFrame(() => {
      const elements = document.querySelectorAll('.reveal, .reveal-stagger')

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.12,
          rootMargin: '0px 0px -50px 0px',
        }
      )

      elements.forEach((el) => observer.observe(el))
    })
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  })
}
