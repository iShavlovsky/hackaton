import { createConfig, createStorage, http } from '@wagmi/vue'
import { goerli, linea, lineaSepolia, lineaTestnet, mainnet, sepolia } from '@wagmi/vue/chains'
import { injected, walletConnect } from '@wagmi/vue/connectors'

const projectId = import.meta.env.VITE_ID_WALLET_CONNECT
export const config = createConfig({
    chains: [mainnet, sepolia, linea, lineaSepolia, lineaTestnet, goerli],
    connectors: [
        injected(),
        walletConnect({
            projectId,
            qrModalOptions: {
                themeMode: 'dark'
            }
        })
    ],
    transports: {
        [mainnet.id]: http(),
        [sepolia.id]: http(),
        [linea.id]: http(),
        [lineaSepolia.id]: http(),
        [lineaTestnet.id]: http(),
        [goerli.id]: http()
    }
})
// declare module '@wagmi/vue' {
//     interface Register {
//         config: typeof config
//     }
// }
