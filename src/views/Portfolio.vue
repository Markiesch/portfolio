<template>
  <p class="background-text">Portfolio</p>
  <Breadcrumbs>Portfolio</Breadcrumbs>

  <section class="projects--section">
    <template v-for="(project, index) of projects" :key="index">
      <ProjectMockup :project="project" :index="index" />
    </template>
  </section>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import ProjectMockup from "@/components/ProjectMockup.vue";
import portfolio from "@/utils/projects";

@Options({
  components: {
    ProjectMockup,
  },
})
export default class Home extends Vue {
  projects = portfolio;
}
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
