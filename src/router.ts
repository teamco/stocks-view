import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('./views/home.view.vue'),
    },
    {
        path: '/stocks/:id',
        name: 'Stock',
        component: () => import('./views/stock.view.vue'),
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// Before each route changing the loadLayoutMiddleware middleware is executing.

export default router;