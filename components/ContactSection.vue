<template>
  <section
    id="contact"
    class="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
  >
    <div class="container mx-auto px-4 text-center">
      <div
        class="max-w-2xl mx-auto"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible="{ opacity: 1, y: 0, scale: 1 }"
        :duration="800"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          Get In Touch
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-12">
          Interested in working together? Feel free to reach out for collaborations or just a
          friendly hello.
        </p>

        <a
          href="mailto:hello@example.com"
          class="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          Say Hello
        </a>

        <div class="mt-12 flex justify-center items-center space-x-6">
          <UIcon
            name="i-mdi-github"
            size="32"
          />
          <UIcon
            name="i-mdi-linkedin"
            size="32"
          />
          <UIcon
            name="i-pajamas-twitter"
            size="28"
          />
        </div>
      </div>
    </div>
  </section>
</template>
