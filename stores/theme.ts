import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    isDark: false,
  }),
  actions: {
    initTheme() {
      if (process.client) {
        const stored = localStorage.getItem("theme");
        if (stored) {
          this.isDark = stored === "dark";
        } else {
          this.isDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
          ).matches;
        }
        this.applyTheme();
      }
    },
    toggleTheme() {
      this.isDark = !this.isDark;
      this.applyTheme();
      if (process.client) {
        localStorage.setItem("theme", this.isDark ? "dark" : "light");
      }
    },
    applyTheme() {
      if (process.client) {
        if (this.isDark) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    },
  },
});
