<template>
  <header class="navigation">
    <nav>
      <router-link to="/" exact class="logo--container">
        <img src="../assets/logo.svg" alt="logo" />
      </router-link>
      <div class="link--container">
        <router-link to="/" exact>Home</router-link>
        <router-link to="/portfolio">Portfolio</router-link>
        <!-- <router-link to="/Resume">Resume</router-link> -->
        <router-link to="/contact">Contact</router-link>
      </div>
      <div @click="menuOpen = !menuOpen" class="burger--menu__container">
        <div class="burger--menu"></div>
      </div>
    </nav>
  </header>

  <div @click="menuOpen = !menuOpen" class="menu" :class="{ open: menuOpen }">
    <header>
      <div class="burger--menu__container">
        <div class="burger--menu"></div>
      </div>
    </header>
    <nav>
      <span>MENU</span>
      <router-link to="/">Home</router-link>
      <router-link to="/portfolio">Portfolio</router-link>
      <router-link to="/resume">Resume</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Navigation extends Vue {
  menuOpen = false;
}
</script>

<style lang="scss">
.navigation {
  position: fixed;
  z-index: 2;
  width: 100%;
  height: var(--header-height);
  transition: transform 300ms ease;
  transform: translateY(var(--header-transform));
  background-color: var(--header-background);

  nav {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo--container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90%;
  }

  img {
    height: 100%;
  }

  .link--container a {
    padding: 1rem;
  }

  .burger--menu::before,
  .burger--menu::after,
  .burger--menu {
    background-color: var(--primary-color);
  }

  .burger--menu::before {
    transform: translateY(-0.7rem);
  }

  .burger--menu::after {
    transform: translateY(0.7rem);
  }

  &:hover .burger--menu::before {
    transform: translateY(-0.9rem);
  }

  &:hover .burger--menu::after {
    transform: translateY(0.9rem);
  }

  .router-link-active {
    font-weight: bold;
  }
}

.menu {
  display: grid;
  grid-template-rows: auto 1fr;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  background-color: var(--primary-color);
  color: white;
  transition: transform 300ms ease;
  transform: translateY(-100%);

  &.open {
    transform: translateY(0);
  }

  header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    max-width: 1440px;
    padding: 0 1em;
    height: var(--header-height);
    width: 100%;
    margin: 0 auto;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  span {
    color: var(--grey-color);
    color: #ffffff99;
    letter-spacing: 0.25rem;
    margin-bottom: 1rem;
  }

  a {
    font-size: clamp(2rem, 1.33rem + 2.96vw, 4rem);
    font-weight: 600;
    line-height: 1;
    padding: 0.5rem;
    display: block;
    text-align: center;
    opacity: 0.4;
    transition: opacity 300ms ease;
  }

  .router-link-active,
  a:hover {
    opacity: 1;
  }

  .burger--menu::before,
  .burger--menu {
    background-color: white;
  }

  .burger--menu {
    transform: rotate(45deg);
  }

  .burger--menu::before {
    transform: rotate(90deg);
  }
}

/* ==========================
   ===== Hamburger icon =====
   ========================== */
.burger--menu__container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 100%;
  cursor: pointer;
}

.burger--menu::before,
.burger--menu::after,
.burger--menu {
  width: 2.75rem;
  height: 0.25rem;
  border-radius: 0.25rem;
  transition: transform 600ms ease;
}

.burger--menu::before,
.burger--menu::after {
  content: "";
  position: absolute;
}

@media screen and (max-width: 50rem) {
  .link--container {
    display: none;
  }
}
</style>
