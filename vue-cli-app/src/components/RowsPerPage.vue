<template>
  <select
    v-model="rowsPerPage"
    class="form-control">
    <option
      value="5"
      selected>5</option>
    <option value="10">10</option>
    <option value="50">50</option>
  </select>
</template>

<script>
export default {
  name: "RowsPerPage",
  model: {
    prop: "rowsPerPage"
  },
  props: {
    rowsPerPage: {
      type: Number,
      required: true
    }
  },
  watch: {
    rowsPerPage: {
      handler() {
        // если событие input, то все родитель видет изменения
        // если событие change, то родитель не реагирует
        this.$emit("input", parseInt(this.rowsPerPage, 10));
      }
    }
  }
};
</script>
