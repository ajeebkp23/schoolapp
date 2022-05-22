<script>
import { useClassListStore } from "../stores/classList";

export default {
  methods: {
    showMe() {
      if (this.nameOfClass != "" && this.nameOfTeacher != "") {
        this.classListState.add({
          name: this.nameOfClass,
          teacher: this.nameOfTeacher,
        });
        this.nameOfClass = "";
        this.nameOfTeacher = "";
      }
    },
  },
  data() {
    return {
      nameOfClass: "",
      nameOfTeacher: "",
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
    <button
      :disabled="nameOfClass == '' || nameOfTeacher == ''"
      @click="showMe"
    >
      Save
    </button>
  </div>
</template>