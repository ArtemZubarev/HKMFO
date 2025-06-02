<template>
  <section class="hero">
    <div class="wrapper overlay">
      <h1>Trusted hands for future plans</h1>
      <p>Experienced partner in trust setup and asset stewardship</p>
      <button class="button">
        Registered
        <NuxtImg class="button__icon w-[29px]" src="/images/arrow-button.svg" />
      </button>
    </div>
    <!-- <NuxtImg src="/images/banner.jpg" /> -->
  </section>
</template>

<script setup></script>

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
  display: flex;
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
</style>
