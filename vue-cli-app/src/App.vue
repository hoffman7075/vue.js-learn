<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <router-link
        to="/"
        class="navbar-brand"
        exact>
        Navbar
      </router-link>

      <div
        id="navbarsExampleDefault"
        class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <router-link
            tag="li"
            to="/"
            class="nav-item"
            exact>
            <a class="nav-link">Главная</a>
          </router-link>
          <router-link
            tag="li"
            to="/users"
            class="nav-item">
            <a class="nav-link">Список пользователей</a>
          </router-link>
          <router-link
            tag="li"
            to="/add"
            class="nav-item">
            <a class="nav-link">Добавить пользователя</a>
          </router-link>
        </ul>
      </div>
    </nav>

    <main
      role="main"
      class="container">

      <router-view/>

    </main><!-- /.container -->
  </div>
</template>

<style>
#app {
  margin-top: 80px;
}
</style>
