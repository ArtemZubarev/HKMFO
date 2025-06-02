<template>
  <section class="values">
    <div class="wrapper">
      <div class="list">
        <div
          class="value"
          :class="item.title"
          v-for="item in values"
          :key="item.title"
        >
          <NuxtImg
            class="icon"
            v-if="item.title === 'respect'"
            src="/images/building.svg"
          />
          <NuxtImg
            class="icon"
            v-else-if="item.title === 'independence'"
            src="/images/star.svg"
          />
          <NuxtImg class="icon" v-else src="/images/graph.svg" />
          <p class="title">{{ item.title }}</p>
          <p class="text">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const values = [
  {
    title: "respect",
    text: "We respect our clients — their privacy, vision, legacy and decisions. We support our team through training and collaboration. We value our partners and aim to build enduring, trust-based relationships. ",
  },
  {
    title: "independence",
    text: "We are privately owned and operate without ties to any financial institutions. Our advice is entirely independent — both in spirit and in practice — ensuring unbiased, client-first decision-making. ",
  },
  {
    title: "excellence",
    text: "Clients choose HK MFO Trustee for our uncompromising commitment to quality. We work with senior professionals and trusted specialists to deliver best-in-class fiduciary and advisory services. ",
  },
];
</script>

<style scoped>
.values {
  padding-top: 160px;
}
.list {
  display: flex;
  gap: 16px;
}
.title {
  font-size: 19px;
  text-transform: capitalize;
  margin-top: 55px;
}
.text {
  font-size: 13px;
  font-weight: 300;
  margin-top: 24px;
}
.icon {
  width: 68px;
  height: 68px;
}
.value {
  padding: 28px;
  border-radius: 24px;
  transition: 0.5s;
  cursor: default;
}
.value:hover {
  transform: scale(0.98);
}
.value.respect {
  background: #181818;
  color: #fff;
}
.value.independence {
  background: #eaeaea;
}
.value.excellence {
  background: #78aee4;
  color: #fff;
}
</style>
