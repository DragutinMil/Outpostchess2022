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
        path: "/chatInner/:id",
        name: "ChatInner",
        component: () => import(/* webpackChunkName: "about" */ "../views/ChatInner.vue"),
        /* children: [{
            path: 'chat-inner-header',
            component: () => import(/* webpackChunkName: "about"  "../components/Chatroom/ChatInnerHeader.vue"),
          }, {
            path: 'one-message',
            component: () => import(/* webpackChunkName: "about"  "../components/Chatroom/OneMessage.vue"),
          }]
          */
    },
    {
        path: "/wallet-add-payment-method",
        name: "WalletAddPaymentMethod",
        component: () => import("../views/Wallet/WalletAddPaymentMethod.vue"),
    },
    {
        path: "/wallet",
        name: "Wallet",
        component: () => import("../views/Wallet/Wallet.vue"),
    },
    {
        path: "/wallet-send",
        name: "WalletSend",
        component: () => import("../views/Wallet/WalletSend.vue"),
    },
    {
        path: "/wallet-transaction",
        name: "WalletTransaction",
        component: () => import("../views/Wallet/WalletTransaction.vue"),
    },
    {
        path: "/wallet-transaction-success",
        name: "WalletTransactionSuccess",
        component: () => import("../views/Wallet/WalletTransactionSuccess.vue"),
    },
    {
        path: "/wallet-withdraw",
        name: "WalletWithdraw",
        component: () => import("../views/Wallet/WalletWithdraw.vue"),
    },
    {
        path: "/wallet-withdraw-transaction",
        name: "WalletWithdrawTransaction",
        component: () => import("../views/Wallet/WalletWithdrawTransaction.vue"),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
