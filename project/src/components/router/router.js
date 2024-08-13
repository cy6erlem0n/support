import Main from "@/pages/Main.vue"
import PostPage from "@/pages/PostPage.vue"
import About from "@/pages/About.vue"
import PostIdPage from "@/pages/PostIdPage.vue"
import { createRouter, createWebHistory } from "vue-router"
import PostPageWithStore from "@/pages/PostPageWithStore.vue"
import PostPageCompositionApi from "@/pages/PostPageCompositionApi.vue"

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
    },
    {
        path: '/post/:id',
        component: PostIdPage
    },
    {
        path: '/store' ,
        component: PostPageWithStore
    },
    {
        path: '/comp' ,
        component: PostPageCompositionApi
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router; 