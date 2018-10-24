<template>
  <select v-model="localRowsPerPage">
    <option value="5">пять</option>
    <option value="10">десять</option>
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
      localRowsPerPage: ""
    };
  },
  created: function() {
    this.localRowsPerPage = this.rowsPerPage
  },
  watch: {
    localRowsPerPage: {
      handler() {
        this.$emit('change', parseInt(this.localRowsPerPage));
      }
    }
  }
};
</script>
