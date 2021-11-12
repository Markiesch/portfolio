<template>
  <section class="breadcrumbs--section">
    <div class="breadcrumbs">
      <router-link class="home--link" to="/">Home</router-link>
      <svg viewBox="0 0 192 512">
        <path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path>
      </svg>
      <span>
        <slot></slot>
      </span>
    </div>
    <h2><slot /></h2>
  </section>
</template>

<style lang="scss">
.breadcrumbs--section {
  margin: 3rem auto;

  .breadcrumbs {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    gap: 0.5rem;

    svg {
      height: 1rem;
      transition: transform 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .home--link {
      font-weight: 600;

      &:hover + svg {
        transform: rotate(180deg);
      }
    }

    span,
    svg {
      color: var(--grey-color);
      fill: var(--grey-color);
    }
  }
}
</style>
