<template>
  <div class="steps">
    <div class="step" v-for="(item, index) in list" :key="item.title">
      <NuxtImg class="image" :src="`/images/step_${index + 1}.jpg`" />
      <div class="box">
        <div class="subtitle">
          {{ item.title }}
        </div>
        <div class="text">
          <b>{{ item.strong }}</b> {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const list = [
  {
    title: "step 1",
    strong: "Initial Consultation",
    text: "We begin with a private consultation to understand your goals and requirements.",
  },
  {
    title: "step 2",
    strong: "Structuring",
    text: "We develop a tailored trust or fiduciary solution aligned with your needs, assets and jurisdictions.",
  },
  {
    title: "step 3",
    strong: "Implementation",
    text: "We establish the agreed structure, handle legal formalities and commence administration. ",
  },
  {
    title: "step 4",
    strong: "Ongoing Management",
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
b {
  font-weight: 500;
}
@media (max-width: 768px) {
  .step {
    flex-direction: column;
  }
  .image {
    width: 100%;
  }
  .steps:before {
    left: 50%;
  }
  .box {
    background: #fff;
    -webkit-box-shadow: 0px 0px 31px 15px rgba(255, 255, 255, 1);
    -moz-box-shadow: 0px 0px 31px 15px rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 31px 15px rgba(255, 255, 255, 1);
  }
}
</style>
