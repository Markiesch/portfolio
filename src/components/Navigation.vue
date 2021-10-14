<template>
  <header>
    <router-link to="/" exact class="logo--container">
      <img src="../assets/logo.png" alt="logo" />
    </router-link>
    <nav>
      <router-link to="/" exact>Home</router-link>
      <router-link to="/portfolio">Portfolio</router-link>
      <router-link to="/cv">Curriculum Vitae</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
}

.logo--container,
img {
  height: 100%;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

a {
  padding: 0.5rem;
  text-decoration: none;
  color: inherit;
}

.router-link-active {
  font-weight: bold;
}
</style>
