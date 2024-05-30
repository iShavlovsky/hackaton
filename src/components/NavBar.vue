<template>
    <header>
        <p>adsada</p>
        <n-flex>
            <n-icon :depth="1" size="91">
                <svg fill="none" height="44" width="91" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M49.6 16.5c0-2.85 0-4.8.13-6.32a7.5 7.5 0 0 1 .63-2.86 7 7 0 0 1 3.06-3.06L52.06 1.6l1.36 2.67a7.5 7.5 0 0 1 2.86-.63c1.51-.13 3.47-.13 6.32-.13h12c2.85 0 4.8 0 6.32.13a7.5 7.5 0 0 1 2.86.63l1.36-2.67-1.36 2.67a7 7 0 0 1 3.06 3.06c.3.58.51 1.37.63 2.86.13 1.51.13 3.47.13 6.32v11c0 2.85 0 4.8-.13 6.32a7.5 7.5 0 0 1-.63 2.86 7 7 0 0 1-3.06 3.06 7.5 7.5 0 0 1-2.86.63c-1.51.13-3.47.13-6.32.13h-12c-2.85 0-4.8 0-6.32-.13a7.5 7.5 0 0 1-2.86-.63 7 7 0 0 1-3.06-3.06 7.5 7.5 0 0 1-.63-2.86 86.38 86.38 0 0 1-.13-6.32v-11Zm-46-8a5 5 0 1 1 10 0v27a5 5 0 0 1-10 0v-27Zm19 4c0-1.97 0-2.61.09-3.1a7 7 0 0 1 5.81-5.8 22.5 22.5 0 0 1 3.09-.09c1.97 0 2.61 0 3.1.09a7 7 0 0 1 5.81 5.8c.08.49.09 1.13.09 3.1v19c0 1.97 0 2.61-.09 3.1a7 7 0 0 1-5.81 5.81c-.49.08-1.13.09-3.1.09-1.97 0-2.61 0-3.1-.09a7 7 0 0 1-5.81-5.81c-.08-.49-.09-1.13-.09-3.1v-19Z"
                        stroke="#92FE75"
                        stroke-width="6"
                    />
                </svg>
            </n-icon>

            <n-space>
                <nav>
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/about">About</RouterLink>
                </nav>
            </n-space>
            <n-button v-if="isConnected" :loading="isConnectPending" @click="disconnect()">
                <template #icon>
                    <n-icon :component="CashOutline" :depth="1" color="#92FE75" />
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
            <balance v-if="address" :address="address"></balance>

            <n-button v-if="isConnected" @click="deployContract">Deploy Contract</n-button>
        </n-flex>
    </header>
</template>
<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { NIcon, useMessage } from 'naive-ui'
import { computed, h } from 'vue'
import { useAccount, useBlockNumber, useClient, useConfig, useConnect, useDisconnect } from '@wagmi/vue'
import { CashOutline } from '@vicons/ionicons5'
import Balance from '@/components/Balance.vue'
// import { createWalletClient, custom } from 'viem'
// import { mainnet } from 'viem/chains'

const { connect, connectors, isPending: isConnectPending } = useConnect()
const { disconnect } = useDisconnect()

const { isConnected, address, chain } = useAccount()

const message = useMessage()

const renderIcon = (base: string | undefined) => {
    if (base) {
        return () => {
            return h(NAvatar, {
                size: 'small',
                color: '#151518',
                round: true,
                style: 'margin: 4px; width: 24px; height: 24px;',
                src: base
            })
        }
    } else {
        return () => {
            return h(NIcon, {
                component: CashOutline
            })
        }
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
const config = useConfig()
const { data: blockNumber } = useBlockNumber({
    chainId: chain.value?.id
})
const client = useClient({
    chainId: chain.value?.id
})

const deployContract = async () => {
    try {
        // const factory = new ethers.ContractFactory(SimpleStorage.abi, SimpleStorage.bytecode, signer)
        // const contract = await factory.deploy()
        //
        // await contract.deployTransaction.wait()
        // contractAddress.value = contract.address
        console.log(chain.value?.id)
        console.log(client.value)
        console.log(config)
        console.log(blockNumber.value)
    } catch (error) {
        console.error('Error deploying contract:', error)
    }
}
</script>
<style scoped></style>
