<template>
  <h1>Portfolio</h1>

  <Breadcrumbs>{{ project?.title }}</Breadcrumbs>
  <section class="project" v-if="project">
    <div class="project--information">
      <div>
        <h3>MY ROLE</h3>
        <p v-for="(role, index) of project.roles" :key="index">{{ role }}</p>

        <h3>CLIENT</h3>
        <p>{{ project.client }}</p>

        <h3>YEAR</h3>
        <p>{{ project.date }}</p>

        <h3>LINKS & RESOURCES</h3>
        <p>{{ project.links }}</p>
      </div>
      <div>
        <p>{{ project?.description }}</p>
      </div>
    </div>

    <article v-for="(image, index) of project.gallery" :key="index">
      <img :src="require(`@/assets/projects/${project.name}/${image}.png`)" alt="" />
    </article>
  </section>
  <section v-else>
    <h2>404 - Couldn't find any project named {{ param }}</h2>
  </section>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import Projects, { IProjects } from "@/utils/projects";

export default class Home extends Vue {
  param = "";
  project: IProjects | null = null;

  mounted() {
    this.param = this.$route.params.project.toString();
    const paramProject = this.param.toLowerCase();

    let project = Projects.find(({ name }) => {
      name = name.toLowerCase();
      return name === paramProject || name.includes(paramProject);
    });

    this.project = project || null;
  }
}
</script>

<style lang="scss" scoped>
.project {
  &--information {
    padding-bottom: 5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    & > div {
      flex: 1 1 400px;
    }

    h3 {
      font-size: 1rem;
    }

    p + h3 {
      margin-top: 1rem;
    }
  }

  article {
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 1rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);

    img {
      width: 100%;
      transition: transform 300ms ease;
      display: block;
    }
  }
}
</style>
