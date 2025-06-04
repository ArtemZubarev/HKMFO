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
              <li class="list__item" v-for="link in pages" :key="link.href">
                <a
                  :href="link.href"
                  @click.prevent="handleLinkClick(link.href)"
                  >{{ link.title }}</a
                >
              </li>
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
                <NuxtImg class="icon" src="/images/mail.svg" />
                <a href="mailto:info@mfotrust.hk">info@mfotrust.hk</a>
              </li>
              <li class="list__item">
                <NuxtImg class="icon" src="/images/location.svg" />
                <a
                  href="https://maps.google.com/?q=ROOM+1611%2C+16%2FF%2C+THE+METROPOLIS+TOWER%2C+10+METROPOLIS+DRIVE%2C+HUNG+HOM%2C+HONG+KONG"
                  target="_blank"
                  class="short"
                >
                  ROOM 1611, 16/F, THE METROPOLIS TOWER, 10 METROPOLIS DRIVE,
                  HUNG HOM, HONG KONG
                </a>
              </li>
            </ul>
          </div>
          <div class="inner">
            <div class="title">Still have questions?</div>
            <EmailInput v-model="parentValue" @button-click="onButtonClick" />
            <p class="answer">We will answer any questions within 5 minutes</p>
          </div>
        </div>
      </div>
      <div class="box">
        <p class="copyright">
          Copyright {{ currentYear }} @HK MFO Trusted Limited. All Right
          Reserved
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
import { ref } from "vue";
import { useSmoothScroll } from "../composables/useSmoothScroll";
const { scrollToSection } = useSmoothScroll();

const pages = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "History",
    href: "#history",
  },
  {
    title: "Values",
    href: "#values",
  },
  {
    title: "Services",
    href: "#values",
  },
  {
    title: "Process",
    href: "#process",
  },
];

const parentValue = ref("");

const onButtonClick = (val) => {
  console.log("Кнопка нажата, значение:", val);
};

function handleLinkClick(href) {
  scrollToSection(href, -96);
}
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
.short {
  max-width: 200px;
}
@media (max-width: 540px) {
  .logo {
    max-width: 70px;
  }
}
@media (max-width: 768px) {
  .logo {
    /* max-width: 70px; */
  }
  .box {
    /* padding: 0 10px; */
  }
  .block {
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 0px;
    align-items: stretch;
  }
  .inner:nth-of-type(1) {
    /* width: 100%; */
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #fff;
    padding-bottom: 40px;
  }
  .inner:nth-of-type(2) {
    order: 2;
    /* padding-left: 20px; */
  }
  .inner:nth-of-type(3) {
    order: 3;
  }
  .inner:nth-of-type(2),
  .inner:nth-of-type(3) {
    width: 30%;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    /* align-items: center; */
  }
  .inner:nth-of-type(4) {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    order: 1;
    border-bottom: 1px solid #fff;
    flex-grow: 1;
    padding-left: 20px;
    padding-bottom: 40px;
  }
  .inner:nth-of-type(5) {
    display: none;
  }
  .list {
    /* align-items: center; */
  }
  .list__item {
    gap: 5px;
    align-items: flex-start;
  }

  .list.contacts {
    gap: 10px;
  }
}
@media (min-width: 320px) and (max-width: 769px) {
  .inner:nth-of-type(2) {
    width: 60%;
  }
}
</style>
