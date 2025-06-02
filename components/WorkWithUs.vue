<template>
  <section class="work">
    <div class="wrapper">
      <div class="box">
        <div class="inner">
          <button class="button">Work</button>
        </div>
        <div class="inner">
          <h2 class="title">Working with Us </h2>
          <p class="text">
            We follow a clear and structured process, designed to deliver
            bespoke fiduciary solutions with efficiency, transparency and care. 
          </p>
          <Steps />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.work {
  padding-top: 130px;
}
.box {
  display: flex;
  justify-content: space-between;
}
.title {
  font-size: 52px;
}
.inner:first-of-type {
  min-width: 36%;
}

.text {
  max-width: 770px;
  font-size: 30px;
  font-weight: 300;
  margin-top: 14px;
}
.button {
  padding: 0px 20px;
  cursor: default;
  margin-top: 20px;
}
</style>
