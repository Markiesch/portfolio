<template>
  <h1>developer</h1>
  <section class="hero">
    <div>
      <h3>JUNIOR SOFTWARE DEVELOPER</h3>
      <h2>I Build Awesome Experience</h2>
      <router-link to="/portfolio">View Projects</router-link> -
      <router-link to="/">Contact me</router-link>
    </div>
    <div>
      <img src="../assets/character.png" alt="character" />
    </div>
  </section>
  <section class="project--section">
    <div>
      <h3>FEATURED PROJECT</h3>
      <h2>Praktijk Opdracht</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A repudiandae, ab dicta illo quas quidem qui ipsam in repellendus facere?</p>
    </div>
    <div>
      <img src="@/assets/mockups/dentist.png" alt="Project" />
    </div>
  </section>
  <section class="contact--section">
    <h2>Interested to work with me?</h2>
    <button><span>let's talk</span></button>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  min-height: 100vh;
  padding-bottom: var(--header-height);

  div {
    flex: 1 1 400px;
  }

  div + div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    max-width: 450px;
    width: 90%;
  }
}

h2 {
  margin-bottom: 0.5em;
}

.project--section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;

  & > div {
    flex: 1 1 400px;
  }

  img {
    width: 100%;
    display: block;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
}

.contact--section {
  text-align: center;
}

@media screen and (max-width: 55rem) {
  .hero {
    text-align: center;
  }
}
</style>
