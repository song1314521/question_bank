import { defineStore } from "pinia";

interface MainState {
  breadCrumbs: string[];
}
export const mainStore = defineStore("main", {
  state: (): MainState => ({ breadCrumbs: [] }),

  getters: {
    getBreadCrumbs(): string[] {
      return this.breadCrumbs;
    },
  },

  actions: {
    setBreadCrumbs(breadCrumbs: string[]) {
      this.breadCrumbs = breadCrumbs;
    },
  },
});
