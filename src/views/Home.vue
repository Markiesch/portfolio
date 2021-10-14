<template>
  <main>
    <h1 :style="`top: -${offsetY / 2}px`">developer</h1>
    <section class="hero">
      <div>
        <h6>JUNIOR SOFTWARE DEVELOPER</h6>
        <h2>I Build Awesome Experience</h2>
        <router-link to="/portfolio">View Projects</router-link> -
        <router-link to="/contact">Contact me</router-link>
      </div>
      <div>
        <img src="../assets/character.png" alt="character" />
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import App from "../App.vue";

@Component
export default class Home extends App {}
</script>

<style scoped>
.hero {
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  min-height: 100vh;
}

.hero div {
  flex: 1 1 400px;
}

.hero div + div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero img {
  max-height: 400px;
  height: 100%;
}

h2 {
  margin-bottom: 0.5em;
}
</style>
