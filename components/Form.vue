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
  name: "qsdaqasdas",
  email: "asdasd@asd.asd",
  message: "asdasdasdasdsaddasd",
});

const form = ref(null);

const sendForm = async () => {
  const body = JSON.stringify(formData.value);
  console.log(body);
  try {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });

    const data = await res.json();
    console.log(data);
    if (res.ok) {
      alert("Заявка отправлена!\nПредпросмотр: " + data.previewUrl);
    } else {
      alert("Ошибка: " + data.message);
    }
  } catch (err) {
    alert("Ошибка при отправке");
    console.error(err);
  }
};

const onSubmit = () => {
  if (form.value.checkValidity()) {
    sendForm();
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
