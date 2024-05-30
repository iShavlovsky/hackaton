<template>
    <main>
        <section>
            <n-button v-if="isConnected" :loading="isPending" @click="disconnect()">
                <template #icon>
                    <n-icon :component="CashOutline" :depth="1" />
                </template>
                Disconnect Wallet
            </n-button>

        <n-dropdown v-else :options="options" :show-arrow="true" size="large" trigger="click" @select="handleSelect">
            <n-button :loading="isConnectPending" round>
                <template #icon>
                    <n-icon :component="CashOutline" :depth="1" color="#92FE75" />
                </template>
                Connect Wallet
            </n-button>
        </n-dropdown>

        <n-ellipsis v-if="isConnected" :tooltip="true" style="max-width: 100px; color: white">
            {{ address }}
        </n-ellipsis>
        <n-text v-if="isConnected" type="success">Chain: {{ chain?.name }}</n-text>
        <n-divider></n-divider>
        <n-flex>
            <n-spin :show="isConnected && isBalancePending">
                <n-text v-if="!isBalancePending" type="success">Balance: {{ data?.symbol }} {{ data?.value }}</n-text>
            </n-spin>
        </n-flex>
    </section>
</template>
<script lang="ts" setup>
import { computed, h } from 'vue'
import { NIcon, useMessage } from 'naive-ui'
import { CashOutline } from '@vicons/ionicons5'
import { useAccount, useBalance, useConnect, useDisconnect } from '@wagmi/vue'

const { connect, connectors, isPending: isConnectPending } = useConnect()
const { disconnect } = useDisconnect()

const { isConnected, address, chain } = useAccount()

const { data, isPending: isBalancePending } = useBalance({
    address: address.value
})
const message = useMessage()

const renderIcon = (base: string | undefined) => {
    return () => {
        return h(NAvatar, {
            size: 'small',
            round: true,
            style: 'margin: 4px; width: 24px; height: 24px;',
            src: base
        })
    }
}

const options = computed(() => {
    return connectors.map(item => ({
        label: item.name,
        key: item.name,
        icon: renderIcon(item.icon)
    }))
})

const handleSelect = (key: string) => {
    const connector = connectors.find(el => el.name === key)

    if (connector) {
        connect({ connector })
    } else {
        message.warning('Неудачная попытка подключения!')
    }
}
</script>
<style lang="scss" scoped></style>
