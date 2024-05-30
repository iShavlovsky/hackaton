import { ref } from 'vue'
import { useAccount, useChainId, useChains, useClient } from '@wagmi/vue'
import 'viem/window'
import { type Chain, createWalletClient, custom, type DeployContractParameters } from 'viem'
import { wagmiContract } from '@/contracts/contract'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const addressUser = ref<`0x${string}` | undefined>(undefined)
    const chainUser = ref<Chain | undefined>(undefined)

    const getAccount = () => {
        const { isConnected, address, chain } = useAccount()
        addressUser.value = address.value
        chainUser.value = chain.value

        return {
            isConnected,
            address,
            chain
        }
    }

    function shortenAddress(address: string | undefined): string {
        if (!address) return ''
        return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`
    }

    const accountCheck = useAccount()
    const chains = useChains()
    const chainId = useChainId()
    const client = useClient({
        chainId
    })

    async function deployContract() {
        const walletClient = createWalletClient({
            account: accountCheck.address.value,
            chain: accountCheck.chain.value,
            transport: custom(window.ethereum!)
        })
        const [account] = await walletClient.getAddresses()
        if (!account) return
        // @ts-ignore
        const parameters: DeployContractParameters = {
            ...wagmiContract,
            account
        }
        try {
            const hash = await walletClient.deployContract(parameters)
            console.log('Account:', account)
            console.log('Transaction Hash:', hash)
        } catch (error) {
            console.error('Error deploying contract:', error)
        }
    }

    return { addressUser, chainUser, getAccount, shortenAddress }
})
