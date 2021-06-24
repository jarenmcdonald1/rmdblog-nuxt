/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    darkSelector: '.dark-mode',
    extend: {
      fontFamily: {
        sans: ['Raleway', ...defaultTheme.fontFamily.sans],
        serif: ['Playfair Display', ...defaultTheme.fontFamily.serif],
        accent: ['Roboto Slab', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        gray: {
          '50': 'var(--color-gray-50)',      // #F9FAFB
          '100': 'var(--color-gray-100)',    // #f8f9fa
          '200': 'var(--color-gray-200)',    // #e9ecef
          '300': 'var(--color-gray-300)',    // #dee2e6
          '400': 'var(--color-gray-400)',    // #ced4da
          default: 'var(--color-gray)',      // #adb5bd
          '600': 'var(--color-gray-600)',    // #6c757d
          '700': 'var(--color-gray-700)',    // #495057
          '800': 'var(--color-gray-800)',    // #343a40
          '900': 'var(--color-gray-900)',    // #212529
        },
        primary: {
          '100': 'var(--color-primary-100)', // #ECEFF5
          '200': 'var(--color-primary-200)', // #C3CBDC
          '300': 'var(--color-primary-300)', // #9BA8C2
          '400': 'var(--color-primary-400)', // #7686A6
          default: 'var(--color-primary)',   // #526488
          '600': 'var(--color-primary-600)', // #3E4F70
          '700': 'var(--color-primary-700)', // #2C3A57
          '800': 'var(--color-primary-800)', // #1C263B
          '900': 'var(--color-primary-900)', // #0D131E
        },
        main: {
          '100': 'var(--color-main-100)',
          '200': 'var(--color-main-200)',
          '300': 'var(--color-main-300)',
          '400': 'var(--color-main-400)',
          '500': 'var(--color-main-500)',
          '600': 'var(--color-main-600)',
          '700': 'var(--color-main-700)',
          '800': 'var(--color-main-800)',
          '900': 'var(--color-main-900)',
          default: 'var(--color-main-500)',
        },
        pink: {
          '100': 'var(--color-pink-100)',
          '200': 'var(--color-pink-200)',
          '300': 'var(--color-pink-300)',
          '400': 'var(--color-pink-400)',
          '500': 'var(--color-pink-500)',
          '600': 'var(--color-pink-600)',
          '700': 'var(--color-pink-700)',
          '800': 'var(--color-pink-800)',
          default: 'var(--color-pink-500)',
        },
      },
      screens: {
        'xs': '480px', // Added xs
        // 'sm': '640px',
        // 'md': '768px',
        // 'lg': '1024px',
        // 'xl': '1280px',
      },
    },
  },
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'dark-group-hover'],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
    textColor: ['dark', 'dark-hover', 'dark-active']
  },
  plugins: [require('tailwindcss-dark-mode')()],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.js', 'nuxt.config.js'],
    options: {
      // Set whitelist in nuxt.config.js -> purgeCSS.whitelist: ['dark-mode', 'light-mode', 'btn', 'icon']
    }
  }
}
