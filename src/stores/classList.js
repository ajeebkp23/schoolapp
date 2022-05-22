import { defineStore } from "pinia";

export const useClassListStore = defineStore({
  id: "classList",
  state: () => ({
    classList: [
      {
        name: "Class 3A",
        teacher: "John Mac",
        id: 1,
      },
      {
        name: "class 2a",
        teacher: "ms windows",
        id: 2,
      },
    ],
    editItem: {},
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
