<script>
import { useClassListStore } from "../stores/classList";

export default {
  setup() {
    const classListState = useClassListStore();
    return {
      classListState,
    };
  },
  methods: {
    editAction(item) {
      this.classListState.editItem = { ...item };
    },
    deleteAction(item) {
      var thisItemId = item.id;
      this.classListState.classList = [...this.classListState.classList].filter(innerItem => innerItem.id != thisItemId)
    }
  },
};
</script>

<template>
  <table>
    <tr>
      <th>ID</th>
      <th>Class Name</th>
      <th>Teacher</th>
      <th>Actions</th>
    </tr>
    <tr v-for="item in classListState.classList" v-bind:key="item.name">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.teacher }}</td>
      <td>
        <button @click="editAction(item)">Edit</button>
        <button @click="deleteAction(item)">Delete</button>
      </td>
    </tr>
  </table>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>