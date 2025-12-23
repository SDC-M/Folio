import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import Repos from "../components/Repos.vue";
import PageNotFound from "../components/PageNotFound.vue";
import Contact from "../components/Contact.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HelloWorld,
    },
    {
      path: "/repos",
      name: "repos",
      component: Repos,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: PageNotFound,
    },
  ],
});

export default router;
