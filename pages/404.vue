<template>
  <div>
    <section>
      <h3>Something went wrong...</h3>
      <h2 class="section--title">Oops! We couldn't find that page.</h2>
      <p class="text-body subtitle">Maybe you can find what you need here?</p>
      <p class="text-body button--container">
        <NuxtLink class="link" to="/portfolio">projects</NuxtLink>
        <NuxtLink class="link" to="/resume">resume</NuxtLink>
        <NuxtLink class="link" to="/contact">contact</NuxtLink>
      </p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/pages/404" as notFound;
</style>
