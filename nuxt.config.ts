import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  runtimeConfig: {
    mailService: process.env.MAIL_SERVICE,
    mailFrom: process.env.MAIL_FROM,
    mailAppPassword: process.env.MAIL_APP_PASSWORD,
    mailTo: process.env.MAIL_TO,
  },
});
