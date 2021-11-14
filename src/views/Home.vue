<template>
  <p class="background-text">developer</p>
  <section class="hero">
    <article>
      <div class="image--container">
        <img src="../assets/character.png" alt="character" />
      </div>
      <p class="fade-in">Hi! I'm Mark👋,</p>
      <h1 class="fade-in header">I build awesome experience</h1>
      <div class="fade-in cta">
        <router-link class="portfolio--link" to="/portfolio">
          <svg viewBox="0 0 576 512" class="svg-inline--fa fa-eye fa-w-18 fa-9x">
            <path
              d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
            ></path>
          </svg>
          <span>View Projects</span>
        </router-link>
        <router-link to="/">
          <svg viewBox="0 0 24 24">
            <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
          </svg>
          <span>Contact me</span>
        </router-link>
      </div>
    </article>
  </section>

  <section class="project--section">
    <h2 class="project--title">Projects</h2>
    <div class="projects--container">
      <article v-for="(project, index) of projects" :key="index">
        <router-link :to="`/project/${project.name}`">
          <img :src="require(`@/assets/mockups/${project.mockup}.png`)" alt="Project" />
        </router-link>
        <div class="overlay">
          <p>{{ project.date }}</p>
          <h2>{{ project.title }}</h2>
        </div>
      </article>
    </div>
  </section>

  <section class="about--section">
    <article class="image--container">
      <img src="../assets/character2.png" alt="character" />
    </article>
    <article>
      <p class="heading">Hey! I'm Mark👋,</p>
      <p>
        a 17 year old front-end development enthusiast with 2+ years of experience. I currently live and study in 's-Hertogenbosch, the Netherlands. Learning and working with HTML, CSS, Javascript,
        PHP, SQL, and VueJS is daily business for me, but when I am not coding or shifting pixels around, I like to fill my free time by playing video games and basketball.
      </p>
      <router-link to="/portfolio"></router-link>
    </article>
  </section>

  <section class="cta--section">
    <h2>Interested to work with me?</h2>
    <router-link to="/contact">Let's work together</router-link>
  </section>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import portfolio from "@/utils/projects";

export default class Home extends Vue {
  projects = portfolio;
}
</script>

<style lang="scss">
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  min-height: calc(100vh - var(--nav-height));
  padding-bottom: var(--nav-height);

  .image--container {
    height: 8rem;
    margin-bottom: 1rem;
    display: block;
  }

  img {
    height: 100%;
  }

  p {
    color: var(--primary-color);
    background-color: hsla(220, 33%, 10%, 0.05);
    padding: 0.5rem 0.75rem;
    border-radius: 0.25rem;
    display: inline-block;
    margin: 0 auto;
  }

  h1 {
    animation-delay: 300ms;
    max-width: 17ch;
    line-height: 1;
    margin: 1rem auto 3rem auto;
  }

  .cta {
    animation-delay: 600ms;
  }

  a {
    font-size: 1.25rem;
    padding: 0.75rem;
    border-radius: 0.25rem;
    display: inline-flex;
    font-weight: 300;
    align-items: center;
  }

  svg {
    height: 1.5rem;
    margin-right: 0.5rem;
    fill: currentColor;
  }

  .portfolio--link {
    background-color: var(--primary-color);
    margin-right: 1rem;
    color: white;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  }
}

.project--section {
  align-items: center;
  padding: 0;
  overflow: hidden;

  .project--title {
    margin: 0 0 2rem 1rem;
  }

  .projects--container {
    position: relative;
    display: flex;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 5%;
      height: 100%;
      top: 0;
    }

    &::after {
      right: 0;
      background: linear-gradient(to right, transparent, #00000099);
    }

    p {
      text-transform: uppercase;
      letter-spacing: 0.25rem;
      color: #f5f6f8;
      font-weight: 300;
    }

    h2 {
      margin-bottom: 1rem;
      color: white;
    }
  }

  article {
    position: relative;
    margin: 0 1rem;
    flex: 0 0 40%;
    border-radius: 0.5rem;
    background-color: #242527;
    box-shadow: 0.5rem 0.5rem 2rem rgba(0, 0, 0, 0.2);
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    padding: 2rem;
    flex-direction: column;
    justify-content: space-between;
    pointer-events: none;
  }

  img {
    width: 100%;
    display: block;
    transition: transform 300ms ease;

    &:hover {
      transform: scale(1.025);
    }
  }
}

.about--section {
  display: grid;
  align-items: center;
  padding: 5rem 0;
  min-height: 60vh;
  grid-template-columns: 1fr auto;
  color: var(--primary-color);

  article {
    padding: 0 1rem;
  }

  .image--container {
    width: 25rem;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    max-width: 15rem;
    width: 90%;
  }

  .heading {
    background-color: var(--primary-color);
    font-size: 1rem;
    display: inline-block;
    padding: 1em 1.25em;
    line-height: 1;
    margin-bottom: 1rem;
    color: white;
    font-weight: 300;
    position: relative;
    border-radius: 0.25rem;

    &::after {
      content: "";
      position: absolute;
      right: 100%;
      top: 50%;
      transform: translateY(-50%);
      border: 0.5rem solid transparent;
      border-right-color: var(--primary-color);
    }
  }

  p {
    font-weight: 400;
    line-height: 1.5;
  }
}

.cta--section {
  padding-bottom: 5rem;
  text-align: center;

  a {
    display: inline-block;
    margin-top: 2rem;
    font-size: 3rem;
    padding: 0.5rem 0.75rem;
    border-radius: 0.25rem;
    font-weight: 500;
    color: var(--primary-color);
    text-decoration: underline;
  }
}

@media screen and (max-width: 55rem) {
  .hero {
    text-align: center;
  }

  .about--section {
    grid-template-columns: 1fr;

    img {
      display: none;
    }
  }
}
</style>
