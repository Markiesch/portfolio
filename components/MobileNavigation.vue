<template>
  <header class="mobile--navigation">
    <nav>
      <NuxtLink to="/portfolio">
        <svg viewBox="0 0 640 512">
          <path
            d="M96 336V128H48c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48v-48H176c-44.11 0-80-35.89-80-80zM592 64H400L336 0H176c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48z"
          ></path>
        </svg>
        <span>portfolio</span>
      </NuxtLink>
      <NuxtLink to="/resume">
        <svg viewBox="0 0 384 512">
          <path
            d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm80 273.6v19.2c0 10.61-10.03 19.2-22.4 19.2H102.4c-12.37 0-22.4-8.6-22.4-19.2v-19.2c0-31.81 30.09-57.6 67.2-57.6h4.95c12.29 5.12 25.73 8 39.85 8s27.56-2.88 39.85-8h4.95c37.11 0 67.2 25.79 67.2 57.6zM192 320c-35.35 0-64-28.65-64-64s28.65-64 64-64 64 28.65 64 64-28.65 64-64 64zm185-215L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"
          ></path>
        </svg>
        <span>resume</span>
      </NuxtLink>
      <NuxtLink to="/contact">
        <svg viewBox="0 0 512 512">
          <path
            d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
          ></path>
        </svg>
        <span>contact</span>
      </NuxtLink>
    </nav>
  </header>
</template>

<style lang="scss">
.mobile--navigation {
  opacity: 0;
  pointer-events: none;

  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: var(--nav-height);
  background-color: var(--primary-color);
  color: white;

  nav {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  a {
    display: flex;
    color: white;
    font-size: 0.9rem;
    flex-direction: column;
  }

  svg {
    margin-bottom: 0.5rem;
    fill: white;
    height: 1.25rem;
  }

  .router-link-active {
    font-weight: bold;
  }
}

@media screen and (max-width: 50rem) {
  body {
    padding-bottom: var(--nav-height);
  }

  .mobile--navigation {
    opacity: 1;
    pointer-events: all;
  }
}
</style>
