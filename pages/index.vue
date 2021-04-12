<template>
  <main>

    <section class="hidden self-center flex flex-col flex-1 items-center justify-center">
      <h1 class="title text-center font-serif">Nuxt — Tailwind — Netlify CMS</h1>
      <h2 class="subtitle text-center">Boilerplate</h2>
    </section>

    <section class="banner-con">
      <nuxt-img class="banner-img" src="/img/rachel-texas.jpg" alt="My visit to Texas" />
      <div class="banner-text-con">
        <h2 class="banner-text">Fuel your <span class="banner-text-span">Creativity</span></h2>
      </div>
    </section>

    <section class="mt-8">
      <h3 class="text-teal-500 dark:text-primary-400 max-w-5xl mx-auto">Latest blog post</h3>
      <posts post-type="blog" :amount="3" />
    </section>
  </main>
</template>

<script>
export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
};
</script>