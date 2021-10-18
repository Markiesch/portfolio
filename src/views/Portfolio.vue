<template>
  <h1>Portfolio</h1>

  <Breadcrumbs>Portfolio</Breadcrumbs>

  <section class="project--section">
    <article v-for="(project, index) of projects" :key="index">
      <router-link :to="`/${project.name}`">
        <img :src="require(`@/assets/${project.mockup ? 'mockups/' + project.mockup : 'projects/' + project.name + '/' + project.gallery[0]}.png`)" :alt="project.title" />
      </router-link>
    </article>
  </section>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import Portfolio from "@/utils/projects";

@Options({
  components: {
    Breadcrumbs,
  },
})
export default class Home extends Vue {
  projects = Portfolio;
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

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 300ms ease;
    }

    &:hover img {
      transform: scale(1.1);
    }
  }
}
</style>
