<template>
  <h1>Contact</h1>

  <Breadcrumbs>Contact</Breadcrumbs>
  <section>
    <div id="map"></div>
  </section>

  <section class="contact--section">
    <article>
      <form>
        <label for="name">Name</label>
        <input type="text" id="name" />

        <label for="email">Email</label>
        <input type="text" id="email" />

        <label for="name">Message</label>
        <textarea type="text" id="name" />

        <button>SEND MESSAGE</button>
      </form>
    </article>
    <article>
      <p>Hi</p>
    </article>
  </section>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import "mapbox-gl/dist/mapbox-gl.css";
import * as mapboxgl from "mapbox-gl";

export default class Home extends Vue {
  accessToken = process.env.VUE_APP_MAPBOX_KEY;
  zoom = 13;

  mounted() {
    const map = new mapboxgl.Map({
      accessToken: this.accessToken,
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [5.372594, 51.664729],
      zoom: this.zoom,
    });

    new mapboxgl.Marker().setLngLat([5.372594, 51.664729]).addTo(map);
  }
}
</script>

<style lang="scss" scoped>
#map {
  height: 400px;
  max-height: 60vh;
  background-color: #f5f5f5;
  border-radius: 1rem 1rem 0 0;
}

.contact--section {
  display: flex;
  flex-wrap: wrap;

  article {
    flex: 1 1 400px;
    width: 100%;
  }

  form {
    width: 100%;
  }
}

input,
label,
textarea {
  display: block;
  outline: none;
  border: none;
}

label {
  font-weight: 500;
  margin-top: 1em;
}

input,
textarea {
  padding: 0.5em;
  border: 1px solid rgba(120, 120, 120, 0.4);
  border-radius: 5px;
  width: 200px;
}

textarea {
  margin: 0 !important;
  max-width: 100%;
  height: 4rem;
  max-height: 200px;
}

button {
  margin-top: 1rem;
}
</style>
