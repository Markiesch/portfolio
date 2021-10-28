<template>
  <h1>developer</h1>
  <section class="hero">
    <article>
      <h3>JUNIOR SOFTWARE DEVELOPER</h3>
      <h2>I Build Awesome Experience</h2>
      <router-link to="/portfolio">View Projects</router-link> -
      <router-link to="/">Contact me</router-link>
    </article>
    <article>
      <img src="../assets/character.png" alt="character" />
    </article>
  </section>
  <section class="project--section">
    <div>
      <h3>FEATURED PROJECT</h3>
      <h2>{{ projects[0].title }}</h2>
      <p>{{ projects[0].description }}</p>
    </div>
    <div>
      <img src="@/assets/mockups/dentist.png" alt="Project" />
    </div>
  </section>
  <section class="contact--section">
    <h2>Interested to work with me?</h2>
    <button>let's talk</button>
  </section>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import Portfolio from "@/utils/projects";

export default class Home extends Vue {
  projects = Portfolio;
}
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  min-height: 100vh;
  padding-bottom: var(--header-height);

  article {
    flex: 1 1 400px;
  }

  article + article {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    max-width: 25rem;
    width: 90%;
  }
}

h2 {
  margin-bottom: 0.5em;
}

.project--section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;

  & > div {
    flex: 1 1 400px;
  }

  img {
    width: 100%;
    display: block;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
}

.contact--section {
  margin: 10rem auto;
  text-align: center;
}

@media screen and (max-width: 55rem) {
  .hero {
    text-align: center;
  }
}
</style>
