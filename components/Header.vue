<template>
  <header id="home">
    <nav class="menu-container flex wrapper">
      <ul class="menu-section">
        <li v-for="link in leftLinks" :key="link.href">
          <a :href="link.href" @click.prevent="handleLinkClick(link.href)">{{
            link.text
          }}</a>
        </li>
      </ul>
      <div class="logo">
        <img src="/images/logo.svg" alt="Logo" />
      </div>
      <ul class="menu-section">
        <li v-for="link in rightLinks" :key="link.href">
          <a :href="link.href" @click.prevent="handleLinkClick(link.href)">{{
            link.text
          }}</a>
        </li>
      </ul>
    </nav>
    <div class="mobile">
      <NuxtImg
        class="hamburger"
        src="/images/ham.svg"
        @click="menuOpen = true"
      />
      <SideMenu :links="links" :isOpen="menuOpen" @close="menuOpen = false" />
    </div>
  </header>
</template>

<script setup>
import { ref, nextTick } from "vue";
import { useSmoothScroll } from "../composables/useSmoothScroll";
const links = [
  { text: "Home", href: "#home" },
  { text: "History", href: "#history" },
  { text: "Values", href: "#values" },
  { text: "Services", href: "#services" },
  { text: "Process", href: "#process" },
  { text: "Profile", href: "#profile" },
];

const menuOpen = ref(false);

const midIndex = Math.ceil(links.length / 2);
const leftLinks = links.slice(0, midIndex);
const rightLinks = links.slice(midIndex);

const { scrollToSection } = useSmoothScroll();
function handleLinkClick(href) {
  scrollToSection(href, -96);
}
</script>

<style scoped>
header {
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 96px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  background: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
}
header:after {
  content: "";
  position: absolute;
  width: 202px;
  height: 101px;
  top: 100%;
  left: calc(50% - 100.5px);
  background: url("/images/subtract.png");
  background-size: center/cover;
}

.logo {
  position: absolute;
  max-width: 120px;
  width: 100%;
  position: absolute;
  left: calc(50% - 60px);
  top: 30px;
  z-index: 20;
}

.menu-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  height: 100%;
}
.menu-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 36%;
  height: 100%;
}
li {
  color: #fff;
}
.hamburger {
  position: absolute;
  top: 16px;
  right: 15px;
  width: 30px;
}

@media (max-width: 768px) {
  header {
    height: 60px;
  }

  .logo {
    top: 15px;
    max-width: 100px;
    left: calc(50% - 50px);
  }
  .menu-section {
    display: none;
  }
  header:after {
    transform: scale(0.8);
    top: calc(100% - 10px);
  }
}
@media (min-width: 769px) {
  .mobile {
    display: none;
  }
}
</style>
