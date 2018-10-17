<template>
  <table class="users_table table table-bordered table-hover">
    <tr class="users_table__row" v-for="user in users" v-bind:key="user.firstName">
      <td class="users_table__col">
        <div class="users_table__col_wrap">
          <img v-bind:src="user.imgsrc ? user.imgsrc : 'https://yt3.ggpht.com/a-/ACSszfHRLg26vw9Rk1Dv1QScDxXDfp3_TAmAlst7CQ=s800-mo-c-c0xffffffff-rj-k-no'" v-bind:alt="user.firstName" width="120">
        </div>
      </td>
      <td class="users_table__col">
        <div class="users_table__col_wrap">
          <p>
            {{ user.firstName }}
          </p>
        </div>
      </td>
      <td class="users_table__col">
        <div class="users_table__col_wrap">
          <button v-on:click="removeUser(user)" class="btn btn-danger" type="button">Удалить</button>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <p>Таблица пользователей из {{ countUsers }} человек</p>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "UsersList",
  props: {
    users: Array,
    required: true
  },
  computed: {
    countUsers: function() {
      return this.users.length;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
