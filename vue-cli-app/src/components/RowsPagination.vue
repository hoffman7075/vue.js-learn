<template>
  <nav aria-label="table-pagination">
    <ul class="pagination">
      <li class="page-item disabled">
        <a class="page-link" href="#" tabindex="-1">Previous</a>
      </li>
      <li class="page-item"
        :class="{active: localCurrentPage === item}"
        v-for="item in countPages"
        :key="item">
        <a class="page-link" href="javascript:void(0)" @click="currentPageChange">
          {{ item }}
        </a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "RowsPagination",
  model: {
    prop: "currentPage"
  },
  props: {
    countUsers: {
      type: Number,
      required: true
    },
    rowsPerPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  data: function() {
    return {
      localCurrentPage: 1
    }
  },
  watch: {
    localCurrentPage: {
      handler() {
        this.$emit("input", this.localCurrentPage);
      }
    },
    currentPage: {
      handler() {
        this.localCurrentPage = this.currentPage
      }
    }
  },
  computed: {
    countPages: function() {
      return Math.round(this.countUsers / this.rowsPerPage);
    }
  },
  methods: {
    currentPageChange: function(page) {
      this.localCurrentPage = parseInt(page.target.innerText, 10);
    }
  },
  created: function() {
    this.localCurrentPage = this.currentPage;
  }
};
</script>
