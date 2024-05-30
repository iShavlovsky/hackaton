<template>
    <n-theme-editor>
        <n-config-provider :theme-overrides="darkThemeOverrides">
            <n-message-provider>
                <NavBar />
                <button @click="deployContract()">ff</button>
                <main>
                    <RouterView />
                </main>
                <n-global-style />
            </n-message-provider>
        </n-config-provider>
    </n-theme-editor>
</template>
<script lang="ts" setup>
import { type GlobalThemeOverrides, NThemeEditor } from 'naive-ui'
import { useTitle } from '@vueuse/core'
import NavBar from '@/components/NavBar.vue'
import { useAccount, useChainId, useChains, useClient } from '@wagmi/vue'
import 'viem/window'
import { createWalletClient, custom, type DeployContractParameters } from 'viem'
import { wagmiContract } from '@/contracts/contract.ts'

const accountCheck = useAccount()
const chains = useChains()
const chainId = useChainId()
const client = useClient({
    chainId
})

async function deployContract() {
    const walletClient = createWalletClient({
        account: accountCheck.address.value,
        chain: accountCheck.chain.value,
        transport: custom(window.ethereum!)
    })
    const [account] = await walletClient.getAddresses()
    if (!account) return
    const parameters: DeployContractParameters = {
        ...wagmiContract,
        account
    }
    try {
        const hash = await walletClient.deployContract(parameters)
        console.log('Account:', account)
        console.log('Transaction Hash:', hash)
    } catch (error) {
        console.error('Error deploying contract:', error)
    }
}

useTitle('Rev Share Party')
const darkThemeOverrides: GlobalThemeOverrides = {
    common: {
        baseColor: '#000000',
        primaryColor: '#92FE75',
        bodyColor: '#000000',
        borderColor: '#92FE75'
    },
    Button: {
        color: '#151518',
        textColor: '#92FE75',
        borderHover: '#8F75FE',
        borderFocus: '#8F75FE'
    },
    Dropdown: {
        color: '#151518',
        optionTextColor: '#FFF',
        optionColorHover: '#92FE75'
    }
}

const lightThemeOverrides: GlobalThemeOverrides = {
    common: {}
}
</script>
<style lang="scss" scoped></style>
