import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddView from "../views/AddView.vue";
import DeleteView from "../views/DeleteView.vue";
import UpdateView from "../views/UpdateView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/add",
    name: "add",
    component: AddView,
  },
    {
    path: "/delete",
    name: "delete",
    component: DeleteView,
  },
  {
    path: "/update",
    name: "update",
    component: UpdateView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
