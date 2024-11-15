import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/stocks-view/home'
    },
    {
        path: '/stocks-view',
        redirect: '/stocks-view/home'
    },
    {
        path: '/stocks-view/home',
        name: 'Home',
        component: () => import('./views/home.view.vue'),
    },
    {
        path: '/stocks-view/stocks/:id',
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