<template>
  <main>

    <div class="body-wrap mt-16 py-8 flex justify-center items-center">

      <section id="" class="contact-con">

        <h3>Let's Chat</h3>
        <p>Ask away! Over tea, kale chips, or smoothie bowls...your choice. If you're looking for a way to live a healthier lifestyle, start with an email and we'll set up a chat. You're one decision away from taking the next step.</p>
        <div class="contact-btns-con pt-4">
          <a class="btns" href="mailto:hello@rmdholistics.com">
            <span>hello@rmdholistics.com</span>
          </a>
          <a class="btns" href="https://www.instagram.com/rmdholistics">
            <span>Follow me on Instagram</span>
          </a>
        </div>

      </section>

    </div>

    <section class="index-sub-con hidden">
      <div class="sub-text-con">
        <div class="sub-text">
          <h4>Subscribe to my Newsletter!</h4>
        </div>
      </div>
      <div class="index-sub hidden">
        <div class="sub-input"></div>
        <div class="sub-submit"></div>
      </div>
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