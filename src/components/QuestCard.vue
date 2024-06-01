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
                                <div class="ico-w-28">
                                    <span v-if="activeEventIndex != i && !event.status" class="step-lock">
                                        <n-icon :component="LockClosed" :depth="1" :size="16" color="#fff" />
                                    </span>
                                    <span v-if="event.status && activeEventIndex" class="step-check">
                                        <n-icon :component="Checkmark" :depth="1" :size="28" color="#fff" />
                                    </span>
                                </div>
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
                                <div class="ico-w-28">
                                    <span v-if="!claimRewardsStep" class="step-lock">
                                        <n-icon :component="LockClosed" :depth="1" :size="16" color="#fff" />
                                    </span>
                                    <span v-if="claimRewardsStep" class="step-check">
                                        <n-icon :component="Checkmark" :depth="1" :size="28" color="#fff" />
                                    </span>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div class="quests-modal-step-info width-full display-flex flex-column justify-end">
                        <h1 class="text-center mb-92">{{ descriptionEvent }}</h1>

                        <button class="main-custom-btn" @click="handleButtonClick">
                            <span>
                                <n-icon :component="CheckmarkSharp" :depth="1" :size="16" color="currentColor" />
                            </span>
                            <span>Done</span>
                        </button>
                    </div>
                </div>
            </div>
        </n-modal>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import { Checkmark, CheckmarkSharp, FileTrayFull, LockClosed, Star } from '@vicons/ionicons5'
import type { IEventCard, IQuestCard } from '@/types'
import { useAccount, useWriteContract } from '@wagmi/vue'
import { useMessage } from 'naive-ui'
import abi from '@/contracts/abi.json'
import type { ContractFunctionArgs } from 'viem'

const contractAddress1 = import.meta.env.VITE_ID_CONTRACT_ADDRESS_1

const message = useMessage()
const { isConnected, address, chainId } = useAccount()
const props = defineProps<{
    card: IQuestCard
}>()

const emit = defineEmits<{
    (e: 'setEvent', payload: { cardId: IQuestCard['id']; eventTitle: IEventCard['title'] }): void
}>()

const activeEventIndex = ref(0)
const activeEvent = computed(() => props.card.events[activeEventIndex.value])
const claimRewardsStep = ref(false)
const descriptionEvent = ref<string>('')

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

const setEventDescription = (event: IEventCard) => {
    descriptionEvent.value = event.description
}

const setEventDone = () => {
    if (activeEvent.value) {
        emit('setEvent', { cardId: props.card.id, eventTitle: activeEvent.value.title })
        activeEvent.value.status = true

        if (activeEventIndex.value < props.card.events.length - 1) {
            activeEventIndex.value++
            setEventDescription(props.card.events[activeEventIndex.value])
        } else {
            claimRewards()
        }
    }
}

const claimRewards = () => {
    claimRewardsStep.value = true
    console.log('claimRewards', claimRewardsStep.value)
}

const showModal = ref(false)

onMounted(() => {
    setEventDescription(props.card.events[0])
})

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

const handleButtonClick = () => {
    setEventDone()
    actionContract()
}
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

.quest-custom-modal {
    background-color: #151518;
    min-width: 960px;
    border-radius: 24px;
    @media (max-width: 1024px) {
        min-width: 90%;
        h1 {
            font-size: 23px;
        }
    }

    .n-base-icon {
        background-color: rgba(255, 255, 255, 0.6);
        border-radius: 50%;
        min-width: 28px;
        min-height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #151518;
    }

    .n-dialog__icon {
        display: none;
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
