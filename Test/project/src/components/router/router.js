import Main from "@/pages/Main.vue"
import PostPage from "@/pages/PostPage.vue"
import About from "@/pages/About.vue"
import { createRouter, createWebHistory } from "vue-router"

const  routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/post',
        component: PostPage
    },
    {
        path: '/about',
        component: About
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router; 