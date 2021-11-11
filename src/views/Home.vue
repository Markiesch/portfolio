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
    <article>
      <h3>FEATURED PROJECT</h3>
      <h2>{{ projects[0].title }}</h2>
      <p>{{ projects[0].description }}</p>
    </article>
    <article>
      <img :src="require(`@/assets/mockups/${projects[0].mockup}.png`)" alt="Project" />
    </article>
  </section>
  <section class="about--section">
    <article></article>
    <article>
      <p>Hey! I am Mark Schuurmans,</p>
      <p>
        a 17 years old student at the Koning Willen I College, where I study to become a Software Developer. I am currently in my first year of this 4-year-old BOL education. I am currently working
        with HTML, CSS, Javascript, PHP, SQL, and VueJS. But when I am not coding or shifting pixels around, I fill my free time by playing video games and basketball.
      </p>
    </article>
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
  min-height: calc(100vh - var(--header-height));
  padding-bottom: var(--header-height);

  article {
    flex: 1 1 25rem;
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
  margin-bottom: 5rem;

  article {
    flex: 1 1 25rem;
  }

  img {
    width: 100%;
    display: block;
    box-shadow: 0.5rem 0.5rem 2rem rgba(0, 0, 0, 0.2);
    border-radius: 0.75rem;
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
