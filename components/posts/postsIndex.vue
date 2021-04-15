<template>
  <div v-if="posts.length > 0" class="posts-main-con">
    <div
      v-for="(post, index) in posts"
      :key="index"
      class="posts-con"
    >
      <nuxt-link
        :to="`${postType}/${post.slug}`"
        class="post-link post--clickable"
        :title="post.title"
      >
        <template v-if="postType === 'projects'">
          <span class="flex-1">
            <h6 class="inline-block py-1 px-2 mr-1 bg-gray text-white text-sm font-medium rounded-sm">{{ post.category }}</h6>
            <h3 class="card-title">{{ post.title }}</h3>
            <p class="mt-2">{{ post.description }}</p>
          </span>
          <img
            v-if="post.cover"
            class="cover-image"
            :src="post.cover"
          >
        </template>

        <template v-else>
          <div class="post-con">
            <div class="post-text-con">
              <div class="post-text">
              <h3 class="card-title">{{ post.title }}</h3>
              <h6
                v-if="post.createdAt"
                class="leading-tight font-normal text-sm"
              >{{ formatDate(post.date) }}</h6>
              <p class="pb-6 leading-tight">{{ post.description }}</p>
              <nuxt-link :to="`${postType}/${post.slug}`" class="post-btn">Read more</nuxt-link>
              </div>
            </div>
            <div v-if="post.cover" class="post-img-con">
              <nuxt-img
                v-if="post.cover"
                :src="post.cover" 
                class="post-img"
                loading="lazy"
                :alt="post.title"
              />
            </div>
          </div>
        </template>
      </nuxt-link>
    </div>
  </div>

  <div v-else-if="loading" class="cards">
    <div v-for="placeholder in placeholderClasses" :key="placeholder.id" class="card">
      <content-placeholders :rounded="true" :class="placeholder">
        <content-placeholders-heading />
      </content-placeholders>
    </div>
  </div>
  <p v-else class="max-w-5xl mx-auto">
    {{ amount > 1 ? 'Posts not found' : 'Post not found' }}
  </p>
</template>

<script>
  export default {
    name: 'PostsIndex',
    props: {
      postType: {
        type: String,
        default: 'blog',
        validator: (val) => ['blog', 'projects'].includes(val),
      },
      amount: { // ? https://content.nuxtjs.org/fetching#limitn
        type: Number,
        default: 10,
        validator: (val) => val >= 0 && val < 100,
      },
      sortBy: { 
        // ? https://content.nuxtjs.org/fetching#sortbykey-direction
        type: Object,
        default: () => ({
          key: 'date',
          direction: 'desc' // you probably want 'asc' here
        }),
        validator: (obj) => typeof obj.key === 'string' && typeof obj.direction === 'string',
      }
    },
    data() {
      return {
        posts: [],
        loading: true,
      }
    },
    computed: {
      placeholderClasses() {
        const classes = ['w-full','w-2/3','w-5/6'];
        return [...Array.from({ length: this.amount }, (v, i) => classes[i % classes.length])]; // repeats classes after one another
      }
    },
    async mounted() {
      this.loading = true;
      this.posts = await this.fetchPosts();
      this.loading = false;
    },
    methods: {
      formatDate(dateString) {
        const date = new Date(dateString)
        return date.toLocaleDateString(process.env.lang) || ''
      },
      async fetchPosts(
          postType = this.postType,
          amount = this.amount,
          sortBy = this.sortBy,
        ) {
        return this.$content(postType)
          .sortBy(sortBy.key, sortBy.direction)
          .limit(amount)
          .fetch()
          .catch((err) => {
            error({ statusCode: 404, message: amount > 1 ? 'Posts not found' : 'Post not found' })
          });
      }
    },
  }
</script>
