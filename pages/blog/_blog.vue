<template>
  <main>
    <section v-if="post" class="mt-0 dark:bg-main-800">

      <div class="blog-banner-con">
        <div class="banner-img-con">
          <nuxt-img 
            v-if="post.cover"
            class="banner-img" 
            :src="post.cover"
            loading="lazy"
            fit="cover"
          />
        </div>
        <div class="banner-text-con">
          <div class="blog-banner-text">
            <h2>{{ post.title }}</h2>
            <h5>{{ post.description }}</h5>
          </div>
        </div>
      </div>

      <article>
        <h5
          v-if="post.createdAt"
          class="inline-block py-1 px-2 my-2 bg-gray text-white text-sm font-medium rounded-sm whitespace-no-wrap"
        >{{ formatDate(post.createdAt) }}</h5>
        <nuxt-content class="article-body" :document="post" />
      </article>

      <nav class="mb-8" aria-label="go back">
        <router-back class="block" />
      </nav>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("blog", params.blog).fetch();
    } catch (e) {
      error({ message: "Blog post not found" });
    }
    return { post };
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString(process.env.lang) || ''
    }
  }
}
</script>
