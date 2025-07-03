<template>
  <div class="connect" id="profile">
    <div class="wrapper">
      <button class="button">Get in Touch</button>
      <div class="box">
        <NuxtImg
          v-if="activeTab === 'Become a client'"
          class="image"
          src="/images/man.jpg"
        />
        <NuxtImg v-else class="image" src="/images/laptop.jpg" />
        <div class="inner">
          <div class="tabs">
            <button
              v-for="tab in tabs"
              :key="tab"
              @click="activeTab = tab"
              class="button__tab"
              :class="{ active: activeTab === tab }"
            >
              {{ tab }}
            </button>
          </div>
          <FormClient v-if="activeTab === 'Become a client'" />
          <Form v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const tabs = ["Become a client", "Support"];
const activeTab = ref(tabs[0]);
</script>
<style scoped>
.box {
  display: flex;
  justify-content: space-between;
  gap: 15%;
  width: 100%;
}
.connect {
  margin-top: 140px;
}
.button {
  cursor: default;
  margin-bottom: 40px;
  padding: 0px 20px;
}
.button__tab {
  background: rgba(207, 207, 207, 1);
  border: none;
  padding: 8px 20px;
  color: #fff;
  border-top-left-radius: calc(infinity * 1px);
  border-bottom-left-radius: calc(infinity * 1px);
  border-top-right-radius: calc(infinity * 1px);
  border-bottom-right-radius: calc(infinity * 1px);
  cursor: pointer;
}
.button__tab.active {
  background: rgba(24, 24, 24, 1);
}
.image {
  max-width: 440px;
  width: 100%;
  flex-shrink: 0;
}
.tabs {
  display: flex;
  gap: 8px;
}
.inner {
  width: 100%;
}
@media (max-width: 1024px) {
  .box {
    flex-direction: column;
    align-items: center;
  }
  .form {
    max-width: 600px;
  }
  .field.input {
    max-width: 100%;
  }
}
@media (max-width: 540px) {
  .connect {
    margin-top: 80px;
  }
}
</style>
