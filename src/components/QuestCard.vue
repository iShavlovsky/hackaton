<template>
    <div class="quests-card pointer" @click="showModal = true">
        <n-avatar :size="300" bordered class="quests-pointer pointer" src="" />
        <n-space class="quests-card-tag-w">
            <n-tag :bordered="false" type="info">NFT marketplace</n-tag>
        </n-space>
        <div class="quests-card__header">
            <div class="quests-card__title display-flex flex-column gap-2 quests-pointer">
                <h2>Buying Bonds on Linea with ApeBond</h2>
                <p class="op-06">
                    <n-ellipsis line-clamp="1">Celebrate ApeBond's recent launch on the Linea Mainnet</n-ellipsis>
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
                        <h2>Buying Bonds on Linea with ApeBond</h2>
                        <p class="op-06">Celebrate ApeBond's recent launch on the Linea Mainnet</p>
                        <div class="display-flex gap-8">
                            <p>
                                <span>4k</span>
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
                                <h2>15 TBA</h2>
                            </div>
                            <n-icon :component="AmericanFootball" :size="97" class="reward-ico" color="#fff" />
                        </div>
                        <div class="padding-tb-8px">
                            <h3>Finish all steps</h3>
                        </div>
                        <div class="display-grid gap-8">
                            <button
                                class="quest-modal-step-btn display-flex flex-row align-items-center justify-between done-step"
                            >
                                <span class="display-flex align-items-center gap-8">
                                    <span class="step-ico display-flex align-items-center justify-center">1</span>
                                    <span class="step-title">Intro to Ape Bond Value</span>
                                </span>
                                <span class="step-lock">
                                    <n-icon :component="LockClosed" :depth="6" :size="16" color="#fff" />
                                </span>
                            </button>

                            <button
                                class="quest-modal-step-btn display-flex flex-row align-items-center justify-between"
                            >
                                <span class="display-flex align-items-center gap-8">
                                    <span class="step-ico display-flex align-items-center justify-center">2</span>
                                    <span class="step-title">Read Announcement</span>
                                </span>
                                <span class="step-lock">
                                    <n-icon :component="LockClosed" :depth="0.6" :size="16" color="#fff" />
                                </span>
                            </button>

                            <button
                                class="quest-modal-step-btn display-flex flex-row align-items-center justify-between"
                            >
                                <span class="display-flex align-items-center gap-8">
                                    <span class="step-ico display-flex align-items-center justify-center">3</span>
                                    <span class="step-title">Join ApeBond on TG</span>
                                </span>
                                <span class="step-lock">
                                    <n-icon :component="LockClosed" :depth="0.6" :size="16" color="#fff" />
                                </span>
                            </button>

                            <button
                                class="quest-modal-step-btn display-flex flex-row align-items-center justify-between"
                            >
                                <span class="display-flex align-items-center gap-8">
                                    <span class="step-ico display-flex align-items-center justify-center">4</span>
                                    <span class="step-title">
                                        Purchase a Bond via
                                        <br />
                                        ApeBond
                                    </span>
                                </span>
                                <span class="step-lock">
                                    <n-icon :component="LockClosed" :depth="0.6" :size="16" color="#fff" />
                                </span>
                            </button>

                            <button
                                class="quest-modal-step-btn display-flex flex-row align-items-center justify-between"
                            >
                                <span class="display-flex align-items-center gap-8">
                                    <span class="step-ico display-flex align-items-center justify-center">
                                        <n-icon :component="Star" :depth="0.6" :size="16" color="#8F75FE" />
                                    </span>
                                    <span class="step-title text-color-brand-aviation">Claim rewards</span>
                                </span>
                                <span class="step-lock">
                                    <n-icon :component="LockClosed" :depth="0.6" :size="16" color="#fff" />
                                </span>
                            </button>
                        </div>
                    </div>
                    <div class="quests-modal-step-info width-full display-flex flex-column justify-end">
                        <h1 class="text-center mb-92">
                            Join the ApeBond community, get ABOND (the native utility token) and enjoy discounted token
                            purchases through Bonds
                        </h1>

                        <button class="main-custom-btn">
                            <span>
                                <n-icon :component="CheckmarkSharp" :depth="0.6" :size="16" color="currentColor" />
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
import { ref } from 'vue'
import { AmericanFootball, CheckmarkSharp, LockClosed, Star } from '@vicons/ionicons5'

const showModal = ref(false)
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

    &.done-step {
        border: 1px solid #8f75fe;

        .step-ico {
            background-color: #453298;
        }

        .step-lock {
            display: none;
        }
    }
}

.quests-modal-step-info {
    padding: 40px;
    border-radius: 28px;
    background-color: #1d1d21;
}

.mb-92 {
    margin-bottom: 92px;
}
</style>
