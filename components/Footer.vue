<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="box">
        <div class="block">
          <div class="inner">
            <NuxtImg class="logo" src="/images/logo.svg" />
          </div>
          <div class="inner">
            <div class="title">Pages</div>
            <ul class="list">
              <li class="list__item">Home</li>
              <li class="list__item">History</li>
              <li class="list__item">Values</li>
              <li class="list__item">Services</li>
              <li class="list__item">Process</li>
            </ul>
          </div>
          <div class="inner">
            <div class="title">Profile</div>
            <ul class="list">
              <li class="list__item">Sign in</li>
              <li class="list__item">Sign up</li>
            </ul>
          </div>
          <div class="inner">
            <div class="title">Contacts</div>
            <ul class="list contacts">
              <li class="list__item">
                <NuxtImg class="icon" src="/images/ph.svg" />
                <a href="tel:+99 002 77291 00">+99 002 77291 00</a>
              </li>
              <li class="list__item">
                <NuxtImg class="icon" src="/images/location.svg" />
                <a href="" target="_blank">620, Orange well, NJ, Hong Kong</a>
              </li>
              <li class="list__item">
                <NuxtImg class="icon" src="/images/mail.svg" />
                <a href="mailto:+99 002 77291 00">hello@mfo.com</a>
              </li>
            </ul>
          </div>
          <div class="inner">
            <div class="title">Still have questions?</div>

            <p class="answer">We will answer any questions within 5 minutes</p>
          </div>
        </div>
      </div>
      <div class="box">
        <p class="copyright">
          copyright {{ currentYear }} @HK MFO Trusted Limited. All Right
          Reserved
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>
<style scoped>
.footer {
  background: #181818;
  margin-top: 140px;
  color: #fff;
}
.copyright {
  color: #fff;
  text-align: center;
  padding: 60px 0;
  border-top: 1px solid #fff;
  margin-top: 60px;
}
.block {
  display: flex;
  justify-content: space-between;
  padding-top: 85px;
}
.title {
  font-size: 19px;
}
.logo {
  width: 120px;
}
li {
  list-style: none;
}
.list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}
.list.contacts {
  gap: 20px;
}
.list__item {
  display: flex;
  color: #8a8a8a;
  font-size: 14px;
  gap: 20px;
}
.answer {
  color: #8a8a8a;
  font-size: 14px;
  max-width: 140px;
}
.icon {
  width: 20px;
}
</style>
