import './assets/main.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query'
import { WagmiPlugin } from '@wagmi/vue'
import naive from 'naive-ui'

import App from './App.vue'
import router from './router'
import { config } from '@/config.ts'

const queryClient = new QueryClient()
const app = createApp(App)

app.use(WagmiPlugin, { config })
app.use(VueQueryPlugin, { queryClient })
app.use(createPinia())
app.use(router)
app.use(naive)

app.mount('#app')
