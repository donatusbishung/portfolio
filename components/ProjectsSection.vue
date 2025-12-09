<template>
  <section
    id="projects"
    class="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
  >
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
        Featured Projects
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="group relative bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, scale: 1 }"
          :duration="500"
          :delay="index * 100"
        >
          <div
            class="h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center"
          >
            <!-- Placeholder for project image -->
            <span class="text-4xl">🚀</span>
          </div>

          <div class="p-6">
            <h3
              class="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
            >
              {{ project.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4 text-sm">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-gray-700 dark:text-gray-300"
              >
                {{ tag }}
              </span>
            </div>
            <a
              href="#"
              class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              View Project <span class="ml-1">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    title: 'E-Commerce Dashboard',
    description:
      'A comprehensive dashboard for managing products, orders, and analytics using Vue and Tailwind.',
    tags: ['Vue', 'Tailwind', 'Chart.js']
  },
  {
    title: 'Social Media App',
    description: 'A responsive social platform with real-time features and slick transitions.',
    tags: ['React', 'Framer Motion', 'Firebase']
  },
  {
    title: 'Portfolio v1',
    description: 'My first portfolio website showcasing early work and experiments.',
    tags: ['HTML', 'CSS', 'JavaScript']
  }
]
</script>
