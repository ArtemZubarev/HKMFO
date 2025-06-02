<template>
  <div class="experience">
    <div class="title">Take your experience to the next level with HK MFO</div>
    <button class="button">
      Registered
      <NuxtImg class="button__icon w-[29px]" src="/images/arrow-white.svg" />
    </button>
  </div>
</template>
<style scoped>
.title {
  font-size: 40px;
  color: #fff;
  max-width: 600px;
  text-align: center;
  margin: 0 auto;
  position: relative;
  z-index: 20;
  margin-bottom: 20px;
}

.experience {
  position: relative;
  background: url("/images/view.jpg") center/cover no-repeat;
  padding-top: 40px;
  padding-bottom: 245px;
  text-align: center;
  margin-top: 140px;
}
.experience:before {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  width: 100%;
  z-index: 10;
  height: 100%;
  background: url("/images/view-back.png") center/cover no-repeat;
}
.button {
  position: relative;
  padding: 6px 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 14px;
  z-index: 20;
  margin: 0 auto;
  border-color: #fff;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
}
</style>
