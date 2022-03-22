import { createRouter,createWebHashHistory} from "vue-router";

const home = () => import("../components/Home/Home")

const routes = [
    {
        path: "/",
        name: "home",
        component: home
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
