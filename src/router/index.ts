import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RentView from "../views/Rent.vue";
import MetalWorkingView from "../views/MetalWorking.vue";
import RepairView from "../views/Repair.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/rent",
    name: "rent",
    component: RentView,
  },
  {
    path: "/metalworking",
    name: "metalworking",
    component: MetalWorkingView,
  },
  {
    path: "/repair",
    name: "repair",
    component: RepairView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
