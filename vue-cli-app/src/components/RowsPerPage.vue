<template>
  <select class="form-control" v-model="localRowsPerPage">
    <option value="5" selected>5</option>
    <option value="10">10</option>
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
  data: function() {
    return {
      localRowsPerPage: null
    }
  },
  watch: {
    localRowsPerPage: {
      handler() {
        this.$emit("change", parseInt(this.localRowsPerPage, 10));
      }
    }
  },
  created: function() {
    this.localRowsPerPage = this.rowsPerPage;
  }
};
</script>
