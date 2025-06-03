<template>
  <section class="history" id="history">
    <div class="wrapper">
      <div class="box">
        <div class="inner">
          <NuxtImg class="image" src="/images/skyscrappers.jpg" />
        </div>
        <div class="inner inner-text">
          <button class="button">History</button>
          <h2 class="title">Origins & Regulation </h2>
          <p class="text">
            HK MFO Trustee Limited was established as a Trust Company in Hong
            Kong, managed by a management with a foundation built over two
            decades of experience in financial services both locally and
            internationally.
          </p>
          <p class="text">
            We are registered under Part 8 of the Trustee Ordinance (Cap. 29) as
            a Trust Company and are licensed by the Companies Registry of Hong
            Kong as a Trust or Company Service Provider (Licence No. TC009838).
            Our operations comply with the Anti-Money Laundering and
            Counter-Terrorist Financing Ordinance (Cap. 615), ensuring the
            highest standards of transparency and governance. 
          </p>
          <p class="text">
            Drawing on Hong Kong’s long-standing common law heritage and strong
            regulatory framework, we serve clients seeking trusted, compliant,
            and strategically structured wealth protection vehicles.  With a
            focus on integrity and continuity, we position ourselves as a
            reliable partner for high-net-worth families and institutions across
            Asia and beyond.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.history {
  padding-top: 130px;
}
.box {
  display: flex;
}
.inner {
  width: 50%;
}
.inner-text {
  padding-left: 60px;
}
.title {
  font-size: 52px;
  line-height: 120%;
  font-weight: 300;
  margin-top: 10px;
}
.text {
  font-size: 16px;
  padding-top: 20px;
  line-height: 150%;
  font-weight: 300;
}
.image {
  width: 100%;
}
.button {
  padding: 0px 20px;
  cursor: default;
}
@media (max-width: 768px) {
  .box {
    flex-direction: column;
  }
  .history {
    padding-top: 80px;
  }
  .inner {
    width: 100%;
  }
  .inner-text {
    padding-left: unset;
    padding-top: 30px;
  }
}
</style>
