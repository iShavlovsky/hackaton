<template>
    <section>
        <div class="container main-container-padding">
            <RouterLink class="display-flex align-items-center" to="/">
                <n-icon :component="ChevronBackOutline" :depth="1" :size="24" color="#fff" />
                <p>Back</p>
            </RouterLink>
        </div>
    </section>
    <section>
        <div class="container main-container-padding max-w-648">
            <div class="display-grid gap-16 text-center">
                <h1 class="text-40px">Create party</h1>
                <p class="op-06">Unite with others to increase reward</p>
            </div>
            <div class="display-grid gap-16 mt-40">
                <div class="party-form-w display-grid gap-32">
                    <h2 class="text-accent-900 text-center">Party details</h2>
                    <div class="display-grid gap-8">
                        <n-input
                            v-model:value.trim="createPartyForm.name"
                            path="user.name"
                            placeholder="Name"
                            size="large"
                            type="text"
                        />
                        <n-input
                            v-model:value.trim="createPartyForm.description"
                            placeholder="Description"
                            size="large"
                            type="text"
                        />
                    </div>
                </div>

                <div class="party-form-w display-grid gap-32">
                    <h2 class="text-accent-900 text-center">Your share</h2>
                    <div class="display-grid grid-cols-2 gap-32">
                        <n-input-number
                            v-model:value.trim="createPartyForm.share"
                            :default-value="null"
                            :max="100"
                            :min="1"
                            :placeholder="`${totalShare}%`"
                            :show-button="false"
                            :step="1"
                            size="large"
                        />
                        <div class="display-flex gap-12 align-items-center">
                            <div class="ico-w">
                                <n-icon :component="Wallet" :depth="1" :size="16" color="#fff" />
                            </div>
                            <div class="display-grid gap-2">
                                <n-spin :show="!isConnected">
                                    <p class="text-12px op-06">Your wallet</p>
                                    <p class="text-14px">
                                        <n-ellipsis
                                            v-if="isConnected"
                                            :tooltip="true"
                                            style="max-width: 100px; color: white"
                                        >
                                            {{ address }}
                                        </n-ellipsis>
                                    </p>
                                </n-spin>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="party-form-w display-grid gap-32">
                    <h2 class="text-accent-900 text-center">Party members</h2>
                    <div class="display-grid gap-8">
                        <div
                            v-for="members in createPartyForm.partyMembers"
                            :key="members.id"
                            class="add-member display-flex justify-between align-items-center"
                        >
                            <div class="display-flex gap-16">
                                <div class="member-revenue-w">
                                    <p class="op-06">{{ members.revenue }}%</p>
                                </div>
                                <div class="display-grid gap-2">
                                    <p>{{ members.name }}</p>
                                    <p class="text-16px op-06">{{ members.description }}</p>
                                </div>
                            </div>
                            <div class="display-flex gap-16">
                                <button
                                    class="main-custom-btn gray-btn"
                                    type="button"
                                    @click="editPartyMember(members)"
                                >
                                    <span><n-icon :component="Pencil" :depth="1" :size="16" color="#fff" /></span>
                                </button>
                                <button
                                    class="main-custom-btn red-btn"
                                    type="button"
                                    @click="deletePartyMemberById(members.id)"
                                >
                                    <span><n-icon :component="TrashBin" :depth="1" :size="16" color="#fff" /></span>
                                </button>
                            </div>
                        </div>

                        <button
                            class="add-member text-left display-flex justify-between align-items-center"
                            @click="showModal = true"
                        >
                            <span class="display-flex gap-16 align-items-center">
                                <span class="member-revenue-w add-member-ico">
                                    <span><n-icon :component="Add" :depth="1" :size="24" color="#fff" /></span>
                                </span>

                                <span>Add type of members</span>
                            </span>
                        </button>
                    </div>
                </div>

                <div class="party-form-w party-no-bg display-grid gap-32">
                    <h2 class="text-16px text-center">Your revenue will be distributed like this:</h2>
                    <div class="revenue-distributed-w display-flex gap-8">
                        <div
                            :style="{ maxWidth: `${totalShare}%`, minWidth: '10%' }"
                            class="revenue-distributed-holder display-flex align-items-center justify-center"
                        >
                            <div class="revenue-distributed-info display-grid gap-2">
                                <p>{{ totalShare }}%</p>
                                <p class="text-16px op-06">@malamuth (you)</p>
                            </div>
                        </div>
                        <div
                            v-for="members in createPartyForm.partyMembers"
                            :key="members.id"
                            :style="{ maxWidth: `${members.revenue}%`, minWidth: '10%' }"
                            class="revenue-distributed-holder display-flex align-items-center justify-center"
                        >
                            <div class="revenue-distributed-info display-grid gap-2">
                                <p>{{ members.revenue }}%</p>
                                <p class="text-16px op-06">
                                    <n-ellipsis :tooltip="true" style="max-width: 150px">
                                        {{ members.name }}
                                    </n-ellipsis>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-80 width-full">
                        <button class="main-custom-btn width-full" type="button" @click="actionContract">
                            <span>Create party</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <n-modal v-model:show="showModal" class="quest-custom-modal min-w-648" preset="dialog" title="Dialog">
            <template #header>
                <div></div>
            </template>
            <div class="quests-card-modal-content p-tb-24px mt-40">
                <h1 class="text-center">Add type of members</h1>
                <div class="display-grid gap-8 mt-40">
                    <n-input v-model:value.trim="createMembersForm.name" placeholder="Name" size="large" type="text" />
                    <n-input
                        v-model:value.trim="createMembersForm.description"
                        placeholder="Description"
                        size="large"
                        type="text"
                    />
                    <n-input-number
                        v-model:value.trim="createMembersForm.revenue"
                        :default-value="null"
                        :max="createPartyForm.share ? 100 - createPartyForm.share : 100"
                        :min="1"
                        :placeholder="`Revenue share max ${createPartyForm.share ? 100 - createPartyForm.share : 100}% `"
                        :show-button="false"
                        :step="1"
                        size="large"
                    />
                    <button class="main-custom-btn width-full" type="button" @click="addPartyMember">
                        <span>{{ editIndex >= 0 ? 'Save' : 'Add' }}</span>
                    </button>
                </div>
            </div>
        </n-modal>
    </section>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { Add, ChevronBackOutline, Pencil, TrashBin, Wallet } from '@vicons/ionicons5'
import { computed, reactive, ref, watch } from 'vue'
import { useAccount, useWriteContract } from '@wagmi/vue'
import { useMessage } from 'naive-ui'
import type { ICreatePartyForm, IPartyMembers } from '@/types'
import type { ContractFunctionArgs } from 'viem'
import abi from '@/contracts/abi.json'

const contractAddress1 = import.meta.env.VITE_ID_CONTRACT_ADDRESS_1

const message = useMessage()
const { isConnected, address, chainId } = useAccount()
const showModal = ref(false)
const editIndex = ref<number>(-1)

function useRandomKey() {
    return Math.random().toString(36).substring(7)
}

const functionName = ref('createRS')
const args = ref<ContractFunctionArgs>([])

const { data, error, isPending, isSuccess, isError, writeContract } = useWriteContract()
const actionContract = () => {
    writeContract({
        abi,
        chainId: chainId.value,
        address: contractAddress1,
        account: address.value,
        functionName: functionName.value,
        ...(args.value && args.value.length ? { args: args.value } : {})
    })
}

const createPartyForm = reactive<Omit<ICreatePartyForm, 'owner'>>({
    name: '',
    description: '',
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

const createMembersForm = reactive<IPartyMembers>({
    id: '',
    name: '',
    description: '',
    revenue: null
})
const totalRevenue = computed(() => {
    return createPartyForm.partyMembers.reduce((sum, member) => {
        return sum + (member.revenue ?? 0)
    }, 0)
})
const totalShare = computed(() => (createPartyForm.share ? `${createPartyForm.share}` : `${100 - totalRevenue.value}`))

const validateMembersForm = computed(
    () => !!createMembersForm.name && createMembersForm.description && createMembersForm.revenue
)

const resetPartyMember = () => {
    createMembersForm.id = ''
    createMembersForm.name = ''
    createMembersForm.description = ''
    createMembersForm.revenue = null
}

const editPartyMember = (member: IPartyMembers) => {
    const index = createPartyForm.partyMembers.findIndex(m => m.id === member.id)
    if (index !== -1) {
        editIndex.value = index
        showModal.value = true
        const { id, name, description, revenue } = member
        Object.assign(createMembersForm, { id, name, description, revenue })
    }
}

const addPartyMember = () => {
    if (validateMembersForm.value) {
        if (editIndex.value >= 0) {
            createPartyForm.partyMembers[editIndex.value] = { ...createMembersForm }
            editIndex.value = -1
        } else {
            const newForm = {
                id: useRandomKey(),
                name: createMembersForm.name,
                description: createMembersForm.description,
                revenue: createMembersForm.revenue
            }
            createPartyForm.partyMembers.push(newForm)
        }
        showModal.value = false
        resetPartyMember()
        message.success('Party members created')
    } else {
        message.warning('Fill in all fields correctly')
    }
}

const deletePartyMemberById = (id: IPartyMembers['id']) => {
    const index = createPartyForm.partyMembers.findIndex(member => member.id === id)
    if (index !== -1) {
        createPartyForm.partyMembers.splice(index, 1)
    }
}

watch(
    () => showModal.value,
    newOppo => {
        console.log(777, editIndex.value)
        if (!newOppo) resetPartyMember()
    }
)

// Определение типов
type ResponseType = `0x${string}`
type WriteContractErrorType = {
    message: string
    code?: number
    [key: string]: any
}

// Пример функции для получения данных
const fetchData = async () => {
    isPending.value = true
    try {
        // Имитация запроса
        const response = await new Promise<ResponseType>((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    resolve('0x1234567890abcdef')
                } else {
                    reject({ message: 'Something went wrong', code: 500 })
                }
            }, 2000)
        })
        data.value = response
        isSuccess.value = true
    } catch (err) {
        error.value = err as WriteContractErrorType
        isError.value = true
    } finally {
        isPending.value = false
    }
}

// Вызов fetchData при монтировании компонента
fetchData()

// Наблюдатели для вызова соответствующих сообщений
watch(isPending, newVal => {
    if (newVal) {
        message.loading('Fetching...')
    }
})

watch(isError, newVal => {
    if (newVal) {
        message.error(`Error: ${error.value?.message}`)
    }
})

watch(isSuccess, newVal => {
    if (newVal) {
        message.success(`Success: ${data.value}`)
    }
})
</script>
<style>
.max-w-648 {
    max-width: 648px;
}

.min-w-648 {
    min-width: 648px;
}

.party-form-w {
    background-color: #151518;
    border-radius: 24px;
    padding: 40px;

    &.party-no-bg {
        background-color: transparent;
    }
}

.ico-w {
    width: 28px;
    height: 28px;
    padding: 6px;
    background-color: #313136;
    border-radius: 8px;
}

.add-member {
    border-radius: 20px;
    background-color: #1d1d21;
    padding: 10px;
    color: white;
}

.member-revenue-w {
    background-color: #453298;
    border-radius: 12px;
    border: 1px solid #6a5bad;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;

    &.add-member-ico {
        background-color: #1d1d21;
        border: 1px solid #5a5a5e;
    }
}

.revenue-distributed-w {
    height: 200px;
}

.revenue-distributed-holder {
    border: 2px solid #92fe75;
    border-radius: 24px;
    padding: 6px;
    flex: 1;
    background-color: #151518;

    .revenue-distributed-info {
        transform: rotate(-90deg);
        white-space: nowrap;
    }
}
</style>
