<template>
    <main>
        <n-icon :depth="2" size="40">
            <svg fill="none" height="44" viewBox="0 0 91 44" width="91" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M49.6001 16.5C49.6001 13.6502 49.6024 11.6933 49.7264 10.1763C49.8475 8.69432 50.0695 7.89822 50.3631 7.32207C51.0342 6.00493 52.105 4.93407 53.4222 4.26295L52.0602 1.58993L53.4222 4.26295C53.9983 3.96939 54.7944 3.74736 56.2764 3.62628C57.7934 3.50233 59.7503 3.5 62.6001 3.5H74.6001C77.4499 3.5 79.4068 3.50233 80.9238 3.62628C82.4058 3.74736 83.2019 3.96939 83.778 4.26295L85.14 1.58993L83.778 4.26295C85.0952 4.93407 86.166 6.00493 86.8371 7.32207C87.1307 7.89822 87.3527 8.69432 87.4738 10.1763C87.5978 11.6933 87.6001 13.6502 87.6001 16.5V27.5C87.6001 30.3498 87.5978 32.3067 87.4738 33.8237C87.3527 35.3057 87.1307 36.1018 86.8371 36.6779C86.166 37.9951 85.0952 39.0659 83.778 39.737C83.2019 40.0306 82.4058 40.2526 80.9238 40.3737C79.4068 40.4977 77.4499 40.5 74.6001 40.5H62.6001C59.7503 40.5 57.7934 40.4977 56.2764 40.3737C54.7944 40.2526 53.9983 40.0306 53.4222 39.737C52.105 39.0659 51.0342 37.9951 50.3631 36.6779C50.0695 36.1018 49.8475 35.3057 49.7264 33.8237C49.6024 32.3067 49.6001 30.3498 49.6001 27.5V16.5ZM3.6001 8.5C3.6001 5.73858 5.83867 3.5 8.6001 3.5C11.3615 3.5 13.6001 5.73858 13.6001 8.5V35.5C13.6001 38.2614 11.3615 40.5 8.6001 40.5C5.83867 40.5 3.6001 38.2614 3.6001 35.5V8.5ZM22.6001 12.5C22.6001 10.5273 22.6094 9.89031 22.6863 9.40496C23.1607 6.40971 25.5098 4.06058 28.5051 3.58618C28.9904 3.50931 29.6274 3.5 31.6001 3.5C33.5728 3.5 34.2098 3.50931 34.6951 3.58618C37.6904 4.06058 40.0395 6.40971 40.5139 9.40496C40.5908 9.8903 40.6001 10.5273 40.6001 12.5V31.5C40.6001 33.4727 40.5908 34.1097 40.5139 34.595C40.0395 37.5903 37.6904 39.9394 34.6951 40.4138C34.2098 40.4907 33.5728 40.5 31.6001 40.5C29.6274 40.5 28.9904 40.4907 28.5051 40.4138C25.5098 39.9394 23.1607 37.5903 22.6863 34.595C22.6094 34.1097 22.6001 33.4727 22.6001 31.5V12.5Z"
                    stroke="#92FE75"
                    stroke-width="6"
                />
            </svg>
        </n-icon>
        <section>
            <n-button v-if="isConnected" :loading="isPending" @click="disconnect()">
                <template #icon>
                    <n-icon :component="CashOutline" :depth="1" />
                </template>
                Disconnect Wallet
            </n-button>

            <n-dropdown
                v-else
                :options="options"
                :show-arrow="true"
                size="large"
                trigger="click"
                @select="handleSelect"
            >
                <n-button :loading="isPending">
                    <template #icon>
                        <n-icon :component="CashOutline" :depth="1" />
                    </template>
                    Connect Wallet
                </n-button>
            </n-dropdown>

            <n-ellipsis v-if="isConnected" :tooltip="true" style="max-width: 100px; color: white">
                {{ address }}
            </n-ellipsis>
            <n-text v-if="isConnected" type="success">Chain: {{ chain?.name }}</n-text>
        </section>
    </main>
</template>
<script lang="ts" setup>
import { computed, h } from 'vue'
import { NIcon, useMessage } from 'naive-ui'
import { CashOutline } from '@vicons/ionicons5'
import { useAccount, useConnect, useDisconnect } from '@wagmi/vue'

const { connect, connectors, isPending } = useConnect()
const { disconnect } = useDisconnect()

const { isConnected, address, chain } = useAccount()
const message = useMessage()

const renderIcon = (base: string | undefined) => {
    return () => {
        return h(NAvatar, {
            size: 'small',
            round: true,
            style: 'margin-right: 12px; width: 24px; height: 24px;',
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
