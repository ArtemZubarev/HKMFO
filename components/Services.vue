<template>
  <section class="services" id="services">
    <div class="wrapper">
      <div class="box">
        <div class="inner">
          <h2 class="title">Our Services</h2>
        </div>
        <div class="inner">
          <p class="text">
            We offer a comprehensive suite of fiduciary services tailored to the
            needs of families, individuals and institutions. Combining
            regulatory strength with a personal approach, we help our clients to
            protect, manage and transfer wealth efficiently. 
          </p>
        </div>
      </div>
      <Accordeon />
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.services {
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
}

@media (max-width: 768px) {
  .box {
    flex-direction: column;
  }
  .text {
    font-size: 26px;
  }
}
</style>
