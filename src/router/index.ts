import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: () => import("@/views/Portfolio.vue"),
  },
  {
    path: "/project/:project",
    name: "project",
    component: () => import("@/views/Project.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/Contact.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("@/views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
