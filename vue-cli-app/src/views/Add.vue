<template>
  <div>
    <h1>Создание пользователя</h1>

    <user-form v-model="user" />

    <button
      type="button"
      class="btn"
      @:click="save">Сохранить</button>

    <pre>{{ user }}</pre>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

const defaultUser = {
  id: null,
  isActive: true,
  balance: "",
  picture: "http://placehold.it/128x128",
  age: null,
  accessLevel: "",
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phone: "",
  address: "",
  about: "",
  registered: ""
};

export default {
  name: "AddUser",
  components: {
    "user-form": () => import("@/components/UserForm.vue")
  },
  data: () => ({
    user: defaultUser,

    // URL где хранятся все пользователи
    url: "http://localhost:3004/users"
  }),
  methods: {
    save: function() {
      axios
        .post(this.url, this.user)
        .then(
          setTimeout(function() {
            this.$router.push("/users");
          }, 200)
        )
        .catch(error => console.log(error));
    }
  }
};
</script>
