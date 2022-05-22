<script>
import { useClassListStore } from "../stores/classList";

export default {
  methods: {
    showMe() {
      this.classListState.add({
        name: this.nameOfClass,
        teacher: this.nameOfTeacher,
      });
    },
  },
  data() {
    return {
      nameOfClass: "Class 2A",
      nameOfTeacher: "John Honai",
    };
  },
  setup() {
    const classListState = useClassListStore();
    return {
      classListState,
    };
  },
};
</script>

<template>
  Add A Class
  <div>
    <div>Name of class: ({{ nameOfClass }})</div>
    <div><input v-model="nameOfClass" /></div>
    <div>Name of teacher: ({{ nameOfTeacher }})</div>
    <div><input v-model="nameOfTeacher" /></div>
    <button @click="showMe">Save</button>
  </div>
</template>