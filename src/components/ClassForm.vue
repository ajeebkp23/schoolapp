<script>
export default {
  methods: {
    showMe() {
      alert(
        `yeah. You entered Class: ${this.nameOfClass}, Teacher: ${this.nameOfTeacher}`
      );
    },
  },
  data() {
    return {
      nameOfClass: "Class 2A",
      nameOfTeacher: "John Honai",
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