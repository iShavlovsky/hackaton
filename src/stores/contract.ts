// import { defineStore } from 'pinia'
// import abi from '@/contracts/abi.json'
// import wagmiContract from '@/contracts/contract.json'
// import { useAccount, useReadContract, useSimulateContract, useWriteContract } from '@wagmi/vue'
// import { type Hash, toHex } from 'viem'
// import { reactive } from 'vue'
//
// interface ClaimResponse {
//     transactionHash: Hash
// }
//
// interface CreateTaskResponse {
//     transactionHash: Hash
//     taskId: unknown
// }
//
// interface BurnResponse {
//     transactionHash: Hash
// }
//
// interface CreateRSResponse {
//     transactionHash: Hash
//     resourceId: unknown
// }
//
// interface AlreadyClaimedResponse {
//     result: boolean
// }
//
// type ResponseFnContract<T> = Promise<{
//     success: boolean
//     result: T | null
// }>
//
// export const useContractStore = defineStore('contract', () => {
//     const contractAddress1 = import.meta.env.VITE_ID_CONTRACT_ADDRESS_1
//     const contractAddress2 = import.meta.env.VITE_ID_CONTRACT_ADDRESS_1
//
//     const responses = reactive({
//         claimResponse: null as ClaimResponse | null,
//         createTaskResponse: null as CreateTaskResponse | null,
//         burnResponse: null as BurnResponse | null,
//         createRSResponse: null as CreateRSResponse | null,
//         alreadyClaimedResponse: null as AlreadyClaimedResponse | null
//     })
//
//     const { address, chainId, chain } = useAccount()
//     const { writeContractAsync } = useWriteContract()
//
//     const handleContractInteraction = async <T>(interactionFn: () => Promise<T>): ResponseFnContract<T> => {
//         try {
//             const result = await interactionFn()
//             return { success: true, result }
//         } catch (error) {
//             console.error('Contract interaction error:', error)
//             return { success: false, result: null }
//         }
//     }
//     const generateSalt = () => {
//         return toHex('hello world')
//         // return ethers.utils.hexlify(ethers.utils.randomBytes(32))
//     }
//     const claim = async (party_id: number, task_id: string, salt: string): ResponseFnContract<ClaimResponse> => {
//         return handleContractInteraction(async () => {
//             const {
//                 data,
//                 isSuccess,
//                 error: simulateError
//             } = useSimulateContract({
//                 abi,
//                 chainId: chainId.value,
//                 address: contractAddress1,
//                 account: address.value,
//                 functionName: 'claim',
//                 args: [party_id, task_id, salt]
//             })
//
//             if (simulateError) {
//                 console.log(simulateError.value)
//                 throw new Error('Simulation failed')
//             }
//
//             if (isSuccess.value && data.value?.request) {
//                 const hash = await writeContractAsync(data.value.request)
//                 responses.claimResponse = { transactionHash: hash }
//                 return responses.claimResponse
//             } else {
//                 throw new Error('Simulation did not return a valid request')
//             }
//         })
//     }
//
//     const createTask = async (party_id: number, partyTask: any): ResponseFnContract<CreateTaskResponse> => {
//         return handleContractInteraction(async () => {
//             const {
//                 data,
//                 isSuccess,
//                 error: simulateError
//             } = useSimulateContract({
//                 abi,
//                 chainId: chainId.value,
//                 address: contractAddress1,
//                 account: address.value,
//                 functionName: 'createTask',
//                 args: [party_id, partyTask]
//             })
//
//             if (simulateError) {
//                 console.log(simulateError.value)
//                 throw new Error('Simulation failed')
//             }
//
//             if (isSuccess.value && data.value?.request) {
//                 const hash = await writeContractAsync(data.value.request)
//                 const taskId = data.value.request.args?.[1]
//                 responses.createTaskResponse = { transactionHash: hash, taskId }
//                 return responses.createTaskResponse
//             } else {
//                 throw new Error('Simulation did not return a valid request')
//             }
//         })
//     }
//
//     const burn = async (id: number, value: number): ResponseFnContract<BurnResponse> => {
//         return handleContractInteraction(async () => {
//             const {
//                 data,
//                 isSuccess,
//                 error: simulateError
//             } = useSimulateContract({
//                 abi,
//                 chainId: chainId.value,
//                 address: contractAddress1,
//                 account: address.value,
//                 functionName: 'burn',
//                 args: [id, value]
//             })
//
//             if (simulateError) {
//                 console.log(simulateError.value)
//                 throw new Error('Simulation failed')
//             }
//
//             if (isSuccess.value && data.value?.request) {
//                 const hash = await writeContractAsync(data.value.request)
//                 responses.burnResponse = { transactionHash: hash }
//                 return responses.burnResponse
//             } else {
//                 throw new Error('Simulation did not return a valid request')
//             }
//         })
//     }
//
//     const createRS = () => {
//         return handleContractInteraction(async () => {
//             const {
//                 data,
//                 isSuccess,
//                 error: simulateError
//             } = useSimulateContract({
//                 abi,
//                 chainId: chainId.value,
//                 address: contractAddress1,
//                 account: address.value,
//                 functionName: 'createRS'
//             })
//
//             console.log(isSuccess.value && data.value?.request)
//
//             if (simulateError) {
//                 console.log(simulateError.value)
//                 throw new Error('Simulation failed')
//             }
//
//             if (isSuccess.value && data.value?.request) {
//                 const hash = await writeContractAsync(data.value.request)
//                 const resourceId = data.value.request.args?.[0]
//                 responses.createRSResponse = { transactionHash: hash, resourceId }
//                 return responses.createRSResponse
//             } else {
//                 throw new Error('Simulation did not return a valid request')
//             }
//         })
//     }
//
//     const alreadyClaimed = async (user: string, task_id: string): ResponseFnContract<AlreadyClaimedResponse> => {
//         return handleContractInteraction(async () => {
//             const { isFetched, data } = useReadContract({
//                 abi,
//                 chainId: chainId.value,
//                 address: contractAddress1,
//                 account: address.value,
//                 functionName: 'alreadyClaimed',
//                 args: [user, task_id]
//             })
//
//             if (isFetched.value && data.value) {
//                 responses.alreadyClaimedResponse = { result: !!data.value }
//                 return responses.alreadyClaimedResponse
//             } else {
//                 throw new Error('Read contract failed')
//             }
//         })
//     }
//
//     return {
//         address,
//         chainId,
//         ...responses,
//         generateSalt,
//         claim,
//         createTask,
//         burn,
//         createRS,
//         alreadyClaimed
//     }
// })
