<template>
    <section>
        <div class="container main-container-padding">
            <div class="display-flex flex-row gap-40 align-items-center p-tb-24px">
                <n-avatar :size="120" round src="" />

                <div class="display-flex flex-column gap-8">
                    <div class="display-flex flex-row gap-8 align-items-center">
                        <h1>malamuth</h1>
                        <button class="tech-btn">
                            <span><n-icon :component="SettingsSharp" :depth="1" :size="24" color="#fff" /></span>
                        </button>
                    </div>
                    <div class="display-flex flex-row gap-8 align-items-center op-06">
                        <p>
                            <span>RSC:</span>
                            0х944***678м
                        </p>
                        <button class="tech-btn">
                            <span><n-icon :component="CopyOutline" :depth="1" :size="24" color="#fff" /></span>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <n-tabs
                    animated
                    class="card-tabs"
                    default-value="parties"
                    pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
                    pane-wrapper-style="margin: 0 -4px"
                    size="large"
                    type="line"
                >
                    <n-tab-pane name="parties" tab="Parties 1">
                        <n-space vertical>
                            <n-table striped>
                                <thead>
                                    <tr>
                                        <th style="vertical-align: top">#</th>
                                        <th style="vertical-align: top">Party</th>
                                        <th style="vertical-align: top">Owner</th>
                                        <th style="vertical-align: top">People</th>
                                        <th style="vertical-align: top">
                                            Your tokens
                                            <br />
                                            1D
                                        </th>
                                        <th style="vertical-align: top">
                                            Total distributed
                                            <br />
                                            1D
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <PartiesTableElement
                                        v-for="(row, index) in rows"
                                        :key="index"
                                        :index="index + 1"
                                        :owner="row.owner"
                                        :party="row.party"
                                        :people="row.people"
                                        :totalDistributed="row.totalDistributed"
                                        :totalDistributedPercentage="row.totalDistributedPercentage"
                                        :yourTokens="row.yourTokens"
                                        :yourTokensPercentage="row.yourTokensPercentage"
                                    ></PartiesTableElement>
                                </tbody>
                            </n-table>
                        </n-space>
                        <div class="px16-divider"></div>

                        <button class="main-custom-btn width-full">
                            <span>
                                <n-icon :component="Add" :depth="0.6" :size="16" color="currentColor" />
                            </span>
                            <span>Create party</span>
                        </button>
                    </n-tab-pane>
                    <n-tab-pane name="quests" tab="Quests 3">
                        <div class="display-flex gap-8">
                            <QuestCard></QuestCard>
                            <QuestCard></QuestCard>
                        </div>
                    </n-tab-pane>
                </n-tabs>
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>
import { Add, CopyOutline, SettingsSharp } from '@vicons/ionicons5'
import PartiesTableElement from '@/components/PartiesTableElement.vue'
import { TableRowData } from '@/components/tableElement.typse.ts'
import QuestCard from '@/components/QuestCard.vue'

const rows: TableRowData[] = [
    {
        index: 1,
        party: {
            avatar: '',
            name: 'Glitch & Glam',
            description:
                "It's time for a game party focused on Linea token quests! Join forces with other gamers, tackle challenges, and earn tokens together. Let's m"
        },
        owner: {
            avatar: '',
            name: '@meuw'
        },
        people: 28,
        yourTokens: 15069,
        yourTokensPercentage: 34,
        totalDistributed: 15069,
        totalDistributedPercentage: 34
    },
    {
        index: 2,
        party: {
            avatar: '',
            name: 'Glitch & Glam',
            description:
                "It's time for a game party focused on Linea token quests! Join forces with other gamers, tackle challenges, and earn tokens together. Let's m"
        },
        owner: {
            avatar: '',
            name: '@malamuth (you)'
        },
        people: 28,
        yourTokens: 15069,
        yourTokensPercentage: 34,
        totalDistributed: 15069,
        totalDistributedPercentage: 34
    }
    // другие строки данных
]
</script>
<style lang="scss">
.p-tb-24px {
    padding: 24px 0;
}

.card-tabs .n-tabs-nav--bar-type {
    padding-left: 4px;
}

.text-12px {
    font-size: 12px;
}

.px16-divider {
    margin-top: 16px;
}
</style>
