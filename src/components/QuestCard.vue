<template>
    <div class="quests-card pointer" @click="showModal = true">
        <n-avatar :size="300" bordered class="quests-pointer pointer" src="" />
        <n-space class="quests-card-tag-w">
            <n-tag v-for="tag in props.card.tags" :key="tag" :bordered="false" type="info">{{ tag }}</n-tag>
        </n-space>
        <div class="quests-card__header">
            <div class="quests-card__title display-flex flex-column gap-2 quests-pointer">
                <h2>{{ props.card.title }}</h2>
                <p class="op-06">
                    <n-ellipsis line-clamp="1">{{ props.card.description }}</n-ellipsis>
                </p>
            </div>
        </div>
        <n-modal v-model:show="showModal" class="quest-custom-modal" preset="dialog" title="Dialog">
            <template #header>
                <div></div>
            </template>
            <div class="quests-card-modal-content">
                <div class="quests-card-modal-head display-flex gap-40 align-items-center">
                    <n-avatar :size="120" bordered src="" />
                    <div class="quests-card__header display-flex flex-column gap-6">
                        <h2>{{ props.card.title }}</h2>
                        <p class="op-06">{{ props.card.description }}</p>
                        <div class="display-flex gap-8">
                            <p>
                                <span>{{ props.card.totalUsers }}</span>
                                users
                            </p>
                            <div class="">
                                <n-avatar :size="28" bordered class="users-quest-avatar" round src="" />
                                <n-avatar :size="28" bordered class="users-quest-avatar" round src="" />
                                <n-avatar :size="28" bordered class="users-quest-avatar" round src="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="display-flex gap-20">
                    <div class="steps-sidebar-w display-flex flex-column gap-8">
                        <div class="reward-count-w display-flex flex-row justify-between">
                            <div class="display-grid align-self-center">
                                <p>Reward</p>
                                <h2>{{ props.card.reward }}</h2>
                            </div>
                            <n-icon :component="AmericanFootball" :size="97" class="reward-ico" color="#fff" />
                        </div>
                        <div class="padding-tb-8px">
                            <h3>Finish all steps</h3>
                        </div>
                        <div class="display-grid gap-8">
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
                                <span v-if="!event.status" class="step-lock">
                                    <n-icon :component="LockClosed" :depth="1" :size="16" color="#fff" />
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
                                <span v-if="!claimRewardsStep" class="step-lock">
                                    <n-icon :component="LockClosed" :depth="1" :size="16" color="#fff" />
                                </span>
                            </button>
                        </div>
                    </div>
                    <div class="quests-modal-step-info width-full display-flex flex-column justify-end">
                        <h1 class="text-center mb-92">{{ descriptionEvent }}</h1>

                        <button class="main-custom-btn" @click="setEventDone">
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
import { onMounted, ref } from 'vue'
import { AmericanFootball, CheckmarkSharp, LockClosed, Star } from '@vicons/ionicons5'
import type { IEventCard, IQuestCard } from '@/types'

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
</script>

<style lang="scss">
.quests-card {
    border-radius: 24px;
    padding: 8px;
    background-color: #151518;
    max-width: 316px;
}

.quests-card__header {
    padding: 16px 12px;
}

.quests-card-tag-w {
    padding: 20px 12px 0 12px;
}

.quests-pointer {
    cursor: pointer;
}

.quests-card-modal-head {
    padding: 36px 0;
}

.quest-custom-modal {
    background-color: #151518;
    min-width: 960px;
    border-radius: 24px;

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

    .users-quest-avatar {
        margin-right: -12px;
    }
}

.steps-sidebar-w {
    min-width: 280px;
}

.reward-count-w {
    background-color: #453298;
    border-radius: 20px;
    padding: 0 20px;
    color: #8f75fe;

    .reward-ico {
        margin-top: -20px;
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

.mb-92 {
    margin-bottom: 92px;
}
</style>
