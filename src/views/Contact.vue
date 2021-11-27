<template>
  <p class="background-text">Contact</p>

  <Breadcrumbs>Contact</Breadcrumbs>
  <section>
    <div id="map"></div>
  </section>

  <section class="contact--section">
    <article class="information">
      <h2 class="section--title">Get in touch</h2>
      <a href="https://www.google.com/maps/place/Den+Dungen" target="_blank">
        <svg viewBox="0 0 384 512">
          <path
            d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
          ></path>
        </svg>
        <span>Den Dungen, The Netherlands</span>
      </a>
      <a href="https://www.discord.com/" target="_blank">
        <svg viewBox="0 0 640 512">
          <path
            d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
          ></path>
        </svg>
        <span>Markiesch#4824</span>
      </a>
      <a href="mailto:marksmeel@gmail.com">
        <svg viewBox="0 0 512 512">
          <path
            d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
          ></path>
        </svg>
        <span>marksmeel@gmail.com</span>
      </a>
    </article>
    <article>
      <form @submit.prevent="submitForm" name="contact" method="POST" data-netlify-honeypot="bot-field" netlify>
        <div style="display: none;">
          <label>Do not fill this if you are a human: <input name="bot-field"/></label>
        </div>
        <div class="form">
          <div>
            <label for="name">Name</label>
            <input v-model="form.name" type="text" id="name" name="name" />
          </div>

          <div>
            <label for="email">Email</label>
            <input v-model="form.mail" type="text" id="email" name="mail" />
          </div>

          <div>
            <label for="name">Message</label>
            <textarea v-model="form.message" id="name" name="message" />
          </div>
        </div>

        <div v-show="error" class="alert">{{ error }}</div>
        <button class="send--button" type="submit">
          <svg viewBox="0 0 24 24">
            <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
          </svg>
          <span>SEND MESSAGE</span>
        </button>
      </form>
    </article>
  </section>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import "mapbox-gl/dist/mapbox-gl.css";
import { Map, Marker } from "mapbox-gl";

export default class Home extends Vue {
  form = {
    name: "",
    mail: "",
    message: "",
  };
  error = "";

  encode(data: any) {
    return Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join("&");
  }

  mounted() {
    const map = new Map({
      accessToken: process.env.VUE_APP_MAPBOX_KEY,
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11?optimize=true",
      center: [5.372594, 51.664729],
      zoom: 3,
    });

    map.on("load", () => {
      new Marker().setLngLat([5.372594, 51.664729]).addTo(map);
    });
  }

  async submitForm() {
    this.error = "";

    const mailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (this.form.name.length < 3) return (this.error = "Name must be atleast 2 characters long");
    if (!mailRegExp.test(this.form.mail.toLowerCase())) return (this.error = "Please enter a valid email");
    if (this.form.message.length < 20) return (this.error = "Please enter a message that has atleast 20 characters");

    // Passed checks
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({ "form-name": "contact", ...this.form }),
      });
      this.form = {
        name: "",
        mail: "",
        message: "",
      };
    } catch (error) {
      if (error instanceof Error) this.error = error.message;
    }
  }
}
</script>

<style lang="scss" scoped>
#map {
  height: 25rem;
  max-height: 50vh;
  background-color: #f5f5f5;
  border-radius: 1rem;
}

.contact--section {
  display: flex;
  flex-wrap: wrap;
  padding-top: 5rem;

  article {
    flex: 1 1 20rem;
    width: 100%;
  }

  .information {
    flex: 1 1 10rem;
  }

  svg {
    fill: var(--primary-color);
    height: 1.4rem;
    margin: 0 auto;
  }

  a {
    display: grid;
    grid-template-columns: 2rem 1fr;
    margin-top: 0.75rem;
    align-items: center;
    color: var(--primary-color);

    span {
      padding-left: 0.75rem;
    }
  }

  .form {
    display: flex;
    flex-wrap: wrap;

    div {
      flex: 1 1 20rem;
      margin-bottom: 1em;
      padding: 0.25rem;
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
    cursor: pointer;
    color: var(--primary-color);
  }

  input,
  textarea {
    padding: 0.5em;
    border: 1px solid rgba(120, 120, 120, 0.5);
    border-radius: 0.25rem;
    width: 100%;
  }

  textarea {
    margin: 0 !important;
    resize: vertical;
    height: 4rem;
    max-height: 12.5;
  }

  .alert {
    width: 100%;
    margin: 1rem 0;
    padding: 0.75rem;
    border-radius: 0.25rem;
    color: hsl(0, 100%, 66%);
    background-color: hsla(0, 100%, 66%, 0.1);
  }

  .send--button {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-size: 1rem;
    font-weight: 400;
    border: none;
    margin: 0.25rem;
    cursor: pointer;
    border-radius: 0.25rem;
    background: none;
    color: var(--primary-color);

    &::after {
      content: "";
      position: absolute;
      top: 105%;
      left: 0;
      width: 100%;
      height: 0.2rem;
      border-radius: 1rem;
      background-color: transparent;
      transition: background-color 300ms ease;
    }

    &:hover::after {
      background-color: var(--primary-color);
    }

    svg {
      margin-right: 0.5rem;
    }
  }
}
</style>
