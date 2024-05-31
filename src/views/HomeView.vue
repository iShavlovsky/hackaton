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
                            <n-ellipsis v-if="isConnected" :tooltip="true">
                                {{ store.shortenAddress(address) }}
                            </n-ellipsis>
                        </p>
                        <button v-if="isSupported && address" class="tech-btn" @click="copyHandler(address)">
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
                    <n-tab-pane :tab="`Parties ${rows.length}`" name="parties">
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
                                        <th></th>
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

                        <RouterLink class="main-custom-btn width-full" to="/create-party">
                            <span class="display-flex">
                                <n-icon :component="Add" :depth="1" :size="24" color="currentColor" />
                            </span>
                            <p>Create party</p>
                        </RouterLink>
                    </n-tab-pane>
                    <n-tab-pane :tab="`Quests ${questCards.length}`" name="quests">
                        <div class="display-flex gap-8">
                            <KeepAlive>
                                <QuestCard
                                    v-for="card in questCards"
                                    :key="card.id"
                                    :card="card"
                                    @set-event="handleSetEvent"
                                ></QuestCard>
                            </KeepAlive>
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
import type { TableRowData } from '@/components/tableElement.type.ts'
import type { IEventCard, IQuestCard } from '@/types'
import { useMainStore } from '@/stores'
import { useAccount } from '@wagmi/vue'
import { useClipboard } from '@vueuse/core'
import { useMessage } from 'naive-ui'
import QuestCard from '@/components/QuestCard.vue'
import { RouterLink } from 'vue-router'
import { reactive } from 'vue'

const store = useMainStore()
const { isConnected, address } = useAccount()
const message = useMessage()
const { text, copy, copied, isSupported } = useClipboard()

const copyHandler = (textCopy: string) => {
    if (address.value) {
        copy(textCopy).then(() => {
            if (copied) message.success(text.value)
        })
    }
}

const questCards: IQuestCard[] = reactive([
    {
        id: 2,
        imageSrc: '/images/apebol.jpg',
        title: 'Buying Bonds on Linea with ApeBond',
        description: "Celebrate ApeBond's recent launch on the Linea Mainnet",
        tags: ['NFT marketplace'],
        totalUsers: '4k',
        reward: '15 TBA',
        events: [
            {
                title: 'Intro to Ape Bond Value',
                description:
                    'Join the ApeBond community, get ABOND (the native utility token) and enjoy discounted token purchases through Bonds',
                status: false
            },
            {
                title: 'Read Announcement',
                description:
                    'Join the ApeBond community, get ABOND (the native utility token) and enjoy discounted token purchases through Bonds',
                status: false
            },
            {
                title: 'Join ApeBond on TG',
                description:
                    'Join the ApeBond community, get ABOND (the native utility token) and enjoy discounted token purchases through Bonds',
                status: false
            },
            {
                title: 'Purchase a Bond via ApeBond',
                description:
                    'Join the ApeBond community, get ABOND (the native utility token) and enjoy discounted token purchases through Bonds',
                status: false
            }
        ]
    },
    {
        id: 4,
        imageSrc: '/images/linea.jpg',
        title: 'Swapping on Linea',
        description: 'Explore the Linea ecosystem and its top DEXes.\n',
        tags: ['DeFi'],
        totalUsers: '4k',
        reward: '15 TBA',
        events: [
            {
                title: 'Intro to Ape Bond Value',
                description:
                    'Join the ApeBond community, get ABOND (the native utility token) and enjoy discounted token purchases through Bonds',
                status: true
            },
            {
                title: 'Read Announcement',
                description:
                    'Join the ApeBond community, get ABOND (the native utility token) and enjoy discounted token purchases through Bonds',
                status: false
            },
            {
                title: 'Join ApeBond on TG',
                description:
                    'Join the ApeBond community, get ABOND (the native utility token) and enjoy discounted token purchases through Bonds',
                status: false
            },
            {
                title: 'Purchase a Bond via ApeBond',
                description:
                    'Join the ApeBond community, get ABOND (the native utility token) and enjoy discounted token purchases through Bonds',
                status: false
            }
        ]
    }
])

const handleSetEvent = ({ cardId, eventTitle }: { cardId: IQuestCard['id']; eventTitle: IEventCard['title'] }) => {
    const card = questCards.find(card => {
        return card.id === cardId
    })

    if (card) {
        const event = card.events.find(event => event.title === eventTitle)
        if (event) {
            event.status = true
        }
    }
}

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
]
</script>
<style lang="scss">
.card-tabs .n-tabs-nav--bar-type {
    padding-left: 4px;
}

.px16-divider {
    margin-top: 16px;
}
</style>
