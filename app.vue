<template>
  <Header />
  <HeroSection />
  <Welcome />
  <History />
  <Values />
  <Services />
  <Experience />
  <WorkWithUs />
  <Links />
  <Connect />
  <Footer />
</template>

<script setup>
import Header from "./components/Header.vue";
import HeroSection from "./components/HeroSection.vue";
// и так далее...
</script>

<style>
html,
body {
  font-family: "Poppins", sans-serif;
}

.wrapper {
  max-width: 1092px;
  width: 100%;
  margin: 0 auto;
}

.button {
  border: 1px solid black;
  border-top-left-radius: calc(infinity * 1px);
  border-bottom-left-radius: calc(infinity * 1px);
  border-top-right-radius: calc(infinity * 1px);
  border-bottom-right-radius: calc(infinity * 1px);
  cursor: pointer;
  transition: 0.2s;
}

.button:hover {
  opacity: 0.8;
  transform: scale(1.02);
}
</style>
