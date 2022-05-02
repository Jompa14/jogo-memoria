import Vue from "vue";
import VueRouter from "vue-router";
import TabuleiroCartas from "../views/TabuleiroCartas.vue"

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: TabuleiroCartas
    },
    {
        path: "/gameover",
        name: "GameOver",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("../views/GameOver.vue")
    },
    {
        path: "/nickname",
        name: "NickName",
        component: () => import("../views/NickName.vue")
      }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
