<template>
    <section>
        <div class="container main-container-padding">
            <div class="party-page-header-w display-flex justify-between p-tb-24px">
                <div class="party-page-title-w max-w-840 display-flex gap-40">
                    <n-avatar :size="120" bordered class="min-w-120px" src="./images/QuantumQuestParty.jpg" />
                    <div class="display-grid gap-8">
                        <h1>Quantum Quest</h1>
                        <p class="op-06">
                            Join us for a game party where gamers unite to complete quests and earn Linea tokens. Team
                            up, strategize, and conquer challenges together. Let's embark on this adventure and collect
                            those tokens!
                        </p>
                    </div>
                </div>
                <div class="volume-party-w display-flex gap-8 align-self-end">
                    <div class="display-grid grid-cols-3 gap-4">
                        <div class="party-date-w display-grid gap-4">
                            <p class="text-14px op-06">1D Volume</p>
                            <p>8 580</p>
                        </div>
                        <div class="party-date-w display-grid gap-4">
                            <p class="text-14px op-06">Total earned</p>
                            <p>8 580</p>
                        </div>
                        <div class="party-date-w display-grid gap-4">
                            <p class="text-14px op-06">People</p>
                            <p>8 580</p>
                        </div>
                    </div>
                    <button class="main-custom-btn" @click="showModal = true">
                        <span>
                            <n-icon :component="ShareSocialSharp" :size="24" color="currentColor" />
                        </span>
                        <span class="text-16px">Invite</span>
                    </button>
                </div>
            </div>

            <n-space class="table-w mt-40" vertical>
                <n-table class="table-holder-party-page" striped>
                    <thead>
                        <tr>
                            <th style="vertical-align: top">#</th>
                            <th style="vertical-align: top">Username</th>
                            <th style="vertical-align: top">Type</th>
                            <th style="vertical-align: top">Address</th>
                            <th style="vertical-align: top">Share</th>
                            <th style="vertical-align: top">Your tokens</th>
                            <th style="vertical-align: top">1D</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ComradeTableElement
                            v-for="(row, index) in rows"
                            :key="index"
                            :address="row.address"
                            :index="index + 1"
                            :oneDayTokens="row.oneDayTokens"
                            :oneDayTokensChange="row.oneDayTokensChange"
                            :party="row.party"
                            :share="row.share"
                            :type="row.type"
                            :username="row.username"
                            :yourTokens="row.yourTokens"
                            :yourTokensChange="row.yourTokensChange"
                        />
                    </tbody>
                </n-table>
            </n-space>
        </div>

        <n-modal v-model:show="showModal" class="quest-custom-modal modal-min-w-648" preset="dialog" title="Dialog">
            <template #header>
                <div></div>
            </template>
            <div class="quests-card-modal-content p-tb-24px mt-40">
                <div class="display-grid gap-16">
                    <h1 class="text-center">Invite</h1>
                    <p class="op-06 text-center">Each member type has its own invitation link. Don’t mix up!</p>
                </div>
                <div class="display-grid gap-8 mt-40">
                    <div class="add-member display-flex justify-between align-items-center">
                        <div class="display-flex gap-16">
                            <div class="member-revenue-w">
                                <p class="op-06">15%</p>
                            </div>
                            <div class="display-grid gap-2">
                                <p>Telegram members</p>
                                <p class="text-16px op-06">Those who joined party via TG</p>
                            </div>
                        </div>
                        <div>
                            <button class="main-custom-btn small-btn" @click="showModal = true">
                                <span class="display-flex">
                                    <n-icon :component="Link" :size="16" color="currentColor" />
                                </span>
                                <span class="text-12px">Invite</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </n-modal>
    </section>
</template>

<script lang="ts" setup>
import { Link, ShareSocialSharp } from '@vicons/ionicons5'
import ComradeTableElement from '@/components/ComradeTableElement.vue'
import type { ComradeTableElementProps } from '@/components/СomradeTableElementProps.type.ts'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const partySlug = computed(() => route.params.slug as string)
const showModal = ref(false)
const rows: ComradeTableElementProps[] = [
    {
        index: 1,
        party: {
            avatar: './images/avatar-main.jpg'
        },
        username: '@malamuth (you)',
        type: 'Owner',
        address: '0x70AD...1D7af9',
        share: '20%',
        yourTokens: 3069,
        yourTokensChange: -4,
        oneDayTokens: 512,
        oneDayTokensChange: 34
    },
    {
        index: 2,
        party: {
            avatar: './images/user5-1.jpg'
        },
        username: '@mitch',
        type: 'Telegram members',
        address: '0x40AD...1hJaf4',
        share: '0.5%',
        yourTokens: 234,
        yourTokensChange: 8,
        oneDayTokens: 12,
        oneDayTokensChange: 6
    },
    {
        index: 3,
        party: {
            avatar: './images/user5.jpg'
        },
        username: '@Monster',
        type: 'Telegram members',
        address: '0x90Ah...6D70bG',
        share: '0.5%',
        yourTokens: 1234,
        yourTokensChange: 18,
        oneDayTokens: 212,
        oneDayTokensChange: 7
    },
    {
        index: 4,
        party: {
            avatar: './images/user7.jpg'
        },
        username: '@Graydrak',
        type: 'Telegram members',
        address: '0x70bG...7j7ak4',
        share: '0.5%',
        yourTokens: 1376,
        yourTokensChange: -8,
        oneDayTokens: 32,
        oneDayTokensChange: -2
    },
    {
        index: 5,
        party: {
            avatar: './images/user4.jpg'
        },
        username: '@rinaxdc',
        type: 'Telegram members',
        address: '0x70AD...1D7af9',
        share: '0.5%',
        yourTokens: 123,
        yourTokensChange: 5,
        oneDayTokens: 98,
        oneDayTokensChange: -1
    }
]
</script>

<style lang="scss">
.max-w-840 {
    max-width: 840px;
}

.min-w-120px {
    min-width: 120px;
}

.party-date-w {
    width: 100px;
}

.add-member {
    border-radius: 20px;
    background-color: #1d1d21;
    padding: 10px;
    color: white;
}

.modal-min-w-648 {
    min-width: 648px;
    @media (max-width: 770px) {
        min-width: 90%;
    }
    @media (max-width: 520px) {
        .add-member {
            display: grid;
            gap: 16px;
        }
    }
}

.member-revenue-w {
    display: flex;
    background-color: #453298;
    border-radius: 12px;
    border: 1px solid #6a5bad;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;

    &.add-member-ico {
        background-color: #1d1d21;
        border: 1px solid #5a5a5e;
    }
}

.party-page-header-w {
    @media (max-width: 1340px) {
        .max-w-840 {
            max-width: 600px;
        }
    }
    @media (max-width: 1024px) {
        flex-direction: column;
        gap: 40px;
    }
}

.table-holder-party-page {
    min-width: 700px;
    @media (max-width: 800px) {
        .min-w-360px {
            min-width: 200px;
        }
    }
}

.party-page-title-w {
    @media (max-width: 520px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
}

.volume-party-w {
    @media (max-width: 460px) {
        flex-direction: column;
        gap: 20px;
        width: 100%;
    }
}
</style>
