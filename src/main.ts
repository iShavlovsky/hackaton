import './assets/main.scss'
import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query'
import { WagmiPlugin } from '@wagmi/vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import naive from 'naive-ui'

import { config } from '@/configWagmi'

import App from './App.vue'
import router from './router'

const queryClient = new QueryClient()

const app = createApp(App)
app.use(WagmiPlugin, { config })
app.use(VueQueryPlugin, { queryClient })
app.use(createPinia())
app.use(router)
app.use(naive)
app.mount('#app')
