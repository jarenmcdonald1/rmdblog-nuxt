<template>
  <main>

    <section class="hidden self-center flex flex-col flex-1 items-center justify-center">
      <h1 class="title text-center font-serif">Nuxt — Tailwind — Netlify CMS</h1>
      <h2 class="subtitle text-center">Boilerplate</h2>
    </section>

    <section class="banner-con mb-8">
      <nuxt-img class="banner-img" src="/img/rachel-texas.jpg" alt="My visit to Texas" />
      <div class="banner-text-con">
        <h2 class="banner-text">Fuel your <span class="banner-text-span">Creativity</span></h2>
      </div>
    </section>

    <section id="whatIs" class="infoCard-con">

      <div class="infoCard-img-con">
        <nuxt-img class="infoCard-img" src="/img/three-breads.jpg" alt="three healthy breads" loading="lazy" fit="cover" />
      </div>

      <div class="infoCard-text-con">
        <div class="infoCard-text">
          <h3>What is RMD Holistics?</h3>
          <p>RMD Holistics focuses on a complete approach to health and wellness. Our Holistic approach assess issues by digging down to the root of the problem to heal what is underneath the surface.</p>
          <p>RMD Holistics is designed to educate people, families, and a special focus on athletes and dancers. I have the experience of the conflict the body feels being pushed without the nutrition your individual body needs and the painful ways the body reacts. The difference between distress and healthy nutrition is optimal energy and strength.</p>
          <p>Combining the demands and effects that dance training has on young dancers with an interactive nutrition workshop will provide dancers, parents and studios with a strong foundation for optimal training and performance.</p>
          <p>Learn how to promote overall health and prevent disease!</p>
        </div>
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