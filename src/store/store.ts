import { defineStore } from "pinia";

interface MainState {
  //面包屑
  breadCrumbs: string[];
  // 导航菜单
  navMenu: string;
}
export const mainStore = defineStore("main", {
  state: (): MainState => ({
    breadCrumbs: [],
    navMenu: "",
  }),

  getters: {
    getBreadCrumbs(): string[] {
      return this.breadCrumbs;
    },
    getNavMenu(): string {
      return this.navMenu;
    }
  },

  actions: {
    setBreadCrumbs(breadCrumbs: string[]) {
      this.breadCrumbs = breadCrumbs;
    },
    setNavMenu(navMenu: string) {
      this.navMenu = navMenu;
    }
  },
});
