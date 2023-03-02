import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from 'pinia' 
//去除默认样式
import "@/normal.css";
//引入路由
import router from "@/router/index";
const pinia = createPinia()
const app = createApp(App);
app.use(router);
app.use(pinia)
app.mount("#app");
