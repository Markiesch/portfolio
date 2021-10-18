<template>
  <h1>Portfolio</h1>

  <Breadcrumbs>{{ project ? project.title : "Project" }}</Breadcrumbs>
  <section v-if="project">
    <article v-for="(image, index) of project.gallery" :key="index">
      <img :src="require(`@/assets/projects/${project.name}/${image}.png`)" alt="" />
    </article>
  </section>
  <section v-else>
    <h2>404 - Couldn't find any project named {{ param }}</h2>
  </section>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import Projects, { IProjects } from "@/utils/projects";

@Options({
  components: {
    Breadcrumbs,
  },
  prop: {
    project: String,
  },
})
export default class Home extends Vue {
  param: string = "";
  project: IProjects | null = null;

  mounted() {
    this.param = this.$route.params.project.toString();
    const paramProject = this.param.toLowerCase();

    let project = Projects.find(({ name }) => {
      name = name.toLowerCase();
      return name === paramProject || name.includes(paramProject);
    });

    this.project = project ?? null;
  }
}
</script>

<style lang="scss" scoped>
section {
  article {
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 1rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);

    img {
      width: 100%;
      transition: transform 300ms ease;
      display: block;
    }
  }
}
</style>
