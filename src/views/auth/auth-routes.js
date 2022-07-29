function createRoute(name) {
    return {
        path: `${name}`,
        name: `${name}`,
        component: () => import(`./pages/${name}.vue`),
    };
}

const routes = [
    {
        path: "/auth",
        name: "Auth",
        component: () => import("./auth.vue"),
        children: [
            createRoute("thanks"),
            createRoute("sign-up"),
            createRoute("sign-in"),
            createRoute("reset-password"),
            createRoute("verification-sent"),
            createRoute("request-verification"),
            createRoute("request-password-reset"),
            {
                path: `*`,
                redirect: { name: "sign-up" },
            },
        ],
    },
];
export default routes;
