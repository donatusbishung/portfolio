<template>
  <nav
    class="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a
            href="/"
            class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:from-blue-500 hover:to-indigo-500 transition-colors cursor-pointer"
            @click.prevent="scrollTo('home')"
          >
            Portfolio
          </a>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <template
              v-for="link in links"
              :key="link.id"
            >
              <a
                :href="link.to"
                class="relative px-3 py-2 rounded-md text-sm font-medium transition-colors group cursor-pointer"
                :class="[
                  activeSection === link.id
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                ]"
                @click.prevent="scrollTo(link.id)"
              >
                {{ link.name }}
                <!-- Active Dot -->
                <span
                  v-if="activeSection === link.id"
                  class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"
                  v-motion
                  :initial="{ opacity: 0, scale: 0 }"
                  :enter="{ opacity: 1, scale: 1 }"
                ></span>
              </a>
            </template>
          </div>
        </div>

        <!-- Theme Toggle -->
        <div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import useScrollToSection from '~/composables/useScrollTo'

const { scrollTo } = useScrollToSection()
const activeSection = ref('home')

const links = [
  { name: 'Home', to: '/', id: 'home' },
  { name: 'About', to: '/#about', id: 'about' },
  { name: 'Projects', to: '/#projects', id: 'projects' },
  { name: 'Contact', to: '/#contact', id: 'contact' }
]

let observer: IntersectionObserver | null = null

onMounted(() => {
  const options = {
    root: null,
    rootMargin: '-20% 0px -35% 0px', // Adjust these margins to trigger earlier/later
    threshold: 0.1
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  }, options)

  links.forEach((link) => {
    const section = document.getElementById(link.id)
    if (section) observer?.observe(section)
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>
