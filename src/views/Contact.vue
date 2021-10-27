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
    <article class="information">
      <div>
        <svg viewBox="0 0 384 512">
          <path
            d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
          ></path>
        </svg>
        <a href="https://www.google.com/maps/place/Den+Dungen" target="_blank">Den Dungen, The Netherlands</a>
      </div>
      <div>
        <svg viewBox="0 0 512 512">
          <path
            d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
          ></path>
        </svg>
        <a href="tel:0632522052">+31 ....</a>
      </div>
      <div>
        <svg viewBox="0 0 512 512">
          <path
            d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
          ></path>
        </svg>
        <a href="mailto:marksmeel@gmail.com">marksmeel@gmail.com</a>
      </div>
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
  border-radius: 1rem;
}

.contact--section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 5rem;

  article {
    flex: 1 1 400px;
    width: 100%;
  }

  form {
    max-width: 300px;
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
    width: 100%;
  }

  textarea {
    margin: 0 !important;
    resize: vertical;
    height: 4rem;
    max-height: 200px;
  }

  button {
    margin-top: 1rem;
    display: block;
    width: 100%;
  }
}

.information {
  svg {
    height: 1.2rem;
  }

  div {
    display: grid;
    grid-template-columns: 3rem 1fr;
    margin-bottom: 0.75rem;
    align-items: center;
    gap: 1rem;
  }
}
</style>
