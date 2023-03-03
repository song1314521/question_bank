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
    path: "/user",
    name: "User",
    component: () => import("../pages/user/userList/index.vue"),
    meta: {
      title: ["用户模块", "用户列表"],
    },
  },
  {
    path: "/role",
    name: "Role",
    component: () => import("../pages/user/roleList/index.vue"),
    meta: {
      title: ["用户模块", "角色列表"],
    },
  },
  {
    path: "/authority",
    name: "Authority",
    component: () => import("../pages/user/authList/index.vue"),
    meta: {
      title: ["用户模块", "权限配置"],
    },
  },
  {
    path: "/questionSort",
    name: "QuestionSort",
    component: () => import("../pages/questionBank/questionSelect/index.vue"),
    meta: {
      title: ["题库管理", "题库分类"],
    },
  },
  {
    path: "/questionList",
    name: "QuestionList",
    component: () => import("../pages/questionBank/questList/index.vue"),
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
