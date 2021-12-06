<template>
  <article class="mockup--container">
    <router-link :to="`/project/${project.name}`">
      <img :src="require(`@/assets/mockups/${project.mockup}.png`)" alt="Project" />
    </router-link>
    <div class="details">
      <div>
        <p>/ {{ index + 1 < 10 ? "0" + (index + 1) : index + 1 }}</p>
      </div>
      <div>
        <p class="section--title">{{ project.title }}</p>
        <p class="project--date">{{ project.date }}</p>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import { IProjects } from "@/utils/projects";
defineProps<{ project: IProjects; index: number }>();
</script>

<style lang="scss">
.mockup--container {
  margin: 0.5rem;
  overflow: hidden;
  border-radius: 0.5rem;
  background-color: hsla(220, 33%, 10%, 0.075);
  box-shadow: 0.5rem 0.5rem 2rem rgba(0, 0, 0, 0.05);

  img {
    width: 100%;
    padding: 2.5rem 1.5rem;
    display: block;
    transition: transform 300ms ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  .details {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    text-align: right;
    padding: 1rem;
  }

  .project--date {
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }
}
</style>
