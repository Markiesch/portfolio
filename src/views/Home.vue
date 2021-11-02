<template>
  <h1>developer</h1>
  <section class="hero">
    <article>
      <h3>JUNIOR SOFTWARE DEVELOPER</h3>
      <h2>
        <span v-for="(letter, index) of 'I build awesome experience'" :key="index">
          {{ letter }}
        </span>
      </h2>
      <router-link to="/portfolio">View Projects</router-link> -
      <router-link to="/">Contact me</router-link>
    </article>
    <article>
      <img src="../assets/character.png" alt="character" />
    </article>
  </section>
  <section class="project--section">
    <article>
      <h3>FEATURED PROJECT</h3>
      <h2>{{ projects[0].title }}</h2>
      <p>{{ projects[0].description }}</p>
    </article>
    <article>
      <img src="@/assets/mockups/dentist.png" alt="Project" />
    </article>
  </section>
  <section class="about--section">
    <article></article>
    <article>
      <p>Hey! I am Mark Schuurmans,</p>
      <p>
        a 17 years old student at the Koning Willen I College, where I study to become a Software Developer. I am currently in my first year of this 4-year-old BOL education. I am currently working
        with HTML, CSS, Javascript, PHP, SQL, and VueJS. But when I am not coding or shifting pixels around, I fill my free time by playing video games and basketball.
      </p>
    </article>
  </section>
  <section class="contact--section">
    <h2>Interested to work with me?</h2>
    <button>let's talk</button>
  </section>
  <canvas></canvas>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import Portfolio from "@/utils/projects";

export default class Home extends Vue {
  projects = Portfolio;

  mounted() {
    const canvas = document.querySelector("canvas")!;
    const ctx = canvas.getContext("2d");
    const targets = Array.from(document.querySelectorAll(".hero span"));
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    let left = false;
    let forwards = false;
    let backwards = false;
    let right = false;

    class Player {
      velocity = 5;
      radius = 20;

      constructor(public x: number, public y: number) {
        this.draw();
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = "#550055";
        ctx.fill();
      }

      update() {
        this.draw();
        if (left) this.x -= this.velocity;
        if (right) this.x += this.velocity;
        if (forwards) this.y -= this.velocity;
        if (backwards) this.y += this.velocity;
      }
    }

    const player = new Player(40, 40);

    class Projectile {
      velocity = -5;
      radius = 10;

      constructor(public x: number, public y: number) {
        this.draw();
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = "#550055";
        ctx.fill();
      }

      update() {
        this.draw();
        this.y += this.velocity;
      }
    }

    let projectiles: Projectile[] = [];

    for (const target of targets) {
      // Hide all `empty` elements by default to avoid invisible targets
      if (!target.innerHTML.replaceAll(" ", "")) target.classList.add("hide");
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
      player.update();

      projectiles.forEach((projectile, index) => {
        projectile.update();

        for (const target of targets) {
          if (target.classList.contains("hide")) continue;

          // @ts-ignore
          const centerX = target.getBoundingClientRect().left + target.offsetWidth / 2;
          // @ts-ignore
          const centerY = target.getBoundingClientRect().top + target.offsetHeight / 2;
          const distance = Math.hypot(projectile.x - centerX, projectile.y - centerY);

          // @ts-ignore
          if (distance - projectile.radius - target.offsetWidth / 2 < 1) {
            setTimeout(() => {
              console.log(target.innerHTML);
              projectiles.splice(index, 1);
              target.classList.add("hide");
            }, 0);
          }
        }
      });
    }
    animate();

    addEventListener("click", (e) => {
      projectiles.push(new Projectile(e.clientX, e.clientY));
    });

    addEventListener("keydown", (e) => {
      if (e.key === "a") left = true;
      if (e.key === "w") forwards = true;
      if (e.key === "s") backwards = true;
      if (e.key === "d") right = true;
    });
    addEventListener("keyup", (e) => {
      if (e.key === "a") left = false;
      if (e.key === "w") forwards = false;
      if (e.key === "s") backwards = false;
      if (e.key === "d") right = false;
      console.log(e);
    });
  }
}
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  min-height: 100vh;
  padding-bottom: var(--header-height);

  article {
    flex: 1 1 400px;
  }

  article + article {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    max-width: 25rem;
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
  margin-bottom: 5rem;

  article {
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
  margin: 10rem auto;
  text-align: center;
}

@media screen and (max-width: 55rem) {
  .hero {
    text-align: center;
  }
}

canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
}

.hide {
  opacity: 0;
}
</style>
