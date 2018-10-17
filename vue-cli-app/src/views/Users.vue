<template>
  <div>
    <h1>Список пользователей</h1>

    <div v-if="!users.length" class="alert alert-warning">
      Загрузка...
    </div>
    <users-list v-else :users="users" v-on:remove="removeUser" />

  </div>
</template>

<script>
import axios from "axios";
import UsersList from "@/components/UsersList.vue";

export default {
  name: "UsersView",
  component: {
    "user-list": UsersList
    // комонент будет тот, который импортировали
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
    removeUser: function(user) {
      this.$emit("remove", user.id);
    },
    loadUsers: function() {
      axios.get("http://localhost:3004/users").then(response => {
        this.users = response.data;
      });
    }
  }
};
</script>
