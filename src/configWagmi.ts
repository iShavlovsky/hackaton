import { createConfig, http } from '@wagmi/vue'
import { linea, lineaSepolia, lineaTestnet, mainnet, sepolia } from '@wagmi/vue/chains'
import { injected } from '@wagmi/vue/connectors'

const projectId = import.meta.env.VITE_ID_WALLET_CONNECT
export const config = createConfig({
    chains: [mainnet, sepolia, linea, lineaSepolia, lineaTestnet],
    connectors: [injected()],
    transports: {
        [mainnet.id]: http(),
        [sepolia.id]: http(),
        [linea.id]: http(),
        [lineaSepolia.id]: http(),
        [lineaTestnet.id]: http()
    }
})
