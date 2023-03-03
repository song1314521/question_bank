import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { mainStore } from "@/store/store";

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/index" },
  {
    path: "/index",
    name: "Index",
    component: () => import("../pages/index/index.vue"),
    meta: {
      title: [],
    },
  },
  {
    path: "/questionList",
    name: "QuestionList",
    component: () => import("../pages/questionBank/index.vue"),
    meta: {
      title: ["题库管理", "题库列表"],
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

// 路由守卫
router.beforeEach((to, from, next) => {
  const store = mainStore();
  store.setBreadCrumbs(to.meta.title as string[]);
  next();
});

export default router;
