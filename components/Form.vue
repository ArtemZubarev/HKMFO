<template>
  <form class="form" @submit.prevent="onSubmit" ref="form">
    <div class="box">
      <div class="field input">
        <label for="name">Name</label>
        <input
          id="name"
          name="name"
          v-model="formData.name"
          type="text"
          required
          placeholder="John Carter"
        />
      </div>

      <div class="field input">
        <label for="email">Email</label>
        <input
          id="email"
          name="email"
          v-model="formData.email"
          type="email"
          required
          placeholder="example@domain.com"
        />
      </div>
    </div>

    <div class="field">
      <label for="message">Leave us message</label>
      <textarea
        id="message"
        name="message"
        v-model="formData.message"
        required
        minlength="10"
        placeholder="Please type your message here..."
        rows="7"
      ></textarea>
    </div>

    <button class="button" type="submit">Submit Now</button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const formData = ref({
  name: "",
  email: "",
  message: "",
});

const form = ref(null);

const onSubmit = () => {
  if (form.value.checkValidity()) {
    alert("Form submitted:", formData.value);
  } else {
    form.value.reportValidity(); // Native validation
  }
};
</script>

<style scoped>
.form {
  width: 100%;
}
label {
  display: block;
  font-size: 19px;
  margin-bottom: 10px;
}
.box {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 26px;
}
.field {
  width: 100%;
}
.field.input {
  max-width: 250px;
}
input {
  border: 1px solid #777777;
  border-top-left-radius: calc(infinity * 1px);
  border-bottom-left-radius: calc(infinity * 1px);
  border-top-right-radius: calc(infinity * 1px);
  border-bottom-right-radius: calc(infinity * 1px);
  max-width: 250px;
  width: 100%;
}
textarea {
  width: 100%;
  border: 1px solid #777777;
  border-radius: 30px;
  resize: none;
}
input,
textarea {
  font-size: 12px;
  padding: 12px;
}

input::placeholder,
textarea::placeholder {
  font-size: 12px;
  color: #888;
}
.button {
  background: #78aee4;
  border-color: #78aee4;
  padding: 8px 20px;
  color: #fff;
  margin-top: 25px;
}
</style>
