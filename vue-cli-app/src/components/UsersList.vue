<template>
  <div class="wrapper">
    <div class="row">
      <div class="col-md-4">
        <rows-select v-model="rowsPerPage" @change="rowsPerPageChange" />
        <p>Выбрано элементов на странице {{ rowsPerPage }}</p>
      </div>
    </div>

    <table class="users_table table table-bordered table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Активен</th>
          <th>Баланс</th>
          <th>Email</th>
          <th>Телефон</th>
          <th>Зарегистрирован</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in localUsers"
          :key="item.id">
          <td>
            <router-link :to="'/edit/' + item.id">
              #{{ item.id }}
            </router-link>
          </td>
          <td>{{ item.firstName }}</td>
          <td>{{ item.lastName }}</td>
          <td>{{ item.isActive }}</td>
          <td>{{ item.balance }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.registered }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colspan="8">
            Всего пользователей: {{ countUsers }}
          </th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  name: "UsersList",
  components: {
    "rows-select": () => import("@/components/RowsPerPage.vue")
  },
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return {
      rowsPerPage: 5,
      localUsers: []
    };
  },
  computed: {
    countUsers: function() {
      return this.users.length;
    }
  },
  methods: {
    rowsPerPageChange: function(count) {
      this.rowsPerPage = count;
      this.localUsers = this.users.slice(0, this.rowsPerPage);
    }
  },
  created: function() {
    this.localUsers = this.users;
  }
};
</script>
