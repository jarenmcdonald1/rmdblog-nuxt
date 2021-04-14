<template>
  <main>
    <section v-if="posts" class="w-full mx-auto pt-20">
      <h1 class="title sr-only">Blog</h1>
      <PostsIndex class="" post-type="blog" :amount="99" />
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    let posts;
    try {
      posts = await $content("blog").fetch();
    } catch (e) {
      error({ message: "Blog posts not found" });
    }
    return { posts };
  },
}
</script>
