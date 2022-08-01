<script lang="ts" setup>
let form = ref({ name: "", email: "", message: "" });
let error = ref("");

async function submitForm() {
  error.value = "";
  const mailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (form.value.name.length < 3) return (error.value = "Name must be atleast 2 characters long");
  if (!mailRegExp.test(form.value.email.toLowerCase())) return (error.value = "Please enter a valid email");
  if (form.value.message.length < 20) return (error.value = "Please enter a message that has atleast 20 characters");
  // Passed checks
  try {
    const data = await $fetch("/api/mail", { method: "post", body: { name: form.value.name, email: form.value.email, message: form.value.message } });
    console.log(data);

    form.value = {
      name: "",
      email: "",
      message: "",
    };
  } catch (error) {
    if (error instanceof Error) error = error.message;
  }
}
</script>

<template>
  <div>
    <Breadcrumbs>Contact</Breadcrumbs>
    <div class="container contact--section">
      <div class="information">
        <p>Got a project? Drop me a line if you want to work together on something exciting. Big or small. Mobile or web.</p>
        <a href="mailto:marksmeel@gmail.com">
          <IconMail />

          <span>marksmeel@gmail.com</span>
        </a>
        <a href="https://www.github.com/Markiesch" target="_blank">
          <IconGithub />
          <span>Github</span>
        </a>
        <a href="https://www.discord.com/" target="_blank">
          <IconDiscord />
          <span>Markiesch#4824</span>
        </a>
      </div>
      <div>
        <form @submit.prevent="submitForm" name="contact" method="POST" data-netlify-honeypot="bot-field" netlify>
          <div style="display: none">
            <label>Do not fill this if you are a human: <input name="bot-field" /></label>
          </div>

          <label for="name">Name</label>
          <div class="input--container">
            <input v-model="form.name" type="text" id="name" name="name" />
          </div>

          <label for="email">E-mail</label>
          <div class="input--container">
            <input v-model="form.email" type="text" id="email" name="email" />
          </div>

          <label for="name">Message</label>
          <div class="input--container">
            <textarea v-model="form.message" id="name" name="message" />
          </div>

          <div v-show="!!error" class="alert">{{ error }}</div>
          <button class="send--button" type="submit">
            <svg viewBox="0 0 24 24">
              <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
            </svg>
            <span>SEND MESSAGE</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/pages/contact";
</style>
