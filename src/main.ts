import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Breadcrumbs from "@/components/Breadcrumbs.vue";

createApp(App)
  .component("Breadcrumbs", Breadcrumbs)
  .use(router)
  .mount("body");
