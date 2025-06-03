<template>
  <div class="accordeon">
    <div class="item" v-for="item in list" :key="item.id">
      <div class="banner" @click="toggle(item.id)">
        <div class="id">{{ item.id }}.</div>
        <div class="title">{{ item.title }}</div>
        <NuxtImg class="icon" src="/images/arrow.svg" />
      </div>
      <Transition name="accordion">
        <div class="showable" v-show="openId === item.id">
          <div class="box">
            <NuxtImg class="image" :src="`/images/${item.id}.jpg`" />
          </div>
          <div class="box">
            <p class="subtitle">{{ item.title }}</p>
            <p class="text">{{ item.text }}</p>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const list = [
  {
    id: "01",
    title: "Trust Establishment & Administration",
    text: "We create and manage trust structures that secure assets, enable succession planning, and ensure long-term protection and flexibility. ",
  },
  {
    id: "02",
    title: "Asset Stewardship Acting",
    text: "Acting as independent trustees, we manage and oversee assets in the best interests of beneficiaries while aligning with the settlors' intent.",
  },
  {
    id: "03",
    title: "Court-Appointed Trusteeship ",
    text: "We are authorised to serve as court-appointed trustees in complex legal scenarios, offering professional, impartial and compliant administration service.",
  },
  {
    id: "04",
    title: "Regulatory Compliance",
    text: "We operate in full alignment with Hong Kong's AML/CTF regulations, offering clients peace of mind through strong internal governance and legal clarity. ",
  },
  {
    id: "05",
    title: "Family & Estate Planning",
    text: "We help clients design and implement strategies for succession and intergenerational wealth transfer, minimising risk and preserving legacy. ",
  },
];

const openId = ref(null);

function toggle(index) {
  openId.value = openId.value === index ? null : index;
}
</script>

<style scoped>
.accordeon {
  padding-top: 140px;
}
.banner {
  position: relative;
  display: flex;
  cursor: pointer;
  align-items: center;
  padding: 30px 0;
  transition: 0.2s;
}
.banner:hover {
  opacity: 0.4;
}

.item:not(:last-of-type) {
  border-bottom: 1px solid #777777;
}
.id {
  min-width: 36%;
}
.title {
  font-size: 30px;
}
.icon {
  width: 35px;
  position: absolute;
  right: 0;
}
.showable {
  padding-left: 36%;
  display: flex;
  gap: 32px;
  padding-top: 30px;
  padding-bottom: 30px;
}
.box {
  width: 300px;
}
.box:first-of-type {
  flex-shrink: 0;
}
.image {
  width: 100%;
}
.subtitle {
  font-size: 19px;
  font-weight: 500;
}
.text {
  font-size: 13px;
  font-weight: 300;
  margin-top: 10px;
}

.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  padding: 0;
  opacity: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  max-height: 500px; /* Задай максимум для открытого блока */
  opacity: 1;
}
@media (max-width: 1024px) {
  .showable {
    padding-left: 15%;
  }
  .id {
    min-width: 15%;
  }
}
@media (max-width: 768px) {
  .accordeon {
    padding-top: 80px;
  }
  .id {
    width: unset;
    min-width: 40px;
  }
  .title {
    font-size: 26px;
  }
  .showable {
    padding-left: 0;
    flex-direction: column;
    padding-top: 0;
  }
  .box {
    width: 100%;
  }
}
</style>
