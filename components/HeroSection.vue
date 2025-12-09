<template>
  <section
    id="home"
    class="min-h-[90vh] flex items-center justify-center relative overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300"
  >
    <canvas
      ref="canvasRef"
      class="absolute inset-0 z-0 pointer-events-none"
    ></canvas>

    <!-- Background Elements -->
    <div class="absolute inset-0 z-0">
      <div
        class="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-400/20 rounded-full blur-3xl rounded-blob animate-blob"
      ></div>
      <div
        class="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-400/20 rounded-full blur-3xl rounded-blob animate-blob animation-delay-2000"
      ></div>
    </div>

    <div class="container mx-auto px-4 z-10 text-center">
      <div
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :duration="800"
        class="mb-6"
      >
        <span
          class="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-semibold mb-4"
        >
          Frontend Developer
        </span>
        <h1
          class="text-5xl md:text-7xl font-extrabold tracking-tight mb-2 text-gray-900 dark:text-white"
        >
          Building
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
            >Digital Experiences</span
          >
        </h1>
        <p
          class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-6"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="200"
        >
          Specializing in React, Vue, and modern web technologies to create pixel-perfect,
          performant interfaces.
        </p>
      </div>

      <div
        class="flex justify-center space-x-4 mt-10"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1 }"
        :delay="400"
      >
        <a
          href="#projects"
          class="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg"
        >
          View Work
        </a>
        <a
          href="#contact"
          class="px-8 py-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-transform transform hover:scale-105"
        >
          Contact Me
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useThemeStore } from '~/stores/theme'

const canvasRef = ref<HTMLCanvasElement | null>(null)
const themeStore = useThemeStore()
let animationFrameId: number

onMounted(() => {
  initParticles()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId)
  window.removeEventListener('resize', handleResize)
})

// Re-init particles if theme changes (to update color)
watch(
  () => themeStore.isDark,
  () => {
    // Optional: could just update color variable instead of full re-init
  }
)

const handleResize = () => {
  if (canvasRef.value) {
    canvasRef.value.width = window.innerWidth
    canvasRef.value.height = window.innerHeight
  }
}

const initParticles = () => {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const particles: Particle[] = []
  const particleCount = 80 // Adjust for density

  class Particle {
    x: number
    y: number
    vx: number
    vy: number
    size: number

    constructor() {
      this.x = Math.random() * canvas!.width
      this.y = Math.random() * canvas!.height
      this.vx = (Math.random() - 0.5) * 0.5 // Velocity X
      this.vy = (Math.random() - 0.5) * 0.5 // Velocity Y
      this.size = Math.random() * 2 + 1
    }

    update() {
      this.x += this.vx
      this.y += this.vy

      // Bounce off edges
      if (this.x < 0 || this.x > canvas!.width) this.vx *= -1
      if (this.y < 0 || this.y > canvas!.height) this.vy *= -1
    }

    draw() {
      if (!ctx) return
      ctx.fillStyle = themeStore.isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.3)'
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  // Create particles
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle())
  }

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particles.forEach((particle, index) => {
      particle.update()
      particle.draw()

      // Connect particles
      for (let j = index + 1; j < particles.length; j++) {
        const dx = particle.x - particles[j].x
        const dy = particle.y - particles[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 100) {
          ctx.beginPath()
          ctx.strokeStyle = themeStore.isDark
            ? `rgba(255, 255, 255, ${0.1 - distance / 1000})`
            : `rgba(0, 0, 0, ${0.1 - distance / 1000})`
          ctx.lineWidth = 1
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.stroke()
        }
      }
    })

    animationFrameId = requestAnimationFrame(animate)
  }

  animate()
}
</script>

<style scoped>
.rounded-blob {
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
}
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}
.animate-blob {
  animation: blob 7s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
</style>
