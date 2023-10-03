import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainLayout from "@/components/MainLayout";
import store from '../store'

const routes = [
    {
        path: '/main',
        name: 'Main',
        component: MainLayout,
        children: {}
    },
    {
        path: '/login',
        name: 'Login',

        component: () => import('../components/Auth/Login')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from) => {

    if (!store.state.auth.status.loggedIn && to.name !== 'Login')
        return {name: 'Login'}
})
export default router
