<template>
    <tr>
        <td style="text-align: center; vertical-align: middle">{{ index }}</td>
        <td style="vertical-align: middle">
            <div class="display-flex gap-16 align-items-center" style="display: flex; align-items: center">
                <n-avatar :size="36" :src="party.avatar" bordered round />
                <p class="min-w-360px">{{ username }}</p>
            </div>
        </td>
        <td style="vertical-align: middle">{{ type }}</td>
        <td style="vertical-align: middle">
            <div class="display-flex gap-12 align-items-center">
                <span>{{ address }}</span>
                <button type="button">
                    <span class="display-flex">
                        <n-icon :component="CopyOutline" :depth="1" :size="12" color="#fff" />
                    </span>
                </button>
            </div>
        </td>
        <td style="vertical-align: middle">{{ share }}</td>
        <td style="vertical-align: middle">
            <div class="display-flex flex-column">
                <span>{{ yourTokens }}</span>
                <span :style="{ color: yourTokensChange < 0 ? '#fe7589' : '#92fe75' }">{{ yourTokensChange }}%</span>
            </div>
        </td>
        <td style="vertical-align: middle">
            <div class="display-flex flex-column gap-2">
                <span>{{ oneDayTokens }}</span>
                <span :style="{ color: oneDayTokensChange < 0 ? '#fe7589' : '#92fe75' }">
                    {{ oneDayTokensChange }}%
                </span>
            </div>
        </td>
    </tr>
</template>

<script lang="ts" setup>
import { CopyOutline } from '@vicons/ionicons5'
import type { ComradeTableElementProps } from './СomradeTableElementProps.type.ts'

const props = defineProps<ComradeTableElementProps>()
</script>
<style lang="scss">
.min-w-360px {
    min-width: 360px;
}
</style>
