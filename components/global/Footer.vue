<template>
  <div class="w-full">
    <footer class="footer-main-con">
      <div class="footer-nav-con">
        <nuxt-link class="nav-links" to="/#aboutMe">About</nuxt-link>
        <nuxt-link class="nav-links" to="/#whatIs">Services</nuxt-link>
        <nuxt-link class="nav-links" to="/blog">Blog</nuxt-link>
        <nuxt-link class="nav-links" to="/contact">Contact</nuxt-link>
      </div>

      <div class="hidden">
        <a href="#" title="...">Fb</a>
      </div>
    </footer>

    <div class="copyright-con">
      <p class="copyright-text">
        &copy; {{ new Date().getFullYear() }}
        <a class="copyright-link" href="https://www.jaren.ca" title="Visit Jaren's Site">Jaren McDonald</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>

<style lang="postcss" scoped>
.footer-main-con {
  @apply mt-0 w-full py-6 px-3 bg-main-800;
}

.footer-nav-con {
  @apply flex flex-col items-center justify-center;

  & .nav-links {
    @apply px-3 py-2 rounded-lg mb-3 bg-transparent text-center text-lg text-main-200;

    &:hover {
      @apply text-white bg-main-700;
    }
    &:last-child {
      @apply mb-0;
    }
  }
}

.copyright-con {
  @apply w-full py-5 bg-main-900;

  & .copyright-text {
    @apply text-center text-main-300;
  }
  & .copyright-link {
    @apply fill-current text-main-300 no-underline;
    &:hover {
      @apply text-white;
    }
  }
}

@screen sm {
  .footer-nav-con {
    @apply flex-row;

    & .nav-links {
      @apply mb-0 mx-2 text-base;
    }
  }
}
</style>
