<template>
  <header class="navigation">
    <nav>
      <router-link to="/" exact class="logo--container">
        <img src="../assets/logo.png" alt="logo" />
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

  <div class="menu" :class="{ open: menuOpen }">
    <nav>
      <router-link to="/">home</router-link>
      <router-link to="/portfolio">portfolio</router-link>
      <router-link to="/resume">resume</router-link>
      <router-link to="/contact">contact</router-link>
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

  .logo--container,
  img {
    height: 100%;
  }

  nav {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .link--container {
    display: flex;
    gap: 2rem;
  }

  .burger--menu__container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 100%;
    cursor: pointer;

    .burger--menu::before,
    .burger--menu::after,
    .burger--menu {
      width: 2.5rem;
      height: 0.25rem;
      border-radius: 0.25rem;
      transition: transform 600ms ease, background-color 600ms ease;
      background-color: var(--primary-color);
    }

    .burger--menu::before,
    .burger--menu::after {
      content: "";
      position: absolute;
    }

    .burger--menu::before {
      transform: translateY(-0.75rem);
    }

    .burger--menu::after {
      transform: translateY(0.75rem);
    }

    &:hover .burger--menu::before {
      transform: translateY(-0.9rem);
    }

    &:hover .burger--menu::after {
      transform: translateY(0.9rem);
    }
  }

  .router-link-active {
    font-weight: bold;
  }
}

.menu {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
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

  a {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    display: block;
    text-align: center;
    opacity: 0.4;
  }

  .router-link-active,
  a:hover {
    opacity: 1;
  }
}

@media screen and (max-width: 50rem) {
  .navigation {
    .link--container {
      display: none;
    }
  }
}
</style>
