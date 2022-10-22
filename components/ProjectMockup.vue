<template>
  <NuxtLink class="mockup--container" :to="`/project/${project.name}`">
    <img :src="`/assets/mockups/${project.mockup}.png`" alt="Project" />
    <div class="overlay"></div>
    <div class="details">
      <h2 class="section--title">{{ project.title }}</h2>
      <p class="about">{{ project.description }}</p>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { IProjects } from "../utils/projects";
defineProps<{ project: IProjects }>();
</script>

<style lang="scss">
.mockup--container {
  margin: 0.5rem;
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 0.5rem 0.5rem 2rem rgba(0, 0, 0, 0.05);
  position: relative;

  img {
    width: 100%;
    display: block;
    transition: transform 300ms ease;
  }

  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    pointer-events: none;
    transition: all 600ms ease;

    background: linear-gradient(
      180deg,
      rgba(17, 23, 34, 0.2) 33.75%,
      rgba(17, 23, 34, 0.8) 75.19%
    );

    opacity: 0.4;
  }

  &:hover .overlay {
    opacity: 1;
  }

  .details {
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 2rem;
    color: white;

    h2 {
      font-weight: 700;
    }
  }

  .about {
    padding-top: 1rem;
    max-height: 0;
    opacity: 0;
    transition: max-height 600ms ease, opacity 600ms ease;
  }

  &:hover .about {
    opacity: 1;
    max-height: 10rem;
  }
}
</style>
