<template>
  <h1>Portfolio</h1>
  <section class="project--section">
    <article v-for="(project, index) of projects" :key="index">
      <router-link to="/">
        <img :src="require(`@/assets/mockups/${project.image}.png`)" :alt="project.title" />
      </router-link>
    </article>
  </section>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import Projects from "@/utils/projects";

export default class Home extends Vue {
  projects = Projects;
}
</script>

<style lang="scss" scoped>
.project--section {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  article {
    flex: 1 1 500px;
    border-radius: 10px;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
