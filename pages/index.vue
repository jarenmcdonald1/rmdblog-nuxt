<template>
  <main>
    <section class="banner-con">
      <nuxt-img class="banner-img" src="/img/rachel-texas.jpg" alt="My visit to Texas" />
      <div class="banner-text-con">
        <div class="banner-text">
          <h2>Fuel your <span class="text-main-200">Creativity</span></h2>
          <nuxt-link class="mt-4 sm:mt-6 banner-btn" to="/#whatIs" title="learn more">
            <svg
              class="fill-current h-16 w-16 banner-btn-arrow"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 295.99 296.82"
            >
              <defs>
                <style>
                  .cls-1 {
                    fill: #fff;
                  }
                </style>
              </defs>
              <g id="_35FkUW.tif" data-name="35FkUW.tif">
                <path
                  class="cls-1"
                  d="M146.81,296.81C70.14,297.79,0,233.13,0,148.62,0,68.9,63.07.52,148.83,0,229.33-.48,296.15,67.47,296,148.75,295.83,231,229.51,296.81,146.81,296.81Zm.1-17c74-.53,132.62-59.1,132-132-.56-71.64-59.54-131-130-130.77C75.55,17.27,16.34,76.6,17,149.3,17.69,221.23,76.48,280.3,146.91,279.79Z"
                />
                <path
                  class="cls-1"
                  d="M147.47,184.7c2.11-2,3.44-3.23,4.71-4.5Q181.34,151,210.5,121.86c5.32-5.31,12.77-4.16,15,2.22,1.45,4.19-.42,7.33-3.35,10.25Q198.76,157.63,175.5,181c-6.71,6.72-13.4,13.46-20.14,20.16-5.44,5.41-9.4,5.38-14.91-.13q-33-33.08-66-66.18c-5.26-5.27-5.81-10.32-1.63-14.26,3.79-3.57,8.75-2.72,13.9,2.44q28.46,28.46,56.87,57C144.86,181.3,145.92,182.82,147.47,184.7Z"
                />
              </g>
            </svg>
          </nuxt-link>
        </div>
      </div>
    </section>

    <section id="aboutMe" class="infoCard-con about-con">
      <div class="infoCard-img-con">
        <nuxt-img
          class="infoCard-img"
          src="/img/profile-pic.jpg"
          alt="what a long sweet trip its been"
          loading="lazy"
          fit="cover"
        />
      </div>

      <div class="infoCard-text-con">
        <div class="infoCard-text">
          <h3>Hi, I'm Rachel (CNP, Hons)</h3>
          <h4>I'm a Holistic Nutritionist, Professional Dancer, and Instructor/Choreographer</h4>
          <p>
            My whole life I have been interested in health and wellness. The passion was handed down from my mom who
            would send me to school with Chlorophyll water (thanks, mom!). While I was completing my Professional
            Intense Dance Training program I began to experience digestive issues. I would curl up into a little ball
            with intense abdominal pain! With no clear answer, I tried to eliminate some known allergens. I noticed an
            immediate improvement in heightened energy levels and stronger body. This allowed me to push my body
            technically and physically which took my performance to the next level.
          </p>
          <p>
            From there my passion for nutrition took the centre stage. I decided to attend The Institute of Holistic
            Nutrition where I would deep dive into all things health-related. I graduated and gained my Certified
            Nutritional Practitioner Certification (CNP, Hons.)
          </p>
        </div>
      </div>
    </section>

    <div class="body-wrap">
      <section id="whatIs" class="infoCard-con">
        <div class="infoCard-img-con">
          <nuxt-img
            class="infoCard-img"
            src="/img/three-breads.jpg"
            alt="three healthy breads"
            loading="lazy"
            fit="cover"
          />
        </div>

        <div class="infoCard-text-con">
          <div class="infoCard-text">
            <h3>What is RMD Holistics?</h3>
            <p>
              RMD Holistics focuses on a complete approach to health and wellness. Our Holistic approach assess issues
              by digging down to the root of the problem to heal what is underneath the surface.
            </p>
            <p>
              RMD Holistics is designed to educate people, families, and a special focus on athletes and dancers. I have
              the experience of the conflict the body feels being pushed without the nutrition your individual body
              needs and the painful ways the body reacts. The difference between distress and healthy nutrition is
              optimal energy and strength.
            </p>
            <p>
              Combining the demands and effects that dance training has on young dancers with an interactive nutrition
              workshop will provide dancers, parents and studios with a strong foundation for optimal training and
              performance.
            </p>
            <p>Learn how to promote overall health and prevent disease!</p>
          </div>
        </div>
      </section>

      <section id="whoWork" class="infoCard-con reversed">
        <div class="infoCard-img-con">
          <nuxt-img
            class="infoCard-img"
            src="/img/grain-bowl.jpg"
            alt="breakfast grain bowl"
            loading="lazy"
            fit="cover"
          />
        </div>

        <div class="infoCard-text-con">
          <div class="infoCard-text">
            <h3>Who we work with</h3>
            <ul>
              <li>Dance Studios</li>
              <li>Dance Companies</li>
              <li>Athletes</li>
              <li>Individual Dancers</li>
              <li>Families & Individuals</li>
              <li>Everyone</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="whatDoes" class="infoCard-con">
        <div class="infoCard-img-con">
          <nuxt-img
            class="infoCard-img"
            src="/img/sliced-fruit.jpg"
            alt="colourful sliced fruits"
            loading="lazy"
            fit="cover"
          />
        </div>

        <div class="infoCard-text-con">
          <div class="infoCard-text">
            <h3>What does a Holistic Nutritionist do?</h3>
            <p>
              A Holistic Nutritionist works with dancers, athletes, individuals, families, groups, and everyone on ways
              to improve nutrition, energy, strength and promote health and wellness and prevent disease.
            </p>
            <p>This is achieved by offering the following services:</p>
            <ul>
              <li>Diet and Lifestyle Evaluation</li>
              <li>Teach Healthy Eating</li>
              <li>Grocery Store Shopping Tours</li>
              <li>Family Meal Planning</li>
              <li>Suggestions for Improving Wellness</li>
              <li>Suggestions for Managing Stress</li>
              <li>Meal Plans for improved mood, weight and strength</li>
              <li>Nutritional Speaker and Workshop Services</li>
              <li>Personal Client Consultations</li>
              <li>Advise Clients on Supplementation to aid increased wellness</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="mt-8" id="indexBlogCon">
        <h3
          class="mb-4 text-4xl font-serif uppercase leading-8 text-main-600 dark:text-main-800 md:text-5xl md:leading-tight"
        >
          Latest blog posts:
        </h3>
        <posts post-type="blog" :amount="3" />
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
    }
  },
}
</script>