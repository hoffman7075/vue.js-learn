import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue")
    },
    {
      path: "/users",
      component: () => import("@/views/Users.vue")
    },
    {
      path: "/add",
      component: () => import("@/views/Add.vue")
    },
    {
      path: "/edit/:id",
      component: () => import("@/views/Edit.vue")
    },
    {
      path: "/remove/:id",
      component: () => import("@/views/Remove.vue")
    }
  ]
});
