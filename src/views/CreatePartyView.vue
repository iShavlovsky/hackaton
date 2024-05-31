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
                            v-model:value="partydetailsname"
                            path="user.name"
                            placeholder="Name"
                            size="large"
                            type="text"
                        />
                        <n-input v-model:value="partydetailsdes" placeholder="Description" size="large" type="text" />
                    </div>
                </div>

                <div class="party-form-w display-grid gap-32">
                    <h2 class="text-accent-900 text-center">Your share</h2>
                    <div class="display-grid grid-cols-2 gap-32">
                        <n-input v-model:value="sharevalue" placeholder="80%" size="large" type="text" />
                        <div class="display-flex gap-12 align-items-center">
                            <div class="ico-w">
                                <n-icon :component="Wallet" :depth="1" :size="16" color="#fff" />
                            </div>
                            <div class="display-grid gap-2">
                                <p class="text-12px op-06">Your wallet</p>
                                <p class="text-14px">0x003f54ffs</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="party-form-w display-grid gap-32">
                    <h2 class="text-accent-900 text-center">Party members</h2>
                    <div class="display-grid gap-8">
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
                            <div class="display-flex gap-16">
                                <button class="main-custom-btn gray-btn">
                                    <span><n-icon :component="Pencil" :depth="1" :size="16" color="#fff" /></span>
                                </button>
                                <button class="main-custom-btn red-btn">
                                    <span><n-icon :component="TrashBin" :depth="1" :size="16" color="#fff" /></span>
                                </button>
                            </div>
                        </div>

                        <button
                            class="add-member text-left display-flex justify-between align-items-center"
                            @click="showModal = true"
                        >
                            <div class="display-flex gap-16 align-items-center">
                                <div class="member-revenue-w add-member-ico">
                                    <span><n-icon :component="Add" :depth="1" :size="24" color="#fff" /></span>
                                </div>

                                <p>Add type of members</p>
                            </div>
                        </button>
                    </div>
                </div>

                <div class="party-form-w party-no-bg display-grid gap-32">
                    <h2 class="text-16px text-center">Your revenue will be distributed like this:</h2>
                    <div class="revenue-distributed-w display-flex gap-8">
                        <div
                            class="revenue-distributed-holder display-flex align-items-center justify-center"
                            style="max-width: 80%; min-width: 15%"
                        >
                            <div class="revenue-distributed-info display-grid gap-2">
                                <p>80%</p>
                                <p class="text-16px op-06">@malamuth (you)</p>
                            </div>
                        </div>
                        <div
                            class="revenue-distributed-holder display-flex align-items-center justify-center"
                            style="max-width: 20%; min-width: 15%"
                        >
                            <div class="revenue-distributed-info display-grid gap-2">
                                <p>15%</p>
                                <p class="text-16px op-06">Telegram members</p>
                            </div>
                        </div>
                        <div
                            class="revenue-distributed-holder display-flex align-items-center justify-center"
                            style="max-width: 5%; min-width: 15%"
                        >
                            <div class="revenue-distributed-info display-grid gap-2">
                                <p>5%</p>
                                <p class="text-16px op-06">X members</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-80 width-full">
                        <button class="main-custom-btn width-full">
                            <p>Create party</p>
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
                    <n-input v-model:value="addtypename" placeholder="Name" size="large" type="text" />
                    <n-input v-model:value="addtypedes" placeholder="Description" size="large" type="text" />
                    <n-input v-model:value="addtyperev" placeholder="Revenue share %" size="large" type="text" />
                    <button class="main-custom-btn width-full">
                        <p>Add</p>
                    </button>
                </div>
            </div>
        </n-modal>
    </section>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { Add, ChevronBackOutline, Pencil, TrashBin, Wallet } from '@vicons/ionicons5'
import { ref } from 'vue'

const showModal = ref(false)
const partydetailsname = ref(null)
const partydetailsdes = ref(null)
const sharevalue = ref(null)
const addtypename = ref(null)
const addtypedes = ref(null)
const addtyperev = ref(null)
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
