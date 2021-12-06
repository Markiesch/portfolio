<template>
  <Navigation />
  <main>
    <router-view />
  </main>
  <mobile-navigation />
  <Footer />
</template>

<script lang="ts" setup>
import Navigation from "./components/Navigation.vue";
import MobileNavigation from "./components/MobileNavigation.vue";
import Footer from "./components/Footer.vue";

function updateScroll() {
  const root = document.documentElement;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  root.style.setProperty("--scroll", -scrollTop + "px");
}

updateScroll();
window.addEventListener("scroll", updateScroll);
</script>

<style lang="scss">
@import "styles/typography.scss";

:root {
  --primary-color: hsl(220, 33%, 10%);
  --secondary-color: hsl(220, 98%, 51%);
  --grey-color: hsla(0, 0%, 0%, 0.6);
  --nav-height: 5rem;
  --scroll: 0;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

nav,
section,
footer,
.menu header {
  max-width: 90rem;
  margin: 0 auto;
  padding: 0 1rem;
}

a {
  text-decoration: none;
  color: inherit;
}

.slide-in {
  animation: slide-in 600ms ease forwards;
  opacity: 0;
  transform: translateY(2rem);
}

@keyframes slide-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fade-in 600ms ease forwards;
  opacity: 0;
}

@keyframes fade-in {
  to {
    opacity: 1;
  }
}
</style>
