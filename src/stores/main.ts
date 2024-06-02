import { reactive, ref } from 'vue'
import { useAccount, useReadContract } from '@wagmi/vue'
import { type Chain, encodeAbiParameters, keccak256 } from 'viem'
import { defineStore } from 'pinia'
import abi from '@/contracts/abi.json'

export const useMainStore = defineStore('main', () => {
    const addressUser = ref<`0x${string}` | undefined>(undefined)
    const chainUser = ref<Chain | undefined>(undefined)
    // const localStorage = useLocalStorage()

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

    return { addressUser, chainUser, getAccount, shortenAddress }
})
