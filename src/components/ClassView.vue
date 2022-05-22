<script>
import { useClassListStore } from "../stores/classList";

export default {
  setup() {
    const classListState = useClassListStore();
    return {
      classListState,
    };
  },
};
</script>

<template>
  <table>
    <tr>
      <th>Class Name</th>
      <th>Teacher</th>
    </tr>
    <tr v-for="item in classListState.classList" v-bind:key="item.name">
      <td>{{ item.name }}</td>
      <td>{{ item.teacher }}</td>
    </tr>
  </table>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>