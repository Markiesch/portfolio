<template>
  <h1>Portfolio</h1>

  <Breadcrumbs>Portfolio</Breadcrumbs>

  <section class="project--section">
    <article v-for="(project, index) of projects" :key="index">
      <router-link :to="`/project/${project.name}`">
        <img :src="require(`@/assets/${project.mockup ? 'mockups/' + project.mockup : 'projects/' + project.name + '/' + project.gallery[0]}.png`)" :alt="project.title" />
      </router-link>
    </article>
    <!-- An empty article tag to avoid images taking up the full width -->
    <article></article>
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
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  article {
    flex: 1 1 500px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.75rem;

    img {
      width: 100%;
      transition: transform 300ms ease;
      display: block;
      border-radius: 0.75rem;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }
}
</style>
