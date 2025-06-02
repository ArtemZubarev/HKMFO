<template>
  <div class="steps">
    <div class="step" v-for="(item, index) in list" :key="item.title">
      <NuxtImg class="image" :src="`/images/step_${index + 1}.jpg`" />
      <div class="box">
        <div class="subtitle">{{ item.title }}</div>
        <div class="text">{{ item.text }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const list = [
  {
    title: "step 1",
    text: "Initial Consultation We begin with a private consultation to understand your goals and requirements.",
  },
  {
    title: "step 2",
    text: "Structuring We develop a tailored trust or fiduciary solution aligned with your needs, assets and jurisdictions.",
  },
  {
    title: "step 3",
    text: "Implementation We establish the agreed structure, handle legal formalities and commence administration. ",
  },
  {
    title: "step 4",
    text: "We provide continuous support, compliance oversight and adaptive advice as your needs evolve.",
  },
];
</script>

<style scoped>
.steps {
  position: relative;
  margin-top: 80px;
}
.steps:before {
  content: "";
  position: absolute;
  height: 100%;
  width: 1px;
  background: #adadad;
  left: 90px;
  z-index: -1;
}
.step {
  display: flex;
  align-items: center;
  gap: 50px;
  margin-bottom: 70px;
}
.image {
  width: 180px;
  flex-shrink: 0;
}
.subtitle {
  font-weight: bold;
  text-transform: capitalize;
}
.text {
  font-size: 18px;
  font-weight: 300;
}
</style>
