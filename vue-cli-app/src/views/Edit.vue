<template>
  <div class="edit">
    <h1>Редактирование пользователя</h1>

    <div
      v-if="!user"
      class="alert alert-warning">
      Загрузка...
    </div>

    <user-form v-else v-model="user" />

    <button type="button" class="btn" v-on:click="save">Сохранить</button>

    <pre>{{ user }}</pre>

  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "edit",
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
      return this.$route.params.id
    },
    url: function() {
      return "http://localhost:3004/users/" + this.id
    }
  },
  mounted: function() {
    this.loadUser();
  },
  methods: {
    loadUser: function() {
      axios
        .get(this.url)
        .then(response => {this.user = response.data;})
        .catch(error => console.log(error));
    },
    save: function() {
      axios
        .patch(this.url, this.user)
        .then(this.$router.push("/users"))
        .catch(error => console.log(error));
    }
  }
};
</script>
