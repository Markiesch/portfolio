<template>
  <h1>Contact</h1>

  <Breadcrumbs>Contact</Breadcrumbs>

  <section class="contact--section">
    <div>
      <p>Choose one of the contact options below or fill out the form on the right</p>
      <div class="link--container">
        <a href="https://www.github.com/markiesch">
          <svg viewBox="0 0 512 512">
            <path
              d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
            ></path>
          </svg>
          <p>+123 456 789</p>
        </a>
        <a href="https://www.github.com/markiesch">
          <svg viewBox="0 0 576 512">
            <path
              d="M144 64A144 144 0 0 0 0 208v208a32 32 0 0 0 32 32h256V208A144 144 0 0 0 144 64zm80 176a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16zM432 64H244.87C290.23 95.87 320 148.48 320 208v240h224a32 32 0 0 0 32-32V208A144 144 0 0 0 432 64zm80 208a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16v-48h-56a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h104a16 16 0 0 1 16 16z"
            ></path>
          </svg>
          <p>marksmeel@gmail.com</p>
        </a>
        <a href="https://www.github.com/markiesch">
          <svg viewBox="0 0 384 512">
            <path
              d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
            ></path>
          </svg>
          <p>The Netherlands</p>
        </a>
      </div>
    </div>
    <form>
      <div class="input--container">
        <label for="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label for="email">E-mail</label>
        <input type="text" id="email" />
      </div>
      <label for="message">Message</label>
      <textarea id="message"></textarea>
    </form>
  </section>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import Breadcrumbs from "@/components/Breadcrumbs.vue";

@Options({
  components: {
    Breadcrumbs,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.contact--section {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  & > div {
    flex: 1 1 500px;
  }

  .link--container {
    margin-top: 2rem;
    display: inline-block;

    a {
      display: grid;
      align-items: center;
      grid-template-columns: 50px 1fr;
      padding: 1rem;
      margin-bottom: 1rem;
      background-color: #f5f5f5;
      border-radius: 10px;
      border: 2px dotted transparent;
      transition: border 300ms ease;
    }

    a:hover {
      border: 2px dotted currentColor;
    }
  }

  svg {
    height: 1.5rem;
    display: flex;
    fill: var(--primary-color);
  }

  form {
    flex: 1 1 300px;
    padding: 2rem;
    border-radius: 10px;
    background-color: var(--primary-color);
    color: white;
  }

  label,
  input,
  textarea {
    display: block;
    outline: none;
    max-width: 100%;
    width: 15rem;
  }

  textarea {
    margin: 0 !important;
    max-width: 400px;
    height: 5rem;
    max-height: 15rem;
  }

  input,
  textarea {
    margin: 0.25em 0 1.5em 0;
    padding: 0.5em;
    border: none;
    border-radius: 5px;
    background-color: hsl(218, 34%, 15%);
    color: white;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-text-fill-color: white !important;
    transition: background-color 5000s ease-in-out 0s;
  }
}
</style>
