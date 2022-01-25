import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: () => import(/* webpackChunkName: "portfolio" */ "../views/Portfolio.vue"),
  },
  {
    path: "/project/:project",
    name: "project",
    component: () => import(/* webpackChunkName: "project" */ "../views/Project.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import(/* webpackChunkName: "404" */ "../views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
