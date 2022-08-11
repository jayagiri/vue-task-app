import {
    createRouter, createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        Component: Home
    },
    {
        path: '/about',
        name: 'About',
        Component: About
    }

]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
})
export default router
