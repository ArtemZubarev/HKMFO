<template>
  <header>
    <nav class="menu-container flex wrapper">
      <ul class="menu-section">
        <li v-for="link in leftLinks" :key="link.href">
          <a :href="link.href">{{ link.text }}</a>
        </li>
      </ul>
      <div class="logo">
        <img src="/images/logo.svg" alt="Logo" />
      </div>
      <ul class="menu-section">
        <li v-for="link in rightLinks" :key="link.href">
          <a :href="link.href">{{ link.text }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
const links = [
  { text: "Home", href: "#" },
  { text: "History", href: "#history" },
  { text: "Values", href: "#values" },
  { text: "Services", href: "#services" },
  { text: "Process", href: "#process" },
  { text: "Profile", href: "#profile" },
];

const midIndex = Math.ceil(links.length / 2);
const leftLinks = links.slice(0, midIndex);
const rightLinks = links.slice(midIndex);
</script>

<style scoped>
header {
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 96px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.3);
}

.logo {
  position: absolute;
  max-width: 120px;
  width: 100%;
  position: absolute;
  left: calc(50% - 60px);
  top: 30px;
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
</style>
