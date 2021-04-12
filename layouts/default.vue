<template>
  <div class="wrapper">
    <div class="spacing"></div>
    <Header />
    <nuxt />
    <ColorModePicker />
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>