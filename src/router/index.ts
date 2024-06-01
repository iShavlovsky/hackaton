import { createRouter, createWebHashHistory } from 'vue-router'
import home from '@/views/HomeView.vue'
import createPartyView from '@/views/CreatePartyView.vue'
import partyPageView from '@/views/PartyPageView.vue'
import NotFoundPage from '@/views/NotFoundPage.vue'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/create-party',
            name: 'createPartyView',
            component: createPartyView
        },
        {
            path: '/party-page/:id?',
            name: 'partyPageView',
            component: partyPageView
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFoundPage',
            component: () => NotFoundPage
        }
    ]
})

export default router
