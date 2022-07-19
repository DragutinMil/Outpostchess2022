import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

//import Player from '../views/profile/Player.vue'
//import Club from '../views/profile/Club.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Signin",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/Signin.vue"),
    },
    {
        path: "/thanks",
        name: "Thanks",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/Thanks.vue"),
    },
    {
        path: "/profile",
        name: "Profile",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/Profile.vue"),
    },
    {
        path: "/intsearch",
        name: "Intsearch",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/Intsearch.vue"),
    },
    {
        path: "/notifications",
        name: "Notifications",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/Notifications.vue"),
    },
    {
        path: "/thanks-verification",
        name: "ThanksVerification",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/ThanksVerification.vue"),
    },
    {
        path: "/chatroom",
        name: "Chatroom",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/Chatroom.vue"),
    },
    {
        path: "/reset-password",
        name: "ResetPassword",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/ResetPassword.vue"),
    },
    {
        path: "/verification-mail",
        name: "VerificationMail",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/VerificationMail.vue"),
    },
    {
        path: "/publicprofile/:id",
        name: "Publicprofile",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/Publicprofile.vue"),

        params: true,
    },
    {
        path: "/auth/password-reset-complete/:id",
        name: "resettoken",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/Resettoken.vue"),

        params: true,
    },
    {
        path: "/blog",
        name: "Blog",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/Blog.vue"),
    },
    {
        path: "/chatInner",
        name: "ChatInner",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/ChatInner.vue"),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
