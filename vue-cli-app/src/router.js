import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/users",
      component: () => import("@/views/Users.vue")
    },
    {
      path: "/add",
      component: () => import("@/views/Add.vue")
    }
  ]
});
