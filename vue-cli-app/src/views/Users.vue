<template>
  <div class="users">
    <h1>Список пользователей</h1>

    <div v-if="!users.length" class="alert alert-warning">
      Загрузка...
    </div>
    <users-list v-else :users="users"/>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import UsersList from "@/components/UsersList.vue";

export default {
  name: "users",
  components: {
    "users-list": () => import("@/components/UsersList.vue")
  },
  data: function() {
    return {
      users: []
    };
  },
  mounted: function() {
    console.log("Экземпляр смонтирован (mounted)");
    this.loadUsers();
  },
  methods: {
    loadUsers: function() {
      axios
        .get("http://localhost:3004/users")
        .then(response => {this.users = response.data;})
        .catch(error => console.log(error));
    }
  }
};
</script>
