<template>
  <section class="welcome">
    <div class="wrapper">
      <div class="box">
        <div class="inner">
          <button class="button">Welcome</button>
        </div>
        <div class="inner">
          <p class="text">
            HK MFO Trustee is an independent Hong Kong trust company
            specialising in trust formation, asset management, fiduciary
            services and succession planning. We deliver tailored, compliant
            solutions to protect and manage wealth globally.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.welcome {
  padding-top: 130px;
}
.box {
  display: flex;
  justify-content: space-between;
}
.text {
  max-width: 770px;
  font-size: 30px;
  font-weight: 300;
}
.button {
  padding: 0px 20px;
  cursor: default;
  margin-top: 20px;
}
@media (max-width: 768px) {
  .welcome {
    padding-top: 80px;
  }
  .button {
    margin-bottom: 20px;
  }
  .box {
    flex-direction: column;
  }
  .text {
    font-size: 26px;
  }
}
</style>
