<script setup>
import ClassViewVue from "../components/ClassView.vue";
import ClassForm from "../components/ClassForm.vue";
</script>

<template>
  <main>
    <h1>Class List</h1>
    <span>This page displays a list of classes</span>
    <div>
      <ClassViewVue />
      <ClassForm />
    </div>
  </main>
</template>

<style scoped>
div {
  padding: 10px;
  border: 1px solid red;
}
</style>