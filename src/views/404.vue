<template>
  <p class="background-text">404</p>
  <section>
    <h3>Something went wrong...</h3>
    <h2 class="section--title">Oops! We couldn't find that page.</h2>
    <p class="subtitle">Maybe you can find what you need here?</p>
    <p class="button--container">
      <router-link class="link" to="/portfolio">projects</router-link>
      <router-link class="link" to="/resume">resume</router-link>
      <router-link class="link" to="/contact">contact</router-link>
    </p>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding: 10rem 0 10vh 0;
  text-align: center;

  h2 {
    margin: 0.25em 0 0.75em 0;
    line-height: 1.3;
  }

  .button--container {
    display: flex;
    margin-top: 1rem;
    justify-content: center;
    gap: 2rem;
  }

  .subtitle {
    font-weight: 500;
    text-decoration: underline;
  }

  // Link hover effect
  .link {
    position: relative;

    &::before,
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: var(--primary-color);
      opacity: 0;
      transform: translateY(0.25rem);
      transition-property: transform, opacity;
      transition-duration: 300ms;
    }

    &::after {
      bottom: -0.25rem;
      width: 70%;
      left: 15%;
    }

    &:hover::before,
    &:hover::after {
      opacity: 1;
      transform: translateY(0);
    }

    &::before,
    &:hover::after {
      transition-delay: 0.1s;
    }

    &:hover::before {
      transition-delay: 0s;
    }
  }
}
</style>
