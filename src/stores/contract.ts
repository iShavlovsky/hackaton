import { defineStore } from 'pinia'
import { createPublicClient, createWalletClient, custom } from 'viem'
import abi from '@/contracts/abi.json'
import { useMainStore } from '@/stores'

interface ClaimResponse {
    transactionHash: string
}

interface CreateTaskResponse {
    transactionHash: string
    taskId: unknown
}

interface BurnResponse {
    transactionHash: string
}

interface CreateRSResponse {
    transactionHash: string
    resourceId: unknown
}

interface AlreadyClaimedResponse {
    result: boolean
}

export const useContractStore = defineStore('contract', () => {
    const contractAddress = import.meta.env.VITE_ID_CONTRACT_ADDRESS
    const store = useMainStore()

    const claimResponse = ref<ClaimResponse | null>(null)
    const createTaskResponse = ref<CreateTaskResponse | null>(null)
    const burnResponse = ref<BurnResponse | null>(null)
    const createRSResponse = ref<CreateRSResponse | null>(null)
    const alreadyClaimedResponse = ref<AlreadyClaimedResponse | null>(null)

    const publicClient = createPublicClient({
        chain: store.chainUser,
        transport: custom(window.ethereum)
    })

    const walletClient = createWalletClient({
        chain: store.chainUser,
        transport: custom(window.ethereum)
    })
    console.log('addressUser', store.addressUser)
    console.log('chainUser', store.chainUser)
    const claim = async (party_id: number, task_id: string, salt: string): Promise<ClaimResponse> => {
        const { request } = await publicClient.simulateContract({
            account: store.addressUser,
            address: contractAddress,
            abi,
            functionName: 'claim',
            args: [party_id, task_id, salt]
        })

        const transactionHash = await walletClient.writeContract(request)
        console.log('claim:', request, transactionHash)
        claimResponse.value = { transactionHash }
        return { transactionHash }
    }

    const createTask = async (party_id: number, partyTask: any): Promise<CreateTaskResponse> => {
        const { request } = await publicClient.simulateContract({
            account: store.addressUser,
            address: contractAddress,
            abi,
            functionName: 'createTask',
            args: [party_id, partyTask]
        })

        const transactionHash = await walletClient.writeContract(request)
        console.log('createTask:', request, transactionHash)
        const taskId = request.args?.[1]
        createTaskResponse.value = { transactionHash, taskId }
        return { transactionHash, taskId }
    }

    const burn = async (id: number, value: number): Promise<BurnResponse> => {
        const { request } = await publicClient.simulateContract({
            account: store.addressUser,
            address: contractAddress,
            abi,
            functionName: 'burn',
            args: [id, value]
        })

        const transactionHash = await walletClient.writeContract(request)
        console.log('burn:', request, transactionHash)
        burnResponse.value = { transactionHash }
        return { transactionHash }
    }

    const createRS = async (): Promise<CreateRSResponse> => {
        const { request } = await publicClient.simulateContract({
            account: store.addressUser,
            address: contractAddress,
            abi,
            functionName: 'createRS'
        })

        const transactionHash = await walletClient.writeContract(request)
        console.log('createRS:', request, transactionHash)
        const resourceId = request.args?.[0]
        createRSResponse.value = { transactionHash, resourceId }
        return { transactionHash, resourceId }
    }

    const alreadyClaimed = async (user: string, task_id: string): Promise<AlreadyClaimedResponse> => {
        const result = await publicClient.readContract({
            address: contractAddress,
            abi,
            functionName: 'alreadyClaimed',
            args: [user, task_id]
        })
        console.log('alreadyClaimed:', result)
        alreadyClaimedResponse.value = { result: !!result }
        return { result: !!result }
    }
    console.log('publicClient', publicClient)
    console.log('walletClient', walletClient)

    return {
        claim,
        createTask,
        burn,
        createRS,
        alreadyClaimed
    }
})
