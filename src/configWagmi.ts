import { createConfig, http } from '@wagmi/vue'
import { linea, lineaSepolia, lineaTestnet, mainnet, sepolia } from '@wagmi/vue/chains'

export const config = createConfig({
    chains: [mainnet, sepolia, linea, lineaSepolia, lineaTestnet],
    transports: {
        [mainnet.id]: http(),
        [sepolia.id]: http(),
        [linea.id]: http(),
        [lineaSepolia.id]: http(),
        [lineaTestnet.id]: http()
    }
})
