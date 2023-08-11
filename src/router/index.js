import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/user/Index.vue";
import UserCreate from "../views/user/Create.vue"
import Berita from "../views/Berita.vue";
import Product from "../views/Product.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Category from "../views/Category.vue";
import Login from "../views/Login.vue";
import store from "../store";
import FilterPageKategori from "../views/FilterPageKategori.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/users",
        name: "User",
        component: User,
    },
    {
        path: "/users/create",
        name: "UserCreate",
        component: UserCreate,
    },
    {
        path: "/berita",
        name: "Berita",
        component: Berita,
    },
    {
        path: "/product",
        name: "Product",
        component: Product,
    },
    {
        path: "/product/:id",
        name: "SingleProduct",
        component: SingleProduct,
    },
    {
        path: "/category",
        name: "Category",
        component: Category,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {requiresGuest: true},
    },
    {
        path: "/category/:category",
        name: "FilterCategory",
        component: FilterPageKategori,
    },
   

];

const router = createRouter({
    history: createWebHistory(),
    routes
});
router.beforeEach((to, from, next) => {
    if (to.meta.requiresGuest && store.getters["auth/isAuthenticated"]) {
      next("/"); // Redirect to Home
    } else {
      next();
    }
  });
  router.beforeEach((to, from, next) => {
      if (to.meta.requiresLogin && store.getters["auth/isAuthenticated"]) {
        next("/login"); // Redirect to Home
      } else {
        next();
      }
    });


export default router;