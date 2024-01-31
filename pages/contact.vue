<script lang="ts" setup>
import type { ArgumentError } from "~~/server/api/mail";

let form = reactive({ name: "", email: "", message: "" });
let errorMessages = ref<ArgumentError>({});
let loading = ref(false);
const hasErrors = computed(() => !!Object.keys(errorMessages.value).length);

async function submitForm() {
  errorMessages.value = {};
  loading.value = true;

  // Passed checks
  try {
    await $fetch("/api/mail", {
      method: "post",
      body: {
        name: form.name,
        email: form.email,
        message: form.message,
      },
    });

    form.message = "";

    // TODO add success message
  } catch (error) {
    if (error instanceof Error) {
      type ErrorData = {
        data: { data: ArgumentError };
      };

      errorMessages.value = (error as unknown as ErrorData).data.data;
    }
  }

  loading.value = false;
}
</script>

<template>
  <div>
    <Breadcrumbs>Contact</Breadcrumbs>
    <div class="container contact--section">
      <div class="information">
        <p>
          Got a project? Drop me a line if you want to work together on
          something exciting. Big or small. Mobile or web.
        </p>
        <a href="mailto:marksmeel@gmail.com">
          <IconMail />

          <span>marksmeel@gmail.com</span>
        </a>
        <a href="https://www.github.com/Markiesch" target="_blank">
          <IconGithub />
          <span>Github</span>
        </a>
        <a
          href="https://www.linkedin.com/in/mark-schuurmans-30329a1b7/"
          target="_blank"
        >
          <IconLinkedin />
          <span>LinkedIn</span>
        </a>
      </div>
      <div>
        <form method="POST" @submit.prevent="submitForm">
          <label for="name">Name</label>
          <input
            id="name"
            v-model="form.name"
            :class="{ 'input-error': errorMessages['name'] }"
            type="text"
            name="name"
          />

          <label for="email">E-mail</label>
          <input
            id="email"
            v-model="form.email"
            :class="{ 'input-error': errorMessages['email'] }"
            type="email"
            name="email"
          />

          <label for="message">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            :class="{ 'input-error': errorMessages['message'] }"
            name="message"
          />

          <div v-show="hasErrors" class="alert">
            <p v-for="errorMessage in errorMessages" :key="errorMessage">
              {{ errorMessage }}
            </p>
          </div>
          <button class="send--button" type="submit">
            <svg viewBox="0 0 24 24">
              <path
                d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"
              />
            </svg>
            <span>{{ loading ? "LOADING..." : "SEND MESSAGE" }}</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/pages/contact";
</style>
