<template>
  <div class="connect" id="profile">
    <div class="wrapper">
      <button class="button">Get in Touch</button>
      <div class="box">
        <NuxtImg class="image" src="/images/woman.jpg" />
        <Form />
      </div>
    </div>
  </div>
</template>

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
.image {
  max-width: 440px;
  width: 100%;
  flex-shrink: 0;
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
