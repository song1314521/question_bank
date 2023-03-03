import { createApp } from "vue";
import App from "./App.vue";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { createPinia } from "pinia";
//去除默认样式
import "@/normal.css";
//引入路由
import router from "@/router/index";
const pinia = createPinia();
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router);
app.use(pinia);
app.mount("#app");
