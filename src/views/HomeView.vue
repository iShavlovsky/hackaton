<template>
    <section>
        <div class="container main-container-padding">
            <div class="home-hero-w display-flex flex-row gap-40 align-items-center p-tb-24px">
                <n-avatar :size="120" round src="./images/avatar-main.jpg" />

                <div class="display-flex flex-column gap-8">
                    <div class="display-flex flex-row gap-8 align-items-center">
                        <h1>malamuth</h1>
                        <button class="tech-btn" @click="partyStore.clearLocalStorage">
                            <span><n-icon :component="SettingsSharp" :depth="1" :size="24" color="#fff" /></span>
                        </button>
                        <!--                        <button class="tech-btn" @click="f">-->
                        <!--                            <span><n-icon :component="SettingsSharp" :depth="1" :size="24" color="red" /></span>-->
                        <!--                        </button>-->
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
                    <n-tab-pane :tab="`Parties ${parlyLength}`" name="parties">
                        <n-space class="table-w" vertical>
                            <n-table class="table-holder" striped>
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
                                        v-for="(row, index) in partyStore.party"
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

                    <n-tab-pane :tab="`Quests ${questLength}`" name="quests">
                        <div class="quest-cards-list-w display-flex gap-8">
                            <KeepAlive>
                                <QuestCard
                                    v-for="card in questsStore.questCards"
                                    :key="card.id"
                                    :card="card"
                                    :meta="{
                                        partyId,
                                        lastPartyId,
                                        influencersParty,
                                        totalPartyTasks,
                                        task_id
                                    }"
                                    @set-event="questsStore.handleSetEvent"
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
import { useMainStore, usePartyStore, useQuestsStore } from '@/stores'
import { useAccount, useReadContract } from '@wagmi/vue'
import { useClipboard } from '@vueuse/core'
import { useMessage } from 'naive-ui'
import QuestCard from '@/components/QuestCard.vue'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { encodeAbiParameters, keccak256 } from 'viem'
// import abi from '@/contracts/abi.json'
import { abi } from '@/contracts/abi.ts'

const store = useMainStore()
const partyStore = usePartyStore()
const questsStore = useQuestsStore()

const { isConnected, address, chainId } = useAccount()
const message = useMessage()
const { text, copy, copied, isSupported } = useClipboard()

const copyHandler = (textCopy: string) => {
    if (address.value) {
        copy(textCopy).then(() => {
            if (copied) message.success(text.value)
        })
    }
}

const partyId = ref<bigint>(3n) //0xaE77aF8791CF61E5405231bC7F0f4850c308bb65
const partyIdTasks = ref<bigint>(2n)
const task_id = ref<`0x${string}`>()
const configContract = reactive({
    abi,
    chainId: chainId.value,
    address: import.meta.env.VITE_ID_CONTRACT_ADDRESS_1,
    account: address.value
})

const { data: lastPartyId, refetch: getLastPartyId } = useReadContract({
    ...configContract,
    functionName: 'lastPartyId',
    query: {
        enabled: true
    }
})
// influencersParty(uint256 party_id) external view returns(address)
const { data: influencersParty, refetch: getInfluencersParty } = useReadContract({
    ...configContract,
    functionName: 'influencersParty',
    args: [partyId.value],
    query: {
        enabled: true
    }
})

const { data: totalPartyTasks, refetch: getTotalPartyTasks } = useReadContract({
    ...configContract,
    functionName: 'total_party_tasks',
    args: [partyIdTasks.value],
    query: {
        enabled: true
    }
})

const getTaskId = async () => {
    // task_id

    // bytes32 task_id = keccak256(
    //     abi.encode(party_id, party_task_id, influencer)
    // );
    const encodedData = encodeAbiParameters(
        [
            { name: 'party_id', type: 'uint256' },
            { name: 'party_task_id', type: 'uint256' },
            { name: 'influencer', type: 'address' }
        ],

        [lastPartyId.value as bigint, totalPartyTasks.value as bigint, influencersParty.value as `0x${string}`]
    )
    task_id.value = keccak256(encodedData)
    return task_id.value
}

onMounted(async () => {
    await getLastPartyId()
    console.log('lastPartyId', lastPartyId.value)
    await getInfluencersParty()
    console.log('influencersParty', influencersParty.value)
    await getTotalPartyTasks()
    console.log('totalPartyTasks', totalPartyTasks.value)
    await getTaskId()
})

const parlyLength = computed(() => partyStore.party.length)
const questLength = computed(() => questsStore.questCards.length)
</script>
<style lang="scss">
.card-tabs .n-tabs-nav--bar-type {
    padding-left: 4px;
}

.px16-divider {
    margin-top: 16px;
}

.home-hero-w {
    @media (max-width: 500px) {
        flex-direction: column;
    }
}

.quest-cards-list-w {
    flex-wrap: wrap;
    @media (max-width: 1090px) {
        justify-content: center;
    }
}

.table-holder {
    min-width: 1024px;
}
</style>
