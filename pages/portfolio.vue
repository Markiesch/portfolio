<script lang="ts" setup>
import projects from "../utils/projects";
</script>

<template>
  <div>
    <Breadcrumbs>Portfolio</Breadcrumbs>

    <section class="container projects--section">
      <ProjectMockup
        v-for="(project, index) of projects"
        :key="project.name"
        :project="project"
        class="slide-in"
        :style="`animation-delay: ${index * 200}ms`"
      />
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/pages/portfolio";
</style>
