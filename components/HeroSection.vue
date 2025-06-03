<template>
  <section class="hero">
    <div class="wrapper overlay">
      <h1>
        Trusted hands <br />
        for future plans
      </h1>
      <p>
        Experienced partner in trust <br />
        setup and asset stewardship
      </p>
      <a
        href="#profile"
        class="button"
        @click.prevent="() => handleLinkClick('#profile')"
      >
        Registered
        <NuxtImg class="button__icon w-[29px]" src="/images/arrow-button.svg" />
      </a>
    </div>
    <!-- <NuxtImg src="/images/banner.jpg" /> -->
  </section>
</template>

<script setup>
import { useSmoothScroll } from "../composables/useSmoothScroll";
const { scrollToSection } = useSmoothScroll();
function handleLinkClick(href) {
  scrollToSection(href, -96);
}
</script>

<style scoped>
.hero {
  background: url("/images/banner.jpg") center/cover no-repeat;
  min-height: 100vh;
  position: relative;
}

.overlay {
  /* background: rgba(0, 0, 0, 0.4); */
  padding-top: 300px;
  padding-bottom: 300px;
}
h1 {
  font-size: 46px;
  color: #081821;
  max-width: 400px;
  line-height: 125%;
  margin-bottom: 20px;
  font-weight: 500;
}
p {
  font-size: 22px;
  max-width: 340px;
  line-height: 125%;
  margin-bottom: 40px;
}
.button {
  padding: 6px 20px;
  display: inline-flex;
  align-items: center;
  gap: 15px;
  font-size: 14px;
}
.button:hover .button__icon {
  transform: scale(0.95);
}
.button__icon {
  margin-right: -15px;
  transition: 0.2s;
}

@media (max-width: 768px) {
  .hero {
    /* background: #eaeaea; */
    background-position: bottom 0;
    background: none;
  }
  .overlay {
    padding-bottom: 250px;
    margin-top: 50px;
    padding-top: 150px;
    background: none;
  }
  .hero:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: -50px;
    left: 0;
    background: url("/images/banner.jpg") center/cover no-repeat;
    background-position: -800px 40px;
    z-index: -1;
    transform: scale(1);
  }
  h1 {
    font-size: 38px;
  }
  p {
    font-size: 20px;
    font-weight: 300;
  }
}
</style>
