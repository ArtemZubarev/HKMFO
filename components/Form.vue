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

    <button
      v-if="status === 'INIT' || status === 'PENDING'"
      class="button"
      type="submit"
      :disabled="status === 'PENDING'"
    >
      Submit Now
    </button>
    <ButtonLoader v-else-if="status === 'PENDING'" class="loader" />
    <AlertSuccess v-else-if="status === 'SUCCESS'" />
    <AlertError v-else-if="status === 'FAILED'" />
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
const status = ref("INIT");

const FORMSPREE_ENDPOINT = "https://formspree.io/f/manjnvwb";

const sendForm = async () => {
  const payload = new FormData();
  payload.append("type", "Become a client");
  payload.append("name", formData.value.name);
  payload.append("email", formData.value.email);
  payload.append("message", formData.value.message);

  status.value = "PENDING";

  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: payload,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      status.value = "SUCCESS";
      formData.value = { name: "", email: "", message: "" }; // очистка формы
    } else {
      const data = await res.json();
      console.error("Error:", data);
      status.value = "FAILED";
    }
  } catch (err) {
    console.error(err);
    status.value = "FAILED";
  }
};

const onSubmit = () => {
  if (form.value.checkValidity()) {
    sendForm();
  } else {
    form.value.reportValidity(); // стандартная валидация
  }
};
</script>

<style scoped>
.form {
  width: 100%;
  margin-top: 40px;
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
.loader {
  width: 40px;
}

@media (max-width: 1024px) {
  .form {
    margin-top: 40px;
  }
  .field.input {
    max-width: 100%;
  }
  input {
    max-width: 100%;
  }
}
</style>
