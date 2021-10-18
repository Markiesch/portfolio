<template>
  <header>
    <nav>
      <router-link to="/" exact class="logo--container">
        <img src="../assets/logo.png" alt="logo" />
      </router-link>
      <div>
        <router-link to="/" exact>Home</router-link>
        <router-link to="/portfolio">Portfolio</router-link>
        <!-- <router-link to="/cv">Curriculum Vitae</router-link> -->
        <!-- <router-link to="/contact">Contact</router-link> -->
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
header {
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

  div {
    display: flex;
    gap: 2rem;
  }

  .router-link-active {
    font-weight: bold;
  }
}
</style>
