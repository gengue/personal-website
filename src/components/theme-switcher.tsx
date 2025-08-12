"use client";

import { useTheme } from "@/lib/theme-context";
import { useState, useEffect } from "react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <button className="w-7 h-7 sm:w-9 sm:h-9 border border-border rounded bg-card opacity-50">
        <span className="sr-only">Loading theme...</span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 border border-border rounded bg-card hover:bg-muted transition-colors terminal-glow"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        // Moon icon for switching to dark mode
        <svg
          className="w-3 h-3 sm:w-4 sm:h-4 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      ) : (
        // Sun icon for switching to light mode
        <svg
          className="w-3 h-3 sm:w-4 sm:h-4 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      )}
    </button>
  );
}