<script setup lang="ts">
import projects from "../utils/projects";
</script>

<template>
  <div>
    <section class="hero primary">
      <article>
        <img src="/assets/character.png" alt="character" />
        <span class="subtitle text-body slide-in">Hi! I'm Mark👋,</span>
        <h1 class="headline slide-in">I build awesome experiences</h1>
        <p class="text-body slide-in">a <span>Software Developer</span> with an eye for <span>UI design</span>. I am specialized in UI/UX design and responsive web development.</p>
        <div class="slide-in cta">
          <NuxtLink class="portfolio--link" to="/portfolio">
            <svg viewBox="0 0 576 512">
              <path
                d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
              ></path>
            </svg>
            <span>View Projects</span>
          </NuxtLink>
          <NuxtLink class="contact--link" to="/contact">
            <svg viewBox="0 0 24 24">
              <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
            </svg>
            <span>Contact me</span>
          </NuxtLink>
        </div>
      </article>
    </section>

    <section class="container project--section">
      <div v-for="project of projects.slice(0, 3)">
        <NuxtLink class="image--container" :to="`/project/${project.name}`">
          <img :src="`/assets/mockups/${project.mockup}.png`" :alt="project.name" />
        </NuxtLink>
        <div class="project--information primary">
          <h2>{{ project.title }}</h2>
          <p class="text-body">{{ project.description }}</p>
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

    <section class="container about--section">
      <article class="image--container">
        <img src="/assets/character2.png" alt="character" />
      </article>
      <article>
        <p class="heading">Hey! I'm Mark👋,</p>
        <p class="text-body">
          a 18 year old front-end development enthusiast with 2+ years of experience. I currently live and study in 's-Hertogenbosch, the Netherlands. Learning and working with front-end tools such as
          HTML, CSS, Javascript, and VueJS and backend technologies such as SQL and C# is daily business for me, but when I am not coding or shifting pixels around, I like to fill my free time by
          playing video games and basketball.
        </p>
      </article>
    </section>

    <section class="container cta--section primary">
      <h2>Interested to work with me?</h2>
      <NuxtLink class="section--title" to="/contact">Let's work together</NuxtLink>
    </section>
  </div>
</template>

<style lang="scss">
@use "@/styles/pages/index";
</style>
