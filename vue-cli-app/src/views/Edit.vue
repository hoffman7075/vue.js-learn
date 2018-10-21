<template>
  <div class="edit">
    <h1>Редактирование пользователя</h1>

    <div
      v-if="!user"
      class="alert alert-warning">
      Загрузка...
    </div>

    <user-form v-else :user="user" />

    <pre>{{ user }}</pre>

  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import UserForm from "@/components/UserForm.vue";

export default {
  name: "edit",
  components: {
    "user-form": UserForm
  },
  data: function() {
    return {
      user: null
    };
  },
  computed: {
    id: function() {
      return this.$route.params.id
    }
  },
  mounted: function() {
    this.loadUser();
  },
  methods: {
    loadUser: function() {
      axios
        .get("http://localhost:3004/users/" + this.id)
        .then(response => {this.user = response.data;})
        .catch(error => console.log(error));
    }
  }
};
</script>
