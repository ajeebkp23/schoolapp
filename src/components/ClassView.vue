<script>
export default {
  data() {
    return {
      count: 0,
      classList: [
        {
          name: "Class 3A",
          teacher: "John Mac",
        },
        {
          name: "Class 2A",
          teacher: "MS Windows",
        },
        {
          name: "Class 1A",
          teacher: "John Snow",
        },
        {
          name: "Class 2C",
          teacher: "Jack Sparow",
        },
      ],
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
    <tr v-for="item in classList" v-bind:key="item.name">
      <td>{{ item.name }}</td>
    </tr>
  </table>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>