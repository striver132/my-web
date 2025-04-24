import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from '../components/NotFound.vue'
const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/other",
    name: "Other",
    component: () => import("../views/Other.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name === 'NotFound') {
    console.warn(`Route not found: ${to.fullPath}`)
  }
  next()
})

export default router;
