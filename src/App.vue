<template>
  <div id="app">
    <Navigation />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navigation from "./components/Navigation.vue";

@Component({
  components: { Navigation },
})
export default class App extends Vue {
  offsetY = 0;

  mounted() {
    addEventListener("scroll", () => {
      this.offsetY = pageYOffset;
    });
    console.log(window);
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

:root {
  --primary-color: hsl(220, 33%, 9%);
  --grey-color: hsl(213, 5%, 39%);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", Arial, sans-serif;
}

section,
header {
  max-width: 1440px;
  margin: 0 auto;
}

main {
  padding: 150px 0;
}

a {
  text-decoration: none;
  color: inherit;
}

h1 {
  position: fixed;
  top: 10vh;
  left: 50%;
  transform: translateX(-50%);
  font-size: 18vw;
  line-height: 1;
  color: white;
  text-shadow: 0.5rem 0.5rem 2rem rgba(0, 0, 0, 0.03);
  z-index: -1;
  pointer-events: none;
}

h2 {
  font-size: clamp(40px, 4.2vw, 80px);
  line-height: 1;
  color: var(--primary-color);
}

h6 {
  font-size: clamp(14px, 2.1vw, 20px);
  color: var(--grey-color);
  letter-spacing: 5px;
  font-weight: 400;
}
</style>
