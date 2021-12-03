<template>
  <header class="navigation">
    <nav>
      <router-link to="/" class="logo--container" aria-label="Logo">
        <svg viewBox="0, 0, 400,400">
          <path
            d="M260.881 72.516 C 250.525 93.531,242.051 112.199,242.051 114.003 C 242.051 117.628,357.186 348.718,358.992 348.718 C 359.614 348.718,368.712 331.334,379.210 310.086 L 398.299 271.455 339.005 152.882 L 279.712 34.309 260.881 72.516 M101.806 75.362 L 82.565 113.802 141.282 231.260 C 173.577 295.862,200.481 348.718,201.069 348.718 C 201.657 348.718,210.754 331.409,221.285 310.253 L 240.432 271.789 228.217 247.176 C 181.768 153.586,122.847 36.923,122.028 36.923 C 121.488 36.923,112.388 54.221,101.806 75.362 M22.882 233.174 L 3.764 271.477 22.846 310.097 C 33.342 331.339,42.444 348.718,43.073 348.718 C 43.702 348.718,52.780 331.410,63.245 310.256 L 82.274 271.795 63.278 233.333 C 52.831 212.179,43.769 194.872,43.141 194.872 C 42.514 194.872,33.397 212.108,22.882 233.174 "
          ></path>
        </svg>
      </router-link>
      <div class="link--container">
        <router-link to="/">Home</router-link>
        <router-link to="/portfolio">Portfolio</router-link>
        <router-link to="/Resume">Resume</router-link>
      </div>
      <div @click="menuOpen = !menuOpen" class="burger--menu__container">
        <div class="burger--menu"></div>
      </div>
      <div class="contact--container">
        <router-link to="/contact">Contact</router-link>
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
  width: 100%;
  height: var(--nav-height);

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

  svg {
    height: 100%;
    fill: var(--primary-color);
  }

  .link--container a {
    padding: 1rem;
    color: var(--primary-color);
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

  .burger--menu__container:hover .burger--menu::before {
    transform: translateY(-0.9rem);
  }

  .burger--menu__container:hover .burger--menu::after {
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
  overflow: hidden;
  transition: transform 300ms ease;
  transform: translateY(-100%);

  &.open {
    transform: translateY(0);
  }

  header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: var(--nav-height);
    width: 100%;
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
    display: block;
    padding: 0.5rem;
    text-align: center;
    font-size: clamp(2rem, 1.33rem + 2.96vw, 4rem);
    font-weight: 600;
    line-height: 1;
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
  display: none;
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

  .burger--menu__container {
    display: flex;
  }

  .contact--container {
    display: none;
  }
}
</style>
