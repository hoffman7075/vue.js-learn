<template>
  <div class="UserForm">
    <div class="form-group">
      <label>Имя</label>
      <input
        type="text"
        class="form-control"
        v-model="localUser.firstName">
    </div>

    <div class="form-group">
      <label>Фамилия</label>
      <input
        type="text"
        class="form-control"
        v-model="localUser.lastName">
    </div>

    <div class="form-group">
      <label>Баланс</label>
      <input
        type="text"
        class="form-control"
        v-model="localUser.balance">
    </div>

    <div class="form-group">
      <label>Телефон</label>
      <input
        type="text"
        class="form-control"
        v-model="localUser.phone">
    </div>

    <div class="form-group">
      <label>Адрес</label>
      <input
        type="text"
        class="form-control"
        v-model="localUser.address">
    </div>

    <div class="form-group">
      <label>Компания</label>
      <input
        type="text"
        class="form-control"
        v-model="localUser.company">
    </div>
  </div>
</template>

<script>
export default {
  name: "UserForm",
  model: {
    prop: "user"
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data: function() {
    localUser: null
    return {
    }
  },
  watch: {
    localUser: {
      handler() {
        this.$emit('input', this.localUser)
      }
    }
  },
  created: function() {
    this.localUser = this.user
  }
};
</script>
