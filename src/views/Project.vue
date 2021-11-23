<template>
  <p class="background-text">Portfolio</p>

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
        <p v-for="(link, index) of project.links" :key="index">
          <a :href="link.url" target="_blank" rel="noopener">{{ link.name }}</a>
        </p>
      </div>
      <div>
        <p>{{ project.description }}</p>
      </div>
    </div>

    <article v-for="(image, index) of project.gallery" :key="index">
      <img :src="require(`@/assets/projects/${project.name}/${image}.png`)" alt="" />
    </article>
  </section>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import projects, { IProjects } from "../utils/projects";

export default class Home extends Vue {
  project: IProjects | null = null;

  mounted() {
    const paramProject = this.$route.params.project.toString().toLowerCase();
    this.project = projects.find(({ name }) => name.includes(paramProject)) || null;

    if (!this.project) this.$router.push("/404");
  }
}
</script>

<style lang="scss" scoped>
.project {
  &--information {
    padding-bottom: 5rem;
    display: flex;
    flex-wrap: wrap;

    & > div {
      flex: 1 1 25rem;
    }

    h3 {
      font-size: 1rem;
    }

    p + h3 {
      margin-top: 1rem;
    }
  }

  article {
    border-radius: 0.75rem;
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
