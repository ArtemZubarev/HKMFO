<template>
  <div class="links">
    <div class="wrapper">
      <h1 class="title">Friendly links</h1>
      <div class="box">
        <div class="item" v-for="item in list">
          <p class="text">{{ item.text }}</p>
          <a class="button" :href="item.url" target="_blank">Link</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const list = [
  {
    text: "Tax Concessions for Family-owned Investment Holding Vehicles",
    url: "#",
  },
  {
    text: "Frequently Asked Questions (FAQ) | Hong Kong: a Leading Hub for Family Offices",
    url: "#",
  },
  {
    text: "Hong Kong: a Leading Hub for Family Offices",
    url: "#",
  },
  {
    text: "Trustee Ordinance",
    url: "#",
  },
  {
    text: "Anti-Money Laundering and Counter-Terrorist Financing Ordinance",
    url: "#",
  },
  {
    text: "Quick Reference Guide to Licensing Requirements",
    url: "#",
  },
];
</script>

<style scoped>
.links {
  padding-top: 80px;
}
.box {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.item {
  position: relative;
  box-sizing: border-box;
  padding: 40px 30px;
  border-radius: 28px;
  min-height: 220px;
}
.title {
  font-size: 52px;
}
.box {
  margin-top: 60px;
}
.item:nth-of-type(1),
.item:nth-of-type(3) {
  background: #181818;
  color: #fff;
}
.item:nth-of-type(2),
.item:nth-of-type(5) {
  background: #eaeaea;
}
.item:nth-of-type(4),
.item:nth-of-type(6) {
  background: #78aee4;
  color: #fff;
}
.item:nth-of-type(4) .button,
.item:nth-of-type(6) .button {
  border-color: #fff;
}
.item:nth-of-type(1) .button,
.item:nth-of-type(3) .button {
  border-color: #fff;
}
.text {
  font-size: 20px;
  font-weight: 300;
}
.button {
  padding: 4px 50px;
  position: absolute;
  left: 30px;
  bottom: 20px;
}

@media (max-width: 1024px) {
  .box {
    /* grid-template-columns: repeat(2, 1fr); */
  }
}
@media (max-width: 950px) {
  .box {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 648px) {
  .box {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media (max-width: 540px) {
  .links {
    padding-top: 40px;
  }
  /* .box {
    grid-template-columns: repeat(1, 1fr);
  } */
}
</style>
