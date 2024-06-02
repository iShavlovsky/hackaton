<template>
    <div class="quests-card display-flex flex-column pointer" @click="showModal = true">
        <n-avatar :size="300" :src="props.card.imageSrc" bordered class="quest-avatar-img pointer" />
        <n-space class="quests-card-tag-w">
            <n-tag v-for="tag in props.card.tags" :key="tag" :bordered="false" type="info">{{ tag }}</n-tag>
        </n-space>
        <div class="quests-card__header display-flex flex-column height-full justify-between">
            <div class="quests-card__title display-flex flex-column gap-2">
                <h2>{{ props.card.title }}</h2>
                <p class="op-06">
                    <n-ellipsis line-clamp="1">{{ props.card.description }}</n-ellipsis>
                </p>
            </div>
            <div class="display-flex align-items-center justify-between mt-16">
                <div class="display-flex gap-4 align-items-center">
                    <div class="round-ico-w">
                        <n-icon :component="FileTrayFull" :size="16" class="reward-ico" color="#fff" />
                    </div>
                    <p class="text-12px">{{ props.card.questSteps }} steps</p>
                </div>
                <div class="display-flex align-items-center gap-8">
                    <p class="text-12px">
                        <span>{{ props.card.totalUsers }}</span>
                        users
                    </p>
                    <div class="">
                        <n-avatar :size="28" :src="props.card.user1" bordered class="users-quest-avatar" round />
                        <n-avatar :size="28" :src="props.card.user2" bordered class="users-quest-avatar" round />
                        <n-avatar :size="28" :src="props.card.user3" bordered class="users-quest-avatar" round />
                    </div>
                </div>
            </div>
        </div>

        <n-modal v-model:show="showModal" class="quest-custom-modal" preset="dialog" title="Dialog">
            <template #header>
                <div></div>
            </template>
            <n-spin :show="isPending">
                <div class="quests-card-modal-content">
                    <div class="quests-card-modal-head display-flex gap-40 align-items-center">
                        <n-avatar :size="120" :src="props.card.imageSrc" bordered />
                        <div class="quests-card__header display-flex flex-column gap-6">
                            <h2>{{ props.card.title }}</h2>
                            <p class="op-06">{{ props.card.description }}</p>
                            <div class="display-flex gap-8">
                                <p>
                                    <span>{{ props.card.totalUsers }}</span>
                                    users
                                </p>
                                <div class="">
                                    <n-avatar
                                        :size="28"
                                        :src="props.card.user1"
                                        bordered
                                        class="users-quest-avatar"
                                        round
                                    />
                                    <n-avatar
                                        :size="28"
                                        :src="props.card.user2"
                                        bordered
                                        class="users-quest-avatar"
                                        round
                                    />
                                    <n-avatar
                                        :size="28"
                                        :src="props.card.user3"
                                        bordered
                                        class="users-quest-avatar"
                                        round
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="steps-all-w display-flex gap-20">
                        <div class="steps-sidebar-w display-flex flex-column gap-8">
                            <div class="reward-count-w display-flex flex-row justify-between">
                                <div class="display-grid align-self-center">
                                    <p>Reward</p>
                                    <h2>{{ props.card.reward }}</h2>
                                </div>
                                <div class="">
                                    <n-image alt="You are the King" class="reward-ico" src="./images/korona.png" />
                                </div>
                            </div>
                            <div class="padding-tb-8px">
                                <h3>Finish all steps</h3>
                            </div>
                            <div class="steps-btns-wrapper display-grid gap-8">
                                <button
                                    v-for="(event, i) in props.card.events"
                                    :key="event.title"
                                    :class="[
                                        'quest-modal-step-btn display-flex flex-row align-items-center justify-between',
                                        { 'active-step': activeEventIndex === i, 'done-step': event.status }
                                    ]"
                                    :disabled="!event.status"
                                    @click="setEventDescription(event)"
                                >
                                    <span class="display-flex align-items-center gap-8">
                                        <span class="step-ico display-flex align-items-center justify-center">
                                            {{ i + 1 }}
                                        </span>
                                        <span class="step-title">{{ event.title }}</span>
                                    </span>
                                    <span class="ico-w-28">
                                        <span v-if="activeEventIndex != i && !event.status" class="step-lock">
                                            <n-icon :component="LockClosed" :depth="1" :size="16" color="#fff" />
                                        </span>
                                        <span v-if="event.status && activeEventIndex" class="step-check">
                                            <n-icon :component="Checkmark" :depth="1" :size="28" color="#fff" />
                                        </span>
                                    </span>
                                </button>

                                <button
                                    :class="[
                                        'quest-modal-step-btn display-flex flex-row align-items-center justify-between',
                                        { 'active-step': claimRewardsStep, 'done-step': claimRewardsStep }
                                    ]"
                                >
                                    <span class="display-flex align-items-center gap-8">
                                        <span class="step-ico display-flex align-items-center justify-center">
                                            <n-icon :component="Star" :depth="1" :size="16" color="#8F75FE" />
                                        </span>
                                        <span class="step-title text-color-brand-aviation">Claim rewards</span>
                                    </span>
                                    <span class="ico-w-28">
                                        <span v-if="!claimRewardsStep" class="step-lock">
                                            <n-icon :component="LockClosed" :depth="1" :size="16" color="#fff" />
                                        </span>
                                        <span v-if="claimRewardsStep" class="step-check">
                                            <n-icon :component="Checkmark" :depth="1" :size="28" color="#fff" />
                                        </span>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div class="quests-modal-step-info width-full display-flex flex-column justify-end">
                            <h1 class="text-center mb-92">{{ descriptionEvent }}</h1>

                            <button
                                :style="{ backgroundColor: claimRewardsStep ? '#8f75fe' : '#92FE75' }"
                                class="main-custom-btn"
                                @click="setEventDone"
                            >
                                <span>
                                    <n-icon :component="CheckmarkSharp" :depth="1" :size="16" color="currentColor" />
                                </span>
                                <span>{{ claimRewardsStep ? 'CLAIM!!!!' : 'Done' }}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </n-spin>
        </n-modal>

        <n-modal v-model:show="isSuccess" class="quest-custom-modal min-w-648" preset="dialog" title="Dialog">
            <template #header>
                <div></div>
            </template>
            <div class="quests-card-modal-content p-tb-24px mt-40">
                <h1 class="text-center">Congrats! 15 TBA Claimed!</h1>
                <div class="display-grid gap-8 mt-40">
                    <div class="display-flex flex-row gap-8 align-items-center op-06">
                        <p>
                            {{ data }}
                        </p>
                        <button v-if="isSupported && data" class="tech-btn" @click="copyHandler(data)">
                            <span><n-icon :component="CopyOutline" :depth="1" :size="24" color="#fff" /></span>
                        </button>
                    </div>
                    <a :href="`https://sepolia.lineascan.build/address/${data}`"></a>
                    <RouterLink class="main-custom-btn width-full" to="/" type="button">
                        <span>Come back home</span>
                    </RouterLink>
                </div>
            </div>
        </n-modal>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import { Checkmark, CheckmarkSharp, CopyOutline, FileTrayFull, LockClosed, Star } from '@vicons/ionicons5'
import type { IEventCard, IQuestCard } from '@/types'
import { useAccount, useReadContract, useSimulateContract, useWriteContract } from '@wagmi/vue'
import { useMessage } from 'naive-ui'
import abi from '@/contracts/abi.json'
import type { ContractFunctionArgs } from 'viem'
import { RouterLink } from 'vue-router'
import { useClipboard } from '@vueuse/core'

const showModal = ref(false)
const message = useMessage()
const { address, chainId } = useAccount()
const props = defineProps<{
    card: IQuestCard
    meta: {
        partyId: number
        lastPartyId: unknown
        influencersParty: unknown
        totalPartyTasks: unknown
        task_id: unknown
    }
}>()

const emit = defineEmits<{
    (e: 'setEvent', payload: { cardId: IQuestCard['id']; eventTitle: IEventCard['title'] }): void
}>()

const activeEventIndex = ref(0)
const activeEvent = computed(() => props.card.events[activeEventIndex.value])
const claimRewardsStep = ref(false)
const descriptionEvent = ref<string>('')

const configContract = reactive({
    abi,
    chainId: chainId.value,
    address: import.meta.env.VITE_ID_CONTRACT_ADDRESS_1,
    account: address.value
})

const {
    data: privateKey,
    refetch: getPrivateKey,
    queryKey: queryPrivateKey
} = useReadContract({
    ...configContract,
    functionName: 'generatePrivateKey',
    args: [props.meta.influencersParty, props.meta.task_id]
})

const functionName = ref('claim')
const args = ref<ContractFunctionArgs>([props.meta.partyId, props.meta.task_id, privateKey.value])

const { data, error, isPending, isSuccess, isError, writeContract } = useWriteContract()

const actionContract = () => {
    writeContract({
        ...configContract,
        functionName: functionName.value,
        ...(args.value && args.value.length ? { args: args.value } : {})
    })
}

const setEventDescription = (event: IEventCard) => {
    descriptionEvent.value = event.description
}

// const createRS = async () => {
//     functionName.value = 'createRS'
//     args.value = []
//     actionContract()
// }
//
// const createTask = async (party_id: number, temp: number) => {
//     functionName.value = 'createTask'
//     args.value = [party_id, { temp }]
//     actionContract()
// }

const claimTask = async () => {
    functionName.value = 'claim'
    args.value = [props.meta.partyId, props.meta.task_id, privateKey.value]
    // writeContract({
    //     ...configContract,
    // })
    console.log(args.value)
    actionContract()
}

const burnTokens = async (id: number, value: number) => {
    functionName.value = 'burn'
    args.value = [id, value]
    actionContract()
}

const burnBatchTokens = async (ids: number[], values: number[]) => {
    functionName.value = 'burnBatch'
    args.value = [ids, values]
    actionContract()
}

const {
    data: claim,
    refetch: getclaim,
    isSuccess: isClaim,
    isPending: isPendingClaim,
    queryKey
} = useSimulateContract({
    ...configContract,
    functionName: 'claim',
    args: [props.meta.partyId as number, props.meta.task_id as string, privateKey.value],
    query: {
        enabled: true
    }
})
onMounted(async () => {
    // getPrivateKey()
    console.log(privateKey.value)
})
// console.log(queryKey)
const setEventDone = async () => {
    if (claimRewardsStep.value) {
        // await getclaim()
        // console.log(claim, queryKey)
        await claimTask()
    }

    if (activeEvent.value) {
        emit('setEvent', { cardId: props.card.id, eventTitle: activeEvent.value.title })
        activeEvent.value.status = true

        if (activeEventIndex.value < props.card.events.length - 1) {
            activeEventIndex.value++
            setEventDescription(props.card.events[activeEventIndex.value])
        } else {
            claimRewardsStep.value = true
        }
    }
}

const { text, copy, copied, isSupported } = useClipboard()

const copyHandler = (textCopy: string) => {
    if (address.value) {
        copy(textCopy).then(() => {
            if (copied) message.success(text.value)
        })
    }
}

onMounted(() => {
    setEventDescription(props.card.events[0])
})

watch(
    () => isSuccess.value,
    () => {
        message.success(`Done ${data.value}`)
    }
)
watch(
    () => isError.value,
    () => {
        console.log(error.value?.message)
        message.error(`Error ${error.value?.message}`)
    }
)

// struct PartyTask {
//   uint256 temp;
// }
// task_id
// influencersParty(uint256 party_id) external view returns(address)

// bytes32 task_id = keccak256(
//     abi.encode(party_id, party_task_id, influencer)
// );

// function countTaskId(
//     uint256 party_id,
//     uint256 party_task_id,
//     address influencer
// ) public pure returns (bytes32)

// function generatePrivateKey(
//     address _user,
//     bytes32 _task_id
// ) public pure returns (bytes32 secretKey)
</script>

<style lang="scss">
.quests-card {
    border-radius: 24px;
    padding: 8px;
    background-color: #151518;
    max-width: 316px;
}

.quest-avatar-img {
    min-height: 300px;
    min-width: 300px;
}

.quests-card__header {
    padding: 16px 12px;
}

.quests-card-tag-w {
    padding: 20px 12px 0 12px;
}

.quests-card-modal-head {
    padding: 36px 0;
    @media (max-width: 770px) {
        flex-direction: column;
        gap: 20px;
        .quests-card__header {
            align-items: center;
            text-align: center;
        }
    }
}

.users-quest-avatar {
    margin-right: -12px;
}

.reward-count-w {
    background-color: #453298;
    border-radius: 20px;
    padding: 0 20px;
    color: #8f75fe;

    .reward-ico {
        margin-top: -20px;
        width: 97px;
        height: 97px;
        transform: rotate(15deg);
    }
}

.quest-modal-step-btn {
    color: white;
    padding: 10px;
    border-radius: 50px;
    background-color: #1d1d21;
    text-align: left;
    border: 1px solid transparent;

    .step-ico {
        border-radius: 50%;
        background-color: #313136;
        width: 36px;
        height: 36px;
    }

    .step-lock {
        width: 28px;
        height: 28px;
        padding: 6px;
        background-color: #313136;
        border-radius: 8px;
    }

    .step-check {
        width: 28px;
        height: 28px;
    }

    &.active-step {
        border: 1px solid #8f75fe;

        .step-ico {
            background-color: #453298;
        }
    }

    &.done-step {
        border: 1px solid #8f75fe;

        .step-ico {
            background-color: #453298;
        }
    }
}

.round-ico-w {
    width: 28px;
    height: 28px;
    padding: 6px;
    background-color: #2a2a2e;
    border-radius: 50%;
}

.mb-92 {
    margin-bottom: 92px;
}

.steps-sidebar-w {
    min-width: 280px;
}

.steps-all-w {
    @media (max-width: 880px) {
        display: flex;
        flex-direction: column;
    }
}

.steps-btns-wrapper {
    @media (max-width: 880px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    @media (max-width: 565px) {
        flex-direction: column;
    }
}

.ico-w-28 {
    display: flex;
    margin-left: 8px;
    width: 28px;
    height: 28px;
    min-width: 28px;
    min-height: 28px;
}
</style>
