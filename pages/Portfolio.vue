<template>
  <div>
    <Breadcrumbs>Portfolio</Breadcrumbs>

    <section class="container projects--section">
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

<style lang="scss" scoped>
@use "@/styles/pages/portfolio";
</style>
