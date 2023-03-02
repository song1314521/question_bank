import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/index" },
  {
    path: "/index",
    name: "Index",
    component: () => import("../pages/index/index.vue"),
  },
  {
    path: "/questionList",
    name: "QuestionList",
    component: () => import("../pages/questionBank/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
