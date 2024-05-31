import { reactive, ref } from 'vue'
import { useAccount } from '@wagmi/vue'
import 'viem/window'
import { type Chain, createWalletClient, custom, type DeployContractParameters } from 'viem'
import { wagmiContract } from '@/contracts/contract'
import { defineStore } from 'pinia'
import type { ICreatePartyForm } from '@/types'

export const useMainStore = defineStore('main', () => {
    const addressUser = ref<`0x${string}` | undefined>(undefined)
    const chainUser = ref<Chain | undefined>(undefined)

    const party = reactive<ICreatePartyForm>({
        name: 'Glitch & Glam',
        description:
            "It's time for a game party focused on Linea token quests! Join forces with other gamers, tackle challenges, and earn tokens together. Let's make this a night of shared achievements",
        owner: 'malamuth',
        share: null,
        partyMembers: [
            {
                id: 'asdad',
                name: 'Telegram members',
                description: 'Those who joined party via TG',
                revenue: 15
            }
        ]
    })

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

    async function deployContract() {
        const { address, chain } = getAccount()
        const walletClient = createWalletClient({
            account: address.value,
            chain: chain.value,
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

    return { addressUser, chainUser, party, getAccount, shortenAddress, deployContract }
})
