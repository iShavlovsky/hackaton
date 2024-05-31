<template>
    <tr>
        <td style="text-align: center; vertical-align: middle">{{ index }}</td>
        <td style="vertical-align: middle">
            <div class="display-flex gap-16 align-items-center" style="display: flex; align-items: center">
                <n-avatar :size="64" :src="party.avatar" bordered />
                <div class="display-flex flex-column gap-2">
                    <h2>{{ party.name }}</h2>
                    <p class="max-w-360 op-06">
                        <n-ellipsis line-clamp="1">{{ party.description }}</n-ellipsis>
                    </p>
                </div>
            </div>
        </td>
        <td style="vertical-align: middle">
            <div class="display-flex gap-8" style="display: flex; align-items: center">
                <n-avatar :size="28" :src="owner.avatar" bordered round />
                <span>{{ owner.name }}</span>
            </div>
        </td>
        <td style="vertical-align: middle">{{ people }}</td>
        <td style="vertical-align: middle">
            <div class="display-flex flex-column">
                <span>{{ yourTokens }}</span>
                <span :style="{ color: yourTokensPercentage < 0 ? '#fe7589' : '#92fe75' }">
                    {{ yourTokensPercentage }}%
                </span>
            </div>
        </td>
        <td style="vertical-align: middle">
            <div class="display-flex flex-column">
                <span>{{ totalDistributed }}</span>
                <span :style="{ color: totalDistributedPercentage < 0 ? '#fe7589' : '#92fe75' }">
                    {{ totalDistributedPercentage }}%
                </span>
            </div>
        </td>
        <td style="vertical-align: middle">
            <div class="display-flex gap-8 width-full justify-end">
                <button v-if="owner.owner" class="main-custom-btn small-btn">
                    <span>
                        <n-icon :component="ShareSocialSharp" :size="16" color="currentColor" />
                    </span>
                    <span>Invite</span>
                </button>
                <RouterLink class="main-custom-btn gray-btn" to="/party-page">
                    <span class="display-flex">
                        <n-icon :component="ChevronForward" :size="16" color="currentColor" />
                    </span>
                </RouterLink>
            </div>
        </td>
    </tr>
</template>

<script lang="ts" setup>
import type { TableRowData } from './tableElement.type.ts'
import { ChevronForward, ShareSocialSharp } from '@vicons/ionicons5'

const props = defineProps<TableRowData>()
</script>
