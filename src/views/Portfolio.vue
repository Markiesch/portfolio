<template>
  <h1>Portfolio</h1>

  <Breadcrumbs>Portfolio</Breadcrumbs>

  <section class="project--section">
    <article v-for="(project, index) of projects" :key="index">
      <router-link :to="`/project/${project.name}`">
        <img :src="require(`@/assets/mockups/${project.mockup}.png`)" :alt="project.title" />
      </router-link>
    </article>
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
.project--section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  padding: 0.5rem;

  article {
    margin: 0.5rem;
    border-radius: 0.75rem;
    overflow: hidden;

    img {
      display: block;
      width: 100%;
      transition: transform 300ms ease;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }
}

@media screen and (max-width: 40rem) {
  .project--section {
    grid-template-columns: 1fr;
  }
}
</style>
