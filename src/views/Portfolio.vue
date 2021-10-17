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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 20px;

  article {
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
