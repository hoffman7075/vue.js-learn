<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul class="navbar-nav mr-auto">
            <router-link tag="li" to="/" class="nav-item">
              <a class="nav-link">Главная</a>
            </router-link>
            <router-link tag="li" to="/users" class="nav-item">
              <a class="nav-link">Список пользователей</a>
            </router-link>
            <router-link tag="li" to="/add" class="nav-item">
              <a class="nav-link">Добавить пользователя</a>
            </router-link>
          </ul>
        </div>
      </nav>

      <main role="main" class="container">

        <router-view/>

      </main><!-- /.container -->
  </div>
</template>

<style>
#app {
  margin-top: 80px;
}
</style>
