<template>
  <transition name="fade">
    <div v-if="isVisible" class="overlay" @click.self="handleBackgroundClick">
      <transition name="slide">
        <div class="sidebar" v-if="isOpen">
          <ul class="links">
            <li v-for="link in links" :key="link.href">
              <a :href="link.href" @click="handleLinkClick(link.href)">{{
                link.text
              }}</a>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup>
import { watch, ref } from "vue";
import { useSmoothScroll } from "../composables/useSmoothScroll";
const { scrollToSection } = useSmoothScroll();

const props = defineProps({
  links: Array,
  isOpen: Boolean,
});

const emit = defineEmits(["close"]);

const isVisible = ref(false);

watch(
  () => props.isOpen,
  (open) => {
    if (open) {
      isVisible.value = true;
    } else {
      setTimeout(() => {
        isVisible.value = false;
      }, 300);
    }
  },
  { immediate: true }
);

const handleBackgroundClick = () => {
  emit("close");
};

const handleLinkClick = (href) => {
  function handleLinkClick(href) {
    scrollToSection(href, -96);
  }
  emit("close");
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}

.overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
}

.sidebar {
  width: 250px;
  background: white;
  height: 100%;
  padding: 1rem;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  padding-left: 30px;
  padding-top: 50px;
}

.links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.links a {
  display: block;
  text-decoration: none;
  color: #333;
  font-size: 1.6rem;
  padding: 6px 0;
}
.links li:not(:last-of-type) a {
  border-bottom: 1px solid black;
}
</style>
