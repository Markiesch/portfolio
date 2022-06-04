<template>
  <div>
    <p class="background-text">developer</p>
    <section class="hero primary">
      <article>
        <img src="/assets/character.png" alt="character" />
        <p class="slide-in">Hi! I'm Mark👋,</p>
        <h1 class="slide-in header">I build awesome experiences</h1>
        <h2 class="slide-in subheader">a <span>Software Developer</span> with an eye for <span>UI design</span>. I am specialized in UI/UX design and responsive web development.</h2>
        <div class="slide-in cta">
          <NuxtLink class="portfolio--link" to="/portfolio">
            <svg viewBox="0 0 576 512">
              <path
                d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
              ></path>
            </svg>
            <span>View Projects</span>
          </NuxtLink>
          <NuxtLink to="/contact">
            <svg viewBox="0 0 24 24">
              <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
            </svg>
            <span>Contact me</span>
          </NuxtLink>
        </div>
      </article>
    </section>

    <section class="project--section">
      <div v-for="project of projects.slice(0, 3)">
        <NuxtLink class="image--container" :to="`/project/${project.name}`">
          <img :src="`/assets/mockups/${project.mockup}.png`" :alt="project.name" />
        </NuxtLink>
        <div class="project--information primary">
          <h2>{{ project.title }}</h2>
          <p>{{ project.description }}</p>
          <div class="link--container">
            <a :href="project.links[1].url" target="_blank" rel="noopener" class="learn__more--link">Learn more</a>
            <a :href="project.links[1].url" target="_blank" rel="noopener" class="demo--link">Visit website</a>
          </div>
        </div>
      </div>
      <div class="project--cta__container">
        <NuxtLink class="project--cta" to="/portfolio">
          All projects
          <svg viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>
    </section>

    <section class="about--section">
      <article class="image--container">
        <img src="/assets/character2.png" alt="character" />
      </article>
      <article>
        <p class="heading">Hey! I'm Mark👋,</p>
        <p>
          a 18 year old front-end development enthusiast with 2+ years of experience. I currently live and study in 's-Hertogenbosch, the Netherlands. Learning and working with front-end tools such as
          HTML, CSS, Javascript, and VueJS and backend technologies such as SQL and C# is daily business for me, but when I am not coding or shifting pixels around, I like to fill my free time by
          playing video games and basketball.
        </p>
      </article>
    </section>

    <section class="cta--section primary">
      <h2>Interested to work with me?</h2>
      <NuxtLink class="section--title" to="/contact">Let's work together</NuxtLink>
    </section>
  </div>
</template>

<script setup lang="ts">
import projects from "../utils/projects";
</script>

<style lang="scss">
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: calc(100vh - var(--nav-height));
  padding-bottom: var(--nav-height);

  img {
    height: 7.5rem;
    width: 7.5rem;
    display: block;
    margin: 0 auto;
    margin-bottom: 1rem;
  }

  p {
    color: var(--primary-color);
    background-color: hsla(220, 33%, 10%, 0.05);
    padding: 0.5rem 0.75rem;
    border-radius: 0.25rem;
    display: inline-block;
  }

  h1 {
    animation-delay: 300ms;
    max-width: 17ch;
    line-height: 1;
    padding: 1rem 0 2rem 0;
  }

  h2 {
    animation-delay: 600ms;
    padding-bottom: 2rem;
    line-height: 1.5;
    font-size: clamp(1rem, 0.8rem + 0.88vw, 1.6rem);
    font-weight: 400;
    max-width: 38ch;
    margin: 0 auto;

    span {
      font-weight: 600;
    }
  }

  .cta {
    animation-delay: 900ms;
  }

  a {
    font-size: 1.25rem;
    padding: 0.75rem 1rem;
    border-radius: 0.25rem;
    display: inline-flex;
    font-weight: 300;
    align-items: center;
    margin: 0.5rem;
  }

  svg {
    height: 1.5rem;
    margin-right: 0.5rem;
    fill: currentColor;
  }

  .portfolio--link {
    background-color: var(--primary-color);
    color: white;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  }
}

.project--section {
  & > div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 2rem 0;
  }

  .image--container,
  .project--information {
    flex: 1 1 400px;
  }

  .image--container {
    position: relative;
    transition: transform 300ms ease;

    &:hover {
      transform: rotateY(10deg) rotateX(10deg);
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
  }

  .project--information {
    padding: 3rem;
  }

  h2 {
    padding-bottom: 1.25rem;
  }

  p {
    color: var(--color);
    line-height: 1.4;
  }

  .link--container {
    margin-top: 2rem;

    a {
      font-size: 0.9rem;
      font-weight: 500;
      padding: 0.75rem 1rem;
      border-radius: 0.25rem;
      display: inline-block;

      margin-right: 1rem;
    }
  }

  .learn__more--link {
    background-color: var(--primary-color);
    color: white;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  }

  svg {
    height: 2rem;
    fill: var(--primary-color);
    color: var(--primary-color);
  }
}

.project--cta {
  color: var(--primary-color);
  font-size: 1.75rem;
  margin-top: 2rem;
  line-height: 1;
  font-weight: 400;
  border-radius: 0.25rem;
  display: inline-flex;
  align-items: center;

  svg {
    margin-left: 1rem;
    color: currentColor;
  }

  &__container {
    display: flex;
    justify-content: center;
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

    &:hover::after {
      content: "";
    }
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
    font-weight: 500;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 0 5rem 0;
  text-align: center;

  a {
    display: inline-block;
    margin-top: 1rem;
    font-size: clamp(1.5rem, 1.16rem + 1.48vw, 2.5rem);
    padding: 0.5rem 0.75rem;
    border-radius: 0.25rem;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
}

@media screen and (max-width: 55rem) {
  .hero {
    text-align: center;
  }

  .projects--container {
    grid-template-columns: 1fr;
  }

  .about--section {
    display: block;

    img {
      display: none;
    }
  }
}
</style>
