<template>
  <div class="edit">
    <h1>Удаление пользователя</h1>

    <div
      v-if="!user"
      class="alert alert-warning">
      Загрузка...
    </div>

    <div v-else
      class="alert alert-danger">
      Вы действительно хотите удалить пользователя
      <router-link :to="'/edit/' + this.id" target="_blank">
        <strong>{{this.user.firstName}} {{this.user.lastName}}</strong>
      </router-link>?
    </div>

    <button
            type="button"
            class="btn btn-danger"
            @:click="remove">Да</button>
    <button
            type="button"
            class="btn btn-default"
            @:click="cancel">Нет</button>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "Remove",
  components: {
    "user-form": () => import("@/components/UserForm.vue")
  },
  data: function() {
    return {
      user: null
    };
  },
  computed: {
    id: function() {
      return this.$route.params.id;
    },
    url: function() {
      return "http://localhost:3004/users/" + this.id;
    }
  },
  mounted: function() {
    this.loadUser();
  },
  methods: {
    loadUser: function() {
      axios
        .get(this.url)
        .then(response => {
          this.user = response.data;
        })
        .catch(error => console.log(error));
    },
    remove: function() {
      axios
        .delete(this.url)
        .then(this.$router.push("/users"))
        .catch(error => console.log(error));
    },
    cancel: function() {
      this.$router.push("/users");
    }
  }
};
</script>
