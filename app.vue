<template>
  <Html lang="en">
    <Head>
      <Title>Mark Schuurmans - Portfolio Developer and Designer</Title>
      <Meta name="author" content="Mark Schuurmans" />
      <Meta
        name="description"
        content="I'm Mark Schuurmans, a software developer that develops creative web-applications. Specialized in frontend and backend development and UI/UX design."
      />
      <Meta
        name="keywords"
        content="web, website, responsive, developer, frontend, backend, portfolio, projects, showcase"
      />

      <Meta name="og:title" content="Portfolio - Mark Schuurmans" />
      <Meta name="og:type" content="website" />
      <Meta name="og:url" content="https://www.markschuurmans.nl" />
      <Meta
        name="og:image"
        content="https://www.markschuurmans.nl/assets/mockups/home-page.png"
      />
      <Link rel="canonical" href="https://www.markschuurmans.nl" />

      <!-- Google Font imports -->
      <Link rel="preconnect" href="https://fonts.googleapis.com" />
      <Link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin="anonymous"
      />
      <Link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
        onload="this.onload=null;this.rel='stylesheet'"
        as="style"
      />

      <!-- Favicon configuration -->
      <Link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <Link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <Link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <Link rel="manifest" href="/site.webmanifest" />
      <Link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <Meta name="msapplication-TileColor" content="#da532c" />
      <Meta name="theme-color" content="#ffffff" />
    </Head>
  </Html>

  <div id="app">
    <Navigation />
    <main>
      <NuxtPage />
    </main>
    <mobile-navigation />
    <Footer />
  </div>
</template>

<style lang="scss">
@use "@/styles/base/reset";
@use "@/styles/base/util";

#app {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
</style>
