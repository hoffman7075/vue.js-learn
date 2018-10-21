<template>
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
        v-for="item in users"
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
</template>

<script>
export default {
  name: "UsersList",
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  computed: {
    countUsers: function() {
      return this.users.length;
    }
  }
};
</script>
