import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue')
        },
        {
            path: '/create-party',
            name: 'CreateParty',
            component: () => import('../views/CreatePartyView.vue')
        },
        {
            path: '/party-page',
            name: 'PartyPage',
            component: () => import('../views/PartyPageView.vue')
        }
    ]
})

export default router
