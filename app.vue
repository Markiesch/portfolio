<template>
  <Head>
    <Title>Mark Schuurmans - Portfolio</Title>
    <Meta name="author" content="Mark Schuurmans" />
    <Meta name="description" content="I design and develop digital products" />
    <Meta name="keywords" content="web, website, responsive, developer, frontend, backend, portfolio, projects" />

    <!-- Google Font imports -->
    <Link rel="preconnect" href="https://fonts.googleapis.com" />
    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <Link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />

    <!-- Favicon configuration -->
    <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <Link rel="manifest" href="/site.webmanifest" />
    <Link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <Meta name="msapplication-TileColor" content="#da532c" />
    <Meta name="theme-color" content="#ffffff" />
  </Head>

  <Navigation />
  <main>
    <NuxtPage />
  </main>
  <mobile-navigation />
  <Footer />
</template>

<script lang="ts" setup>
useHead({
  htmlAttrs: {
    lang: "en",
  },
});

onMounted(() => {
  function updateScroll() {
    const root = document.documentElement;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    root.style.setProperty("--scroll", -scrollTop + "px");
  }

  updateScroll();
  window.addEventListener("scroll", updateScroll);
});
</script>

<style lang="scss">
@import "./assets/styles/typography.scss";

:root {
  --primary-color: hsl(220, 33%, 10%);
  --secondary-color: hsl(220, 98%, 51%);
  --grey-color: hsla(0, 0%, 0%, 0.6);
  --nav-height: 5rem;
  --scroll: -200vh;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  overflow-y: scroll;
}

nav,
section,
footer,
.menu header {
  max-width: 90rem;
  margin: 0 auto;
  padding: 0 1rem;
}

a {
  text-decoration: none;
  color: inherit;
}

.slide-in {
  animation: slide-in 600ms ease forwards;
  opacity: 0;
  transform: translateY(2rem);
}

@keyframes slide-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fade-in 600ms ease forwards;
  opacity: 0;
}

@keyframes fade-in {
  to {
    opacity: 1;
  }
}
</style>
