<script>
import { useClassListStore } from "../stores/classList";

export default {
  methods: {
    saveOrUpdate() {
      if (
        this.classListState?.editItem?.name != "" &&
        this.classListState?.editItem?.teacher != ""
      ) {
        var newitem = {
          name: this.classListState?.editItem?.name,
          teacher: this.classListState?.editItem?.teacher,
        };
        if (this.isEdit) {
          var thisItemId = this.classListState.editItem.id;
          var existingItemIndex = this.classListState.classList.findIndex(
            function (item) {
              return item.id == thisItemId;
            }
          );
          this.classListState.classList[existingItemIndex] = {
            id: thisItemId,
            ...newitem,
          };
        } else {
          var max = Math.max.apply(
            Math,
            this.classListState.classList.map((item) => item.id)
          );
          var nextId = max + 1;
          this.classListState.add({
            id: nextId,
            ...newitem,
          });
        }
        this.clearData();
      }
    },
    clearData() {
      this.classListState.editItem = {};
    },
  },
  setup() {
    const classListState = useClassListStore();
    return {
      classListState,
    };
  },
  computed: {
    isEdit() {
      return this.classListState.editItem.id != undefined;
    },
  },
};
</script>

<template>
  <h2>
    {{ isEdit ? "Edit" : "Add" }} A Class
    {{ isEdit ? `(${this.classListState?.editItem?.id})` : "" }}
  </h2>
  <div>
    <div>Name of class: ({{ this.classListState.editItem.name }})</div>
    <div><input v-model="this.classListState.editItem.name" /></div>
    <div>Name of teacher: ({{ this.classListState.editItem.teacher }})</div>
    <div><input v-model="this.classListState.editItem.teacher" /></div>
    <button
      :disabled="
        !Boolean(this.classListState.editItem.name) ||
        !Boolean(this.classListState.editItem.teacher)
      "
      @click="saveOrUpdate"
    >
      {{ isEdit ? "Update" : "Save" }}
    </button>
    <button @click="clearData">Clear Data</button>
  </div>
</template>