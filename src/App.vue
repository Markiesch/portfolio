<template>
  <Navigation />
  <main>
    <router-view />
  </main>
  <Footer />
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";

@Options({
  components: {
    Navigation,
    Footer,
  },
})
export default class App extends Vue {
  lastScrollTop = 0;

  mounted() {
    window.addEventListener("scroll", () => {
      const root = document.documentElement;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      root.style.setProperty("--header-transform", scrollTop > this.lastScrollTop && scrollTop ? "-100%" : "0");
      root.style.setProperty("--header-background", scrollTop > innerHeight / 4 ? "white" : "transparent");
      root.style.setProperty("--scroll", -scrollTop + "px");
      this.lastScrollTop = scrollTop;
    });
  }
}
</script>

<style lang="scss">
@import "styles/typography.scss";
@import "styles/components.scss";

:root {
  --primary-color: hsl(220, 33%, 10%);
  --secondary-color: hsl(220, 98%, 51%);
  --grey-color: hsla(0, 0%, 0%, 0.6);
  --header-height: 80px;
  --header-transform: 0;
  --scroll: 0px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

main {
  padding-top: var(--header-height);
}

nav,
section {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;
}

a {
  text-decoration: none;
  color: inherit;
}

@media print {
  header,
  h1,
  .contact--section {
    display: none;
  }

  section {
    text-align: center;
  }
}
</style>
