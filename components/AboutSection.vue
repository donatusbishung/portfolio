<template>
  <section
    id="about"
    class="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
  >
    <div class="container mx-auto px-4">
      <div
        class="max-w-4xl mx-auto"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible="{ opacity: 1, y: 0, scale: 1 }"
        :duration="500"
      >
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          About Me
        </h2>

        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6 text-lg text-gray-600 dark:text-gray-300">
            <p>
              I'm a passionate Frontend Web Developer with a knack for creating slick, responsive,
              and user-friendly web applications.
            </p>
            <p>
              With expertise in modern frameworks like
              <strong>React</strong> and <strong>Vue</strong>, coupled with powerful styling using
              <strong>Tailwind CSS</strong>, I bring designs to life with clean code and smooth
              animations.
            </p>
            <p>
              I love tackling complex problems and optimizing performance to ensure the best
              possible user experience.
            </p>
          </div>

          <div class="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-xl">
            <h3 class="text-xl font-bold mb-6 text-gray-900 dark:text-white">Tech Stack</h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in stack"
                :key="tech"
                class="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 text-sm font-medium"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stack = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Vue',
  'Nuxt',
  'Next.js',
  'Tailwind CSS',
  'Framer Motion',
  'Pinia',
  'TanStack Query',
  'Git'
]
</script>
