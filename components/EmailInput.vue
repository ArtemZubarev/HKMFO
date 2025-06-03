<template>
  <div class="mail">
    <input
      type="email"
      class="input"
      placeholder="Email"
      v-model="inputValue"
      @input="updateValue"
    />
    <NuxtImg class="icon" src="/images/arrow-mail.svg" @click="handleClick" />
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
const emit = defineEmits(["update:modelValue", "button-click"]);

const inputValue = ref("");

const updateValue = () => {
  emit("update:modelValue", inputValue.value);
};

const handleClick = () => {
  emit("button-click", inputValue.value);
};
</script>
<style scoped>
.mail {
  position: relative;
  border: 2px solid #fff;
  border-top-left-radius: calc(infinity * 1px);
  border-bottom-left-radius: calc(infinity * 1px);
  border-top-right-radius: calc(infinity * 1px);
  border-bottom-right-radius: calc(infinity * 1px);
  margin: 10px 0;
}
.input {
  width: 100%;
  height: 100%;
  outline: none;
  padding: 10px 15px;
  color: #fff;
  min-width: 200px;
  padding-right: 36px;
}
.icon {
  position: absolute;
  top: 6px;
  right: 5px;
  width: 29px;
  cursor: pointer;
  transition: 0.2s;
}
.icon:hover {
  opacity: 0.7;
}
</style>
