import { defineStore } from "pinia";

export const useClassListStore = defineStore({
  id: "classList",
  state: () => ({
    classList: [
      {
        name: "Class 3A",
        teacher: "John Mac",
      },
      {
        name: "class 2a",
        teacher: "ms windows",
      },
      {
        name: "class 1a",
        teacher: "john snow",
      },
      {
        name: "Class 2C",
        teacher: "Jack Sparow",
      },
    ],
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    add(item) {
      this.classList.push(item);
    },
  },
});
