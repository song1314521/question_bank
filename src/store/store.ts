import { defineStore } from "pinia";
export const mainStore = defineStore("main", {
  state: () => {
    return {
      hello: "hello1234",
    };
  },
  getters: {
    getHello(): string {
      return this.hello;
    },
  },
  actions: {
    setHello(hello: string) {
      this.hello = hello;
    },
  },
});
