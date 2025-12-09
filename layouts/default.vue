<template>
  <div
    class="min-h-screen flex flex-col transition-colors duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
  >
    <Navbar />
    <main class="flex-grow">
      <slot />
    </main>
    <footer
      class="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto py-8 transition-colors duration-300"
    >
      <div
        class="container mx-auto px-4 text-center text-gray-500 dark:text-gray-400"
      >
        &copy; {{ new Date().getFullYear() }} All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from "~/stores/theme";
import { onMounted } from "vue";

const themeStore = useThemeStore();

onMounted(() => {
  themeStore.initTheme();
});
</script>
