<template>
  <div>
    <p class="background-text">Portfolio</p>
    <Breadcrumbs>Portfolio</Breadcrumbs>

    <section class="projects--section">
      <template v-for="(project, index) of projects" :key="index">
        <ProjectMockup :project="project" :index="index" class="slide-in" :style="`animation-delay: ${index * 200}ms`" />
      </template>
    </section>
  </div>
</template>

<script lang="ts" setup>
import ProjectMockup from "../components/ProjectMockup.vue";
import projects from "../utils/projects";
</script>

<style lang="scss">
.projects--section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  padding: 0.5rem;
}

@media screen and (max-width: 40rem) {
  .projects--section {
    grid-template-columns: 1fr;
  }
}
</style>
