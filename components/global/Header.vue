<template>

  <header class="header-main-con sm:flex sm:justify-between sm:items-center">
    <div class="header-con">

      <div>
        <nuxt-link to="/">
          <span class="sr-only">RMD Holistics</span>
          <nuxt-img class="logo-img" src="/img/rmd-logo.png" alt="rmd holistics logo" /> 
        </nuxt-link>
      </div>

      <div class="sm:hidden">
        <button @click="isOpen = !isOpen" class="nav-btn" type="button">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
              <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
            </svg>
          </svg>
        </button>
      </div>
      
    </div>

    <nav :class="isOpen ? 'block' : 'hidden'" class="nav-con sm:flex">
      <nuxt-link class="nav-links" to="#">About</nuxt-link>
      <nuxt-link class="nav-links" to="#">Services</nuxt-link>
      <nuxt-link class="nav-links" to="#">Contact</nuxt-link>
    </nav>

  </header>

</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isOpen: false,
    }
  }
}
</script>

<style lang="postcss" scoped>

.header-main-con {
  background-color: rgba(255,255,255,0.85);
  @apply fixed top-0 w-full py-2 px-3;
}

.logo-img {
  @apply w-auto h-24;
}

.header-con {
  @apply w-full flex flex-no-wrap items-center justify-between;
}

.nav-btn {
  @apply px-2 py-2 text-gray-700 transition duration-200 ease-in-out rounded border border-gray-600;

  &:hover {
    @apply text-white bg-teal-400 border-teal-400;
  }
}

.nav-con {
  @apply py-3 px-4 bg-transparent items-center justify-center;
}

.nav-links {
  @apply block mb-3 px-3 py-2 text-teal-500 text-center text-lg font-bold bg-gray-200 rounded;

  &:hover {
    @apply bg-teal-500 text-white;
  }
}

@screen sm {
  .nav-con {
    @apply flex;
  }

  .nav-links {
    @apply mb-0 mx-1 px-3 py-2 text-base font-light text-gray-600 bg-transparent;

    &:hover {
      @apply bg-gray-300 text-gray-900;
    }
  }
}

.light-mode {
  & .header-main-con {
    background-color: rgba(255,255,255,0.75);
  }
}

</style>
