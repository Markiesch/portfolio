<template>
  <div>
    <section>
      <h3>Something went wrong...</h3>
      <h2 class="section--title">This page is still under construction</h2>
      <p class="text-body subtitle">Maybe you can find what you need here?</p>
      <p class="text-body button--container">
        <NuxtLink class="link" to="/">Home</NuxtLink>
        <NuxtLink class="link" to="/portfolio">Projects</NuxtLink>
        <NuxtLink class="link" to="/contact">Contact</NuxtLink>
      </p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/pages/404" as notFound;
</style>
